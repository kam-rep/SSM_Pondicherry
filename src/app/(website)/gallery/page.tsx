import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-secondary)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Our Gallery
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Explore Our Work
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            Take a look at some of our residential, commercial, interior,
            furniture, door and kitchen projects.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.flatMap((project) =>
              project.images.map((image, index) => (
                <article
                  key={`${project.id}-${index}`}
                  className="group overflow-hidden rounded-[var(--radius-large)] bg-white shadow-[var(--shadow-small)]"
                >
                  <Link href={`/portfolio/${project.slug}`}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} - image ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                          {project.category}
                        </p>

                        <h2 className="mt-1 font-serif text-xl font-semibold text-white">
                          {project.title}
                        </h2>

                        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white">
                          View Project
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-secondary)] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Start Your Project
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
            Have a Space in Mind?
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)]">
            Tell us what you are looking for and we can help you choose the
            right design, material and solution for your space.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          >
            Get Free Quote
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
