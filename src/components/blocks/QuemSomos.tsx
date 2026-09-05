import React from 'react';
import { Box, Container, SimpleGrid, Text } from '@mantine/core';
import { useDesignTokens } from '@/theme/tokens';

function QuemSomos() {
    const { muted, ink } = useDesignTokens();

    return (
        <Box id="quem-somos" component="section" pb={80}>
            <Container size="xxl" w="100%">
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={64} pt={40} style={{ borderTop: `1px solid ${ink}` }}>
                    <Text
                        ff="var(--mantine-font-family-monospace)"
                        fz={12}
                        tt="uppercase"
                        fw={500}
                        style={{ letterSpacing: '0.14em' }}
                    >
                        Quem somos
                    </Text>
                    <Box maw={760}>
                        <Text fz={{ base: 22, md: 26 }} mb={22} style={{ lineHeight: 1.35, letterSpacing: '-0.015em' }}>
                            Uma soft house na Chapada Diamantina que desenvolve soluções sob demanda, específicas
                            para cada negócio.
                        </Text>
                        <Text fz={16} mb={12} style={{ color: muted, lineHeight: 1.6 }}>
                            A abordagem é integrada: comunicação, colaboração e criação no mesmo processo. O lab
                            associa-se a projetos de terceiros e mantém este site como índice público do que está
                            em curso.
                        </Text>
                        <Text fz={16} style={{ color: muted, lineHeight: 1.6 }}>
                            Projetos com parceiros entram no índice com escopo, situação e ponto de contato
                            declarados.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default QuemSomos;
