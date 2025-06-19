'use client';

import React from 'react'
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from '@/components/sections/Header';
import Footer from './sections/Footer';

function AppLayout({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <AppShell
            transitionDuration={500}
            transitionTimingFunction="ease"
            padding="md"
            layout='alt'
            style={(theme) => ({
                backgroundColor: theme.colors.terracota[8],
            })}
            header={{
                height: { base: 60, sm: 60, mg: 60 },
            }}
            navbar={{
                width: '100%',
                breakpoint: 'sm',
                collapsed: { mobile: !opened, desktop: true },
            }}
            footer={{
                height: { base: 200, sm: 300, mg: 500 },
            }}
        >
            <Header opened={opened} toggle={toggle} />
            <AppShell.Main
                style={(theme) => ({
                    color: theme.white,
                    boxShadow: theme.shadows.sm,
                })}
            >
                {children}
            </AppShell.Main>
            <Footer />
        </AppShell>
    )
}

export default AppLayout