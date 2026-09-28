'use client';

import React from 'react';
import { Box } from '@mantine/core';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { useDesignTokens } from '@/theme/tokens';
import { HomeSearchProvider } from '@/providers/HomeSearchContext';

function AppLayout({ children }: { children: React.ReactNode }) {
    const { paper, ink, muted, line } = useDesignTokens();

    // Neutrals are also published as CSS vars so CSS modules can use them
    // (hover states, the dark bands) without hardcoding hex values.
    const cssVars = {
        '--cl-paper': paper,
        '--cl-ink': ink,
        '--cl-muted': muted,
        '--cl-line': line,
    } as React.CSSProperties;

    return (
        <HomeSearchProvider>
            <Box style={{ ...cssVars, backgroundColor: paper, color: ink, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <Box component="main" style={{ flex: 1 }}>
                    {children}
                </Box>
                <Footer />
            </Box>
        </HomeSearchProvider>
    );
}

export default AppLayout;
