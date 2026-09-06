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
        xs: '14px',
        sm: '17px',
        md: '19px',
        lg: '22px',
        xl: '26px',
        axl: '31px',
        bxl: '36px',
        cxl: '43px',
        dxl: '58px',
        exl: '72px',
        fxl: '86px',
        gxl: '115px',
        hxl: '154px',
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
