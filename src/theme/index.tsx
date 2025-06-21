'use client';

import '@mantine/core/styles.css';
import { createTheme } from '@mantine/core';
import { terracota, folha } from './colors';

const theme = createTheme({
    fontFamily: 'Manrope, sans-serif',
    fontFamilyMonospace: 'IBM Plex Mono, monospace',
    breakpoints: {
        xs: '30em',
        sm: '48em',
        md: '64em',
        lg: '74em',
        xl: '90em',
    },
    fontSizes: {
        xs: '0.75',
        sm: '0.875',
        md: '1',
        lg: '1.125',
        xl: '1.25',
    },
    lineHeights: {
        xs: '1.4',
        sm: '1.45',
        md: '1.55',
        lg: '1.6',
        xl: '1.65',
    },
    headings: {
        fontFamily: 'Manrope, sans-serif',
        fontWeight: '600',
        sizes: {
            h1: {
                fontWeight: '700',
                fontSize: '2.5rem',
                lineHeight: '1.0',
            },
            h2: {
                fontWeight: '500',
                fontSize: '2rem',
                lineHeight: '1.25',
            },
            h3: {
                fontWeight: '300',
                fontSize: '1.5rem',
                lineHeight: '1.25',
            },
            h4: {
                fontWeight: '500',
                fontSize: '1.5rem',
                lineHeight: '1.5',
            },
        },
    },

    colors: {
        terracota,
        folha,
    },

    components: {
        Button: {
            defaultProps: {
                variant: 'filled',
                size: 'md',
                radius: 'md',
                color: 'folha.7',
            },
        },
    }
});

export default theme;
