import React from 'react'
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, AppShell, Box, Text, Anchor } from '@mantine/core';
import ImageLink from '@/components/elements/ImageLink';

function Footer() {
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <AppShell.Footer
            withBorder={false}
            style={(theme) => ({
                backgroundColor: theme.colors.gray[9],
                color: theme.white,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyItems: 'center',
                position: 'relative',
                zIndex: 0,
            })}
        >
            <Box p={20}>
                <ImageLink
                    url="/"
                    src="/svg/cl-logo.svg"
                    alt="Capão Lab Logo"
                    width={mediaQuery ? 40 : 200}
                    height={mediaQuery ? 40 : 40}
                />
            </Box>
            <Box pl={20}>
                <Anchor href="mailto:accounts@capaolab.com.br" target="_blank">
                    accounts@capaolab.com.br
                </Anchor>
                <Text size="sm" mt={10}>
                    2023 © Capaolab - Todos direitos reservados
                </Text>
            </Box>
        </AppShell.Footer>
    );
}

export default Footer;
