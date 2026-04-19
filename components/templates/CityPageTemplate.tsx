import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { TrustNotice } from '@/components/content/TrustNotice';
import { LimitationsNotice } from '@/components/content/LimitationsNotice';
import { LocalDataPanel } from '@/components/content/LocalDataPanel';
import { ContentBlock } from '@/components/content/ContentBlock';
import { FaqModule } from '@/components/content/FaqModule';
import { InternalLinks } from '@/components/content/InternalLinks';
import { CtaBlock } from '@/components/content/CtaBlock';
import { CalculatorShell } from '@/components/calculator/CalculatorShell';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import {
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from '@/lib/schema';
import { CityConfig } from '@/config/types';
import { getCitiesByState } from '@/config/cities';
import { siteConfig } from '@/config/siteConfig';
import {
  getCityNarrative,
  relatedScenariosForCharacter,
  relatedGuidesForCharacter,
  relatedComparisonsForCity,
  deriveCityFaq,
} from '@/lib/localNarrative';
import { MapPin, Users, Gauge, Timer, TriangleAlert as AlertTriangle } from 'lucide-react';
import Link from 'next/link';

interface CityPageTemplateProps {
  city: CityConfig;
}

function ratioDescription(r: number): { label: string; tone: string; body: string } {
  if (r < 15) {
    return {
      label: 'Strongly favors buying',
      tone: 'bg-emerald-50 text-emerald-900 border-emerald-300',
      body: 'A ratio under 15 indicates home prices are low relative to rent. Monthly ownership costs are typically close to or below rent for a comparable property.',
    };
  }
  if (r < 18) {
    return {
      label: 'Favors buying for stable households',
      tone: 'bg-teal-50 text-teal-900 border-teal-300',
      body: 'A ratio between 15 and 18 is moderately buyer-friendly. Break-even typically arrives at 4-6 years for stable buyers.',
    };
  }
  if (r < 22) {
    return {
      label: 'Mixed — depends on tenure',
      tone: 'bg-amber-50 text-amber-900 border-amber-300',
      body: 'A ratio between 18 and 22 is mixed. Buyers need 6-8 years of tenure and stable income for ownership to beat renting.',
    };
  }
  return {
    label: 'Favors renting for short and mid stays',
    tone: 'bg-rose-50 text-rose-900 border-rose-300',
    body: 'A ratio above 22 signals premium pricing. Renting and investing the opportunity-cost capital is often competitive for 8+ years.',
  };
}

export function CityPageTemplate({ city }: CityPageTemplateProps) {
  const narrative = getCityNarrative(city);
  const siblings = getCitiesByState(city.stateSlug).filter((c) => c.slug !== city.slug);
  const url = `${siteConfig.baseUrl}/buy-vs-rent/${city.stateSlug}/${city.slug}`;

  const faqItems = deriveCityFaq(city, narrative.character);
  const scenarioLinks = relatedScenariosForCharacter(narrative.character);
  const guideLinks = relatedGuidesForCharacter(narrative.character);
  const comparisonLinks = relatedComparisonsForCity(city.slug, city.stateSlug);

  const ratio = ratioDescription(city.priceToRentRatio);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Buy vs. Rent', href: '/buy-vs-rent' },
    { label: city.stateName, href: `/buy-vs-rent/${city.stateSlug}` },
    { label: city.name, href: `/buy-vs-rent/${city.stateSlug}/${city.slug}` },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <SchemaMarkup data={buildWebPageSchema(`Buy vs. Rent in ${city.name}, ${city.stateName}`, narrative.interpretation.slice(0, 160), url)} />
      <SchemaMarkup data={buildBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup data={buildFaqSchema(faqItems)} />

      <Breadcrumb items={breadcrumbs} />

      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 text-teal-700" />
        <span>
          {city.name} is in{' '}
          <Link href={`/buy-vs-rent/${city.stateSlug}`} className="font-medium text-teal-700 hover:underline">
            {city.stateName}
          </Link>
        </span>
      </div>

      <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Buy vs. Rent in {city.name}
      </h1>

      <section className="mb-8 rounded-xl border-l-4 border-teal-600 bg-teal-50/50 p-5">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
          The {city.name} bottom line
        </p>
        <p className="text-base font-medium leading-relaxed text-foreground">
          {city.blufVerdict}
        </p>
        {city.neighborhoodContext && (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {city.neighborhoodContext}
          </p>
        )}
      </section>

      <TrustNotice />

      <LocalDataPanel
        medianHomePrice={city.medianHomePrice}
        medianMonthlyRent={city.medianMonthlyRent}
        priceToRentRatio={city.priceToRentRatio}
        propertyTaxRate={city.propertyTaxRate}
        avgAnnualAppreciation={city.avgAnnualAppreciation}
        keyFacts={city.keyFacts}
      />

      <section className={`mb-10 rounded-lg border p-5 ${ratio.tone}`}>
        <div className="mb-2 flex items-center gap-2">
          <Gauge className="h-4 w-4" />
          <p className="text-xs font-semibold uppercase tracking-wider">
            Price-to-rent: {city.priceToRentRatio} — {ratio.label}
          </p>
        </div>
        <p className="text-sm leading-relaxed">{ratio.body}</p>
      </section>

      <ContentBlock heading={`${city.name} market interpretation`}>
        <p>{narrative.interpretation}</p>
      </ContentBlock>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">Buyer and renter profiles in {city.name}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-5">
            <div className="mb-2 flex items-center gap-2 text-teal-700">
              <Users className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-wider">Local buyer profile</p>
            </div>
            <ul className="space-y-2 text-sm">
              {narrative.buyerProfile.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-teal-600">&bull;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-5">
            <div className="mb-2 flex items-center gap-2 text-slate-700">
              <Users className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-wider">Local renter profile</p>
            </div>
            <ul className="space-y-2 text-sm">
              {narrative.renterProfile.map((r, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-slate-600">&bull;</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {city.neighborhoodContext && (
        <ContentBlock heading={`Neighborhood and metro variation in ${city.name}`}>
          <div className="flex gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
            <p>{city.neighborhoodContext}</p>
          </div>
        </ContentBlock>
      )}

      <section className="mb-10 rounded-lg border-l-4 border-amber-500 bg-amber-50/40 p-5">
        <div className="mb-2 flex items-center gap-2 text-amber-800">
          <AlertTriangle className="h-4 w-4" />
          <p className="text-xs font-semibold uppercase tracking-wider">Caveats specific to {city.name}</p>
        </div>
        <ul className="space-y-2 text-sm">
          {narrative.caveats.map((c, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-amber-700">-</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10 rounded-lg border bg-slate-50/40 p-5">
        <div className="mb-2 flex items-center gap-2 text-slate-700">
          <Timer className="h-4 w-4" />
          <p className="text-xs font-semibold uppercase tracking-wider">Break-even in {city.name}</p>
        </div>
        <p className="text-base leading-relaxed text-foreground">
          {narrative.breakEvenNarrative}
        </p>
      </section>

      <CalculatorShell
        defaultOverrides={{
          homePrice: city.medianHomePrice,
          monthlyRent: city.medianMonthlyRent,
          propertyTaxRate: city.propertyTaxRate,
          homeAppreciationRate: city.avgAnnualAppreciation,
        }}
      />

      <CtaBlock
        heading={`Run the ${city.name} calculator with your own inputs`}
        description={`Adjust down payment, rate, and tenure to see break-even specific to your ${city.name} plan.`}
      />

      <FaqModule items={faqItems} heading={`${city.name} FAQ`} />

      <LimitationsNotice />

      <InternalLinks
        heading={`Back to ${city.stateName} state page`}
        links={[
          {
            label: `${city.stateName} statewide overview`,
            href: `/buy-vs-rent/${city.stateSlug}`,
            description: `See the full ${city.stateName} picture and other cities in the state.`,
          },
        ]}
      />

      {siblings.length > 0 && (
        <InternalLinks
          heading={`Other cities in ${city.stateName}`}
          links={siblings.slice(0, 6).map((c) => ({
            label: c.name,
            href: `/buy-vs-rent/${c.stateSlug}/${c.slug}`,
            description: `Median home $${c.medianHomePrice.toLocaleString()}`,
          }))}
        />
      )}

      <InternalLinks heading={`${city.name} comparison pages`} links={comparisonLinks} />
      <InternalLinks heading={`Scenarios relevant in ${city.name}`} links={scenarioLinks} />
      <InternalLinks heading="Guides useful for this market" links={guideLinks} />
      <InternalLinks
        heading="FAQ topics worth reading for this city"
        links={[
          { label: 'Buy vs. rent FAQ', href: '/faq/buy-vs-rent-faq', description: 'The foundational decision questions for any market.' },
          { label: 'Break-even FAQ', href: '/faq/break-even-faq', description: `How the break-even year moves with rate, rent growth, and appreciation.` },
          { label: 'Closing cost FAQ', href: '/faq/closing-cost-faq', description: 'What closing costs actually include at purchase.' },
          { label: 'First-time buyer FAQ', href: '/faq/first-time-buyer-faq', description: 'Common first-time buyer questions for this market.' },
        ]}
      />
      <InternalLinks
        heading="How we built this city page"
        links={[
          { label: 'Methodology', href: '/methodology', description: `How the calculator and the ${city.name} narrative are built.` },
          { label: 'Data sources', href: '/data-sources', description: 'Where the local median price, rent, and tax come from.' },
          { label: 'Assumptions', href: '/assumptions', description: 'Default inputs applied to this city page.' },
          { label: 'Limitations', href: '/limitations', description: 'What the model cannot know about your exact block or building.' },
        ]}
      />
    </div>
  );
}
