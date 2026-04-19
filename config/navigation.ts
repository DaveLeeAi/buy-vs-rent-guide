import { NavLink, NavSection } from './types';

export const primaryNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Calculator', href: '/buy-vs-rent' },
  { label: 'Guides', href: '/guides' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
];

export const footerSections: NavSection[] = [
  {
    title: 'Tools',
    links: [
      { label: 'Buy vs. Rent Calculator', href: '/buy-vs-rent' },
      { label: 'How This Tool Works', href: '/how-this-tool-works' },
      { label: 'Scenario Explorer', href: '/scenarios' },
      { label: 'Market Comparisons', href: '/compare' },
    ],
  },
  {
    title: 'Guides & FAQ',
    links: [
      { label: 'Guide Library', href: '/guides' },
      { label: 'FAQ Library', href: '/faq' },
      { label: 'Buying Guide', href: '/buying-guide' },
      { label: 'Renting Guide', href: '/renting-guide' },
      { label: 'First-Time Buyer Guide', href: '/first-time-home-buyer-guide' },
      { label: 'Moving Costs Guide', href: '/moving-costs-guide' },
    ],
  },
  {
    title: 'Trust & Methodology',
    links: [
      { label: 'Methodology', href: '/methodology' },
      { label: 'Assumptions', href: '/assumptions' },
      { label: 'Data Sources', href: '/data-sources' },
      { label: 'Formula Glossary', href: '/formula-glossary' },
      { label: 'Limitations', href: '/limitations' },
      { label: 'Editorial Policy', href: '/editorial-policy' },
      { label: 'Update Policy', href: '/update-policy' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
];

export const popularStates: NavLink[] = [
  { label: 'California', href: '/buy-vs-rent/california' },
  { label: 'Texas', href: '/buy-vs-rent/texas' },
  { label: 'Florida', href: '/buy-vs-rent/florida' },
  { label: 'New York', href: '/buy-vs-rent/new-york' },
  { label: 'Illinois', href: '/buy-vs-rent/illinois' },
  { label: 'Pennsylvania', href: '/buy-vs-rent/pennsylvania' },
  { label: 'Georgia', href: '/buy-vs-rent/georgia' },
  { label: 'North Carolina', href: '/buy-vs-rent/north-carolina' },
  { label: 'Arizona', href: '/buy-vs-rent/arizona' },
  { label: 'Colorado', href: '/buy-vs-rent/colorado' },
];

export const popularCities: NavLink[] = [
  { label: 'New York City', href: '/buy-vs-rent/new-york/new-york' },
  { label: 'Los Angeles', href: '/buy-vs-rent/california/los-angeles' },
  { label: 'Chicago', href: '/buy-vs-rent/illinois/chicago' },
  { label: 'Houston', href: '/buy-vs-rent/texas/houston' },
  { label: 'Phoenix', href: '/buy-vs-rent/arizona/phoenix' },
  { label: 'Miami', href: '/buy-vs-rent/florida/miami' },
  { label: 'Dallas', href: '/buy-vs-rent/texas/dallas' },
  { label: 'Denver', href: '/buy-vs-rent/colorado/denver' },
  { label: 'Atlanta', href: '/buy-vs-rent/georgia/atlanta' },
  { label: 'Austin', href: '/buy-vs-rent/texas/austin' },
];
