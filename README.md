# DESIGNER.EXE — Portfolio v2

A brutalist, high-voltage personal portfolio built with **Next.js 16 (App Router)**, **React 19** and **Tailwind CSS v4**.

## Stack

- Next.js 16.3 (Turbopack, static export-ready, SSG case studies)
- React 19.2
- Tailwind CSS v4 (`@theme` design tokens from the "Electric Brutalist" design system)
- Space Grotesk / Geist / JetBrains Mono via `next/font`
- Material Symbols outlined icons

## Pages

| Route              | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `/`                | Hero, marquee ticker, selected work                  |
| `/work`            | Project grid with category filtering                 |
| `/work/[slug]`     | SSG case study: challenge, solution, artifact gallery, next-project nav |
| `/about`           | Bio, capabilities, contact channels, transmission form |
| `/resources`       | Downloadable brutalist design assets                 |
| `/labs`            | Experimental project log                            |

## Design system

Design tokens live in `src/app/globals.css` under `@theme` (colors, type scale, spacing, hard-offset shadows) plus a `.dark` palette override. The reference design screens are in `design/screens/` (desktop + mobile HTML/PNG for each page).

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run lint      # eslint
npm run build     # production build (SSG)
npm run start     # serve production build
```

## Customizing

- **Projects & case studies:** edit `src/data/projects.ts`
- **Palette / typography / spacing:** edit the `@theme` block in `src/app/globals.css`
- **Nav / footer links:** `src/components/Nav.tsx`, `src/components/Footer.tsx`
- **Contact email:** `CONTACT_EMAIL` in `src/components/ContactForm.tsx` (mailto fallback)
- **Resources:** drop files into `public/resources/` and list them in `src/app/resources/page.tsx`

## Deploy

Builds are static-friendly (SSG case studies). Deploy anywhere Node is available, e.g. Vercel:

```bash
npm run build && vercel deploy --prod
```
