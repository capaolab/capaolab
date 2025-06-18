'use client';

import React from 'react'
import { AppShell, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from '@/components/sections/Header';

function AppLayout({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <AppShell
            h={'100%'}
            transitionDuration={500}
            transitionTimingFunction="ease"
            padding="md"
            style={(theme) => ({
                backgroundColor: theme.colors.terracota[8],
            })}
            header={{
                height: { base: 60, sm: 60, mg: 60 }
            }}
            navbar={{
                width: { sm: 200, lg: 300 },
                breakpoint: 'sm',
                collapsed: { mobile: !opened, desktop: true },
            }}
            footer={{
                height: { base: 120, sm: 60, mg: 60 },
            }}
        >
            <Header opened={opened} toggle={toggle} />
            <AppShell.Main
                mt={60}
                p="md"
                style={(theme) => ({
                    // backgroundColor: theme.colors.terracota[2],
                    color: theme.white,
                    boxShadow: theme.shadows.sm,
                })}
            >
                {children}
            </AppShell.Main>
            <AppShell.Footer
                withBorder={false}
                p="md"
                style={(theme) => ({
                    backgroundColor: theme.colors.gray[9],
                    color: theme.white,
                })}
            >
                <Text size="sm">
                    2023 © Capaolab - All rights reserved
                </Text>
            </AppShell.Footer>
        </AppShell>
    )
}

export default AppLayout