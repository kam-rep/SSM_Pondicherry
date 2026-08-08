"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { business } from "@/config/business";
import { navigation } from "@/config/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">

        {/* Logo / Business Name */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[var(--color-primary)] text-white">
            <span className="text-lg font-bold">S</span>
          </div>

          <div>
            <p className="text-sm font-bold tracking-[0.12em] text-[var(--color-primary-dark)]">
              {business.name}
            </p>

            <p className="hidden text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] sm:block">
              Wood • PVC • uPVC • WPC
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text)] hover:bg-[var(--color-secondary)] lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[var(--color-border)] bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-[var(--color-border)] py-4 text-base font-medium text-[var(--color-text)]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-5 rounded-full bg-[var(--color-primary)] px-5 py-3.5 text-center text-sm font-semibold text-white"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}