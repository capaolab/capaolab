'use client';

import React from 'react'
import { AppShell, Container } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import Header from '@/components/sections/Header';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';

function AppLayout({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure(false);
    const pinned = useHeadroom({ fixedAt: 120 });

    return (
        <AppShell
            transitionDuration={500}
            transitionTimingFunction="ease"
            padding={{ base: 20, xl: 20 }}
            layout='alt'
            style={(theme) => ({
                backgroundColor: theme.colors.terracota[8],
            })}
            header={{
                height: { base: 60, md: 80, xl: 80 },
                offset: true,
                collapsed: !pinned,
            }}
            navbar={{
                width: '100%',
                breakpoint: 'md',
                collapsed: { mobile: !opened, desktop: true },
            }}
            footer={{
                height: { base: 200, sm: 300, mg: 500 },
            }}
        >
            <Header opened={opened} toggle={toggle} />
            <Navbar />
            <AppShell.Main
                style={(theme) => ({
                    backgroundColor: theme.colors.terracota[8],
                    color: theme.white,
                    boxShadow: theme.shadows.sm,
                })}
            >
                <Container fluid style={{ height: '100%' }}>
                    {children}
                </Container>
            </AppShell.Main>
            <Footer />
        </AppShell>
    )
}

export default AppLayout
