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
import { ScenarioData } from '@/config/pageTypes';
import { scenarios } from '@/config/scenarios';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

interface Props {
  data: ScenarioData;
}

export function ScenarioPageTemplate({ data }: Props) {
  const url = `${siteConfig.baseUrl}/scenarios/${data.slug}`;

  const related = scenarios
    .filter((s) => s.slug !== data.slug)
    .slice(0, 5)
    .map((s) => ({
      label: s.title,
      href: `/scenarios/${s.slug}`,
      description: s.persona,
    }));

  const supportLinks = [
    { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Run your own numbers with local or custom inputs.' },
    { label: 'FAQ Library', href: '/faq', description: 'Core questions on buying, renting, and break-even.' },
    { label: 'Guides', href: '/guides', description: 'In-depth explainers on every part of the decision.' },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Scenarios', href: '/scenarios' },
    { label: data.title, href: `/scenarios/${data.slug}` },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <SchemaMarkup data={buildWebPageSchema(data.meta.title, data.meta.description, url)} />
      <SchemaMarkup data={buildBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup data={buildFaqSchema(data.faq)} />

      <Breadcrumb items={breadcrumbs} />

      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-700">
        Scenario
      </p>
      <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {data.title}
      </h1>
      <p className="mb-6 text-base text-muted-foreground">{data.persona}</p>

      <BlufSummary verdict={data.bluf} />
      <TrustNotice />

      {data.sections.map((s, i) => (
        <ContentBlock key={i} heading={s.heading}>
          <p>{s.body}</p>
        </ContentBlock>
      ))}

      <ContentBlock heading="Decision factors">
        <ul className="space-y-2">
          {data.factors.map((f, i) => (
            <li key={i} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </ContentBlock>

      <section className="mb-10 rounded-lg border-l-4 border-teal-600 bg-teal-50/40 p-5">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal-800">
          Suggested verdict
        </p>
        <p className="mt-1 text-base font-medium leading-relaxed text-foreground">
          {data.verdict}
        </p>
      </section>

      <CtaBlock />

      <FaqModule items={data.faq} heading="Scenario FAQ" />

      <LimitationsNotice />

      <InternalLinks heading="Related scenarios" links={related} />
      <InternalLinks heading="Tools and context" links={supportLinks} />
    </div>
  );
}
