import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface InternalLinksProps {
  heading?: string;
  links: { label: string; href: string; description?: string }[];
}

export function InternalLinks({
  heading = 'Related Pages',
  links,
}: InternalLinksProps) {
  if (links.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
        {heading}
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-colors hover:border-teal-300 hover:bg-teal-50/30"
          >
            <div>
              <p className="font-medium text-foreground group-hover:text-teal-700">
                {link.label}
              </p>
              {link.description && (
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {link.description}
                </p>
              )}
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-teal-600" />
          </Link>
        ))}
      </div>
    </section>
  );
}
