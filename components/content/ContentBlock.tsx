interface ContentBlockProps {
  heading: string;
  subheading?: string;
  children: React.ReactNode;
  id?: string;
}

export function ContentBlock({ heading, subheading, children, id }: ContentBlockProps) {
  return (
    <section id={id} className="mb-10">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
        {heading}
      </h2>
      {subheading && (
        <p className="mb-4 text-base text-muted-foreground">{subheading}</p>
      )}
      <div className="leading-relaxed text-foreground/90">{children}</div>
    </section>
  );
}
