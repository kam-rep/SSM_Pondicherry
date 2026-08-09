import Link from "next/link";

import { business } from "@/config/business";
import { contact } from "@/config/contact";
import { navigation } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#1c1917] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">

          {/* Business + Quick Links */}
          <div className="sm:col-span-1 lg:col-span-2">

            {/* Business */}
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-2xl font-semibold">
                {business.name}
              </h2>
            </Link>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
              {business.description}
            </p>

            <p className="mt-3 text-sm font-medium text-white/90">
              {business.tagline}
            </p>

            {/* Quick Links */}
            <div className="mt-5 border-t border-white/10 pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Quick Links
              </h3>

              <nav className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Contact
            </h3>

            <div className="mt-4 space-y-2.5 text-sm text-white/70">
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

              <p className="leading-6">
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
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
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