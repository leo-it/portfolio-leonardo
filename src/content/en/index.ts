import type { LocaleContent } from "@/types/content";

export const enContent: LocaleContent = {
  profile: {
    artistName: "Leonardo Sainz Verón",
    tagline: "Hand-to-Hand Base · Korean Cradle Base · Straps · Handstands",
    bio: "Circus artist since 2010. Trained as a hand-to-hand base with Mariano Pujal and Martín Carella. Currently training as a Korean cradle base with Rafael and Blanca Luz Capella (Dúo Morosof). For over 10 years I have practiced handstands, straps, and other disciplines.",
    age: 34,
    height: "1.89 m",
  },
  disciplines: [
    { name: "Hand to Hand" },
    { name: "Korean Cradle Base" },
    { name: "Straps" },
    { name: "Handstands" },
    { name: "Acrobatics" },
    { name: "Tango" },
  ],
  credits: [
    {
      company: "UNSAM — Universidad Nacional de San Martín",
      role: "Circus Arts Training",
      period: "Graduate",
      location: "Buenos Aires, Argentina",
    },
    {
      company: "Hand to Hand & Straps",
      role: "Event work",
      period: "Present",
      location: "Available for contracts",
    },
  ],
  showReels: [
    {
      id: "showreel",
      title: "Showreel 2025",
      year: "2025",
      company: "Leonardo Sainz Verón",
      category: "Circus",
      media: {
        type: "embed",
        src: "https://www.youtube.com/embed/zPe5kGFJ8Ss",
        aspectRatio: "portrait",
        poster: "/images/reel-h2h.svg",
      },
    },
  ],
  gallery: [
    {
      id: "g1",
      src: "/images/gallery-01.png",
      alt: "One-handed handstand on outdoor dock",
      category: "performance",
    },
    {
      id: "g2",
      src: "/images/gallery-02.png",
      alt: "Base training with flyer mid-flip in circus gym",
      category: "performance",
    },
    {
      id: "g3",
      src: "/images/gallery-03.png",
      alt: "Hand to hand lift and arch in studio",
      category: "performance",
    },
    {
      id: "g4",
      src: "/images/gallery-04.png",
      alt: "Press handstand by the lake",
      category: "performance",
    },
    {
      id: "g5",
      src: "/images/gallery-05.png",
      alt: "Hand to hand — handstand on base at the dock",
      category: "performance",
    },
    {
      id: "g6",
      src: "/images/gallery-06.png",
      alt: "Base tossing flyer outdoors",
      category: "performance",
    },
  ],
  contact: {
    email: "lsainzveron@gmail.com",
    instagram: "https://instagram.com/leotrickss",
  },
  languages: ["Spanish", "English"],
};
