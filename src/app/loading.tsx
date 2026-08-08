export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <div
          className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#e5e0db] border-t-[#6b4f3a]"
          aria-label="Loading"
        />

        <p className="mt-6 text-sm font-medium text-[#6b6b6b]">
          Loading SSM BUILDERS...
        </p>
      </div>
    </main>
  );
}