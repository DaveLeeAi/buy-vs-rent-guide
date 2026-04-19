import Link from 'next/link';
import { Chrome as Home } from 'lucide-react';
import { footerSections, popularStates, popularCities } from '@/config/navigation';
import { siteConfig } from '@/config/siteConfig';

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 border-t pt-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Popular States
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {popularStates.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              Popular Cities
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {popularCities.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            All assumptions and formulas documented:{' '}
            <Link href="/methodology" className="underline hover:text-foreground">Methodology</Link>
            {' · '}
            <Link href="/assumptions" className="underline hover:text-foreground">Assumptions</Link>
            {' · '}
            <Link href="/data-sources" className="underline hover:text-foreground">Data sources</Link>
            {' · '}
            <Link href="/formula-glossary" className="underline hover:text-foreground">Formula glossary</Link>
            {' · '}
            <Link href="/limitations" className="underline hover:text-foreground">Limitations</Link>
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 border-t pt-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-medium">{siteConfig.name}</span>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Independent and unaffiliated. Not financial advice. See our{' '}
            <Link href="/disclaimer" className="underline hover:text-foreground">
              Disclaimer
            </Link>{' '}
            and{' '}
            <Link href="/editorial-policy" className="underline hover:text-foreground">
              Editorial Policy
            </Link>
            .
          </p>
          <p className="text-xs text-muted-foreground">
            Last updated: {siteConfig.lastUpdated}
          </p>
        </div>
      </div>
    </footer>
  );
}
