"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { ShowReelItem } from "@/types/content";
import { Section } from "@/components/ui/Section";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { FadeIn } from "@/components/ui/FadeIn";

interface ShowReelSectionProps {
  reels: ShowReelItem[];
}

export function ShowReelSection({ reels }: ShowReelSectionProps) {
  const t = useTranslations("reel");
  const [activeId, setActiveId] = useState(reels[0]?.id ?? "");

  const activeReel = reels.find((r) => r.id === activeId) ?? reels[0];

  return (
    <Section id="reel" className="bg-stage-surface">
      <FadeIn>
        <div className="mb-12">
          <h2 className="font-display text-4xl text-stage-cream md:text-5xl">{t("title")}</h2>
          <p className="mt-3 text-stage-cream/60">{t("subtitle")}</p>
        </div>
      </FadeIn>

      {activeReel && (
        <FadeIn delay={0.1}>
          <div
            className={
              activeReel.media.aspectRatio === "portrait" ? "mx-auto max-w-md" : ""
            }
          >
            <VideoPlayer media={activeReel.media} title={activeReel.title} className="mb-8" />
          </div>
        </FadeIn>
      )}

      {reels.length > 1 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((reel, index) => (
            <FadeIn key={reel.id} delay={0.1 + index * 0.05}>
              <button
                type="button"
                onClick={() => setActiveId(reel.id)}
                className={`w-full rounded-lg border p-4 text-left transition-all ${
                  activeId === reel.id
                    ? "border-stage-gold bg-stage-gold/10"
                    : "border-white/10 bg-stage-dark/50 hover:border-stage-gold/40"
                }`}
              >
                <span className="text-xs tracking-wider text-stage-gold uppercase">
                  {reel.category} · {reel.year}
                </span>
                <h3 className="mt-1 font-medium text-stage-cream">{reel.title}</h3>
                <p className="mt-1 text-sm text-stage-cream/50">{reel.company}</p>
              </button>
            </FadeIn>
          ))}
        </div>
      )}
    </Section>
  );
}
