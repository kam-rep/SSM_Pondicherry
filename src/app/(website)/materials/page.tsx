import MaterialsSection from "@/components/materials/MaterialsSection";

export default function MaterialsPage() {
  return (
    <main>
      <section className="bg-[var(--color-secondary)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Materials
            </p>

            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
              Materials We Work With
            </h1>

            <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
              Explore the materials we use for doors, windows, kitchens,
              furniture, storage and interior solutions.
            </p>
          </div>
        </div>
      </section>

      <MaterialsSection />
    </main>
  );
}