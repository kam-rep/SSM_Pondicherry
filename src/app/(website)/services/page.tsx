import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-secondary)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Our Services
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Complete Solutions for Your Space
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            From doors and windows to kitchens, storage, furniture and
            complete interiors, we provide customized solutions using wood,
            PVC, uPVC and WPC.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="group overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-secondary)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)]">
                    {service.category}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="font-serif text-2xl font-semibold text-[var(--color-text)]">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                    {service.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.services.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-medium text-[var(--color-primary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
                  >
                    Explore Service
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}