import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo';
import { getCityBySlug, getAllCitySlugs } from '@/config/cities';
import { CityPageTemplate } from '@/components/templates/CityPageTemplate';

interface CityPageProps {
  params: { state: string; city: string };
}

export function generateStaticParams() {
  return getAllCitySlugs();
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  const city = getCityBySlug(params.state, params.city);
  if (!city) return {};

  return generatePageMetadata({
    title: `Buy vs. Rent in ${city.name}, ${city.stateName}`,
    description: `Should you buy or rent in ${city.name}, ${city.stateName}? Free calculator with local data. Median home price: $${city.medianHomePrice.toLocaleString()}. Median rent: $${city.medianMonthlyRent.toLocaleString()}/mo.`,
    path: `/buy-vs-rent/${city.stateSlug}/${city.slug}`,
  });
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.state, params.city);
  if (!city) notFound();

  return <CityPageTemplate city={city} />;
}
