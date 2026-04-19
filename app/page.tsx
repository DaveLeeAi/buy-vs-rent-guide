import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Calculator, MapPin, BookOpen, ShieldCheck, FileQuestion, ChartBar as BarChart2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generatePageMetadata } from '@/lib/seo';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { buildWebPageSchema, buildOrganizationSchema } from '@/lib/schema';
import { popularStates, popularCities } from '@/config/navigation';
import { siteConfig } from '@/config/siteConfig';

export const metadata: Metadata = generatePageMetadata({
  title: 'Free Buy vs. Rent Calculator — All 50 States & 50 Cities',
  description: siteConfig.description,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        data={buildWebPageSchema(
          'BuyOrRent - Free Buy vs. Rent Calculator',
          siteConfig.description,
          siteConfig.baseUrl
        )}
      />
      <SchemaMarkup data={buildOrganizationSchema()} />

      <section className="border-b bg-gradient-to-b from-teal-50/60 to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Should You Buy or Rent?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Free, independent calculator and decision hub — all 50 states, 50 city
              pages, 20+ guides, and a full FAQ library. No ads, no affiliate
              links, no hidden agenda. Just transparent math and honest context to
              help you make a smarter housing decision.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/buy-vs-rent">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Calculator className="mr-2 h-4 w-4" />
                  Use the Calculator
                </Button>
              </Link>
              <Link href="/how-this-tool-works">
                <Button variant="outline" size="lg">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Calculator,
                title: 'Transparent Calculator',
                text: 'All assumptions visible and adjustable. All math explained in plain English. No black boxes.',
              },
              {
                icon: MapPin,
                title: '50 States + 50 Cities',
                text: 'Pre-filled local data for every state and 50 major metros. Enter your market and run in seconds.',
              },
              {
                icon: ShieldCheck,
                title: 'Independent & Unaffiliated',
                text: 'No lender partnerships, no referral fees. Editorial independence documented and maintained.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <card.icon className="h-8 w-8 text-teal-600" />
                <h2 className="mt-3 text-lg font-semibold text-foreground">
                  {card.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
            Browse by State
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Every state page includes median home price, median rent, price-to-rent ratio, effective property tax rate, and a pre-filled calculator.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {popularStates.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-lg border bg-card p-3 transition-colors hover:border-teal-300 hover:bg-teal-50/30"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-teal-700">
                  {link.label}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-teal-600" />
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <Link
              href="/buy-vs-rent"
              className="font-medium text-teal-600 hover:underline"
            >
              View all 50 state pages
            </Link>
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
            Browse by City
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            City pages include neighborhood-level context, buyer and renter profiles, and a calculator pre-filled with local market data.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {popularCities.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-lg border bg-card p-3 transition-colors hover:border-teal-300 hover:bg-teal-50/30"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-teal-700">
                  {link.label}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-teal-600" />
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <Link
              href="/buy-vs-rent"
              className="font-medium text-teal-600 hover:underline"
            >
              View all 50 city pages
            </Link>
            {' '}— every major metro with local data and a pre-filled calculator.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
            Decision tools and resources
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Beyond the calculator — guides, scenario analysis, market comparisons, and a complete FAQ library.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Guide Library',
                href: '/guides',
                desc: '20+ guides on every part of the buy-vs-rent decision, from price-to-rent ratios to first-time buyer programs.',
                icon: BookOpen,
              },
              {
                title: 'Scenario Explorer',
                href: '/scenarios',
                desc: 'Find your situation — relocating, short stay, first-time buyer — and get tailored guidance and calculator inputs.',
                icon: FileQuestion,
              },
              {
                title: 'Market Comparisons',
                href: '/compare',
                desc: 'State-vs-state and city-vs-city comparisons with side-by-side data on prices, ratios, and tax burdens.',
                icon: BarChart2,
              },
              {
                title: 'FAQ Library',
                href: '/faq',
                desc: '25+ answered questions on buying, renting, mortgages, and how to read calculator output. Topic clusters on each key area.',
                icon: FileText,
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-lg border bg-card p-5 transition-colors hover:border-teal-300 hover:bg-teal-50/30"
              >
                <item.icon className="h-5 w-5 text-teal-600" />
                <h3 className="mt-2 font-semibold text-foreground group-hover:text-teal-700">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
            How the calculator is built
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Every assumption is visible, every formula is documented, and every limitation is disclosed. Nothing is proprietary or hidden.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: 'Methodology', href: '/methodology', description: 'Formulas, what is included, what is excluded.' },
              { label: 'Assumptions', href: '/assumptions', description: 'Every default value and the reasoning behind it.' },
              { label: 'Formula Glossary', href: '/formula-glossary', description: 'Every term the calculator uses, defined plainly.' },
              { label: 'Data Sources', href: '/data-sources', description: 'Where state and city figures come from.' },
              { label: 'Limitations', href: '/limitations', description: 'What the tool cannot know or predict.' },
              { label: 'How This Tool Works', href: '/how-this-tool-works', description: 'Step-by-step walkthrough of the calculator logic.' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-colors hover:border-teal-300 hover:bg-teal-50/30"
              >
                <div>
                  <p className="font-medium text-foreground group-hover:text-teal-700">
                    {link.label}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{link.description}</p>
                </div>
                <ArrowRight className="ml-3 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-teal-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            Step-by-step guides
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Buying Guide',
                href: '/buying-guide',
                desc: 'Step-by-step guide to purchasing a home, from pre-approval to close.',
              },
              {
                title: 'Renting Guide',
                href: '/renting-guide',
                desc: 'What to know before signing a lease, including lease terms and tenant rights.',
              },
              {
                title: 'First-Time Buyer Guide',
                href: '/first-time-home-buyer-guide',
                desc: 'Programs, down payment assistance, and what first-timers often get wrong.',
              },
              {
                title: 'Moving Costs Guide',
                href: '/moving-costs-guide',
                desc: 'Budget for the costs people forget — moving, furnishing, repairs.',
              },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-lg border bg-card p-5 transition-colors hover:border-teal-300 hover:bg-teal-50/30"
              >
                <BookOpen className="h-5 w-5 text-teal-600" />
                <h3 className="mt-2 font-semibold text-foreground group-hover:text-teal-700">
                  {guide.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{guide.desc}</p>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <Link href="/guides" className="font-medium text-teal-600 hover:underline">
              Browse all 20+ guides in the library
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
