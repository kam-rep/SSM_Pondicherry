import { testimonials } from "@/data/testimonials";

export default function TestimonialsPage() {
  const featuredTestimonials = testimonials.filter(
    (testimonial) => testimonial.featured
  );

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-secondary)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Client Testimonials
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            What Our Clients Say
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            Every project begins with understanding our client&apos;s
            requirements and ends with creating a space they can enjoy.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredTestimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex flex-col rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-small)]"
              >
                {/* Rating */}
                <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <span
                      key={index}
                      className="text-lg text-[var(--color-accent)]"
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-5 flex-1 text-base leading-7 text-[var(--color-text-muted)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Customer */}
                <div className="mt-7 border-t border-[var(--color-border)] pt-5">
                  <p className="font-semibold text-[var(--color-text)]">
                    {testimonial.name}
                  </p>

                  <div className="mt-1 flex flex-wrap gap-x-2 text-sm text-[var(--color-text-muted)]">
                    <span>{testimonial.location}</span>
                    <span>•</span>
                    <span>{testimonial.projectType}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Your Project Could Be Next
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s Create Something Beautiful Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Tell us about your space, requirements and ideas. We&apos;ll help
            you explore the right solution for your project.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-secondary)]"
          >
            Get Free Quote
          </a>
        </div>
      </section>
    </main>
  );
}