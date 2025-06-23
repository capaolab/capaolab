import React from 'react'
import { AppShell, Box, Text, Anchor } from '@mantine/core';
import ImageLink from '@/components/elements/ImageLink';
import { IconMail } from '@tabler/icons-react';

function Footer() {

    return (
        <AppShell.Footer
            withBorder={false}
            style={(theme) => ({
                backgroundColor: theme.colors.gray[9],
                color: theme.white,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyItems: 'start',
                position: 'relative',
                zIndex: 0,
            })}
        >
            <Box p={20}>
                <ImageLink
                    url="/"
                    src="/svg/cl-logo.svg"
                    alt="Capão Lab Logo"
                    width={40}
                    height={40}
                />
            </Box>
            <Box pl={20}>
                <Anchor
                    href="mailto:accounts@capaolab.com.br"
                    target="_blank"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10
                    }}
                >
                    <IconMail size={20} /> accounts@capaolab.com.br
                </Anchor>
                <Text size="sm" mt={10}>
                    © Capaolab - Todos direitos reservados
                </Text>
            </Box>
        </AppShell.Footer>
    );
}

export default Footer;
