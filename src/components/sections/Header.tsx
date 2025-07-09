'use client';

import React from 'react';
import Link from "next/link";
import {
    AppShell,
    Burger,
    useMantineTheme,
    Container,
    Image,
    Flex
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import MenuDesk from '../blocks/MenuDesk';
import classes from "./sections.module.css";

function Header({ opened, toggle }: { opened: boolean, toggle: () => void }) {
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
    const containerQuery = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);


    return (
        <AppShell.Header
            py={{ base: 10, sm: 10, md: 20, lg: 20, xl: 20 }}
            withBorder={false}
            style={(theme) => ({
                width: '100%',
                backgroundColor: theme.white,
                color: theme.black,
                zIndex: 110,
            })}
        >
            <Container
                component='section'
                w={'100%'}
                display={'flex'}
                size={containerQuery ? 'xxl' : 'lg'}
            >
                <Flex
                    w={'100%'}
                    direction='row'
                    justify='start'
                    align="center"
                >
                    <Link href="/" className={classes.imageLink}>
                        <Image
                            src={mediaQuery ? '/svg/cl-terracota.svg' : '/svg/logotipo_terracota.svg'}
                            alt="Capão Lab Logo"
                            fit='contain'
                            w={mediaQuery ? 35 : 200}
                            h={mediaQuery ? 35 : 50}
                        />
                    </Link>
                    <Flex
                        w={'100%'}
                        justify='flex-end'
                        align="center"
                    >
                        <MenuDesk />
                        <Burger
                            opened={opened}
                            variant="filled"
                            onClick={toggle}
                            hiddenFrom="lg"
                            size="md"
                            color={theme.colors.terracota[8]}
                        />
                    </Flex>
                </Flex>
            </Container>
        </AppShell.Header>
    )
}

export default Header
