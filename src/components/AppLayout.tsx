'use client';

import React from 'react';
import { Box } from '@mantine/core';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { useDesignTokens } from '@/theme/tokens';
import { HomeSearchProvider } from '@/providers/HomeSearchContext';

function AppLayout({ children }: { children: React.ReactNode }) {
    const { paper, ink } = useDesignTokens();

    return (
        <HomeSearchProvider>
            <Box style={{ backgroundColor: paper, color: ink, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
