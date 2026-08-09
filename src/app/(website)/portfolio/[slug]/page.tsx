import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-secondary)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {project.category}
            </p>

            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--color-primary)] shadow-sm">
                {project.type}
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--color-primary)] shadow-sm">
                {project.location}
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--color-primary)] shadow-sm">
                {project.style}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            {/* Images */}
            <div className="grid gap-6 sm:grid-cols-2">
              {project.images.length > 0 ? (
                project.images.map((image, index) => (
                  <div
                    key={image}
                    className={`relative overflow-hidden rounded-[var(--radius-large)] bg-[var(--color-secondary)] ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        sizes={
                          index === 0
                            ? "(max-width: 640px) 100vw, 100vw"
                            : "(max-width: 640px) 100vw, 50vw"
                        }
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex min-h-[400px] items-center justify-center rounded-[var(--radius-large)] bg-[var(--color-secondary)] sm:col-span-2">
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Project Images Coming Soon
                  </p>
                </div>
              )}
            </div>

            {/* Information */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-small)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Project Details
                </p>

                <div className="mt-6 space-y-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      Location
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--color-text)]">
                      {project.location}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      Project Type
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--color-text)]">
                      {project.type}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      Style
                    </p>
                    <p className="mt-1 text-sm font-medium text-[var(--color-text)]">
                      {project.style}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      Materials
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.materials.map((material) => (
                        <span
                          key={material}
                          className="rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-medium text-[var(--color-primary)]"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                      Services
                    </p>

                    <ul className="mt-3 space-y-2">
                      {project.services.map((service) => (
                        <li
                          key={service}
                          className="text-sm leading-6 text-[var(--color-text-muted)]"
                        >
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
                >
                  Start a Similar Project
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}