import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo';
import { comparisons, getComparison } from '@/config/comparisons';
import { ComparisonPageTemplate } from '@/components/templates/ComparisonPageTemplate';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const data = getComparison(params.slug);
  if (!data) return {};
  return generatePageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: `/compare/${data.slug}`,
  });
}

export default function ComparePage({ params }: Props) {
  const data = getComparison(params.slug);
  if (!data) notFound();
  return <ComparisonPageTemplate data={data} />;
}
