"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const features = [
  {
    icon: "☎",
    title: "24/7 AI Call Handling",
    description:
      "Answer every incoming call automatically, even outside business hours.",
  },
  {
    icon: "▦",
    title: "Smart Appointment Booking",
    description:
      "Let customers schedule appointments through natural conversations.",
  },
  {
    icon: "◷",
    title: "Instant Notifications",
    description:
      "Receive booking confirmations and updates without manual work.",
  },
  {
    icon: "▤",
    title: "Call Analytics",
    description:
      "Monitor call history, customer interactions and booking performance.",
  },
  {
    icon: "✦",
    title: "AI Conversations",
    description:
      "Give customers helpful answers with a natural-sounding AI receptionist.",
  },
  {
    icon: "♧",
    title: "Business Dashboard",
    description:
      "Manage calls, appointments and your receptionist from one place.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white">

  {/* Background glow — entire website */}
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

    {/* Top-left purple glow */}
    <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-400/40 blur-[140px]" />

    {/* Top-right pink glow */}
    <div className="absolute -right-40 top-96 h-[500px] w-[500px] rounded-full bg-fuchsia-300/40 blur-[140px]" />

    {/* Middle lavender glow */}
    <div className="absolute left-1/4 top-[1200px] h-[600px] w-[600px] rounded-full bg-violet-300/30 blur-[150px]" />

    {/* Bottom purple glow */}
    <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-purple-400/30 blur-[140px]" />

  </div>

  



      {/* NAVBAR */}
      
{/* NAVBAR */}
<nav className="sticky top-0 z-50 border-b border-purple-100 bg-white/80 backdrop-blur-xl">
  <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

    {/* LOGO */}
    <a href="#" className="text-xl font-bold tracking-tight text-black sm:text-2xl">
      AI FrontDesk<span className="text-[#7547C8]">.</span>
    </a>

    {/* DESKTOP NAVIGATION */}
    <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 lg:flex xl:gap-8">
      <a href="#features" className="transition hover:text-purple-700">
        Features
      </a>
      <a href="#how-it-works" className="transition hover:text-purple-700">
        How it works
      </a>
      <a href="#about" className="transition hover:text-purple-700">
        About
      </a>
      <a href="#pricing" className="transition hover:text-purple-700">
        Pricing
      </a>
      <Link href="/demo" className="transition hover:text-purple-700">
        Demo Session
      </Link>
    </div>

    {/* DESKTOP GET STARTED */}
    <a
      href="#get-started"
      className="hidden rounded-xl bg-[#7547C8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6036AD] lg:inline-flex"
    >
      Get Started →
    </a>

    {/* MOBILE MENU BUTTON */}
    <button
      type="button"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="rounded-lg p-2 text-[#7547C8] transition hover:bg-purple-50 lg:hidden"
      aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={mobileMenuOpen}
    >
      {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
    </button>
  </div>

  {/* MOBILE DROPDOWN */}
  {mobileMenuOpen && (
    <div className="border-t border-purple-100 bg-white px-5 py-4 shadow-lg lg:hidden">
      <div className="mx-auto flex max-w-7xl flex-col gap-1">

        {[
          { name: "Features", href: "#features" },
          { name: "How it works", href: "#how-it-works" },
          { name: "About", href: "#about" },
          { name: "Pricing", href: "#pricing" },
          { name: "Demo Session", href: "/demo" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-purple-50 hover:text-purple-700"
          >
            {item.name}
          </Link>
        ))}

        <a
          href="#get-started"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-2 rounded-xl bg-[#7547C8] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#6036AD]"
        >
          Get Started →
        </a>

      </div>
    </div>
  )}
</nav>


          
          {/* HERO SECTION */}
         <section className="relative z-10 bg-transparent">

        {/* Top-left purple glow */}
        <div className="pointer-events-none absolute -left-32 top-10 z-0 h-[450px] w-[450px] rounded-full bg-purple-400/40 blur-[110px]" />

        {/* Top-right pink glow */}
        <div className="pointer-events-none absolute -right-32 top-20 z-0 h-[450px] w-[450px] rounded-full bg-fuchsia-300/40 blur-[110px]" />

        {/* Bottom-right lavender glow */}
        <div className="pointer-events-none absolute -bottom-40 right-1/4 z-0 h-[400px] w-[400px] rounded-full bg-violet-300/40 blur-[110px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">

          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-[#7547C8]">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Intelligent AI Receptionist
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl text-black">
              Every Call.
              <br />
              Every Customer.
              <br />
              <span className="text-[#7547C8]">
                Always Answered.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Meet your 24/7 AI receptionist. Answer customer
              calls, handle questions and book appointments
              automatically while you focus on growing your business.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#get-started"
                className="rounded-xl bg-[#7547C8] px-7 py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-[#6036AD]"
              >
                Get Started Free →
              </a>

              <a
                href="#how-it-works"
                className="rounded-xl border border-purple-200 bg-white px-7 py-4 font-semibold text-[#7547C8] transition hover:bg-purple-50"
              >
                See How It Works
              </a>

            </div>

            <div className="mt-9 flex flex-wrap gap-6 text-sm text-gray-500">
              <span>✓ Available 24/7</span>
              <span>✓ Automated bookings</span>
              <span>✓ Easy management</span>
            </div>
          </div>

          {/* DASHBOARD PREVIEW */}
          <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-2xl shadow-purple-100 md:p-8">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Your workspace
                </p>
                <h2 className="mt-1 text-xl font-bold text-black">
                  Business Overview
                </h2>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-600">
                ● AI Active
              </span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-[#F7F3FF] p-5">
                <p className="text-sm text-gray-500">Total Calls</p>
                <h3 className="mt-3 text-3xl font-bold text-black">248</h3>
                <p className="mt-2 text-xs text-green-600">
                  Calls handled
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7F3FF] p-5">
                <p className="text-sm text-gray-500">Appointments</p>
                <h3 className="mt-3 text-3xl font-bold text-black">86</h3>
                <p className="mt-2 text-xs text-green-600">
                  Bookings received
                </p>
              </div>

            </div>

            <div className="mt-5 rounded-2xl border border-purple-100 p-5">

              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-black">Receptionist Status</h3>
                <span className="text-xs font-semibold text-green-600">
                  Online
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Your AI receptionist is ready to answer
                incoming customer calls.
              </p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-purple-100">
                <div className="h-full w-full rounded-full bg-[#7547C8]"></div>
              </div>

              <p className="mt-2 text-xs text-gray-400">
                Availability preview
              </p>

            </div>

            <div className="mt-5 rounded-2xl bg-[#7547C8] p-5 text-white">
              <p className="text-sm text-purple-100">
                Your business assistant
              </p>
              <h3 className="mt-1 text-lg font-semibold">
                Always ready to help.
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">

        <div className="mx-auto max-w-2xl text-center">

          <p className="font-semibold text-[#7547C8]">
            FEATURES
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-black">
            Everything your business needs
          </h2>

          <p className="mt-5 leading-7 text-gray-500">
            One intelligent platform to handle customer calls,
            manage appointments and simplify your daily operations.
          </p>

        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-purple-100 bg-white p-8 transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0E9FF] text-2xl text-[#7547C8]">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-black">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-black">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-[#F8F5FF] px-6 py-24"
      >

        <div className="mx-auto max-w-7xl text-black">

          <div className="text-center">
            <p className="font-semibold text-[#7547C8]">
              SIMPLE PROCESS
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              How AI FrontDesk works
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3 text-black">

            {[
              {
                number: "01",
                title: "Customer Calls",
                description: "A customer calls your business phone number.",
              },
              {
                number: "02",
                title: "AI Answers",
                description: "Your AI receptionist understands and responds naturally.",
              },
              {
                number: "03",
                title: "Appointment Booked",
                description: "The system books appointments and sends confirmations.",
              },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7547C8] text-xl font-bold text-white shadow-lg shadow-purple-200">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs leading-7 text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ABOUT */}
      
<section
  id="about"
  className="relative z-10 bg-white px-6 py-24"
>
  <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

    {/* Left side - About content */}
    <div>
      <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#7547C8]">
        NEVER MISS AN OPPORTUNITY.
      </p>

      <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#17152F] md:text-4xl">
        Every Call Matters.
        <span className="block text-[#7547C8]">
          Every Customer Counts.
        </span>
      </h2>

      <p className="mt-7 text-base leading-8 text-[#55516A]">
        Your customers shouldn't have to wait for an answer — and you
        shouldn't have to be available 24/7 to serve them.
      </p>

      <p className="mt-4 text-base leading-8 text-[#55516A]">
        AI FrontDesk is your intelligent virtual receptionist, designed
        to answer calls, assist customers, and schedule appointments
        around the clock. Whether you're busy with a client, away from
        your desk, or closed for the day, your AI receptionist keeps
        your business connected.
      </p>

      <div className="mt-7 rounded-2xl border border-purple-100 bg-purple-50/70 p-5">
        <p className="font-bold leading-7 text-[#7547C8]">
          More answered calls. More booked appointments. Less time
          spent managing your phone.
        </p>
      </div>

      <p className="mt-6 text-lg font-semibold leading-8 text-[#17152F]">
        You focus on growing your business. We'll take care of the
        conversations.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-[#55516A]">
          <span className="text-[#7547C8]">✓</span>
          24/7 Availability
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-[#55516A]">
          <span className="text-[#7547C8]">✓</span>
          Smart Appointment Booking
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-[#55516A]">
          <span className="text-[#7547C8]">✓</span>
          Automated Call Handling
        </div>
      </div>
    </div>

    {/* Right side - Illustration placeholder */}
    <div className="flex items-center justify-center">
      <div className="flex h-80 w-full max-w-md items-center justify-center rounded-3xl bg-gradient-to-br from-[#F3ECFF] to-[#FCEBFA]">
        <span className="text-7xl">🎧</span>
      </div>
    </div>

  </div>
</section>


      {/* CTA */}
      <section id="get-started" className="px-6 py-24">

        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-[#6036AD] to-[#9164DD] px-8 py-16 text-center text-white shadow-xl shadow-purple-200 md:px-16">

          <h2 className="text-4xl font-bold">
            Ready to transform your business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-purple-100">
            Give your customers a better calling experience
            with an intelligent AI receptionist.
          </p>

          <a
            href="#"
            className="mt-9 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-[#7547C8] transition hover:bg-purple-50"
          >
            Get Started Today →
          </a>

        </div>

      </section>


{/* Floating Contact Button */}
<a
  href="#contact"
  aria-label="Contact AI FrontDesk"
  className="fixed bottom-6 right-6 z-[100] group flex items-center gap-3"
>
  <span className="rounded-xl bg-[#17152F] px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 translate-x-2">
    Contact Us
  </span>

  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7547C8] text-white shadow-xl shadow-purple-300/60 transition-all duration-300 hover:scale-110 hover:bg-[#6036AD]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  </div>
</a>

{/* CONTACT SECTION */}
<section
  id="contact"
  className="relative z-10 overflow-hidden bg-white px-6 py-24"
>
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="text-sm font-bold tracking-widest text-[#7547C8]">
        GET IN TOUCH
      </p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#17152F] md:text-5xl">
        Let's Talk About Your Business
      </h2>

      <p className="mt-5 leading-7 text-[#55516A]">
        Have questions about AI FrontDesk? We'd love to hear from you.
        Send us a message and let's find the right solution for your business.
      </p>
    </div>

    <div className="grid gap-10 lg:grid-cols-2">

      {/* Contact Information */}
      <div className="rounded-3xl bg-[#F7F3FF] p-8 md:p-10">
        <h3 className="text-2xl font-bold text-[#17152F]">
          Contact Information
        </h3>

        <p className="mt-3 leading-7 text-[#55516A]">
          Reach out to our team for product questions, support, or
          partnership opportunities.
        </p>

        <div className="mt-10 space-y-7">

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#7547C8] shadow-sm">
              ✉
            </div>
            <div>
              <h4 className="font-bold text-[#17152F]">Email Us</h4>
              <p className="mt-1 text-sm text-[#55516A]">
                support@yourdomain.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#7547C8] shadow-sm">
              ☎
            </div>
            <div>
              <h4 className="font-bold text-[#17152F]">Call Us</h4>
              <p className="mt-1 text-sm text-[#55516A]">
                +1 (XXX) XXX-XXXX
              </p>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl text-[#7547C8] shadow-sm">
              ◷
            </div>
            <div>
              <h4 className="font-bold text-[#17152F]">Availability</h4>
              <p className="mt-1 text-sm text-[#55516A]">
                Online support available 24/7
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-3xl border border-purple-100 bg-white p-8 shadow-xl shadow-purple-100/40 md:p-10">
        <h3 className="text-2xl font-bold text-[#17152F]">
          Send Us a Message
        </h3>

        <p className="mt-3 text-sm text-[#55516A]">
          Fill out the form and our team will get back to you.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#17152F]">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-purple-100 bg-[#FAF9FF] px-4 py-3 outline-none transition focus:border-[#7547C8] focus:ring-2 focus:ring-purple-100 text-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#17152F]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-purple-100 bg-[#FAF9FF] px-4 py-3 outline-none transition focus:border-[#7547C8] focus:ring-2 focus:ring-purple-100 text-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#17152F]">
              Subject
            </label>
            <input
              type="text"
              placeholder="How can we help?"
              className="w-full rounded-xl border border-purple-100 bg-[#FAF9FF] px-4 py-3 outline-none transition focus:border-[#7547C8] focus:ring-2 focus:ring-purple-100 text-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#17152F]">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full resize-none rounded-xl border border-purple-100 bg-[#FAF9FF] px-4 py-3 outline-none transition focus:border-[#7547C8] focus:ring-2 focus:ring-purple-100 text-black"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-[#7547C8] py-4 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-[#6036AD]"
          >
            Send Message →
          </button>
        </form>
      </div>

    </div>
  </div>
</section>


      {/* FOOTER */}
      
<footer className="relative z-20 bg-[#17132B] px-6 py-14 text-white">

  <div className="mx-auto max-w-7xl">

    {/* Footer main content */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

      {/* Brand section */}
      <div className="lg:col-span-2">

        <Link href="/" className="inline-flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7547C8]">
            <span className="text-xl">🎧</span>
          </div>

          <span className="text-xl font-bold text-white">
            AI FrontDesk
          </span>
        </Link>

        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
          Your AI receptionist, available 24/7.
          Never miss a customer, an appointment,
          or an opportunity to grow your business.
        </p>

      </div>

      {/* Quick links */}
      <div>
        <h3 className="mb-5 text-base font-bold text-white">
          Quick Links
        </h3>

        <ul className="space-y-3 text-sm text-gray-300">
          <li><a href="#" className="transition hover:text-[#B794FF]">Home</a></li>
          <li><a href="#features" className="transition hover:text-[#B794FF]">Features</a></li>
          <li><a href="#how-it-works" className="transition hover:text-[#B794FF]">How It Works</a></li>
          <li><a href="#about" className="transition hover:text-[#B794FF]">About Us</a></li>
          <li><a href="#pricing" className="transition hover:text-[#B794FF]">Pricing</a></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="mb-5 text-base font-bold text-white">
          Our Services
        </h3>

        <ul className="space-y-3 text-sm text-gray-300">
          <li>AI Call Handling</li>
          <li>Appointment Booking</li>
          <li>Customer Support</li>
          <li>Call Management</li>
          <li>24/7 Availability</li>
        </ul>
      </div>

      {/* Contact and legal */}
      <div>
        <h3 className="mb-5 text-base font-bold text-white">
          Contact
        </h3>

        <ul className="space-y-3 text-sm text-gray-300">
          <li>
            <a href="#contact" className="transition hover:text-[#B794FF]">
              Contact Us
            </a>
          </li>
          <li>
            <Link href="/demo" className="transition hover:text-[#B794FF]">
              Book a Demo
            </Link>
          </li>
        </ul>

        <h3 className="mb-5 mt-8 text-base font-bold text-white">
          Legal
        </h3>

        <ul className="space-y-3 text-sm text-gray-300">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookie Policy</li>
        </ul>

      </div>

    </div>

    {/* Bottom divider */}
    <div className="my-10 border-t border-white/15" />

    {/* Copyright */}
    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">

      <p className="text-sm text-gray-400">
        Copyright 2026 AI FrontDesk. All rights reserved.
      </p>

      <p className="text-sm text-gray-400">
        Built to help businesses never miss a customer.
      </p>

    </div>

  </div>

    </footer>

    </main>
  );
}
