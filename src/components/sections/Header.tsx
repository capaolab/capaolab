'use client';

import React from 'react';
import {
    AppShell,
    Burger,
    useMantineTheme,
    Group,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ImageLink from '@/components/elements/ImageLink';
import MenuDesk from '../blocks/MenuDesk';

function Header({ opened, toggle }: { opened: boolean, toggle: () => void }) {
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <AppShell.Header
            p={{ base: 10, lg: 15, xl: 20 }}
            withBorder={false}
            style={(theme) => ({
                height: 'auto',
                backgroundColor: theme.colors.terracota[8],
                color: theme.white,
                display: 'flex',
                alignItems: 'center',
                justifyItems: 'center',
                justifyContent: 'space-between',
                zIndex: 110,
                position: 'fixed',
                top: 0,
                left: 0,
            })}
        >
            <Group
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100%',
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
            </Group>
        </AppShell.Header>
    )
}

export default Header
