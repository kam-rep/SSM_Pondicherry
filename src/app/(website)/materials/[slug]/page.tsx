import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { materials } from "@/data/materials";

type MaterialPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return materials.map((material) => ({
    slug: material.slug,
  }));
}

export async function generateMetadata({ params }: MaterialPageProps) {
  const { slug } = await params;

  const material = materials.find((item) => item.slug === slug);

  if (!material) {
    return {
      title: "Material Not Found",
    };
  }

  return {
    title: `${material.name} | SSM Pondicherry`,
    description: material.description,
  };
}

export default async function MaterialDetailPage({
  params,
}: MaterialPageProps) {
  const { slug } = await params;

  const material = materials.find((item) => item.slug === slug);

  if (!material) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-secondary)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/materials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
          >
            <ArrowLeft size={16} />
            Back to Materials
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Material
              </p>

              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                {material.name}
              </h1>

              <p className="mt-6 text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
                {material.description}
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
              >
                Get Free Quote
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-large)] bg-white shadow-[var(--shadow-medium)]">
              <Image
                src={material.image}
                alt={material.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                About This Material
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
                Why Choose {material.name}?
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--color-text-muted)]">
                {material.description}
              </p>

              <div className="mt-10">
                <h3 className="font-serif text-2xl font-semibold text-[var(--color-text)]">
                  Best For
                </h3>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {material.bestFor.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-small)]"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
                        <Check size={16} />
                      </span>

                      <span className="text-sm font-medium leading-6 text-[var(--color-text)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Card */}
            <aside className="h-fit rounded-[var(--radius-large)] bg-[var(--color-primary)] p-7 shadow-[var(--shadow-medium)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Material Styles
              </p>

              <h2 className="mt-3 font-serif text-2xl font-semibold text-white sm:text-3xl">
                Available Styles
              </h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {material.style.map((style) => (
                  <span
                    key={style}
                    className="rounded-full bg-white/10 px-3 py-2 text-xs font-medium text-white"
                  >
                    {style}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-secondary)]"
              >
                Discuss Your Project
                <ArrowUpRight size={17} />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Other Materials */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-secondary)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Explore More
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
              Other Materials
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {materials
              .filter((item) => item.slug !== material.slug)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/materials/${item.slug}`}
                  className="group rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
                >
                  <h3 className="font-serif text-xl font-semibold text-[var(--color-text)]">
                    {item.name}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--color-text-muted)]">
                    {item.shortDescription}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                    Explore
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}