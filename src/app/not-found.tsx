import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6b4f3a]">
          SSM BUILDERS
        </p>

        <h1 className="mt-4 text-6xl font-bold text-[#222222]">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-[#222222]">
          Page Not Found
        </h2>

        <p className="mt-4 text-[#6b6b6b]">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#6b4f3a] px-7 py-3.5 font-medium text-white transition hover:bg-[#4a3527]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}