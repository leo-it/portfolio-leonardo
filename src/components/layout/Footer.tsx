"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <Container>
        <p className="text-center text-sm text-stage-cream/40">
          © {year} — {t("rights")}
        </p>
      </Container>
    </footer>
  );
}
