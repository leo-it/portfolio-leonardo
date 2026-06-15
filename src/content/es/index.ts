import type { LocaleContent } from "@/types/content";

export const esContent: LocaleContent = {
  profile: {
    artistName: "Leonardo Sainz Verón",
    tagline: "Portador de Mano a Mano · Cangrejo Coreano · Aerial Straps",
    bio: "Artista circense y acróbata argentino. Entrena desde 2010 en verticales, handstand, mano a mano y acrobacia; luego incorporó aerial straps y danza. Formación en Artes Circenses de la UNSAM (Universidad Nacional de San Martín). Actualmente es portador de mano a mano y cangrejo coreano (portor ruso).",
    age: 34,
    height: "1,89 m",
  },
  disciplines: [
    {
      name: "Mano a Mano",
      apparatus: ["Base", "Elevaciones", "Dinámicas", "Tempo"],
    },
    {
      name: "Cangrejo Coreano / Portor Ruso",
      apparatus: ["Base en cangrejo coreano", "Base en portor ruso", "Acrobacia en pareja"],
    },
    {
      name: "Aerial Straps",
      apparatus: ["Straps aéreos", "Fuerza y control", "Coreografía"],
    },
    {
      name: "Acrobacia",
      apparatus: ["Handstand", "Verticales", "Acrobacia de piso"],
    },
  ],
  credits: [
    {
      company: "UNSAM — Universidad Nacional de San Martín",
      role: "Formación en Artes Circenses",
      period: "Egresado",
      location: "Buenos Aires, Argentina",
    },
    {
      company: "Entrenamiento independiente",
      role: "Mano a mano, acrobacia y aerial straps",
      period: "Desde 2010",
      location: "Argentina",
    },
    {
      company: "Rol actual",
      role: "Portador de mano a mano y cangrejo coreano",
      period: "Actualidad",
      location: "Disponible para contratos",
    },
  ],
  showReels: [
    {
      id: "h2h-reel",
      title: "Reel de Mano a Mano",
      year: "2025",
      company: "Showreel",
      category: "Mano a Mano",
      media: {
        type: "embed",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        poster: "/images/reel-h2h.svg",
      },
    },
    {
      id: "straps-reel",
      title: "Reel de Aerial Straps",
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
      title: "Demo de Acrobacia",
      year: "2023",
      company: "Demo técnica",
      category: "Acrobacia",
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
      alt: "Leonardo Sainz Verón — retrato profesional",
      category: "headshot",
    },
    {
      id: "g2",
      src: "/images/gallery-02.svg",
      alt: "Actuación de mano a mano en escenario",
      category: "performance",
    },
    {
      id: "g3",
      src: "/images/gallery-03.svg",
      alt: "Acto de aerial straps en escenario",
      category: "performance",
    },
    {
      id: "g4",
      src: "/images/gallery-04.svg",
      alt: "Leonardo Sainz Verón — retrato dramático",
      category: "headshot",
    },
    {
      id: "g5",
      src: "/images/gallery-05.svg",
      alt: "Trabajo de base en cangrejo coreano / portor ruso",
      category: "performance",
    },
    {
      id: "g6",
      src: "/images/gallery-06.svg",
      alt: "Handstand y acrobacia en verticales",
      category: "performance",
    },
  ],
  contact: {
    email: "lsainzveron@gmail.com",
    instagram: "https://instagram.com/leonardosainz",
  },
  languages: ["Español", "Inglés"],
};
