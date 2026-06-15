"use client";

import { useTranslations } from "next-intl";
import type { ContactInfo } from "@/types/content";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

interface ContactSectionProps {
  contact: ContactInfo;
}

export function ContactSection({ contact }: ContactSectionProps) {
  const t = useTranslations("contact");

  const links = [
    { label: t("email"), href: `mailto:${contact.email}`, value: contact.email },
    contact.instagram
      ? { label: t("instagram"), href: contact.instagram, value: "Instagram" }
      : null,
    contact.stagelync
      ? { label: t("stagelync"), href: contact.stagelync, value: "StageLync" }
      : null,
  ].filter(Boolean) as { label: string; href: string; value: string }[];

  return (
    <Section id="contact">
      <FadeIn>
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl text-stage-cream md:text-5xl">{t("title")}</h2>
          <p className="mt-3 text-stage-cream/60">{t("subtitle")}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mx-auto flex max-w-md flex-col items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex w-full items-center justify-between rounded-lg border border-white/10 px-6 py-4 transition-colors hover:border-stage-gold/40"
            >
              <span className="text-sm text-stage-cream/50">{link.label}</span>
              <span className="text-stage-cream transition-colors group-hover:text-stage-gold">
                {link.value}
              </span>
            </a>
          ))}

          <Button href={`mailto:${contact.email}`} className="mt-4 w-full">
            {t("cta")}
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
