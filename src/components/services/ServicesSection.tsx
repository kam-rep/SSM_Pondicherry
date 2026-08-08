import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/services";

export default function ServicesSection() {
  const featuredServices = services.filter((service) => service.featured);

  return (
    <section className="bg-[var(--color-secondary)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] sm:text-sm">
            What We Do
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
            Complete Interior & Exterior Solutions
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg sm:leading-8">
            From beautifully crafted wooden doors and windows to modern
            kitchens, wardrobes, TV units and commercial interiors, we create
            spaces that balance craftsmanship, functionality and style.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <article
              key={service.id}
              className="group overflow-hidden rounded-[20px] bg-white shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Category */}
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-primary-dark)] backdrop-blur-sm">
                  {service.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                  {service.shortDescription}
                </p>

                {/* Service Items */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.services.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition group-hover:text-[var(--color-primary-dark)]"
                >
                  Explore Service
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center lg:mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
          >
            View All Services
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}