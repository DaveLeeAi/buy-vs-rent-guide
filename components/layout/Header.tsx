'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Chrome as Home, Menu, X } from 'lucide-react';
import { primaryNav } from '@/config/navigation';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <Home className="h-5 w-5 text-teal-600" />
          <span className="text-lg">BuyOrRent</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/buy-vs-rent">
            <Button size="sm" className="ml-2 bg-teal-600 hover:bg-teal-700">
              Use Calculator
            </Button>
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/buy-vs-rent" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="mt-2 w-full bg-teal-600 hover:bg-teal-700">
                Use Calculator
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
