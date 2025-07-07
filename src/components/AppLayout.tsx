'use client';

import React from 'react'
import { AppShell, useMantineTheme, Box } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import Header from '@/components/sections/Header';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';

function AppLayout({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure(false);
    const pinned = useHeadroom({ fixedAt: 120 });
    const theme = useMantineTheme();

    return (
        <AppShell
            transitionDuration={500}
            transitionTimingFunction="ease"
            py={{ base: 20 }}
            layout='alt'
            header={{
                height: { base: 60, sm: 60, md: 60, lg: 60, xl: 60 },
                offset: true,
                collapsed: !pinned,
            }}
            navbar={{
                width: '100%',
                breakpoint: 'lg',
                collapsed: { mobile: !opened, desktop: true },
            }}
            footer={{
                height: { base: 200, sm: 300, mg: 500 },
            }}
        >
            <Box></Box>
            <Header
                opened={opened}
                toggle={toggle}
            />
            <Navbar />
            <AppShell.Main
                bg={theme.white}
                c={theme.colors.gray[9]}
            >
                {children}
            </AppShell.Main>
            <Footer />
        </AppShell>
    )
}

export default AppLayout
