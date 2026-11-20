
"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Email Signup
  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "Account created! Please check your email to confirm your account."
      );
    }

    setLoading(false);
  }

  // Google Signup
  async function handleGoogleSignup() {
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

  const isError = message && !message.startsWith("Account created");

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-400/40 blur-[140px]" />
        <div className="absolute -right-40 top-96 h-[500px] w-[500px] rounded-full bg-fuchsia-300/40 blur-[140px]" />
        <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-[140px]" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-purple-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          <Link href="/" className="text-xl font-bold tracking-tight text-black sm:text-2xl">
            AI FrontDesk<span className="text-[#7547C8]">.</span>
          </Link>

          <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex xl:gap-8">
            <Link href="/#features" className="transition hover:text-purple-700">Features</Link>
            <Link href="/#how-it-works" className="transition hover:text-purple-700">How it works</Link>
            <Link href="/#about" className="transition hover:text-purple-700">About</Link>
            <Link href="/demo" className="transition hover:text-purple-700">Demo Session</Link>
          </div>

          <Link
            href="/"
            className="rounded-xl border border-purple-200 bg-white px-5 py-3 text-sm font-semibold text-[#7547C8] transition hover:bg-purple-50"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* SIGNUP SECTION */}
      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:py-24">

        {/* Left side */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-[#7547C8]">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Intelligent AI Receptionist
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl">
            Create your account.
            <br />
            <span className="text-[#7547C8]">
              Never miss a call again.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Set up your 24/7 AI receptionist in minutes. Answer calls, handle
            questions and book appointments automatically.
          </p>

          <div className="mt-8 space-y-3 text-sm font-medium text-[#55516A]">
            <p><span className="mr-2 text-[#7547C8]">✓</span>Available 24/7</p>
            <p><span className="mr-2 text-[#7547C8]">✓</span>Automated appointment booking</p>
            <p><span className="mr-2 text-[#7547C8]">✓</span>Easy business dashboard</p>
          </div>
        </div>

        {/* Signup Card */}
        <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-2xl shadow-purple-100 md:p-10">

          <h2 className="text-2xl font-bold text-[#17152F]">
            Create your account
          </h2>

          <p className="mt-2 text-sm text-[#55516A]">
            Get started with AI FrontDesk.
          </p>

          {/* Google Signup Button */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            disabled={googleLoading || loading}
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-purple-100 bg-white py-4 font-semibold text-[#17152F] transition hover:bg-purple-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {googleLoading ? (
              "Connecting to Google..."
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="h-5 w-5"
                >
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.01 13.22l7.98 6.19C12.05 13.72 17.56 9.5 24 9.5Z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.74 7.18l7.73 6C44.43 37.99 46.98 31.85 46.98 24.55Z"/>
                  <path fill="#FBBC05" d="M9.99 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a24 24 0 0 0 0 21.56l7.98-6.19Z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.89 2.3-8.18 2.3-6.44 0-11.95-4.22-14.01-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"/>
                </svg>
                Continue with Google
              </>
            )}
          </button>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-purple-100"></div>
            <span className="text-xs font-medium text-gray-400">
              OR SIGN UP WITH EMAIL
            </span>
            <div className="h-px flex-1 bg-purple-100"></div>
          </div>

          {/* Email Signup */}
          <form onSubmit={handleSignup} className="space-y-5">

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
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-purple-100 bg-[#FAF9FF] px-4 py-3 text-black outline-none transition focus:border-[#7547C8] focus:ring-2 focus:ring-purple-100"
                placeholder="At least 8 characters"
              />
            </div>

            <button
              type="submit"
              disabled={loading || googleLoading}
              className="w-full rounded-xl bg-[#7547C8] py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-[#6036AD] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Sign Up →"}
            </button>

          </form>

          {/* Message */}
          {message && (
            <p
              className={`mt-5 rounded-xl px-4 py-3 text-sm ${
                isError
                  ? "bg-red-50 text-red-600"
                  : "bg-green-50 text-green-700"
              }`}
            >
              {message}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-[#55516A]">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#7547C8] hover:underline">
              Log in
            </Link>
          </p>

        </div>
      </section>

      {/* FOOTER */}
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
