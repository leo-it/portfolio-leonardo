"use client";

import { useState } from "react";
import { PortfolioImage } from "@/components/ui/PortfolioImage";
import { useTranslations } from "next-intl";
import type { GalleryImage } from "@/types/content";
import { Section } from "@/components/ui/Section";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { FadeIn } from "@/components/ui/FadeIn";

interface GallerySectionProps {
  images: GalleryImage[];
}

export function GallerySection({ images }: GallerySectionProps) {
  const t = useTranslations("gallery");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section id="gallery">
      <FadeIn>
        <div className="mb-12">
          <h2 className="font-display text-4xl text-stage-cream md:text-5xl">{t("title")}</h2>
          <p className="mt-3 text-stage-cream/60">{t("subtitle")}</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-3">
        {images.map((image, index) => (
          <FadeIn key={image.id} delay={index * 0.05}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-lg sm:max-w-none"
            >
              <PortfolioImage
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${image.focus ? "" : "object-center"}`}
                style={image.focus ? { objectPosition: image.focus } : undefined}
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stage-dark/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 text-xs tracking-wider text-stage-gold uppercase opacity-0 transition-opacity group-hover:opacity-100">
                {t(image.category)}
              </span>
            </button>
          </FadeIn>
        ))}
      </div>

      <ImageLightbox
        images={images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </Section>
  );
}
