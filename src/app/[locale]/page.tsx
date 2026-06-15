import { setRequestLocale } from "next-intl/server";
import { getContent } from "@/content";
import { heroMedia, cvPdfPath } from "@/data/media";
import { HeroSection } from "@/components/sections/HeroSection";
import { ShowReelSection } from "@/components/sections/ShowReelSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CVSection } from "@/components/sections/CVSection";
import { ContactSection } from "@/components/sections/ContactSection";
import type { Locale } from "@/types/content";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = getContent(locale as Locale);

  return (
    <>
      <HeroSection profile={content.profile} heroMedia={heroMedia} />
      <ShowReelSection reels={content.showReels} />
      <GallerySection images={content.gallery} />
      <CVSection
        profile={content.profile}
        disciplines={content.disciplines}
        credits={content.credits}
        languages={content.languages}
        cvPdfPath={cvPdfPath}
      />
      <ContactSection contact={content.contact} />
    </>
  );
}
