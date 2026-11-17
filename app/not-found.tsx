
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          AI FrontDesk
        </p>

        <h1 className="mt-6 text-8xl font-bold">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">
          Page not found
        </h2>

        <p className="mt-4 text-slate-400">
          Sorry, we couldn't find the page you're looking for.
          Let's get you back on track.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
