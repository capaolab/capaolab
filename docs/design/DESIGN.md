# Design System - Capaolab

This design system defines the visual and functional characteristics of the Capaolab project, utilizing [Mantine UI](https://mantine.dev/).

The site follows a flat, editorial layout: hairline borders instead of shadows/cards, monospace labels for navigation and metadata, and a single accent color reserved for links, status labels, and CTAs.

## Theme & Appearance
- **Accent (Terracota)**: `terracota.7` (`#C2542F`)
  - Palette: `#FBF3EF`, `#F3E1D7`, `#E7C0AC`, `#DB9E80`, `#D07D57`, `#C86A42`, `#C2542F`, `#C2542F`, `#9A4225`, `#5C2716`
- **Secondary Color (Folha)**:
  - Palette: `#fcf7ed`, `#f6eddc`, `#eedab2`, `#e6c584`, `#e0b45e`, `#dca846`, `#daa339`, `#c18e2c`, `#ac7e24`, `#6d4f12`
- **Neutrals** (`theme.other`, also exported from `src/theme/colors.ts`): `paper` `#F6F3F0` (page background), `ink` `#16120F` (primary text), `muted` `#6B635D` (secondary text), `line` `#DFD8D1` (hairline borders).
- **Roundness**: `0` — flat corners everywhere, no shadows.

## Typography
- **Font Family (Body & Headlines)**: `IBM Plex Sans`, sans-serif
- **Monospace Font**: `IBM Plex Mono`, monospace — used for nav links, eyebrow labels, stat values, and the search UI

### Text Styles
- **title1**: Base `bxl`, Lg `cxl`, Xl `exl`
- **title2**: Base `xl`, Lg `bxl`, Xl `cxl`
- **title3**: Base `md`, Lg `xl` (font-weight: 300)
- **normalText**: Base `md`, Lg `lg`, Xl `xl` (font-weight: 300)
- **navLink**: Base `lg`, Xl `xl`

## Components
- **Button**: Default `filled` variant, size `lg`, radius `0`, colored `terracota.7`.
- **Container**: Custom responsive sizes (sm: 400, md: 768, lg: 1024, xl: 1280, xxl: 1600).
- **Design tokens hook**: `useDesignTokens()` in `src/theme/tokens.ts` returns `{ accent, accentDark, paper, ink, muted, line }` — prefer it over re-destructuring `theme.colors`/`theme.other` in new components.

## Homepage sections
1. `Hero` — headline + "ask in natural language" search bar (see below), suggestion chips, and the `ContourField` backdrop (right side on desktop, faint corner on mobile). The field speeds up while the visitor types in the search input.
2. `StatsBar` — 4-column hairline strip (base, natureza, frentes ativas, índice atualizado).
3. `Projetos` (`#projetos`, `01`) — desktop: fills one screen, index list + detail panel whose cover is a `ContourField` seeded per project. Mobile: compact accordion rows. Content in `src/content/cards.ts` (`projetosContent`).
4. `Frentes` (`#frentes`, `02`) — 2×2 hairline grid, content in `src/content/cards.ts` (`frentesContent`).
5. `QuemSomos` (`#quem-somos`, `03`) — full-bleed dark (`ink`) band: manifesto, live coordinates + local time, 3-step process.
6. `Parceiros` (`04`) — partner logo carousel, content in `src/content/cards.ts` (`cardParceiros`).
7. `Footer` (`#contato`) — 4-column hairline footer + bottom bar.

Every numbered section opens with `SectionHeading` (`src/components/elements/SectionHeading.tsx`): accent index + mono label, large display title, ink rule. Keep section titles at that scale so they stay clearly louder than item titles and metadata. Anchored sections use `classes.anchorSection` so they land below the sticky header.

## ContourField
`src/components/elements/ContourField.tsx` is the site's single graphic motif: the logo's concentric squares warped into topographic contour lines, with one terracota level pulsing outward. Reuse it (with a different `seed`/`origin`) rather than adding unrelated imagery. It pauses offscreen and renders a still frame under `prefers-reduced-motion`. Its parent must be positioned (`position: relative/absolute`) — the canvas fills it absolutely.

## Search ("ask in natural language")
`HomeExperience` (`src/components/blocks/HomeExperience.tsx`) toggles the homepage between the section list above and `SearchResults`. It is a small keyword-matched knowledge base, not a real assistant — content lives in `src/content/searchKb.ts` (`SEARCH_KB` + `SEARCH_FALLBACK`, matched via `answerQuery()`). Extend the KB when new projects/frentes ship so the search stays accurate.

## Principles
1. **Consistency**: Use the defined Mantine theme tokens (`src/theme`) for all new components; use `useDesignTokens()` for the editorial neutrals.
2. **Typography Scale**: Prefer the exported typography constants from `typoghaphy.ts` for text elements, and the monospace font for labels/metadata.
3. **Responsiveness**: Use the configured breakpoints (sm: 400px, md: 768px, lg: 1024px, xl: 1280px) and Container wrapper logic.
4. **Flat over decorative**: hairline borders (`line`) instead of shadows or rounded cards; reserve the accent color for interactive/status elements — aim for one accent focal point per screen.
5. **Contrast**: body/secondary text uses `muted` (`#6B635D`, 5.3:1 on `paper`); don't introduce lighter grays for text. Neutrals are also available in CSS modules as `--cl-paper`, `--cl-ink`, `--cl-muted`, `--cl-line`.
