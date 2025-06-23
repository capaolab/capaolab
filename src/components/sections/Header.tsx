'use client';

import React from 'react';
import {
    AppShell,
    Burger,
    useMantineTheme,
    Group,
    Container
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ImageLink from '@/components/elements/ImageLink';
import MenuDesk from '../blocks/MenuDesk';

function Header({ opened, toggle }: { opened: boolean, toggle: () => void }) {
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

    return (
        <AppShell.Header
            p={{ base: 10, sm: 20, md: 20, lg: 20, xl: 20 }}
            withBorder={false}
            style={(theme) => ({
                height: 'auto',
                backgroundColor: theme.colors.terracota[8],
                color: theme.white,
                display: 'flex',
                alignItems: 'center',
                justifyItems: 'center',
                justifyContent: 'space-between',
                // zIndex: 110,
            })}
        >
            <Container
                size="xl"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <ImageLink
                    url="/"
                    src={mediaQuery ? '/img/cl-logo.jpeg' : '/img/logotipo.png'}
                    alt="Capão Lab Logo"
                    width={mediaQuery ? 40 : 200}
                    height={mediaQuery ? 40 : 40}
                />
                <MenuDesk />
                <Burger
                    opened={opened}
                    variant="outline"
                    onClick={toggle}
                    hiddenFrom="md"
                    size="sm"
                    color={theme.colors.blue[1]}
                />
            </Container>
        </AppShell.Header>
    )
}

export default Header
