import { MantineColorsTuple } from '@mantine/core';

// Index 7 is the accent shade referenced across the app (buttons, links,
// active states); index 8 is its hover/pressed shade. Keep both in sync
// with docs/design/DESIGN.md when the brand accent changes.
export const terracota: MantineColorsTuple = [
    "#FBF3EF",
    "#F3E1D7",
    "#E7C0AC",
    "#DB9E80",
    "#D07D57",
    "#C86A42",
    "#C2542F",
    "#C2542F",
    "#9A4225",
    "#5C2716"
]

export const folha: MantineColorsTuple = [
    "#fcf7ed",
    "#f6eddc",
    "#eedab2",
    "#e6c584",
    "#e0b45e",
    "#dca846",
    "#daa339",
    "#c18e2c",
    "#ac7e24",
    "#6d4f12"
]

// Editorial neutrals used by the flat, hairline-bordered layout. Exposed
// on theme.other so components can pull them via useDesignTokens().
export const paper = '#F6F3F0';
export const ink = '#16120F';
export const muted = '#6B635D';
export const line = '#DFD8D1';
