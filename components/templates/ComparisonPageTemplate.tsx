import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BlufSummary } from '@/components/content/BlufSummary';
import { TrustNotice } from '@/components/content/TrustNotice';
import { ContentBlock } from '@/components/content/ContentBlock';
import { FaqModule } from '@/components/content/FaqModule';
import { InternalLinks } from '@/components/content/InternalLinks';
import { CtaBlock } from '@/components/content/CtaBlock';
import { LimitationsNotice } from '@/components/content/LimitationsNotice';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import {
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from '@/lib/schema';
import { siteConfig } from '@/config/siteConfig';
import { ComparisonData } from '@/config/pageTypes';
import { comparisons } from '@/config/comparisons';

interface Props {
  data: ComparisonData;
}

export function ComparisonPageTemplate({ data }: Props) {
  const url = `${siteConfig.baseUrl}/compare/${data.slug}`;

  const related = comparisons
    .filter((c) => c.slug !== data.slug)
    .slice(0, 6)
    .map((c) => ({
      label: c.title.replace(': Buy or Rent?', ''),
      href: `/compare/${c.slug}`,
      description: c.subtitle,
    }));

  related.push(
    { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Run your own numbers.' },
    { label: 'Methodology', href: '/methodology', description: 'How we calculate.' }
  );

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Compare', href: '/compare' },
    { label: data.title, href: `/compare/${data.slug}` },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <SchemaMarkup data={buildWebPageSchema(data.meta.title, data.meta.description, url)} />
      <SchemaMarkup data={buildBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup data={buildFaqSchema(data.faq)} />

      <Breadcrumb items={breadcrumbs} />

      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-700">
        {data.kind.replace(/-/g, ' ')}
      </p>
      <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {data.title}
      </h1>
      <p className="mb-6 text-base text-muted-foreground">{data.subtitle}</p>

      <BlufSummary verdict={data.bluf} />
      <TrustNotice />

      <section className="mb-10 grid gap-4 sm:grid-cols-2">
        {[data.sideA, data.sideB].map((side, idx) => (
          <div
            key={idx}
            className="rounded-lg border bg-card p-5"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {idx === 0 ? 'Side A' : 'Side B'}
            </p>
            <h3 className="mb-3 text-xl font-bold text-foreground">{side.name}</h3>
            <ul className="space-y-1 text-sm text-foreground/90">
              {side.highlights.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-teal-600">-</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <ContentBlock heading="Side-by-side metrics">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="p-3 text-left font-semibold">Metric</th>
                <th className="p-3 text-left font-semibold">{data.sideA.name}</th>
                <th className="p-3 text-left font-semibold">{data.sideB.name}</th>
              </tr>
            </thead>
            <tbody>
              {data.metricsTable.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="p-3 font-medium">{row.label}</td>
                  <td className="p-3">{row.a}</td>
                  <td className="p-3">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentBlock>

      {data.body.map((p, i) => (
        <ContentBlock key={i} heading={i === 0 ? 'Analysis' : 'More context'}>
          <p>{p}</p>
        </ContentBlock>
      ))}

      <CtaBlock />

      <FaqModule items={data.faq} heading="FAQ" />

      <LimitationsNotice />

      <InternalLinks heading="Related comparisons" links={related} />
    </div>
  );
}
