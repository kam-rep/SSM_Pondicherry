import { business } from "@/config/business";

export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-[var(--color-secondary)] px-4 py-16 sm:px-6 lg:min-h-[calc(100vh-5rem)] lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-sm">
          {business.name}
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-7xl">
          {business.hero.title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg sm:leading-8">
          {business.hero.subtitle}
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href={business.hero.primaryButton.href}
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
          >
            {business.hero.primaryButton.label}
          </a>

          <a
            href={business.hero.secondaryButton.href}
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-white"
          >
            {business.hero.secondaryButton.label}
          </a>
        </div>
      </div>
    </section>
  );
}



// import { business } from "@/config/business";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-white">
//       <section className="flex min-h-screen items-center justify-center px-6">
//         <div className="text-center">
//           <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#6b4f3a]">
//             {business.name}
//           </p>

//           <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#222222] sm:text-5xl lg:text-7xl">
//             {business.hero.title}
//           </h1>

//           <p className="mx-auto mt-6 max-w-2xl text-base text-[#6b6b6b] sm:text-lg">
//             {business.hero.subtitle}
//           </p>

//           <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
//             <a
//               href={business.hero.primaryButton.href}
//               className="rounded-full bg-[#6b4f3a] px-7 py-3.5 font-medium text-white transition hover:bg-[#4a3527]"
//             >
//               {business.hero.primaryButton.label}
//             </a>

//             <a
//               href={business.hero.secondaryButton.href}
//               className="rounded-full border border-[#6b4f3a] px-7 py-3.5 font-medium text-[#6b4f3a] transition hover:bg-[#6b4f3a] hover:text-white"
//             >
//               {business.hero.secondaryButton.label}
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }