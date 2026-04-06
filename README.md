# sj-ii

3D personal portfolio built with Next.js, React Three Fiber, and a data-driven cosmic brain scene.

## Stack

- Next.js App Router
- React 19
- React Three Fiber + Drei
- Framer Motion
- GSAP
- Zustand

## Scripts

```bash
npm install
npm run dev
npm run build
npm run start
```

## Hostinger deployment

- Deploy as a managed Node.js app from GitHub.
- Build command: `npm install && npm run build`
- Start command: `npm run start`
- Node version target: `22`
- Set `NEXT_PUBLIC_SITE_URL` in Hostinger environment variables.

## Notes

- The opening humanoid and crystal are procedural in v1.
- Scene content is driven from `content/portfolio-data.ts`.
- Repeat visitors can skip the intro via `localStorage`.
