import type { LocaleContent } from "@/types/content";

export const esContent: LocaleContent = {
  profile: {
    artistName: "Leonardo Sainz Verón",
    tagline: "Portor de mano mano · Portor coreano · Cintas · Parada de manos",
    bio: "Artista circense desde 2010. Me forme como portor de mano mano con Mariano Pujal y Martin Carella, actualmente me estoy formando como portor de cuadro coreano con Rafael y Blanca Luz Capella (duo Morosof), y desde hace mas de 10 años practico parada de manos, cintas entre otras disciplinas.",
    age: 34,
    height: "1,89 m",
  },
  disciplines: [
    { name: "Mano a Mano" },
    { name: "Portor coreano" },
    { name: "Cintas" },
    { name: "Parada de manos" },
    { name: "Acrobacia" },
    { name: "Tango" },
  ],
  credits: [
    {
      company: "UNSAM — Universidad Nacional de San Martín",
      role: "Formación en Artes Circenses",
      period: "Egresado",
      location: "Buenos Aires, Argentina",
    },
    
    {
      company: "Mano mano y cintas",
      role: "Trabajo en eventos",
      period: "Actualidad",
      location: "Disponible para contratos",
    },
  ],
  showReels: [
    {
      id: "showreel",
      title: "Showreel",
      year: "2025",
      company: "Leonardo Sainz Verón",
      category: "General",
      media: {
        type: "embed",
        src: "https://www.youtube.com/embed/zPe5kGFJ8Ss",
        aspectRatio: "portrait",
        poster: "/images/reel-h2h.svg",
      },
    },
    {
      id: "cintas",
      title: "Cintas",
      year: "2025",
      company: "Leonardo Sainz Verón",
      category: "Cintas",
      media: {
        type: "embed",
        src: "https://www.youtube.com/embed/QQQJGEhVh18",
        aspectRatio: "portrait",
        poster: "/images/reel-straps.svg",
      },
    },
    {
      id: "mano-mano",
      title: "Mano a mano",
      year: "2025",
      company: "Leonardo Sainz Verón",
      category: "Mano a Mano",
      media: {
        type: "embed",
        src: "https://www.youtube.com/embed/Wh9F1zh-4sc",
        aspectRatio: "portrait",
        poster: "/images/reel-h2h.svg",
      },
    },
    {
      id: "banquine",
      title: "Banquine",
      year: "2025",
      company: "Leonardo Sainz Verón",
      category: "Banquine",
      media: {
        type: "embed",
        src: "https://www.youtube.com/embed/3O5sMHtIivM",
        aspectRatio: "portrait",
        poster: "/images/reel-acro.svg",
      },
    },
  ],
  gallery: [
    {
      id: "g4",
      src: "/images/gallery-04.png",
      alt: "Parada de manos en verticales junto al lago",
      category: "performance",
    },
    {
      id: "g5",
      src: "/images/gallery-05.png",
      alt: "Mano a mano — parada de manos sobre portor en muelle",
      category: "performance",
    },
    {
      id: "g6",
      src: "/images/gallery-06.png",
      alt: "Portor lanzando voladora al aire libre",
      category: "performance",
    },
    {
      id: "g1",
      src: "/images/gallery-01.png",
      alt: "Parada de manos a una mano en muelle al aire libre",
      category: "performance",
    },
    {
      id: "g2",
      src: "/images/gallery-02.png",
      alt: "Entrenamiento de portor con volado en gimnasio de circo",
      category: "performance",
    },
    {
      id: "g3",
      src: "/images/gallery-03.png",
      alt: "Mano a mano en estudio — elevación y arco",
      category: "performance",
    },
  ],
  contact: {
    email: "lsainzveron@gmail.com",
    instagram: "https://instagram.com/leotrickss",
  },
  languages: ["Español", "Inglés"],
};
