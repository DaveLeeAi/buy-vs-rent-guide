import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo';
import { costs, getCost } from '@/config/costs';
import { GuidePageTemplate } from '@/components/templates/GuidePageTemplate';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return costs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const data = getCost(params.slug);
  if (!data) return {};
  return generatePageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: `/costs/${data.slug}`,
  });
}

export default function CostsPage({ params }: Props) {
  const data = getCost(params.slug);
  if (!data) notFound();

  const related = costs
    .filter((c) => c.slug !== data.slug)
    .slice(0, 6)
    .map((c) => ({
      label: c.title,
      href: `/costs/${c.slug}`,
      description: c.bluf.slice(0, 90) + '...',
    }));
  related.push({ label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Run your numbers.' });

  return <GuidePageTemplate data={data} basePath="/costs" sectionLabel="Costs" related={related} />;
}
