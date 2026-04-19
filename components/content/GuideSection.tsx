interface GuideSectionProps {
  stepNumber?: number;
  heading: string;
  children: React.ReactNode;
  callout?: string;
}

export function GuideSection({
  stepNumber,
  heading,
  children,
  callout,
}: GuideSectionProps) {
  return (
    <section className="mb-8">
      <div className="flex items-start gap-3">
        {stepNumber !== undefined && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
            {stepNumber}
          </span>
        )}
        <div className="flex-1">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-foreground">
            {heading}
          </h2>
          <div className="leading-relaxed text-foreground/90">{children}</div>
          {callout && (
            <div className="mt-3 rounded-md border-l-4 border-teal-500 bg-teal-50/50 p-3 text-sm text-teal-800">
              {callout}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
