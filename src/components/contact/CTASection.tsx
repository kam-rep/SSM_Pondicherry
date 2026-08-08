import Link from "next/link";
import { business } from "@/config/business";
import { contact } from "@/config/contact";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[var(--radius-large)] bg-[var(--color-primary)] px-6 py-12 text-center shadow-[var(--shadow-medium)] sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Start Your Project
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Build Something Beautiful Together
            </h2>

            <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
              Looking for a custom door, window, kitchen, TV unit, interior
              or other wood, PVC, uPVC or WPC solution? Get in touch with us
              and tell us about your project.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-secondary)]"
              >
                Get Free Quote
              </Link>

              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--color-primary)]"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="mt-8 flex flex-col items-center gap-2 text-sm text-white/70 sm:flex-row sm:justify-center sm:gap-4">
              <span>{business.name}</span>
              <span className="hidden sm:inline">•</span>
              <a
                href={`tel:${contact.phone}`}
                className="transition hover:text-white"
              >
                {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}