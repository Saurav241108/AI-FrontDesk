
export default function Loading() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600/20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-400/30 border-t-purple-400" />
        </div>

        <h1 className="mt-6 text-2xl font-bold">
          AI FrontDesk
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Preparing your workspace...
        </p>

        <div className="mx-auto mt-6 h-1.5 w-48 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-purple-500" />
        </div>
      </div>
    </main>
  );
}
