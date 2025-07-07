'use client';

import React from 'react';
import Link from "next/link";
import NextImage from 'next/image';
import {
    AppShell,
    Burger,
    useMantineTheme,
    Container,
    Image
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import MenuDesk from '../blocks/MenuDesk';
import classes from './sections.module.css';

function Header({ opened, toggle }: { opened: boolean, toggle: () => void }) {
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
    return (
        <AppShell.Header
            py={{ base: 10, sm: 10, md: 20, lg: 20, xl: 20 }}
            withBorder={false}
            style={(theme) => ({
                width: '100%',
                height: 'auto',
                backgroundColor: theme.white,
                color: theme.black,
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
            <Container
                size={mediaQuery ? 'lg' : 'xxl'}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <Link  href="/" className={classes.imageLink}>
                    <Image
                        component={NextImage}
                        src={mediaQuery ? '/svg/cl-terracota.svg' : '/svg/logotipo_terracota.svg'}
                        alt="Capão Lab Logo"
                        width={mediaQuery ? 30 : 160}
                        height={mediaQuery ? 30 : 40}
                    />
                </Link>
                <MenuDesk />
                <Burger
                    opened={opened}
                    variant="filled"
                    onClick={toggle}
                    hiddenFrom="lg"
                    size="sm"
                    color={theme.colors.terracota[8]}
                />
            </Container>
        </AppShell.Header>
    )
}

export default Header
