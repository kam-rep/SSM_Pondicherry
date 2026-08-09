import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { services } from "@/data/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | SSM Pondicherry`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-secondary)] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {service.category}
              </p>

              <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mt-6 text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
                {service.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
                >
                  Get Free Quote
                  <ArrowUpRight size={17} />
                </Link>

                <a
                  href="#details"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
                >
                  Explore Details
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-large)] bg-white shadow-[var(--shadow-medium)]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section id="details" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                What We Offer
              </p>

              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Solutions Designed Around Your Requirements
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--color-text-muted)]">
                {service.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {service.services.map((item) => (
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

            {/* Side CTA */}
            <aside className="h-fit rounded-[var(--radius-large)] bg-[var(--color-primary)] p-7 shadow-[var(--shadow-medium)] sm:p-8 lg:sticky lg:top-24">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Start Your Project
              </p>

              <h2 className="mt-3 font-serif text-2xl font-semibold text-white sm:text-3xl">
                Let&apos;s Create Something That Fits Your Space
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/75">
                Tell us about your requirements, available space and preferred
                style. We&apos;ll help you explore the right solution.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-secondary)]"
              >
                Get Free Quote
                <ArrowUpRight size={17} />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-secondary)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              More Services
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
              Explore Our Other Solutions
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/services/${item.slug}`}
                  className="group rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                    {item.category}
                  </p>

                  <h3 className="mt-3 font-serif text-xl font-semibold text-[var(--color-text)]">
                    {item.title}
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
