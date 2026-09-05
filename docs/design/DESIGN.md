# Design System - Capaolab

This design system defines the visual and functional characteristics of the Capaolab project, utilizing [Mantine UI](https://mantine.dev/).

The site follows a flat, editorial layout: hairline borders instead of shadows/cards, monospace labels for navigation and metadata, and a single accent color reserved for links, status labels, and CTAs.

## Theme & Appearance
- **Accent (Terracota)**: `terracota.7` (`#C2542F`)
  - Palette: `#FBF3EF`, `#F3E1D7`, `#E7C0AC`, `#DB9E80`, `#D07D57`, `#C86A42`, `#C2542F`, `#C2542F`, `#9A4225`, `#5C2716`
- **Secondary Color (Folha)**:
  - Palette: `#fcf7ed`, `#f6eddc`, `#eedab2`, `#e6c584`, `#e0b45e`, `#dca846`, `#daa339`, `#c18e2c`, `#ac7e24`, `#6d4f12`
- **Neutrals** (`theme.other`, also exported from `src/theme/colors.ts`): `paper` `#F6F3F0` (page background), `ink` `#16120F` (primary text), `muted` `#8C837C` (secondary text), `line` `#DFD8D1` (hairline borders).
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
1. `Hero` — headline + "ask in natural language" search bar (see below), suggestion chips.
2. `StatsBar` — 4-column hairline strip (base, natureza, frentes ativas, índice atualizado).
3. `Projetos` (`#projetos`) — chronological editorial list, content in `src/content/cards.ts` (`projetosContent`).
4. `Frentes` (`#frentes`) — 2×2 hairline grid, content in `src/content/cards.ts` (`frentesContent`).
5. `QuemSomos` (`#quem-somos`) — mission statement.
6. `Parceiros` — partner logo carousel, content in `src/content/cards.ts` (`cardParceiros`).
7. `Footer` (`#contato`) — 4-column hairline footer + bottom bar.

## Search ("ask in natural language")
`HomeExperience` (`src/components/blocks/HomeExperience.tsx`) toggles the homepage between the section list above and `SearchResults`. It is a small keyword-matched knowledge base, not a real assistant — content lives in `src/content/searchKb.ts` (`SEARCH_KB` + `SEARCH_FALLBACK`, matched via `answerQuery()`). Extend the KB when new projects/frentes ship so the search stays accurate.

## Principles
1. **Consistency**: Use the defined Mantine theme tokens (`src/theme`) for all new components; use `useDesignTokens()` for the editorial neutrals.
2. **Typography Scale**: Prefer the exported typography constants from `typoghaphy.ts` for text elements, and the monospace font for labels/metadata.
3. **Responsiveness**: Use the configured breakpoints (sm: 400px, md: 768px, lg: 1024px, xl: 1280px) and Container wrapper logic.
4. **Flat over decorative**: hairline borders (`line`) instead of shadows or rounded cards; reserve the accent color for interactive/status elements.
