# Nikhil Anand — Personal Link Page

## Goal

Create a personal link hub that introduces Nikhil Anand and directs visitors to his freelance services, DevKit Market, and social profiles. This is a single-owner website with static content. The current deliverable is the design and implementation plan.

## Reference and current project

- Visual reference: https://www.devkitmarket.com/
- Services destination: https://www.devkitmarket.com/hire-me
- Previous page: https://linktr.ee/nikhilanand.dev (could not be retrieved during planning).
- Existing project: Next.js 16.4.3, React 19.3, TypeScript, Tailwind CSS 4, App Router.
- Portrait: `public/profile.webp`, confirmed available and inspected.
- Next.js documentation is bundled in `node_modules/next/dist/docs/`; consult the relevant guides before implementation, as required by AGENTS.md.

## Visual direction

Follow DevKit Market's observed visual language: near-black background, faint square grid, soft violet glow, violet primary actions, restrained borders, rounded cards, and editorial serif headings paired with clean sans-serif body text.

Proposed tokens, to be checked for contrast during implementation:

| Token | Value | Purpose |
| --- | --- | --- |
| Canvas | #0B0B10 | Page background |
| Surface | #14131C | Link cards |
| Border | #2C293C | Card outlines |
| Foreground | #F4F2FA | Primary text |
| Muted | #A8A3B7 | Supporting text |
| Accent | #8470F4 | Buttons and highlights |
| Accent text | #BBAAFF | Small violet text |

- Serif display type for the name; Geist or a similar sans-serif for descriptions and links.
- Monospace labels used sparingly for section captions.
- Card corners: 16–20px. Use an 8px spacing scale.
- Keep the grid and glow decorative and low contrast; readability takes priority.
- Use SVG platform icons with consistent sizing.

## Page structure and copy

### 1. Compact header

Small `NA` monogram or `nikhilanand.dev` identity. Keep navigation minimal because the page has a single purpose.

### 2. Profile introduction

- Use `/profile.webp` with alt text `Nikhil Anand`.
- Show a roughly 112px rounded portrait, cropped around the face and upper body. Preserve the original image.
- Name: **Nikhil Anand**.
- Role: **Full-stack developer & maker**.
- Bio: **I build web products, developer tools, and ideas that ship. The maker behind DevKit Market.**
- Avoid adding availability claims or numerical credentials that need ongoing maintenance.

### 3. Featured destinations

Two prominent, full-width cards, each with an icon, title, short description, and directional arrow. The entire card is one anchor.

| Order | Title | Supporting copy | Destination |
| --- | --- | --- | --- |
| 1 | Hire me | Have an idea? Let's build your next web product. | https://www.devkitmarket.com/hire-me |
| 2 | DevKit Market | Starter kits, templates, and tools for developers. | https://www.devkitmarket.com/ |

Hire Me gets the strongest violet treatment. DevKit Market gets a dark surface with a violet border/accent. The Hire Me card opens the existing services page; no duplicate local services page is needed.

### 4. Social connections

Three clear link rows with recognizable icons and visible platform names. Use the caption **Find me online**.

| Title | Supporting copy | Destination |
| --- | --- | --- |
| GitHub | Code, projects, and open source | https://github.com/niks-nikhil-anand |
| X / Twitter | Thoughts on building and development | https://x.com/niks_developer |
| LinkedIn | Experience and professional connections | https://www.linkedin.com/in/nikhilanand86/ |

### 5. Footer

Small closing line: **Built by Nikhil. Made to connect.** Include a subtle DevKit Market link if it does not compete with the main card.

## Layout and interaction

- Mobile-first, centered single column, approximately 560px maximum content width.
- 20px side padding on small screens; generous breathing room on desktop.
- Keep the profile and first featured link visible near the top at a typical mobile viewport height.
- Social rows are at least 64px tall, with comfortable spacing and 44px minimum touch targets.
- Hover: slightly brighter surface/border and a small arrow translation; 150–200ms transitions.
- Keyboard: clear focus rings and logical top-to-bottom tab order.
- Respect reduced-motion preferences; all content stays visible without animation.
- Links use normal same-tab navigation so mobile visitors can use Back predictably.
- Start with one coherent dark theme. A theme switch can be added later if desired.

## Implementation sequence

1. Read the installed Next.js guides for pages/layouts, images, fonts, and metadata.
2. Define the profile and all five destinations in one typed content file for simple maintenance.
3. Replace the starter home page with the profile, featured cards, social rows, and footer.
4. Add semantic CSS variables, responsive spacing, background decoration, focus states, and reduced-motion handling in the global stylesheet.
5. Render the local portrait through Next.js Image with explicit dimensions and a deliberate crop.
6. Update page metadata: `Nikhil Anand | Developer & Maker`, a personal description, and social sharing metadata. Set canonical URLs once the deployment domain is known.
7. Replace the starter favicon with a simple NA monogram.
8. Run lint and the production build, then inspect the rendered page on mobile and desktop.

## Acceptance checklist

- All five destinations exactly match the supplied URLs.
- The supplied portrait renders clearly without distortion or layout shift.
- The design visibly follows DevKit Market's dark, violet, serif-led identity.
- Verify at 320px, 375px, 768px, and 1440px widths; no horizontal overflow.
- All cards work with mouse, touch, and keyboard, with visible focus states.
- Normal text meets WCAG AA contrast of at least 4.5:1.
- Reduced motion works, and decorative effects do not block interactions.
- No starter branding or placeholder links remain.
- Lint and production build pass.

## Scope

One public personal page with five external destinations. Static content is sufficient; no database, authentication, admin dashboard, or contact form is required. Deployment can follow after the page has been implemented and reviewed.
