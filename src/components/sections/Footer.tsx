import React from 'react';
import { Box, Container, Flex, SimpleGrid, Text } from '@mantine/core';
import ContatoFooter from '@/components/elements/ContatoFooter';
import IndiceFooter from '@/components/elements/IndiceFooter';
import SigaFooter from '@/components/elements/SigaFooter';
import { useDesignTokens } from '@/theme/tokens';
import { base } from '@/content/infos'

function Footer() {
    const { paper, ink, muted, line } = useDesignTokens();

    return (
        <Box
            component="footer"
            id="contato"
            style={{ backgroundColor: paper, color: ink, borderTop: `1px solid ${line}` }}
        >
            <Container size="xxl" w="100%" py={{ base: 40, md: 56 }}>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={40}>
                    <Box>
                        <Text
                            ff="var(--mantine-font-family-monospace)"
                            fz={17}
                            tt="uppercase"
                            mb={10}
                            style={{ letterSpacing: '0.14em' }}
                        >
                            {base.title}
                        </Text>
                        <Text ff="var(--mantine-font-family-monospace)" fz={13} style={{ letterSpacing: '0.08em', color: muted }}>
                            {base.subtitle}
                        </Text>
                    </Box>
                    <ContatoFooter />
                    <IndiceFooter />
                    <SigaFooter />
                </SimpleGrid>
            </Container>

            <Box style={{ borderTop: `1px solid ${line}` }}>
                <Container size="xxl" w="100%" py={16}>
                    <Flex justify="space-between" wrap="wrap" gap={8}>
                        <Text ff="var(--mantine-font-family-monospace)" fz={13} style={{ color: muted }}>
                            © 2026 Capão Lab
                        </Text>
                        {/* TODO Construir páginas para informações*/}
                        <Text ff="var(--mantine-font-family-monospace)" fz={13} style={{ color: muted }}>
                            Termos · Privacidade · Cookies
                        </Text>
                    </Flex>
                </Container>
            </Box>
        </Box>
    );
}

export default Footer;
