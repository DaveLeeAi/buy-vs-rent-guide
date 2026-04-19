import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo';
import { markets, getMarket } from '@/config/markets';
import { GuidePageTemplate } from '@/components/templates/GuidePageTemplate';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const data = getMarket(params.slug);
  if (!data) return {};
  return generatePageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: `/markets/${data.slug}`,
  });
}

export default function MarketsPage({ params }: Props) {
  const data = getMarket(params.slug);
  if (!data) notFound();

  const related = markets
    .filter((m) => m.slug !== data.slug)
    .slice(0, 6)
    .map((m) => ({
      label: m.title,
      href: `/markets/${m.slug}`,
      description: m.bluf.slice(0, 90) + '...',
    }));
  related.push({ label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Run your numbers.' });

  return <GuidePageTemplate data={data} basePath="/markets" sectionLabel="Markets" related={related} />;
}
