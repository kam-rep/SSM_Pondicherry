import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { business } from "@/config/business";
import { contact } from "@/config/contact";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary-dark)] text-white">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl lg:grid-cols-2">

        {/* Content */}
        <div className="relative z-10 flex items-center px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] sm:text-sm">
              {business.name}
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              {business.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {business.hero.subtitle}
            </p>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
              {business.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href={business.hero.primaryButton.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-[var(--color-primary-dark)] transition hover:opacity-90"
              >
                {business.hero.primaryButton.label}
                <ArrowRight size={17} />
              </Link>

              <Link
                href={business.hero.secondaryButton.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--color-primary-dark)]"
              >
                Get Free Quote
              </Link>

            </div>

            {/* Contact */}
            <div className="mt-8 flex items-center gap-3 text-sm text-white/70">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                <Phone size={15} />
              </div>

              <a
                href={`tel:${contact.phone}`}
                className="transition hover:text-white"
              >
                {contact.phone}
              </a>
            </div>

          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-[380px] lg:min-h-full">

          <Image
            src={business.hero.image}
            alt={`${business.name} interior and exterior work`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)] via-transparent to-transparent lg:from-[var(--color-primary-dark)]/80 lg:via-[var(--color-primary-dark)]/20" />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-primary-dark)]/70 to-transparent lg:hidden" />

        </div>

      </div>
    </section>
  );
}