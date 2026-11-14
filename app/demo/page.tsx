
"use client";

import { useState } from "react";
import Link from "next/link";

type Message = {
  id: number;
  sender: "customer" | "assistant";
  text: string;
};

export default function DemoPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "assistant",
      text: "Hello! Welcome to AI FrontDesk. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [booked, setBooked] = useState(false);

  function sendMessage() {
    const text = input.trim();

    if (!text) return;

    const customerMessage: Message = {
      id: Date.now(),
      sender: "customer",
      text: text,
    };

    let reply =
      "I'd be happy to help! Could you tell me a little more about what you need?";

    const lowerText = text.toLowerCase();

    if (
      lowerText.includes("book") ||
      lowerText.includes("appointment")
    ) {
      reply =
        "Absolutely! I can help you book an appointment. What day and time would you prefer?";
    } else if (lowerText.includes("hour")) {
      reply =
        "Our sample business hours are Monday to Saturday, 9 AM to 6 PM.";
    } else if (
      lowerText.includes("price") ||
      lowerText.includes("cost")
    ) {
      reply =
        "I'd be happy to help with pricing. Which service are you interested in?";
    }

    const assistantMessage: Message = {
      id: Date.now() + 1,
      sender: "assistant",
      text: reply,
    };

    setMessages((current) => [
      ...current,
      customerMessage,
      assistantMessage,
    ]);

    setInput("");
  }

  function bookDemoAppointment() {
    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        sender: "customer",
        text: "I'd like to book a demo appointment.",
      },
      {
        id: Date.now() + 1,
        sender: "assistant",
        text: "Your sample appointment has been confirmed for tomorrow at 10:00 AM. This is a simulated booking.",
      },
    ]);

    setBooked(true);
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white px-4 py-10">

  {/* Background glow */}
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

    {/* Top-left purple glow */}
    <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-400/40 blur-[140px]" />

    {/* Top-right pink glow */}
    <div className="absolute -right-40 top-96 h-[500px] w-[500px] rounded-full bg-fuchsia-300/40 blur-[140px]" />

    {/* Middle lavender glow */}
    <div className="absolute left-1/4 top-[700px] h-[600px] w-[600px] rounded-full bg-violet-300/30 blur-[150px]" />

    {/* Bottom purple glow */}
    <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-purple-400/30 blur-[140px]" />

  </div>
      <div className="relative z-10 mx-auto max-w-5xl">

        <Link
          href="/"
          className="text-sm font-medium text-purple-700 hover:text-purple-900"
        >
          ← Back to Home
        </Link>

        <div className="mt-8 text-center">
          <p className="font-semibold text-purple-700">
            EXPERIENCE AI FRONTDESK
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Meet Your AI Receptionist
          </h1>

          <p className="mt-3 text-gray-600">
            Chat with our demo receptionist and experience
            how appointment booking works.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-xl">

          <div className="flex items-center justify-between bg-purple-700 p-5 text-white">
            <div>
              <h2 className="font-bold">AI FrontDesk Assistant</h2>
              <p className="text-sm text-purple-200">
                Demo mode · Online
              </p>
            </div>

            <div className="rounded-full bg-green-400 px-3 py-1 text-xs font-semibold text-white">
              ONLINE
            </div>
          </div>

          <div className="h-96 space-y-4 overflow-y-auto bg-purple-50/50 p-5">

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "customer"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    message.sender === "customer"
                      ? "bg-purple-700 text-white"
                      : "border border-purple-100 bg-white text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

          </div>

          {booked && (
            <div className="mx-5 mb-3 rounded-xl border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-green-800">
                ✓ Demo appointment confirmed!
              </p>
              <p className="mt-1 text-sm text-green-700">
                Tomorrow · 10:00 AM
              </p>
              <p className="mt-1 text-xs text-green-700">
                This is a simulated appointment, not a real booking.
              </p>
            </div>
          )}

          <div className="border-t border-gray-100 p-4">

            <button
              onClick={bookDemoAppointment}
              className="mb-3 w-full rounded-xl bg-purple-100 px-4 py-3 text-sm font-semibold text-purple-800 hover:bg-purple-200"
            >
              Try booking an appointment
            </button>

            
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") sendMessage();
              }}
              placeholder="Type your message..."
              className="min-w-0 flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-500 outline-none focus:border-purple-500"
            />
          
              <button
                onClick={sendMessage}
                className="rounded-xl bg-purple-700 px-5 py-3 font-semibold text-white hover:bg-purple-800"
              >
                Send
              </button>
            </div>

          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          *  This interactive experience uses simulated responses.
          No real appointment or notification is created.
        </p>

      </div>
    </main>
  );
}
