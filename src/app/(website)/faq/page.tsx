import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const faqs = [
{
question: "What types of work do you provide?",
answer:
"We provide customized wood, PVC, uPVC and WPC solutions for residential, commercial, retail and office spaces. Our work includes doors, windows, kitchen cabinets, TV units, wardrobes, storage solutions, custom furniture and interiors.",
},
{
question: "Do you provide customized designs?",
answer:
"Yes. Our solutions can be customized according to your available space, measurements, preferred style, material requirements and functional needs.",
},
{
question: "What materials do you work with?",
answer:
"We work with Natural Wood, PVC, uPVC and WPC. The appropriate material can be selected based on the application, appearance, durability, maintenance requirements and budget.",
},
{
question: "Do you work on both residential and commercial projects?",
answer:
"Yes. We work on residential homes as well as offices, retail shops, commercial spaces and other projects requiring customized interior or exterior solutions.",
},
{
question: "Do you provide wooden entrance doors?",
answer:
"Yes. We provide customized wooden entrance doors, including traditional and modern designs, based on the architectural style and requirements of the property.",
},
{
question: "Do you provide uPVC windows?",
answer:
"Yes. We provide customized uPVC window solutions along with other window options depending on the requirements of the project.",
},
{
question: "Can you design kitchen cabinets according to my space?",
answer:
"Yes. Kitchen cabinets can be designed around the available dimensions, storage requirements, preferred layout, style and material selection.",
},
{
question: "Do you provide TV units and wardrobes?",
answer:
"Yes. We provide customized TV units, feature walls, wardrobes, shelves and other storage solutions designed around the available space.",
},
{
question: "Which areas do you currently serve?",
answer:
"Our primary service areas are Puducherry and Tamil Nadu. Please contact us to discuss your project location and requirements.",
},
{
question: "How can I request a quotation?",
answer:
"You can contact us through phone or WhatsApp and share your project requirements. Providing details such as the type of work, approximate dimensions, preferred material and location will help us understand your requirement.",
},
];

export default function FAQPage() {
return ( <main>
{/* Hero */} <section className="border-b border-[var(--color-border)] bg-[var(--color-secondary)] py-20 sm:py-24"> <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"> <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
Frequently Asked Questions </p>

      <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
        Questions About Our Work
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
        Find answers to some of the common questions about our materials,
        services, customization and project process.
      </p>
    </div>
  </section>

  {/* FAQ List */}
  <section className="py-20 sm:py-24">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-small)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 sm:p-7">
              <h2 className="font-serif text-lg font-semibold text-[var(--color-text)] sm:text-xl">
                {faq.question}
              </h2>

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] transition group-open:rotate-180">
                <ChevronDown size={18} />
              </span>
            </summary>

            <div className="px-6 pb-6 sm:px-7 sm:pb-7">
              <p className="border-t border-[var(--color-border)] pt-5 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="border-t border-[var(--color-border)] bg-[var(--color-secondary)] py-16 sm:py-20">
    <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
        Still Have Questions?
      </p>

      <h2 className="mt-3 font-serif text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
        Let&apos;s Discuss Your Project
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
        Contact us directly and tell us what you are planning. We&apos;ll
        help you understand the available options.
      </p>

      <Link
        href="/contact"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
      >
        Contact Us
        <ArrowUpRight size={17} />
      </Link>
    </div>
  </section>
</main>

);
}
