import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function PortfolioSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="bg-[var(--color-background)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Our Work
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
            Crafted Spaces. Built to Last.
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
            Explore a selection of our residential, commercial, retail and
            office projects created using wood, PVC, uPVC and WPC solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => {
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
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-sm text-[var(--color-text-muted)]">
                        Project Image Coming Soon
                      </span>
                    </div>
                  )}

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)] backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif text-xl font-semibold text-[var(--color-text)]">
                      {project.title}
                    </h3>

                    <span className="shrink-0 text-xs font-medium text-[var(--color-text-muted)]">
                      {project.location}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--color-text-muted)]">
                    {project.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.materials.slice(0, 3).map((material) => (
                      <span
                        key={material}
                        className="rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-medium text-[var(--color-primary)]"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
