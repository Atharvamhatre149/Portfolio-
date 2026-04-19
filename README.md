# Atharva Mhatre — Portfolio

Apple-inspired, 3D-animated personal portfolio built with **React + Vite + Three.js**.

## Stack
- Vite + React 18
- Tailwind CSS
- Three.js · @react-three/fiber · @react-three/drei
- Framer Motion
- GSAP
- Lenis (smooth scroll)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure
```
src/
├── components/     Section components (Hero, About, Experience, Projects, …)
├── three/          Three.js scenes (Orb, Cube, TagCloud)
├── data/           Content pulled from resume + GitHub
├── hooks/          useLenis
├── styles/         Tailwind entry
├── App.jsx
└── main.jsx
```

## Content
Profile data lives in `src/data/`:
- `profile.js` — name, tagline, socials, stats
- `experience.js` — work history
- `projects.js` — featured projects
- `skills.js` — tech stack
- `achievements.js` — awards

Edit those files to update the site.
