import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 md:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
