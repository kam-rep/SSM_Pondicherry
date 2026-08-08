import Link from "next/link";
import { business } from "@/config/business";
import { contact } from "@/config/contact";
import { navigation } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background-dark)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Business */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-2xl font-semibold">
                {business.name}
              </h2>
            </Link>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              {business.description}
            </p>

            <p className="mt-5 text-sm font-medium text-white/90">
              {business.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/70">
              <a
                href={`tel:${contact.phone}`}
                className="block transition hover:text-white"
              >
                {contact.phone}
              </a>

              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-white"
              >
                WhatsApp
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="block transition hover:text-white"
              >
                {contact.email}
              </a>

              <p>
                {contact.address.line1}
                <br />
                {contact.address.city}, {contact.address.state}
                <br />
                {contact.address.pincode}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>

          <p>
            Wood • PVC • uPVC • WPC Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}