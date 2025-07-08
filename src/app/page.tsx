'use client';

import React from 'react';
import { Box, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Banner from '@/components/blocks/Banner';
import Missao from '@/components/blocks/Missao';
import Compromisso from '@/components/blocks/Compromisso';
export default function Home() {
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
    const containerQuery = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

    
    return (
        <Box component='div'>
            <Banner mediaQuery={mediaQuery} containerQuery={containerQuery} />
            <Missao mediaQuery={mediaQuery} containerQuery={containerQuery} />
            <Compromisso mediaQuery={mediaQuery} containerQuery={containerQuery} />
        </Box>
    );
}
