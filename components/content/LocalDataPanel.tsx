import { TrendingUp, DollarSign, Chrome as Home, Percent } from 'lucide-react';

interface LocalDataPanelProps {
  medianHomePrice: number;
  medianMonthlyRent: number;
  priceToRentRatio: number;
  propertyTaxRate: number;
  avgAnnualAppreciation: number;
  keyFacts: string[];
}

export function LocalDataPanel({
  medianHomePrice,
  medianMonthlyRent,
  priceToRentRatio,
  propertyTaxRate,
  avgAnnualAppreciation,
  keyFacts,
}: LocalDataPanelProps) {
  const metrics = [
    {
      icon: Home,
      label: 'Median Home Price',
      value: `$${medianHomePrice.toLocaleString()}`,
    },
    {
      icon: DollarSign,
      label: 'Median Monthly Rent',
      value: `$${medianMonthlyRent.toLocaleString()}`,
    },
    {
      icon: TrendingUp,
      label: 'Avg. Annual Appreciation',
      value: `${avgAnnualAppreciation}%`,
    },
    {
      icon: Percent,
      label: 'Property Tax Rate',
      value: `${propertyTaxRate}%`,
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
        Local Market Snapshot
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border bg-card p-4 shadow-sm"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <metric.icon className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">
                {metric.label}
              </span>
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">
              {metric.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-xs font-medium uppercase tracking-wider">
            Price-to-Rent Ratio
          </span>
          <span className="rounded bg-muted px-2 py-0.5 text-xs font-semibold">
            {priceToRentRatio}
          </span>
          <span className="text-xs">
            {priceToRentRatio < 15
              ? '(Strongly favors buying)'
              : priceToRentRatio < 20
              ? '(Moderate)'
              : '(Favors renting for short stays)'}
          </span>
        </div>
      </div>
      {keyFacts.length > 0 && (
        <div className="mt-4">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Key Facts
          </h3>
          <ul className="space-y-2">
            {keyFacts.map((fact, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
