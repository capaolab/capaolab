import React from 'react'
import { AppShell, Box, Text, Anchor, Container } from '@mantine/core';
import ImageLink from '@/components/elements/ImageLink';
import { IconMail } from '@tabler/icons-react';

interface FooterProps {
    containerQuery?: boolean;
    mediaQuery?: boolean;
}
function Footer({ containerQuery, mediaQuery }: FooterProps) {

    return (
        <AppShell.Footer
            withBorder={false}
            style={(theme) => ({
                backgroundColor: theme.colors.terracota[8],
                color: theme.white,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyItems: 'start',
                position: 'relative',
                zIndex: 0,
            })}
        >
            <Container
                w={'100%'}
                h={'100%'}
                component='section'
                size={containerQuery ? 'lg' : 'xxl'}
                py={{base: 10, sm: 10, md: 20, lg: 20, xl: 20}}
            >
                <Box w={'100%'} >
                    <ImageLink
                        url="/"
                        src="/svg/logotipo.svg"
                        alt="Capão Lab Logo"
                        width={160}
                        height={40}
                    />
                    <Anchor
                        href="mailto:accounts@capaolab.com.br"
                        target="_blank"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                        }}
                        mt={10}
                    >
                        <IconMail size={20} /> accounts@capaolab.com.br
                    </Anchor>
                    <Text size="sm" mt={10}>
                        © Capaolab - Todos direitos reservados
                    </Text>
                </Box>
            </Container>
        </AppShell.Footer>
    );
}

export default Footer;
