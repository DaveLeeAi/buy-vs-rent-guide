import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export function TrustNotice() {
  return (
    <div className="mb-8 flex items-start gap-3 rounded-lg border bg-muted/30 p-4">
      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
      <div className="text-sm leading-relaxed text-muted-foreground">
        <p className="font-medium text-foreground">
          Independent analysis. No affiliate relationships.
        </p>
        <p className="mt-1">
          This tool is maintained by an independent editorial team. We do not accept
          compensation from lenders, real estate agents, or financial service providers.
          See our{' '}
          <Link
            href="/editorial-policy"
            className="font-medium text-teal-600 underline-offset-2 hover:underline"
          >
            Editorial Policy
          </Link>{' '}
          and{' '}
          <Link
            href="/methodology"
            className="font-medium text-teal-600 underline-offset-2 hover:underline"
          >
            Methodology
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
