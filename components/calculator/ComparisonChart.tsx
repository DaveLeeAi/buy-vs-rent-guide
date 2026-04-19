'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { YearlySnapshot } from '@/lib/calculatorLogic';

interface ComparisonChartProps {
  snapshots: YearlySnapshot[];
}

export function ComparisonChart({ snapshots }: ComparisonChartProps) {
  const data = snapshots.map((s) => ({
    year: `Year ${s.year}`,
    'Buy Net Worth': s.buyNetWorth,
    'Rent Net Worth': s.rentNetWorth,
  }));

  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold text-foreground">
        Projected Net Worth: Buy vs. Rent
      </h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 12 }}
              stroke="hsl(var(--muted-foreground))"
            />
            <YAxis
              tick={{ fontSize: 12 }}
              stroke="hsl(var(--muted-foreground))"
              tickFormatter={(value: number) =>
                `$${(value / 1000).toFixed(0)}k`
              }
            />
            <Tooltip
              formatter={(value: number) => `$${value.toLocaleString()}`}
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '13px',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '13px' }} />
            <Line
              type="monotone"
              dataKey="Buy Net Worth"
              stroke="#0d9488"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Rent Net Worth"
              stroke="#0284c7"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
