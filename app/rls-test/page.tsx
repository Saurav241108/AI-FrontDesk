
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

type Business = {
  id: string;
  name: string;
  owner_id: string;
};

type Service = {
  id: string;
  business_id: string;
  name: string;
  duration_min: number;
  price: number | null;
};

type Staff = {
  id: string;
  business_id: string;
  name: string;
  role: string | null;
  active: boolean;
};

export default function RlsTestPage() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [message, setMessage] = useState("Checking login...");
  const [serviceMessage, setServiceMessage] = useState("");
  const [staff, setStaff] = useState<Staff[]>([]);
  const [staffMessage, setStaffMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkData() {
      const supabase = createClient();

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        setMessage("You are not logged in. Please log in first.");
        setLoading(false);
        return;
      }
     

      setMessage(`Logged in as: ${user.email}`);

      const { data: businessData, error: businessError } = await supabase
        .from("businesses")
        .select("id, name, owner_id");

      if (businessError) {
        setMessage(`Business database error: ${businessError.message}`);
      } else {
        setBusinesses(businessData ?? []);
      }

      const { data: serviceData, error: servicesError } = await supabase
        .from("services")
        .select("id, business_id, name, duration_min, price");

          if (servicesError) {
        setServiceMessage(`Services database error: ${servicesError.message}`);
      } else {
        setServices(serviceData ?? []);
        setServiceMessage("");
      }

      // Fetch staff
      const { data: staffData, error: staffError } = await supabase
        .from("staff")
        .select("id, business_id, name, role, active");

      if (staffError) {
        setStaffMessage(`Staff database error: ${staffError.message}`);
      } else {
        setStaff(staffData ?? []);
        setStaffMessage("");
      }

      setLoading(false);
    }

    checkData();
  }, []);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-3xl font-bold">
          AI FrontDesk - RLS Test
        </h1>

        <button
          onClick={handleSignOut}
          className="mb-6 rounded-lg bg-red-600 px-4 py-2 text-white"
        >
          Sign Out
        </button>

        <p className="mb-6 text-slate-300">{message}</p>

        {loading ? (
          <p>Loading test data...</p>
        ) : (
          <div className="space-y-8">
            <section>
              <h2 className="mb-3 text-2xl font-semibold">Businesses</h2>

              {businesses.map((business) => (
                <div
                  key={business.id}
                  className="mb-3 rounded-xl border border-slate-700 p-4"
                >
                  <h3 className="text-xl font-semibold">{business.name}</h3>
                  <p className="text-sm text-slate-400">
                    Business ID: {business.id}
                  </p>
                  <p className="text-sm text-slate-400">
                    Owner ID: {business.owner_id}
                  </p>
                </div>
              ))}

              {businesses.length === 0 && (
                <p>No businesses are visible to this account.</p>
              )}
            </section>

            <section>
              <h2 className="mb-3 text-2xl font-semibold">Services</h2>

              {serviceMessage && (
                <p className="text-red-400">{serviceMessage}</p>
              )}

              {services.map((service) => (
                <div
                  key={service.id}
                  className="mb-3 rounded-xl border border-slate-700 p-4"
                >
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <p className="text-sm text-slate-400">
                    Business ID: {service.business_id}
                  </p>
                  <p className="text-sm text-slate-400">
                    Duration: {service.duration_min} minutes
                  </p>
                  <p className="text-sm text-slate-400">
                    Price: {service.price ?? "Not set"}
                  </p>
                </div>
              ))}

              {services.length === 0 && !serviceMessage && (
                <p>No services are visible to this account.</p>
              )}
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
