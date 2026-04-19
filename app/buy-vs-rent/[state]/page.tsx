import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo';
import { states, getStateBySlug, getAllStateSlugs } from '@/config/states';
import { StatePageTemplate } from '@/components/templates/StatePageTemplate';

interface StatePageProps {
  params: { state: string };
}

export function generateStaticParams() {
  return getAllStateSlugs().map((slug) => ({ state: slug }));
}

export function generateMetadata({ params }: StatePageProps): Metadata {
  const state = getStateBySlug(params.state);
  if (!state) return {};

  return generatePageMetadata({
    title: `Buy vs. Rent in ${state.name}`,
    description: `Should you buy or rent in ${state.name}? Free calculator with ${state.name} market data. Median home price: $${state.medianHomePrice.toLocaleString()}. Median rent: $${state.medianMonthlyRent.toLocaleString()}/mo.`,
    path: `/buy-vs-rent/${state.slug}`,
  });
}

export default function StatePage({ params }: StatePageProps) {
  const state = getStateBySlug(params.state);
  if (!state) notFound();

  return <StatePageTemplate state={state} />;
}
