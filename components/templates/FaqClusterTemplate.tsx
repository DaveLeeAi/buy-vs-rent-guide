import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { TrustNotice } from '@/components/content/TrustNotice';
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
import { FaqClusterData } from '@/config/pageTypes';
import { faqClusters } from '@/config/faqClusters';

interface Props {
  data: FaqClusterData;
}

export function FaqClusterTemplate({ data }: Props) {
  const url = `${siteConfig.baseUrl}/faq/${data.slug}`;

  const allFaqs = data.topics.flatMap((t) => t.items);

  const faqRelated = faqClusters
    .filter((c) => c.slug !== data.slug)
    .slice(0, 5)
    .map((c) => ({
      label: c.title,
      href: `/faq/${c.slug}`,
      description: c.intro.slice(0, 80) + '...',
    }));

  const supportRelated = [
    { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Run your own numbers with local defaults.' },
    { label: 'Methodology', href: '/methodology', description: 'How the calculator actually works.' },
    { label: 'Assumptions', href: '/assumptions', description: 'Default inputs and why we chose them.' },
    { label: 'Limitations', href: '/limitations', description: 'What the tool cannot know or predict.' },
    { label: 'Guides', href: '/guides', description: 'Deeper explainers on buying and renting topics.' },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
    { label: data.title, href: `/faq/${data.slug}` },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <SchemaMarkup data={buildWebPageSchema(data.meta.title, data.meta.description, url)} />
      <SchemaMarkup data={buildBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup data={buildFaqSchema(allFaqs)} />

      <Breadcrumb items={breadcrumbs} />

      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-700">
        FAQ cluster
      </p>
      <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {data.title}
      </h1>
      <p className="mb-8 text-base leading-relaxed text-muted-foreground">{data.intro}</p>

      <TrustNotice />

      {data.topics.map((topic, i) => (
        <FaqModule key={i} items={topic.items} heading={topic.heading} />
      ))}

      <CtaBlock />
      <LimitationsNotice />
      <InternalLinks heading="More FAQ clusters" links={faqRelated} />
      <InternalLinks heading="Calculator and trust pages" links={supportRelated} />
    </div>
  );
}
