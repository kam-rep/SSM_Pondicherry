import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-secondary)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Our Portfolio
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Crafted Spaces. Built to Last.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            Explore our residential, commercial, retail and office projects
            featuring customized wood, PVC, uPVC and WPC solutions.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const image = project.images[0];

              return (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-secondary)]">
                    {image ? (
                      <Image
                        src={image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-sm text-[var(--color-text-muted)]">
                          Project Image Coming Soon
                        </span>
                      </div>
                    )}

                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="font-serif text-2xl font-semibold text-[var(--color-text)]">
                        {project.title}
                      </h2>

                      <span className="shrink-0 text-xs font-medium text-[var(--color-text-muted)]">
                        {project.location}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                      {project.shortDescription}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.materials.map((material) => (
                        <span
                          key={material}
                          className="rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-medium text-[var(--color-primary)]"
                        >
                          {material}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
                    >
                      View Project
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}