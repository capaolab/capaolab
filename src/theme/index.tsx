'use client';

import '@mantine/core/styles.css';
import { createTheme } from '@mantine/core';
import { terracota, folha } from './colors';

const theme = createTheme({
    breakpoints: {
        sm: '480px',    // Mobile
        md: '800px',    // Tablet
        lg: '1024px',   // Laptop
        xl: '1280px',   // Desktop
    },
    fontFamily: 'Manrope, sans-serif',
    fontFamilyMonospace: 'IBM Plex Mono, monospace',
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        axl: '26px',
        bxl: '30px',
        cxl: '36px',
        dxl: '48px',
        exl: '60px',
        fxl: '72px',
        gxl: '96px',
        hxl: '128px',
    },
    lineHeights: {
        xs: '1',
        sm: '1.25',
        md: '1.5',
        lg: '1.625',
        xl: '1.75',
    },
    headings: {
        fontFamily: 'Manrope, sans-serif',
        fontWeight: '600',
        sizes: {
            h1: {
                fontWeight: '700',
            },
            h2: {
                fontWeight: '500',
            },
            h3: {
                fontWeight: '300',
            },
            h4: {
                fontWeight: '300',
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
