"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { ShowReelItem } from "@/types/content";
import { Section } from "@/components/ui/Section";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

interface ShowReelSectionProps {
  reels: ShowReelItem[];
  materialDriveUrl?: string;
}

export function ShowReelSection({ reels, materialDriveUrl }: ShowReelSectionProps) {
  const t = useTranslations("reel");
  const [activeId, setActiveId] = useState(reels[0]?.id ?? "");
  const hasMultiple = reels.length > 1;
  const activeReel = reels.find((r) => r.id === activeId) ?? reels[0];

  return (
    <Section id="reel" className="bg-stage-surface">
      <FadeIn>
        <div className="mb-10">
          <h2 className="font-display text-4xl text-stage-cream md:text-5xl">{t("title")}</h2>
          <p className="mt-3 text-stage-cream/60">{t("subtitle")}</p>
        </div>
      </FadeIn>

      {hasMultiple && (
        <FadeIn delay={0.05}>
          <div
            className="mb-8 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label={t("title")}
          >
            {reels.map((reel) => {
              const isActive = reel.id === activeId;
              return (
                <button
                  key={reel.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(reel.id)}
                  className={`rounded-full border px-4 py-2 text-sm tracking-wide transition-colors ${
                    isActive
                      ? "border-stage-gold bg-stage-gold/15 text-stage-gold"
                      : "border-white/15 text-stage-cream/60 hover:border-stage-gold/40 hover:text-stage-cream"
                  }`}
                >
                  {reel.title}
                </button>
              );
            })}
          </div>
        </FadeIn>
      )}

      {activeReel && (
        <FadeIn key={activeReel.id} delay={0.1}>
          <div
            className={
              activeReel.media.aspectRatio === "portrait" ? "mx-auto max-w-md" : undefined
            }
          >
            <VideoPlayer media={activeReel.media} title={activeReel.title} />
          </div>
        </FadeIn>
      )}

      {materialDriveUrl && (
        <FadeIn delay={0.2} className="mt-12 text-center">
          <p className="mb-4 text-sm text-stage-cream/50">{t("driveHint")}</p>
          <Button href={materialDriveUrl} external variant="outline">
            {t("drive")}
          </Button>
        </FadeIn>
      )}
    </Section>
  );
}
