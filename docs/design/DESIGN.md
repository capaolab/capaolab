# Design System - Capaolab

This design system defines the visual and functional characteristics of the Capaolab project, utilizing [Mantine UI](https://mantine.dev/).

## Theme & Appearance
- **Primary Color (Terracota)**: `terracota.7` (#b9432a)
  - Palette: `#fcf0ee`, `#f1deda`, `#e7bab0`, `#de9283`, `#d7725d`, `#d25d44`, `#d15237`, `#b9432a`, `#a53a24`, `#5b1e12`
- **Secondary Color (Folha)**: 
  - Palette: `#fcf7ed`, `#f6eddc`, `#eedab2`, `#e6c584`, `#e0b45e`, `#dca846`, `#daa339`, `#c18e2c`, `#ac7e24`, `#6d4f12`
- **Roundness**: `md` default border-radius.

## Typography
- **Font Family (Body & Headlines)**: `Manrope`, sans-serif
- **Monospace Font**: `IBM Plex Mono`, monospace

### Text Styles
- **title1**: Base `bxl`, Lg `cxl`, Xl `exl`
- **title2**: Base `xl`, Lg `bxl`, Xl `cxl`
- **title3**: Base `md`, Lg `xl` (font-weight: 300)
- **normalText**: Base `md`, Lg `lg`, Xl `xl` (font-weight: 300)
- **navLink**: Base `lg`, Xl `xl`

## Components
- **Button**: Default `filled` variant, size `lg`, radius `md`, colored `terracota.7`.
- **Container**: Custom responsive sizes (sm: 400, md: 768, lg: 1024, xl: 1280, xxl: 1600).

## Principles
1. **Consistency**: Use the defined Mantine theme tokens (`src/theme`) for all new components.
2. **Typography Scale**: Prefer the exported typography constants from `typoghaphy.ts` for text elements.
3. **Responsiveness**: Use the configured breakpoints (sm: 400px, md: 768px, lg: 1024px, xl: 1280px) and Container wrapper logic.
