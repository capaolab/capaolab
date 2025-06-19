import '@mantine/core/styles.css';
import { createTheme, rem } from '@mantine/core';
import { terracota, folha } from './colors';

const theme = createTheme({
    fontFamily: 'Manrope, sans-serif',
    fontFamilyMonospace: 'IBM Plex Mono, monospace',
    fontSizes: {
        xs: '0.75',
        sm: '0.875',
        md: '1',
        lg: '1.125',
        xl: '1.25',
        '2xl': ' 1.5',
        '3xl': ' 1.875',
        '4xl': ' 2.25',
        '5xl': ' 3',
        '6xl': ' 3.75',
        '7xl': ' 4.5',
        '8xl': ' 6',
        '9xl': ' 8',
        '10xl': ' 10',
        '11xl': ' 12',
        '12xl': ' 14',
        '13xl': ' 16',
        '14xl': ' 18',
        '15xl': ' 20',
        '16xl': ' 24',
        '17xl': ' 28',
        '18xl': ' 32',
        '19xl': ' 36',
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
                fontSize: '3rem',
                lineHeight: '1.0',
            },
            h2: {
                fontWeight: '500',
                fontSize: '2.5rem',
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

    /**COLORS */
    colors: {
        terracota,
        folha,
    },
});

export default theme;