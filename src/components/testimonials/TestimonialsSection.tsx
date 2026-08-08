import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const featuredTestimonials = testimonials.filter(
    (testimonial) => testimonial.featured
  );

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Client Feedback
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
            We believe quality workmanship, thoughtful design and customer
            satisfaction are the foundation of every project.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] sm:p-7"
            >
              <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <span
                    key={index}
                    className="text-lg text-[var(--color-accent)]"
                  >
                    ★
                  </span>
                ))}
              </div>

              <blockquote className="mt-5 text-base leading-7 text-[var(--color-text-muted)]">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-6 border-t border-[var(--color-border)] pt-5">
                <p className="font-semibold text-[var(--color-text)]">
                  {testimonial.name}
                </p>

                <div className="mt-1 flex flex-wrap gap-2 text-sm text-[var(--color-text-muted)]">
                  <span>{testimonial.projectType}</span>
                  <span>•</span>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}