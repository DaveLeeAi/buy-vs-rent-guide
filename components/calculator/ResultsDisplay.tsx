import { CalculatorResult } from '@/lib/services/evaluationService';
import { TrendingUp, Clock, Scale } from 'lucide-react';

interface ResultsDisplayProps {
  result: CalculatorResult;
}

export function ResultsDisplay({ result }: ResultsDisplayProps) {
  const badgeColor =
    result.confidenceLabel === 'Strong buy signal'
      ? 'bg-emerald-100 text-emerald-800'
      : result.confidenceLabel === 'Favors buying'
      ? 'bg-teal-100 text-teal-800'
      : result.confidenceLabel === 'Close call'
      ? 'bg-amber-100 text-amber-800'
      : 'bg-sky-100 text-sky-800';

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <Scale className="h-5 w-5 text-teal-600" />
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}>
            {result.confidenceLabel}
          </span>
        </div>
        <p className="text-base font-medium leading-relaxed text-foreground">
          {result.verdict}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Monthly Buy Cost
          </p>
          <p className="mt-1 text-2xl font-bold text-foreground">
            ${result.totalMonthlyBuyCost.toLocaleString()}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Mortgage: ${result.monthlyMortgagePayment.toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Monthly Rent
          </p>
          <p className="mt-1 text-2xl font-bold text-foreground">
            ${result.monthlyRentCost.toLocaleString()}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">Starting amount</p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Break-Even
            </p>
          </div>
          <p className="mt-1 text-2xl font-bold text-foreground">
            {result.breakEvenYear ? `Year ${result.breakEvenYear}` : 'N/A'}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {result.breakEvenYear
              ? 'When buying overtakes renting'
              : 'Renting remains ahead'}
          </p>
        </div>
      </div>

      {(result.fiveYearDelta !== 0 ||
        result.tenYearDelta !== 0 ||
        result.twentyYearDelta !== 0) && (
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-teal-600" />
            <p className="text-sm font-semibold text-foreground">
              Net Worth Difference (Buy - Rent)
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: '5-Year', value: result.fiveYearDelta },
              { label: '10-Year', value: result.tenYearDelta },
              { label: '20-Year', value: result.twentyYearDelta },
            ]
              .filter((d) => d.value !== 0)
              .map((d) => (
                <div key={d.label}>
                  <p className="text-xs text-muted-foreground">{d.label}</p>
                  <p
                    className={`text-lg font-bold ${
                      d.value > 0 ? 'text-emerald-600' : 'text-rose-600'
                    }`}
                  >
                    {d.value > 0 ? '+' : ''}${d.value.toLocaleString()}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
