'use client';

import '@mantine/core/styles.css';
import { createTheme, Container, rem } from '@mantine/core';
import { terracota, folha, paper, ink, muted, line } from './colors';

const CONTAINER_SIZES: Record<string, number> = {
    sm: 400,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1600,
};

const theme = createTheme({
    breakpoints: {
        sm: '400px',    // Mobile
        md: '768px',    // Tablet
        lg: '1024px',   // Laptop
        xl: '1280px',   // Desktop
    },
    fontFamily: 'IBM Plex Sans, system-ui, sans-serif',
    fontFamilyMonospace: 'IBM Plex Mono, monospace',
    defaultRadius: 0,
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '22px',
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
        fontFamily: 'IBM Plex Sans, system-ui, sans-serif',
        sizes: {
            h1: {
                fontWeight: '700',
            },
            h2: {
                fontWeight: '500',
            },
            h3: {
                fontWeight: '400',
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

    other: {
        paper,
        ink,
        muted,
        line,
    },

    components: {
        Container: Container.extend({
            vars: (_, { size, fluid }) => ({
                root: {
                    '--container-size': fluid
                        ? '100%'
                        : size !== undefined && size in CONTAINER_SIZES
                            ? rem(CONTAINER_SIZES[size])
                            : rem(size),
                },
            }),
        }),
        Button: {
            defaultProps: {
                variant: 'filled',
                size: 'lg',
                radius: 0,
                color: 'terracota.7',

            },
        },
    }
});

export default theme;
