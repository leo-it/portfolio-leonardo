export type Locale = "en" | "es";

export type MediaType = "local" | "embed" | "image";

export type AspectRatio = "landscape" | "portrait";

export interface MediaSource {
  type: MediaType;
  src: string;
  poster?: string;
  aspectRatio?: AspectRatio;
}

export interface Profile {
  artistName: string;
  tagline: string;
  bio: string;
  age?: number;
  height?: string;
}

export interface Credit {
  company: string;
  role: string;
  period: string;
  location?: string;
}

export interface Discipline {
  name: string;
}

export interface ShowReelItem {
  id: string;
  title: string;
  year: string;
  company: string;
  category: string;
  media: MediaSource;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "headshot" | "performance";
  focus?: string;
}

export interface ContactInfo {
  email: string;
  instagram?: string;
  stagelync?: string;
}

export interface LocaleContent {
  profile: Profile;
  disciplines: Discipline[];
  credits: Credit[];
  showReels: ShowReelItem[];
  gallery: GalleryImage[];
  contact: ContactInfo;
  languages: string[];
}
