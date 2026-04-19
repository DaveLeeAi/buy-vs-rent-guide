import { TriangleAlert } from 'lucide-react';

export function LimitationsNotice() {
  return (
    <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50/50 p-4">
      <div className="flex items-start gap-3">
        <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
        <div>
          <p className="text-sm font-semibold text-amber-800">
            Important Limitations
          </p>
          <ul className="mt-2 space-y-1 text-sm leading-relaxed text-amber-900/80">
            <li>This tool uses approximate averages, not your specific financial situation.</li>
            <li>It does not account for your individual tax deductions or credits.</li>
            <li>Closing costs on purchase and sale are not included.</li>
            <li>Local market timing and seasonal price variation are not modeled.</li>
            <li>Insurance quotes are estimated, not actual.</li>
            <li>This is not financial advice. Consult a licensed financial advisor for personalized guidance.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
