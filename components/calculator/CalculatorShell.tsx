'use client';

import { useState } from 'react';
import { CalculatorForm } from './CalculatorForm';
import { ResultsDisplay } from './ResultsDisplay';
import { ComparisonChart } from './ComparisonChart';
import {
  evaluate,
  getDefaultInput,
  CalculatorInput,
  CalculatorResult,
} from '@/lib/services/evaluationService';

interface CalculatorShellProps {
  defaultOverrides?: Partial<CalculatorInput>;
}

export function CalculatorShell({ defaultOverrides }: CalculatorShellProps) {
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const defaultValues = getDefaultInput(defaultOverrides);

  async function handleSubmit(data: CalculatorInput) {
    setIsCalculating(true);
    try {
      const res = await evaluate(data);
      setResult(res);
    } finally {
      setIsCalculating(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <CalculatorForm
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          isCalculating={isCalculating}
        />
      </div>

      {result && (
        <>
          <ResultsDisplay result={result} />
          {result.yearlySnapshots.length > 0 && (
            <ComparisonChart snapshots={result.yearlySnapshots} />
          )}
        </>
      )}
    </div>
  );
}
