import React from 'react';
import { Box, Container, SimpleGrid, Text, Title } from '@mantine/core';
import { frentesContent } from '@/content/cards';
import { useDesignTokens } from '@/theme/tokens';

function Frentes() {
    const { accent, muted, line, paper } = useDesignTokens();

    return (
        <Box id="frentes" component="section">
            <Container size="xxl" w="100%" py={{ base: 56, md: 80 }}>
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 40, md: 64 }} mb={40}>
                    <Title
                        order={2}
                        ff="var(--mantine-font-family-monospace)"
                        fz={14}
                        tt="uppercase"
                        fw={500}
                        style={{ letterSpacing: '0.14em' }}
                    >
                        Frentes
                    </Title>
                    <Text fz={18} style={{ color: muted, lineHeight: 1.55, maxWidth: 550 }}>
                        O que o lab entrega, sem intermediários. Cada frente abre um projeto próprio no índice.
                    </Text>
                </SimpleGrid>

                <SimpleGrid
                    cols={{ base: 1, md: 2 }}
                    spacing={1}
                    style={{ backgroundColor: line, border: `1px solid ${line}` }}
                >
                    {frentesContent.map((frente) => (
                        <Box key={frente.id} p={34} style={{ backgroundColor: paper }}>
                            <Text ff="var(--mantine-font-family-monospace)" fz={13} mb={14} style={{ color: accent }}>
                                {frente.id}
                            </Text>
                            <Title order={3} fz={26} fw={500} mb={10} style={{ letterSpacing: '-0.015em' }}>
                                {frente.title}
                            </Title>
                            <Text fz={18} style={{ color: muted, lineHeight: 1.55 }}>
                                {frente.description}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default Frentes;
