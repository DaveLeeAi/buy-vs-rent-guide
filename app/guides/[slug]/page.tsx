import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo';
import { guides, getGuide } from '@/config/guides';
import { GuidePageTemplate } from '@/components/templates/GuidePageTemplate';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const data = getGuide(params.slug);
  if (!data) return {};
  return generatePageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: `/guides/${data.slug}`,
  });
}

export default function GuidePage({ params }: Props) {
  const data = getGuide(params.slug);
  if (!data) notFound();

  const related = guides
    .filter((g) => g.slug !== data.slug)
    .slice(0, 5)
    .map((g) => ({
      label: g.title,
      href: `/guides/${g.slug}`,
      description: g.bluf.slice(0, 90) + '...',
    }));
  related.push(
    { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent', description: 'Run your numbers with local defaults.' },
    { label: 'FAQ Library', href: '/faq', description: 'Core questions on buying, renting, and break-even.' },
    { label: 'Methodology', href: '/methodology', description: 'How the calculator works and what it excludes.' },
    { label: 'Scenarios', href: '/scenarios', description: 'Pre-built buyer and renter profile comparisons.' },
  );

  return <GuidePageTemplate data={data} basePath="/guides" sectionLabel="Guides" related={related} />;
}
