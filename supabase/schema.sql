
-- 1. Services offered by each business
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  name text not null,
  description text,
  price numeric(10,2) not null default 0,
  duration_minutes integer not null default 30,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  constraint services_price_nonnegative check (price >= 0),
  constraint services_duration_positive check (duration_minutes > 0)
);

-- 2. Customer appointments
create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  service_id uuid references public.services(id) on delete set null,
  customer_name text not null,
  customer_phone text not null,
  customer_email text,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status text not null default 'confirmed'
    check (status in ('pending', 'confirmed', 'cancelled', 'completed')),
  notes text,
  created_at timestamptz not null default now(),
  constraint appointments_valid_time check (ends_at > starts_at)
);

-- 3. AI phone call records
create table if not exists public.call_logs (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  customer_phone text,
  call_status text not null default 'completed',
  transcript text,
  recording_url text,
  started_at timestamptz,
  duration_seconds integer,
  created_at timestamptz not null default now()
);

-- Indexes for faster dashboard queries
create index if not exists services_business_id_idx
  on public.services(business_id);

create index if not exists appointments_business_start_idx
  on public.appointments(business_id, starts_at);

create index if not exists call_logs_business_created_idx
  on public.call_logs(business_id, created_at desc);

-- Enable Row Level Security
alter table public.services enable row level security;
alter table public.appointments enable row level security;
alter table public.call_logs enable row level security;

-- Services: business owners can manage their own services
drop policy if exists "Owners manage their services" on public.services;
create policy "Owners manage their services"
on public.services
for all
to authenticated
using (
  exists (
    select 1 from public.businesses b
    where b.id = services.business_id
      and b.owner_id = (select auth.uid())
  )
)
with check (
  exists (
    select 1 from public.businesses b
    where b.id = services.business_id
      and b.owner_id = (select auth.uid())
  )
);

-- Appointments: owners can manage their own appointments
drop policy if exists "Owners manage their appointments" on public.appointments;
create policy "Owners manage their appointments"
on public.appointments
for all
to authenticated
using (
  exists (
    select 1 from public.businesses b
    where b.id = appointments.business_id
      and b.owner_id = (select auth.uid())
  )
)
with check (
  exists (
    select 1 from public.businesses b
    where b.id = appointments.business_id
      and b.owner_id = (select auth.uid())
  )
);

-- Call logs: owners can read their own call logs
drop policy if exists "Owners view their call logs" on public.call_logs;
create policy "Owners view their call logs"
on public.call_logs
for select
to authenticated
using (
  exists (
    select 1 from public.businesses b
    where b.id = call_logs.business_id
      and b.owner_id = (select auth.uid())
  )
);
