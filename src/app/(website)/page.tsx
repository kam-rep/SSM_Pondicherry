import { business } from "@/config/business";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#6b4f3a]">
            {business.name}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#222222] sm:text-5xl lg:text-7xl">
            {business.hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-[#6b6b6b] sm:text-lg">
            {business.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={business.hero.primaryButton.href}
              className="rounded-full bg-[#6b4f3a] px-7 py-3.5 font-medium text-white transition hover:bg-[#4a3527]"
            >
              {business.hero.primaryButton.label}
            </a>

            <a
              href={business.hero.secondaryButton.href}
              className="rounded-full border border-[#6b4f3a] px-7 py-3.5 font-medium text-[#6b4f3a] transition hover:bg-[#6b4f3a] hover:text-white"
            >
              {business.hero.secondaryButton.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}