import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo';
import { faqClusters, getFaqCluster } from '@/config/faqClusters';
import { FaqClusterTemplate } from '@/components/templates/FaqClusterTemplate';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return faqClusters.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const data = getFaqCluster(params.slug);
  if (!data) return {};
  return generatePageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: `/faq/${data.slug}`,
  });
}

export default function FaqClusterPage({ params }: Props) {
  const data = getFaqCluster(params.slug);
  if (!data) notFound();
  return <FaqClusterTemplate data={data} />;
}
