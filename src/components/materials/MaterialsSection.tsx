import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { materials } from "@/data/materials";

export default function MaterialsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] sm:text-sm">
            Materials We Work With
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
            Choose the Right Material for Your Space
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg sm:leading-8">
            From the warmth of natural wood to the practicality of PVC, uPVC
            and WPC, we help you choose materials based on your design,
            durability, maintenance and budget requirements.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {materials.map((material, index) => (
            <article
              key={material.id}
              className="group overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[var(--color-secondary)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={material.image}
                  alt={material.name}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-[var(--color-text)]">
                  {material.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                  {material.shortDescription}
                </p>

                {/* Best For */}
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

                {/* Styles */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {material.style.map((style) => (
                    <span
                      key={style}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--color-primary-dark)]"
                    >
                      {style}
                    </span>
                  ))}
                </div>

                {/* Link */}
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
  );
}