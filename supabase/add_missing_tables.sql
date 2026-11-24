-- AI FrontDesk: multi-industry schema (v2)
-- Works for any appointment-based business: salons, clinics, dentists,
-- repair shops, consultants, gyms, etc.
-- Safe to re-run. Does NOT drop or modify existing rows in `businesses`.

create extension if not exists btree_gist;

-- ───────────── businesses: add generic config columns ─────────────
alter table public.businesses add column if not exists phone              text;
alter table public.businesses add column if not exists greeting           text;   -- what the AI says first
alter table public.businesses add column if not exists agent_instructions text;   -- business-specific rules for the AI
alter table public.businesses add column if not exists booking_settings   jsonb not null default '{}'::jsonb;
-- booking_settings example:
-- {"slot_minutes":30,"buffer_minutes":10,"min_notice_hours":2,"customer_label":"patient"}

-- ───────────── staff / resources (stylist, doctor, technician, room...) ─────────────
create table if not exists public.staff (
  id           uuid primary key default gen_random_uuid(),
  business_id  uuid not null references public.businesses(id) on delete cascade,
  name         text not null,
  role         text,
  active       boolean not null default true,
  created_at   timestamptz not null default now()
);

-- ───────────── services ─────────────
create table if not exists public.services (
  id           uuid primary key default gen_random_uuid(),
  business_id  uuid not null references public.businesses(id) on delete cascade,
  name         text not null,
  description  text,
  duration_min int  not null check (duration_min > 0),
  price        numeric(10,2),
  active       boolean not null default true,
  created_at   timestamptz not null default now()
);

-- ───────────── opening hours (business-wide, or per staff member) ─────────────
create table if not exists public.business_hours (
  id           uuid primary key default gen_random_uuid(),
  business_id  uuid not null references public.businesses(id) on delete cascade,
  staff_id     uuid references public.staff(id) on delete cascade,
  day_of_week  smallint not null check (day_of_week between 0 and 6),  -- 0 = Sunday
  open_time    time not null,
  close_time   time not null,
  check (close_time > open_time)
);

-- ───────────── appointments ─────────────
create table if not exists public.appointments (
  id             uuid primary key default gen_random_uuid(),
  business_id    uuid not null references public.businesses(id) on delete cascade,
  service_id     uuid references public.services(id) on delete set null,
  staff_id       uuid references public.staff(id) on delete set null,
  customer_name  text,
  customer_phone text,
  customer_email text,
  starts_at      timestamptz not null,
  ends_at        timestamptz not null,
  status         text not null default 'booked'
                 check (status in ('booked','cancelled','completed','no_show')),
  source         text not null default 'phone',
  notes          text,
  custom_fields  jsonb not null default '{}'::jsonb,  -- industry-specific details
  created_at     timestamptz not null default now(),
  check (ends_at > starts_at)
);

-- in case appointments already existed from an earlier run
alter table public.appointments add column if not exists staff_id       uuid references public.staff(id) on delete set null;
alter table public.appointments add column if not exists customer_email text;
alter table public.appointments add column if not exists source         text not null default 'phone';
alter table public.appointments add column if not exists notes          text;
alter table public.appointments add column if not exists custom_fields  jsonb not null default '{}'::jsonb;
alter table public.services     add column if not exists description    text;
alter table public.services     add column if not exists active         boolean not null default true;

-- prevent double-booking the same staff member
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'no_staff_overlap') then
    alter table public.appointments
      add constraint no_staff_overlap
      exclude using gist (staff_id with =, tstzrange(starts_at, ends_at) with &&)
      where (status = 'booked' and staff_id is not null);
  end if;
end $$;

-- ───────────── call logs ─────────────
create table if not exists public.call_logs (
  id            uuid primary key default gen_random_uuid(),
  business_id   uuid not null references public.businesses(id) on delete cascade,
  caller_phone  text,
  transcript    text,
  duration_sec  int,
  outcome       text,
  created_at    timestamptz not null default now()
);

-- ───────────── indexes ─────────────
create index if not exists idx_staff_business      on public.staff(business_id);
create index if not exists idx_services_business   on public.services(business_id);
create index if not exists idx_hours_business      on public.business_hours(business_id);
create index if not exists idx_appts_business_time on public.appointments(business_id, starts_at);
create index if not exists idx_calls_business_time on public.call_logs(business_id, created_at desc);

-- ───────────── row level security ─────────────
alter table public.staff          enable row level security;
alter table public.services       enable row level security;
alter table public.business_hours enable row level security;
alter table public.appointments   enable row level security;
alter table public.call_logs      enable row level security;

drop policy if exists "owner manages own staff" on public.staff;
create policy "owner manages own staff" on public.staff for all
  using (business_id in (select id from public.businesses where owner_id = auth.uid()))
  with check (business_id in (select id from public.businesses where owner_id = auth.uid()));

drop policy if exists "owner manages own services" on public.services;
create policy "owner manages own services" on public.services for all
  using (business_id in (select id from public.businesses where owner_id = auth.uid()))
  with check (business_id in (select id from public.businesses where owner_id = auth.uid()));

drop policy if exists "owner manages own hours" on public.business_hours;
create policy "owner manages own hours" on public.business_hours for all
  using (business_id in (select id from public.businesses where owner_id = auth.uid()))
  with check (business_id in (select id from public.businesses where owner_id = auth.uid()));

drop policy if exists "owner manages own appointments" on public.appointments;
create policy "owner manages own appointments" on public.appointments for all
  using (business_id in (select id from public.businesses where owner_id = auth.uid()))
  with check (business_id in (select id from public.businesses where owner_id = auth.uid()));

drop policy if exists "owner reads own call logs" on public.call_logs;
create policy "owner reads own call logs" on public.call_logs for select
  using (business_id in (select id from public.businesses where owner_id = auth.uid()));
