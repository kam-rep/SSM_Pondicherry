import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { materials } from "@/data/materials";

export default function MaterialsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-secondary)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Materials
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Materials We Work With
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            We work with natural wood, PVC, uPVC and WPC to create
            customized solutions for residential, commercial and
            interior projects.
          </p>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((material) => (
              <article
                key={material.id}
                className="group overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-secondary)]">
                  <Image
                    src={material.image}
                    alt={material.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-serif text-2xl font-semibold text-[var(--color-text)]">
                    {material.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                    {material.shortDescription}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                      Best For
                    </p>

                    <ul className="mt-3 space-y-2">
                      {material.bestFor.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                        >
                          <Check
                            size={15}
                            className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {material.style.map((style) => (
                      <span
                        key={style}
                        className="rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-medium text-[var(--color-primary-dark)]"
                      >
                        {style}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/materials/${material.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
                  >
                    Explore Material
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-primary)] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Need Help Choosing?
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s Find the Right Material for Your Space
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
            Tell us about your project, requirements and budget. We can
            help you choose the material that best suits your space.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-secondary)]"
          >
            Get Free Quote
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}