# Nikhil Anand — Personal Linktree

A personal link hub built with Next.js App Router, React, TypeScript, and Tailwind CSS. Its dark canvas, violet accents, serif headings, and subtle grid follow DevKit Market's visual style.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run build
npm start
```

## Component architecture

- `app/page.tsx` composes the page from reusable server components.
- `components/site-header.tsx` renders the personal wordmark.
- `components/profile.tsx` renders the portrait and introduction.
- `components/featured-links.tsx` renders the Hire Me and DevKit Market buttons in a shared row.
- `components/social-links.tsx` renders the social navigation.
- `components/site-footer.tsx` renders the closing note.
- `components/icon.tsx` provides shared SVG icons.
- `components/link-logo.tsx` renders the local logo assets from `public` using Next.js Image.
- `data/profile.ts` holds profile content and typed link definitions.
- `app/globals.css` holds design tokens, component styles, and responsive rules.
- `app/layout.tsx` configures self-hosted Geist fonts and social metadata.

The page is statically prerendered. No database or client-side JavaScript components are required. The portrait is served locally through Next.js Image, and external links use normal browser navigation.

## Personalization

Edit `data/profile.ts` to update the biography and destinations. Replace `public/profile.webp` to change the portrait. Update metadata in `app/layout.tsx` when changing the page identity. Set a canonical URL once the final deployment domain is known.

## Accessibility

Includes semantic landmarks, visible focus indicators, a skip link, descriptive link text, reduced-motion support, safe-area padding, fluid typography, and responsive layouts checked across 84 viewport configurations. See [RESPONSIVE_TEST_REPORT.md](./RESPONSIVE_TEST_REPORT.md) for the complete matrix and verification limits.
