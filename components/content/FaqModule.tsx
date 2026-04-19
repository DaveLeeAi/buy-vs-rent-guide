import { FaqItem } from '@/config/types';

interface FaqModuleProps {
  items: FaqItem[];
  heading?: string;
  compact?: boolean;
}

export function FaqModule({ items, heading = 'Frequently Asked Questions', compact = false }: FaqModuleProps) {
  if (items.length === 0) return null;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <h2 className="mb-5 text-2xl font-bold tracking-tight text-foreground">
        {heading}
      </h2>
      <div className="divide-y divide-border rounded-lg border">
        {items.map((item, index) => (
          <div key={index} className={compact ? 'p-4' : 'p-5 sm:p-6'}>
            <h3 className="mb-2 text-base font-semibold leading-snug text-foreground">
              {item.question}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
