"use client";

import { useTranslations } from "next-intl";
import type { Profile } from "@/types/content";
import type { MediaSource } from "@/types/content";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

interface HeroSectionProps {
  profile: Profile;
  heroMedia: MediaSource;
}

export function HeroSection({ profile, heroMedia }: HeroSectionProps) {
  const t = useTranslations("hero");
  const tNav = useTranslations("nav");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-20 items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <VideoPlayer
          media={heroMedia}
          title={profile.artistName}
          className="rounded-none"
          autoPlay
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stage-dark via-stage-dark/60 to-stage-dark/30" />
      </div>

      <div className="relative z-10 w-full pb-20 pt-32">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="mb-3 text-sm tracking-[0.3em] text-stage-gold uppercase">
              {profile.tagline}
            </p>
            <h1 className="font-display text-5xl leading-tight text-stage-cream md:text-7xl lg:text-8xl">
              {profile.artistName}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-stage-cream/70">{profile.bio}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#reel">{t("cta")}</Button>
              <Button href="#contact" variant="outline">
                {tNav("contact")}
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      <a
        href="#reel"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-widest text-stage-cream/50 uppercase transition-colors hover:text-stage-gold"
        aria-label={t("scroll")}
      >
        <span className="block animate-bounce">↓</span>
      </a>
    </section>
  );
}
