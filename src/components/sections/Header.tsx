'use client';

import React from 'react';
import {
    AppShell,
    Burger,
    useMantineTheme,
    Group,
    Overlay,
    Box,
    Title,
} from '@mantine/core';

import ImageLink from '@/components/elements/ImageLink';
import MenuDesk from '../blocks/MenuDesk';

function NavBar({ opened, toggle }: { opened: boolean, toggle: () => void }) {
    const theme = useMantineTheme();

    return (
        <>
            <AppShell.Header
                p="md"
                withBorder={false}
                style={(theme) => ({
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
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <ImageLink
                        url="/"
                        src="/img/cl-logo.jpeg"
                        alt="Capão Lab Logo"
                        width={40}
                        height={40}
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
            <AppShell.Navbar
                withBorder={false}
                style={
                    (theme) => ({
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'transparent',
                        color: theme.white,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 100,
                    })}
            >
                <Box style={{
                    zIndex: 110,
                }}>
                    <Title order={3}>NavBar</Title>
                </Box>
                <Overlay color={theme.colors.gray[6]} backgroundOpacity={0.35} blur={10} zIndex={100} />
            </AppShell.Navbar>
        </>
    )
}

export default NavBar
