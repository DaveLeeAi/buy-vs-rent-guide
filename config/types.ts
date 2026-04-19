export interface FaqItem {
  question: string;
  answer: string;
}

export interface StateConfig {
  slug: string;
  name: string;
  abbreviation: string;
  medianHomePrice: number;
  medianMonthlyRent: number;
  priceToRentRatio: number;
  avgAnnualAppreciation: number;
  propertyTaxRate: number;
  cities: string[];
  blufVerdict: string;
  keyFacts: string[];
  faqItems: FaqItem[];
}

export interface CityConfig {
  slug: string;
  name: string;
  stateSlug: string;
  stateName: string;
  medianHomePrice: number;
  medianMonthlyRent: number;
  priceToRentRatio: number;
  avgAnnualAppreciation: number;
  propertyTaxRate: number;
  neighborhoodContext: string;
  blufVerdict: string;
  keyFacts: string[];
  faqItems: FaqItem[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}
