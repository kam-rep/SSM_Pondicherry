"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

import { business } from "@/config/business";
import { contact } from "@/config/contact";
import { navigation } from "@/config/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Business Name */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2"
        >
          <Image
            src="/images/logos/ssm-logo.png"
            alt={business.name}
            width={260}
            height={80}
            priority
            className="h-auto w-[80px] object-contain sm:w-[85px]"
          />

          <div className="w-[180px] max-w-[180px] sm:w-[220px] sm:max-w-[220px]">
            <div className="font-serif text-[16px] font-semibold leading-[1.05] tracking-tight text-[var(--color-primary)] sm:text-[18px]">
              <span className="block">
                {business.name.split(" BUILDERS")[0]} BUILDERS
              </span>

              <span className="block">
                {business.name.split(" BUILDERS")[1]}
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition hover:bg-[var(--color-secondary)]"
            aria-label="Call us"
            title="Call us"
          >
            <Phone size={17} />
          </a>

          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-white transition hover:bg-[var(--color-primary-dark)]"
            aria-label="WhatsApp us"
            title="WhatsApp us"
          >
            <MessageCircle size={17} />
          </a>

          <Link
            href="/contact"
            className="ml-1 inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition hover:bg-[var(--color-secondary)] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[var(--color-border)] bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-[var(--color-border)] py-3.5 text-sm font-medium text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-[var(--color-primary)]"
              >
                <Phone size={16} />
                Call Us
              </a>

              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center rounded-full bg-[var(--color-accent)] px-4 py-3 text-sm font-semibold text-white"
            >
              Get Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}