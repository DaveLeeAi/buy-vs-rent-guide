import { Metadata } from 'next';
import { siteConfig } from '@/config/siteConfig';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  noindex = false,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.baseUrl}${path}`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
