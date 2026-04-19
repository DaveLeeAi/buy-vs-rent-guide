import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
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
import { StateConfig } from '@/config/types';
import { getCitiesByState } from '@/config/cities';
import { siteConfig } from '@/config/siteConfig';
import {
  getStateNarrative,
  relatedScenariosForCharacter,
  relatedGuidesForCharacter,
  relatedComparisonsForState,
  deriveStateFaq,
} from '@/lib/localNarrative';
import { UserRound, TriangleAlert as AlertTriangle, Building2, Timer, CircleCheck } from 'lucide-react';

interface StatePageTemplateProps {
  state: StateConfig;
}

export function StatePageTemplate({ state }: StatePageTemplateProps) {
  const narrative = getStateNarrative(state);
  const stateCities = getCitiesByState(state.slug);
  const url = `${siteConfig.baseUrl}/buy-vs-rent/${state.slug}`;

  const faqItems = deriveStateFaq(state, narrative.character);
  const scenarioLinks = relatedScenariosForCharacter(narrative.character);
  const guideLinks = relatedGuidesForCharacter(narrative.character);
  const comparisonLinks = relatedComparisonsForState(state.slug);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Buy vs. Rent', href: '/buy-vs-rent' },
    { label: state.name, href: `/buy-vs-rent/${state.slug}` },
  ];

  const topCityLinks = stateCities.slice(0, 6).map((c) => ({
    label: `${c.name}, ${state.name}`,
    href: `/buy-vs-rent/${state.slug}/${c.slug}`,
    description: `Median home $${c.medianHomePrice.toLocaleString()} · rent $${c.medianMonthlyRent.toLocaleString()}/mo`,
  }));

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <SchemaMarkup data={buildWebPageSchema(`Buy vs. Rent in ${state.name}`, narrative.interpretation.slice(0, 160), url)} />
      <SchemaMarkup data={buildBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup data={buildFaqSchema(faqItems)} />

      <Breadcrumb items={breadcrumbs} />

      <section className="mb-8 rounded-xl border bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-700">
          {state.name} · {state.abbreviation}
        </p>
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Buy vs. Rent in {state.name}
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          {narrative.interpretation}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {narrative.tags.map((t) => (
            <span key={t} className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800">
              {t.replace(/-/g, ' ')}
            </span>
          ))}
        </div>
      </section>

      <BlufSummary verdict={state.blufVerdict} />
      <TrustNotice />

      <LocalDataPanel
        medianHomePrice={state.medianHomePrice}
        medianMonthlyRent={state.medianMonthlyRent}
        priceToRentRatio={state.priceToRentRatio}
        propertyTaxRate={state.propertyTaxRate}
        avgAnnualAppreciation={state.avgAnnualAppreciation}
        keyFacts={state.keyFacts}
      />

      <ContentBlock heading={`How to read ${state.name}'s numbers`}>
        <p>{narrative.interpretation}</p>
      </ContentBlock>

      <section className="mb-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border bg-card p-5">
          <div className="mb-2 flex items-center gap-2 text-teal-700">
            <UserRound className="h-4 w-4" />
            <p className="text-xs font-semibold uppercase tracking-wider">Who buying favors</p>
          </div>
          <h3 className="mb-3 text-lg font-bold">Buying tends to favor</h3>
          <ul className="space-y-2 text-sm">
            {narrative.buyerProfile.map((b, i) => (
              <li key={i} className="flex gap-2">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border bg-card p-5">
          <div className="mb-2 flex items-center gap-2 text-slate-700">
            <UserRound className="h-4 w-4" />
            <p className="text-xs font-semibold uppercase tracking-wider">Who renting favors</p>
          </div>
          <h3 className="mb-3 text-lg font-bold">Renting tends to favor</h3>
          <ul className="space-y-2 text-sm">
            {narrative.renterProfile.map((r, i) => (
              <li key={i} className="flex gap-2">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-10 rounded-lg border-l-4 border-amber-500 bg-amber-50/40 p-5">
        <div className="mb-2 flex items-center gap-2 text-amber-800">
          <AlertTriangle className="h-4 w-4" />
          <p className="text-xs font-semibold uppercase tracking-wider">Major caveats in {state.name}</p>
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

      <ContentBlock heading={`Break-even in ${state.name}`}>
        <div className="flex gap-3">
          <Timer className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
          <p>{narrative.breakEvenNarrative}</p>
        </div>
      </ContentBlock>

      <CalculatorShell
        defaultOverrides={{
          homePrice: state.medianHomePrice,
          monthlyRent: state.medianMonthlyRent,
          propertyTaxRate: state.propertyTaxRate,
          homeAppreciationRate: state.avgAnnualAppreciation,
        }}
      />

      {topCityLinks.length > 0 && (
        <section className="mb-10">
          <div className="mb-3 flex items-center gap-2 text-teal-700">
            <Building2 className="h-4 w-4" />
            <p className="text-xs font-semibold uppercase tracking-wider">Top cities in {state.name}</p>
          </div>
          <InternalLinks heading={`Cities in ${state.name}`} links={topCityLinks} />
        </section>
      )}

      <CtaBlock
        heading={`Model your ${state.name} scenario`}
        description={`Start from ${state.name}'s median values and adjust for your own down payment, rate, and horizon.`}
      />

      <FaqModule items={faqItems} heading={`${state.name} FAQ`} />

      <div className="mb-10">
        <LimitationsNotice />
      </div>

      <InternalLinks heading={`Comparisons involving ${state.name}`} links={comparisonLinks} />
      <InternalLinks heading={`Scenarios relevant to ${state.name}`} links={scenarioLinks} />
      <InternalLinks heading="Useful guides for this market" links={guideLinks} />
      <InternalLinks
        heading="FAQ topics worth reading for this state"
        links={[
          { label: 'Property tax FAQ', href: '/faq/property-tax-faq', description: 'How assessments, appeals, and exemptions change your real tax bill.' },
          { label: 'Break-even FAQ', href: '/faq/break-even-faq', description: 'What drives the year where buying starts to beat renting.' },
          { label: 'Mortgage rate FAQ', href: '/faq/mortgage-rate-faq', description: 'How much rates move break-even in this market.' },
          { label: 'Insurance FAQ', href: '/faq/insurance-faq', description: 'Coverage, premiums, and high-risk-area carrier pullback.' },
        ]}
      />
      <InternalLinks
        heading="Trust and methodology"
        links={[
          { label: 'Methodology', href: '/methodology', description: 'How this state page and the calculator work.' },
          { label: 'Assumptions', href: '/assumptions', description: 'Default inputs used on this page.' },
          { label: 'Limitations', href: '/limitations', description: 'What the model cannot know about your address.' },
          { label: 'Data sources', href: '/data-sources', description: 'Where market data comes from and how it is refreshed.' },
        ]}
      />
    </div>
  );
}
