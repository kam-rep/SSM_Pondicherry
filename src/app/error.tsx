"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6b4f3a]">
          SSM BUILDERS
        </p>

        <h1 className="mt-4 text-3xl font-bold text-[#222222]">
          Something went wrong
        </h1>

        <p className="mt-4 text-[#6b6b6b]">
          We encountered an unexpected problem. Please try again.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-full bg-[#6b4f3a] px-7 py-3.5 font-medium text-white transition hover:bg-[#4a3527]"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}