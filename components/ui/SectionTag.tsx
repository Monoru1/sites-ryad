interface SectionTagProps {
  children: React.ReactNode;
}

export function SectionTag({ children }: SectionTagProps) {
  return (
    <p className="font-mono text-[0.68rem] uppercase tracking-editorial text-gold/90">
      {children}
    </p>
  );
}
