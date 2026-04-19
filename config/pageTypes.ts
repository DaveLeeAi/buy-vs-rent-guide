import { FaqItem } from './types';

export interface SeoMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export interface RelatedLink {
  label: string;
  href: string;
  description?: string;
}

export interface ComparisonData {
  slug: string;
  kind: 'state-vs-state' | 'city-vs-city' | 'urban-vs-suburban';
  title: string;
  subtitle: string;
  sideA: { name: string; highlights: string[] };
  sideB: { name: string; highlights: string[] };
  bluf: string;
  body: string[];
  metricsTable: { label: string; a: string; b: string }[];
  faq: FaqItem[];
  meta: SeoMeta;
}

export interface ScenarioData {
  slug: string;
  title: string;
  persona: string;
  bluf: string;
  sections: { heading: string; body: string }[];
  factors: string[];
  verdict: string;
  faq: FaqItem[];
  meta: SeoMeta;
}

export interface GuideData {
  slug: string;
  title: string;
  bluf: string;
  tldr: string[];
  sections: { heading: string; body: string }[];
  keyTakeaways: string[];
  faq: FaqItem[];
  meta: SeoMeta;
}

export interface FaqClusterData {
  slug: string;
  title: string;
  intro: string;
  topics: { heading: string; items: FaqItem[] }[];
  meta: SeoMeta;
}
