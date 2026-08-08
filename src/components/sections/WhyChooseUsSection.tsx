import {
  BadgeCheck,
  BriefcaseBusiness,
  House,
  Layers3,
  Ruler,
  Sparkles,
} from "lucide-react";

import { statistics } from "@/data/statistics";

const reasons = [
  {
    icon: Ruler,
    title: "Made to Measure",
    description:
      "Every solution is designed around your space, dimensions and practical requirements.",
  },
  {
    icon: Sparkles,
    title: "Modern & Traditional",
    description:
      "From clean contemporary designs to detailed traditional woodwork, we work with your preferred style.",
  },
  {
    icon: Layers3,
    title: "Multiple Materials",
    description:
      "Choose from natural wood, PVC, uPVC and WPC based on your design, durability and maintenance needs.",
  },
  {
    icon: House,
    title: "Residential Expertise",
    description:
      "Customized solutions for homes, apartments, villas and traditional residences.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Commercial Projects",
    description:
      "Practical interior solutions for shops, offices, retail spaces and other commercial environments.",
  },
  {
    icon: BadgeCheck,
    title: "Craftsmanship Focused",
    description:
      "We focus on quality workmanship, functional designs and finishes that complement your space.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[var(--color-background-dark)] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)] sm:text-sm">
              Why Choose Us
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Built Around Your Space, Style & Needs
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Whether you prefer the warmth of traditional craftsmanship or the
            clean lines of a modern interior, we create customized solutions
            for homes and businesses across Puducherry and Tamil Nadu.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div key={reason.title} className="group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--color-accent)]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid overflow-hidden rounded-[20px] border border-white/10 bg-white/5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <div
              key={stat.id}
              className={`p-6 sm:p-8 ${
                index !== statistics.length - 1
                  ? "border-b border-white/10 sm:border-r lg:border-b-0"
                  : ""
              }`}
            >
              <p className="font-serif text-3xl font-semibold text-[var(--color-accent)] sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                {stat.label}
              </p>

              <p className="mt-2 text-xs leading-5 text-white/50">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}