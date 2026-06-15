import type { Locale } from "@/types/content";
import { enContent } from "@/content/en";
import { esContent } from "@/content/es";

const contentByLocale = {
  en: enContent,
  es: esContent,
} as const;

export function getContent(locale: Locale) {
  return contentByLocale[locale];
}
