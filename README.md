# 3D Portfolio — Chandra Bhakar

Personal 3D portfolio built with React, TypeScript, Three.js, React Three Fiber, and GSAP. Features animated page sections, a 3D character scene, custom cursor interactions, and smooth scroll-driven transitions.

## Tech Stack

### Core
- React 18, TypeScript, Vite

### Animation & 3D
- GSAP + `@gsap/react`
- Three.js, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`, `@react-three/rapier`

### Supporting
- `react-icons`, `react-fast-marquee`, `@vercel/analytics`

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

## Project Structure

```text
├── public/                    # Static assets & images
├── src/
│   ├── components/
│   │   ├── Character/         # 3D scene + character logic
│   │   ├── styles/            # Component CSS
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatIDo.tsx
│   │   └── Work.tsx
│   ├── context/               # Global providers
│   ├── data/                  # Static data
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## License

This project is open source and available under the [MIT License](LICENSE).
