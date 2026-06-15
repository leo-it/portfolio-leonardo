# Portfolio Artístico

Portfolio bilingüe (EN/ES) para artistas de circo y cruceros. Construido con Next.js, TypeScript, Tailwind CSS y next-intl.

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) — redirige automáticamente a `/en` o `/es`.

## Estructura del proyecto

```
portfolioart/
├── messages/           # Textos de UI (nav, botones, títulos)
│   ├── en.json
│   └── es.json
├── public/
│   ├── images/       # Fotos y posters
│   ├── videos/       # Video de intro (hero)
│   └── cv/           # CV en PDF
└── src/
    ├── app/[locale]/ # Páginas por idioma
    ├── components/
    │   ├── layout/   # Header, Footer
    │   ├── sections/ # Hero, ShowReel, Gallery, CV, Contact
    │   └── ui/       # Container, Button, VideoPlayer, etc.
    ├── content/      # Contenido traducible (bio, créditos, reels)
    │   ├── en/
    │   └── es/
    ├── data/
    │   └── media.ts  # Rutas de media compartidas
    └── types/
        └── content.ts
```

## Cómo cambiar el contenido

### 1. Perfil, CV y créditos

Edita los archivos de contenido por idioma:

- [`src/content/en/index.ts`](src/content/en/index.ts) — inglés
- [`src/content/es/index.ts`](src/content/es/index.ts) — español

Aquí defines: nombre artístico, bio, disciplinas, contratos, showreels, galería y contacto.

### 2. Textos de la interfaz

Edita los archivos de mensajes:

- [`messages/en.json`](messages/en.json)
- [`messages/es.json`](messages/es.json)

### 3. Media (videos e imágenes)

1. Coloca tus archivos en `public/images/`, `public/videos/` y `public/cv/`.
2. Actualiza las rutas en [`src/data/media.ts`](src/data/media.ts) (hero video) y en los archivos de `content/` (galería y reels).

**Videos de showreel:** usa embeds de YouTube/Vimeo en el campo `media.src`:

```ts
media: {
  type: "embed",
  src: "https://www.youtube.com/embed/TU_VIDEO_ID",
  poster: "/images/reel-aerial.svg",
}
```

**Video de intro local:** coloca `intro.mp4` en `public/videos/` y actualiza `heroMedia` en `media.ts`.

### 4. CV en PDF

Reemplaza [`public/cv/cv.pdf`](public/cv/cv.pdf) con tu CV real.

## Deploy en Vercel (gratis)

1. Sube el proyecto a GitHub:

   ```bash
   git add .
   git commit -m "Portfolio artístico inicial"
   git push -u origin main
   ```

2. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
3. Click en **Add New Project** → selecciona el repositorio.
4. Vercel detecta Next.js automáticamente. Click en **Deploy**.
5. Añade la variable de entorno `NEXT_PUBLIC_SITE_URL` con tu URL de Vercel (ej. `https://tu-proyecto.vercel.app`).
6. Tu sitio estará en `https://tu-proyecto.vercel.app`.

Cada push a `main` despliega automáticamente una nueva versión.

### Alternativas gratuitas

- **Netlify:** conecta el repo, build command `npm run build`, publish directory `.next` (o usa adaptador).
- **Cloudflare Pages:** añade `output: 'export'` en `next.config.ts` para export estático.

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build de producción      |
| `npm run start`| Servidor de producción   |
| `npm run lint` | Linter ESLint            |

## Stack

- **Next.js 16** — App Router, SSG
- **React 19** — UI
- **TypeScript** — tipado
- **Tailwind CSS 4** — estilos
- **next-intl** — i18n EN/ES
- **Framer Motion** — animaciones de entrada
