import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { business } from "@/config/business";
import { contact } from "@/config/contact";
import CTASection from "@/components/contact/CTASection";

export default function ContactPage() {
return ( <main>
{/* Hero */} <section className="border-b border-[var(--color-border)] bg-[var(--color-secondary)] py-20 sm:py-24"> <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"> <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
Contact Us </p>

      <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
        Let&apos;s Talk About Your Project
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
        Whether you are planning a new door, kitchen, wardrobe, TV unit,
        interior or commercial project, get in touch with us and tell us
        what you have in mind.
      </p>
    </div>
  </section>

  {/* Contact Information */}
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Contact Details */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Get In Touch
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            We&apos;re Here to Help
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-text-muted)]">
            Share your requirements with us. We can discuss your space,
            preferred materials, design ideas and project requirements.
          </p>

          <div className="mt-10 space-y-5">
            {/* Phone */}
            <a
              href={`tel:${contact.phone}`}
              className="group flex items-start gap-4 rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-small)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-medium)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
                <Phone size={20} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  Call Us
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {contact.phone}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-small)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-medium)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
                <MessageCircle size={20} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  WhatsApp
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Chat with us about your project
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-start gap-4 rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-small)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-medium)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
                <Mail size={20} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  Email
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {contact.email}
                </p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-small)]">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
                <MapPin size={20} />
              </span>

              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  Location
                </p>

                <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">
                  {contact.address.line1}
                  <br />
                  {contact.address.city}, {contact.address.state}
                  <br />
                  {contact.address.pincode}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Enquiry Card */}
        <div className="rounded-[var(--radius-large)] bg-[var(--color-primary)] p-8 shadow-[var(--shadow-medium)] sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Project Enquiry
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tell Us What You Need
          </h2>

          <p className="mt-5 text-base leading-7 text-white/75">
            The more details you share, the better we can understand your
            requirements and suggest a suitable solution.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Type of project or space",
              "Required service or product",
              "Preferred material",
              "Approximate dimensions or available space",
              "Design or style preferences",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm text-white/85"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-secondary)]"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>

            <a
              href={`tel:${contact.phone}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--color-primary)]"
            >
              <Phone size={17} />
              Call Us
            </a>
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-white/55">
            {business.name} • Wood • PVC • uPVC • WPC Solutions
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Existing CTA */}
  <CTASection />

  {/* Back to Home */}
  <section className="border-t border-[var(--color-border)] py-10">
    <div className="text-center">
      <Link
        href="/"
        className="text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
      >
        ← Back to Home
      </Link>
    </div>
  </section>
</main>

);
}
