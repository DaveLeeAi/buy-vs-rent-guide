import { CircleAlert as AlertCircle } from 'lucide-react';

interface BlufSummaryProps {
  verdict: string;
  context?: string;
}

export function BlufSummary({ verdict, context }: BlufSummaryProps) {
  return (
    <section className="mb-8 rounded-lg border-l-4 border-teal-600 bg-teal-50/50 p-5">
      <div className="flex items-start gap-3">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-800">
            Bottom Line
          </p>
          <p className="mt-1 text-base font-medium leading-relaxed text-foreground">
            {verdict}
          </p>
          {context && (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {context}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
