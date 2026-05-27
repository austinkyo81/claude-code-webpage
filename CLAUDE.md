# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build (required before deploying to Vercel)
npm run start      # Serve the production build locally
npm test           # Run all Playwright E2E tests (auto-starts dev server if not running)
npm run test:ui    # Open Playwright UI mode for interactive test debugging
npx tsc --noEmit  # Type-check without emitting — run before committing
```

To run a single test file or test by name:
```bash
npx playwright test tests/landing-page.spec.ts
npx playwright test --grep "Community Funnel"
```

Playwright requires Chromium installed separately if not already present:
```bash
npx playwright install chromium
```

## Architecture

Single-page Next.js 15 App Router site. There is exactly one route (`app/page.tsx`) that composes six full-width section components in order:

```
Navigation → Hero → Services → Community → VideoSection → Footer
```

**All section components are client components** (`'use client'`) because they use Framer Motion animations. `Footer` is the only server component.

**Animation pattern:** Framer Motion `whileInView` with `viewport={{ once: true }}` is used for all scroll-triggered reveals. Hero content uses `variants` with `staggerChildren` on mount. When specifying custom cubic-bezier easing, always use `as const` on the array (e.g. `[0.16, 1, 0.3, 1] as const`) — framer-motion v12 TypeScript types require `readonly [number, number, number, number]`, not `number[]`.

**Fonts** are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables:
- `--font-syne` → `font-syne` (Tailwind) — display/headings, weight 700–800
- `--font-dm-sans` → `font-sans` (Tailwind default override) — body text
- `--font-dm-mono` → `font-mono` (Tailwind) — labels, tags, small caps

**Design tokens** (Tailwind `theme.extend`):
- `gold` / `gold-light` — primary accent (`#c9a84c` / `#e4c76b`)
- Background: true black `#000000`; section alternates: `#030303`

**Static assets** are in `public/` and referenced as `/ich1.png`, `/ich2.png`, `/video.mp4`. The source image/video files also live in the project root — `public/` copies are what Next.js serves.

## Key external links hardcoded in components

| Link | Component |
|---|---|
| `mailto:arnio93@gmail.com` | Navigation, Hero, VideoSection, Footer |
| `https://www.skool.com/ai-mit-arnie-ki-revolution/about` | Community, Footer |
| `https://www.youtube.com/@Arnold-Oberleiter` | Footer |

All five Playwright tests in `tests/landing-page.spec.ts` assert these exact URLs plus the `€4M` qualifier text and `video[muted][playsinline]` attributes. Changing any of the above requires updating the tests.

## Deployment

Configured for Vercel. `next.config.js` sets `images.unoptimized: true` (suitable for static export if needed). No environment variables are required.
