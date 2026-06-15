import type { LocaleContent } from "@/types/content";

export const enContent: LocaleContent = {
  profile: {
    artistName: "Leonardo Sainz Verón",
    tagline: "Hand-to-Hand Base · Korean Crab · Aerial Straps",
    bio: "Argentine circus artist and acrobat. Training since 2010 in handstands, verticals, hand-to-hand and acrobatics, later expanding into aerial straps and dance. Graduate of the Circus Arts program at UNSAM (Universidad Nacional de San Martín). Currently working as a hand-to-hand base and Korean crab (Russian crab) base.",
    age: 34,
    height: "1.89 m",
  },
  disciplines: [
    {
      name: "Hand to Hand",
      apparatus: ["Base", "Partner lifts", "Dynamic skills", "Tempo"],
    },
    {
      name: "Korean Crab / Russian Crab",
      apparatus: ["Korean-style crab base", "Russian swing base", "Partner acrobatics"],
    },
    {
      name: "Aerial Straps",
      apparatus: ["Aerial straps", "Strength & control", "Choreography"],
    },
    {
      name: "Acrobatics",
      apparatus: ["Handstand", "Verticals", "Floor acrobatics"],
    },
  ],
  credits: [
    {
      company: "UNSAM — Universidad Nacional de San Martín",
      role: "Circus Arts Training",
      period: "Graduate",
      location: "Buenos Aires, Argentina",
    },
    {
      company: "Independent Training",
      role: "Hand to Hand, Acrobatics & Aerial Straps",
      period: "Since 2010",
      location: "Argentina",
    },
    {
      company: "Current Role",
      role: "Hand-to-Hand Base & Korean Crab Base",
      period: "Present",
      location: "Available for contracts",
    },
  ],
  showReels: [
    {
      id: "h2h-reel",
      title: "Hand to Hand Reel",
      year: "2025",
      company: "Showreel",
      category: "Hand to Hand",
      media: {
        type: "embed",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        poster: "/images/reel-h2h.svg",
      },
    },
    {
      id: "straps-reel",
      title: "Aerial Straps Reel",
      year: "2024",
      company: "Showreel",
      category: "Aerial Straps",
      media: {
        type: "embed",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        poster: "/images/reel-straps.svg",
      },
    },
    {
      id: "acro-reel",
      title: "Acrobatics Demo",
      year: "2023",
      company: "Skills Demo",
      category: "Acrobatics",
      media: {
        type: "embed",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        poster: "/images/reel-acro.svg",
      },
    },
  ],
  gallery: [
    {
      id: "g1",
      src: "/images/gallery-01.svg",
      alt: "Leonardo Sainz Verón — professional portrait",
      category: "headshot",
    },
    {
      id: "g2",
      src: "/images/gallery-02.svg",
      alt: "Hand to hand partner acrobatics performance",
      category: "performance",
    },
    {
      id: "g3",
      src: "/images/gallery-03.svg",
      alt: "Aerial straps act on stage",
      category: "performance",
    },
    {
      id: "g4",
      src: "/images/gallery-04.svg",
      alt: "Leonardo Sainz Verón — dramatic portrait",
      category: "headshot",
    },
    {
      id: "g5",
      src: "/images/gallery-05.svg",
      alt: "Korean crab / Russian crab base work",
      category: "performance",
    },
    {
      id: "g6",
      src: "/images/gallery-06.svg",
      alt: "Handstand and vertical acrobatics",
      category: "performance",
    },
  ],
  contact: {
    email: "lsainzveron@gmail.com",
    instagram: "https://instagram.com/leonardosainz",
  },
  languages: ["Spanish", "English"],
};
