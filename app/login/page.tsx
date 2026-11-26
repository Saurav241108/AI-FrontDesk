
"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    window.location.href = "/dashboard";
  }

  async function handleGoogleLogin() {
    setGoogleLoading(true);
    setMessage("");

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage(error.message);
      setGoogleLoading(false);
    }
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-400/40 blur-[140px]" />
        <div className="absolute -right-40 top-96 h-[500px] w-[500px] rounded-full bg-fuchsia-300/40 blur-[140px]" />
        <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-[140px]" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-purple-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-black sm:text-2xl">
            AI FrontDesk<span className="text-[#7547C8]">.</span>
          </Link>

          <Link
            href="/"
            className="rounded-xl border border-purple-200 bg-white px-5 py-3 text-sm font-semibold text-[#7547C8] transition hover:bg-purple-50"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-[#7547C8]">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Intelligent AI Receptionist
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl">
            Welcome back.
            <br />
            <span className="text-[#7547C8]">
              Your business never misses a call.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Log in to manage your AI receptionist, appointments, customer calls
            and business settings.
          </p>

          <div className="mt-8 space-y-3 text-sm font-medium text-[#55516A]">
            <p><span className="mr-2 text-[#7547C8]">✓</span>Manage appointments</p>
            <p><span className="mr-2 text-[#7547C8]">✓</span>Review customer calls</p>
            <p><span className="mr-2 text-[#7547C8]">✓</span>Manage your AI receptionist</p>
          </div>
        </div>

        <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-2xl shadow-purple-100 md:p-10">
          <h2 className="text-2xl font-bold text-[#17152F]">
            Log in to your account
          </h2>

          <p className="mt-2 text-sm text-[#55516A]">
            Welcome back to AI FrontDesk.
          </p>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading || loading}
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-purple-100 bg-white py-4 font-semibold text-[#17152F] transition hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {googleLoading ? "Connecting to Google..." : "Continue with Google"}
          </button>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-purple-100" />
            <span className="text-xs font-medium text-gray-400">
              OR LOG IN WITH EMAIL
            </span>
            <div className="h-px flex-1 bg-purple-100" />
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#17152F]">
                Email address
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-purple-100 bg-[#FAF9FF] px-4 py-3 text-black outline-none transition focus:border-[#7547C8] focus:ring-2 focus:ring-purple-100"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#17152F]">
                Password
              </label>

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-purple-100 bg-[#FAF9FF] px-4 py-3 text-black outline-none transition focus:border-[#7547C8] focus:ring-2 focus:ring-purple-100"
                placeholder="Your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading || googleLoading}
              className="w-full rounded-xl bg-[#7547C8] py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-[#6036AD] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Log In →"}
            </button>
          </form>

          {message && (
            <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {message}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-[#55516A]">
            Don't have an account?{" "}
            <Link href="/signup" className="font-semibold text-[#7547C8] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </section>

      <footer className="relative z-20 bg-[#17132B] px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row">
          <p className="text-sm text-gray-400">
            Copyright 2026 AI FrontDesk. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Built to help businesses never miss a customer.
          </p>
        </div>
      </footer>
    </main>
  );
}
