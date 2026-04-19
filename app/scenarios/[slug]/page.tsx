import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo';
import { scenarios, getScenario } from '@/config/scenarios';
import { ScenarioPageTemplate } from '@/components/templates/ScenarioPageTemplate';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return scenarios.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const data = getScenario(params.slug);
  if (!data) return {};
  return generatePageMetadata({
    title: data.meta.title,
    description: data.meta.description,
    path: `/scenarios/${data.slug}`,
  });
}

export default function ScenarioPage({ params }: Props) {
  const data = getScenario(params.slug);
  if (!data) notFound();
  return <ScenarioPageTemplate data={data} />;
}
