import { business } from "@/config/business";
import { statistics } from "@/data/statistics";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[var(--color-secondary)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            About Us
          </p>

          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Craftsmanship Built Around Your Space
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            {business.description}
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Who We Are
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Practical Solutions. Elegant Designs. Quality Workmanship.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[var(--color-text-muted)]">
              <p>
                {business.name} provides customized interior and exterior
                solutions using wood, PVC, uPVC and WPC materials.
              </p>

              <p>
                Our work covers residential homes, commercial spaces, retail
                shops, offices and other projects where thoughtful design,
                functionality and quality craftsmanship matter.
              </p>

              <p>
                From entrance doors and windows to kitchen cabinets, TV units,
                wardrobes, storage solutions and customized interiors, we
                focus on creating solutions that suit the space and the
                customer&apos;s requirements.
              </p>
            </div>
          </div>

          <div className="rounded-[var(--radius-large)] bg-[var(--color-primary)] p-8 shadow-[var(--shadow-medium)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Our Approach
            </p>

            <div className="mt-8 space-y-7">
              <div>
                <h3 className="font-serif text-xl font-semibold text-white">
                  Understand
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  We understand your space, requirements, preferred style and
                  practical needs before recommending a solution.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-white">
                  Design
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  We develop solutions that balance appearance, functionality,
                  available space and material requirements.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-white">
                  Build
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  We focus on careful execution and finishing to deliver a
                  result that is built for everyday use.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="border-y border-[var(--color-border)] bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {statistics.map((statistic) => (
            <div
              key={statistic.id}
              className="text-center"
            >
              <p className="font-serif text-4xl font-semibold text-[var(--color-primary)] sm:text-5xl">
                {statistic.value}
              </p>

              <h3 className="mt-2 text-sm font-semibold text-[var(--color-text)]">
                {statistic.label}
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[var(--color-text-muted)]">
                {statistic.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              What We Do
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Solutions for Homes and Businesses
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)]">
              Our range of services is designed to cover different spaces,
              applications and design requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Residential Interiors",
              "Doors & Windows",
              "Kitchen & Storage",
              "Commercial Interiors",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-secondary)] p-6 text-center"
              >
                <h3 className="font-serif text-xl font-semibold text-[var(--color-text)]">
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}