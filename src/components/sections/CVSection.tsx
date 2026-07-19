"use client";

import { useTranslations } from "next-intl";
import type { Credit, Discipline, Profile } from "@/types/content";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

interface CVSectionProps {
  profile: Profile;
  disciplines: Discipline[];
  credits: Credit[];
  languages: string[];
  cvPdfPath: string;
}

export function CVSection({
  profile,
  disciplines,
  credits,
  languages,
  cvPdfPath,
}: CVSectionProps) {
  const t = useTranslations("cv");

  return (
    <Section id="cv" className="bg-stage-surface">
      <FadeIn>
        <div className="mb-12">
          <h2 className="font-display text-4xl text-stage-cream md:text-5xl">{t("title")}</h2>
          <p className="mt-3 text-stage-cream/60">{t("subtitle")}</p>
        </div>
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          {(profile.age || profile.height) && (
            <>
              <h3 className="mb-4 text-sm tracking-[0.2em] text-stage-gold uppercase">
                {t("physical")}
              </h3>
              <dl className="mb-10 grid grid-cols-2 gap-4">
                {profile.age && (
                  <div>
                    <dt className="text-xs text-stage-cream/50">{t("age")}</dt>
                    <dd className="mt-1 text-stage-cream">
                      {profile.age} {t("years")}
                    </dd>
                  </div>
                )}
                {profile.height && (
                  <div>
                    <dt className="text-xs text-stage-cream/50">{t("height")}</dt>
                    <dd className="mt-1 text-stage-cream">{profile.height}</dd>
                  </div>
                )}
              </dl>
            </>
          )}

          <h3 className="mb-6 text-sm tracking-[0.2em] text-stage-gold uppercase">
            {t("disciplines")}
          </h3>
          <ul className="space-y-3">
            {disciplines.map((discipline) => (
              <li key={discipline.name}>
                <p className="font-medium text-stage-cream">{discipline.name}</p>
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-10 text-sm tracking-[0.2em] text-stage-gold uppercase">
            {t("languages")}
          </h3>
          <p className="text-stage-cream/70">{languages.join(" · ")}</p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h3 className="mb-6 text-sm tracking-[0.2em] text-stage-gold uppercase">
            {t("credits")}
          </h3>
          <ul className="space-y-6">
            {credits.map((credit) => (
              <li
                key={`${credit.company}-${credit.period}`}
                className="border-l-2 border-stage-gold/30 pl-4"
              >
                <p className="font-medium text-stage-cream">{credit.company}</p>
                <p className="mt-1 text-sm text-stage-gold/80">{credit.role}</p>
                <p className="mt-1 text-sm text-stage-cream/50">
                  {credit.period}
                  {credit.location ? ` — ${credit.location}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      <FadeIn delay={0.3} className="mt-12">
        <Button href={cvPdfPath} external variant="outline">
          {t("download")}
        </Button>
      </FadeIn>
    </Section>
  );
}
