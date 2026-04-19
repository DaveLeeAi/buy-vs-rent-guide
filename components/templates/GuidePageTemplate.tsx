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
import { GuideData } from '@/config/pageTypes';
import { CircleCheck } from 'lucide-react';

interface Props {
  data: GuideData;
  basePath: string;
  sectionLabel: string;
  related: { label: string; href: string; description?: string }[];
}

export function GuidePageTemplate({ data, basePath, sectionLabel, related }: Props) {
  const url = `${siteConfig.baseUrl}${basePath}/${data.slug}`;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: sectionLabel, href: basePath },
    { label: data.title, href: `${basePath}/${data.slug}` },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <SchemaMarkup data={buildWebPageSchema(data.meta.title, data.meta.description, url)} />
      <SchemaMarkup data={buildBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup data={buildFaqSchema(data.faq)} />

      <Breadcrumb items={breadcrumbs} />

      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-700">
        {sectionLabel}
      </p>
      <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {data.title}
      </h1>

      <BlufSummary verdict={data.bluf} />
      <TrustNotice />

      <section className="mb-8 rounded-lg border bg-muted/20 p-5">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Key Points
        </p>
        <ul className="space-y-2 text-sm">
          {data.tldr.map((t, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {data.sections.map((s, i) => (
        <ContentBlock key={i} heading={s.heading}>
          <p>{s.body}</p>
        </ContentBlock>
      ))}

      <ContentBlock heading="Key takeaways">
        <ul className="space-y-2">
          {data.keyTakeaways.map((t, i) => (
            <li key={i} className="flex gap-2">
              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </ContentBlock>

      <CtaBlock />

      <FaqModule items={data.faq} heading="FAQ" />

      <LimitationsNotice />

      <InternalLinks heading="Related guides and tools" links={related} />
    </div>
  );
}
