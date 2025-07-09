'use client';

import React from 'react'
import { AppShell, useMantineTheme, } from '@mantine/core';
import { useDisclosure, useHeadroom, useMediaQuery } from '@mantine/hooks';
import Header from '@/components/sections/Header';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';

function AppLayout({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure(false);
    const theme = useMantineTheme();
    const pinned = useHeadroom({ fixedAt: 120 });

    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
    const containerQuery = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

    return (
        <AppShell
            transitionDuration={500}
            transitionTimingFunction="ease"
            layout='alt'
            header={{
                height: { base: 60, sm: 60, md: 80, lg: 80, xl: 100 },
                offset: true,
                collapsed: !pinned,
            }}
            navbar={{
                width: '100%',
                breakpoint: 'lg',
                collapsed: { mobile: !opened, desktop: true },
            }}
            footer={{
                height: { base: 'auto', sm: 'auto', mg: 'auto', lg: 'auto', xl: 'auto' },
            }}
        >
            <Header opened={opened} toggle={toggle} />
            <Navbar />
            <AppShell.Main
                bg={theme.white}
                c={theme.colors.gray[9]}
            >
                {children}
            </AppShell.Main>
            <Footer containerQuery={containerQuery} mediaQuery={mediaQuery} />
        </AppShell>
    )
}

export default AppLayout
