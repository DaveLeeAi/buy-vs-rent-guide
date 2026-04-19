import Link from 'next/link';
import { Calculator, ArrowRight } from 'lucide-react';

interface CtaBlockProps {
  heading?: string;
  description?: string;
  href?: string;
  label?: string;
}

export function CtaBlock({
  heading = 'Run the numbers for your situation',
  description = 'Compare the 30-year cost of buying versus renting with transparent inputs, local data, and a clear break-even point.',
  href = '/buy-vs-rent',
  label = 'Open the Buy vs. Rent Calculator',
}: CtaBlockProps) {
  return (
    <section className="mb-10 rounded-xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <Calculator className="h-5 w-5 text-teal-700" />
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
              Decision Tool
            </span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {heading}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-800"
        >
          {label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
