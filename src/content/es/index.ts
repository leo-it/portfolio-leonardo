import type { LocaleContent } from "@/types/content";

export const esContent: LocaleContent = {
  profile: {
    artistName: "Leonardo Sainz Verón",
    tagline: "Portor de mano mano · Portor coreano · Cintas · Parada de manos",
    bio: "Artista circense y acróbata argentino. Entrena desde 2010 en verticales, parada de manos, mano a mano y acrobacia; luego incorporó cintas y danza. Formación en Artes Circenses de la UNSAM (Universidad Nacional de San Martín). Actualmente es portor de mano a mano y portor coreano.",
    age: 34,
    height: "1,89 m",
  },
  disciplines: [
    {
      name: "Mano a Mano",
      apparatus: ["Base", "Elevaciones", "Dinámicas", "Tempo"],
    },
    {
      name: "Portor coreano",
      apparatus: ["Portor coreano", "Portor ruso", "Acrobacia en pareja"],
    },
    {
      name: "Cintas",
      apparatus: ["Cintas aéreas", "Fuerza y control", "Coreografía"],
    },
    {
      name: "Acrobacia",
      apparatus: ["Parada de manos", "Verticales", "Acrobacia de piso"],
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
      role: "Mano a mano, acrobacia y cintas",
      period: "Desde 2010",
      location: "Argentina",
    },
    {
      company: "Rol actual",
      role: "Portor de mano a mano y portor coreano",
      period: "Actualidad",
      location: "Disponible para contratos",
    },
  ],
  showReels: [
    {
      id: "showreel",
      title: "Showreel 2025",
      year: "2025",
      company: "Leonardo Sainz Verón",
      category: "Circo",
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
  ],
  contact: {
    email: "lsainzveron@gmail.com",
    instagram: "https://instagram.com/leonardosainz",
  },
  languages: ["Español", "Inglés"],
};
