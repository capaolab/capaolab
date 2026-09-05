'use client';

import { Box, Container, Flex, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { cardParceiros } from '@/content/cards';
import { useDesignTokens } from '@/theme/tokens';
import CarouselParceiros from '../elements/CarouselParceiros';

function Parceiros() {
    const theme = useMantineTheme();
    const { muted, line, ink } = useDesignTokens();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <Box component="section" py={{ base: 40, md: 60 }} style={{ borderTop: `1px solid ${line}` }}>
            <Container size="xxl" w="100%">
                <Flex direction="column" mb={30}>
                    <Title
                        order={2}
                        ff="var(--mantine-font-family-monospace)"
                        fz={12}
                        tt="uppercase"
                        fw={500}
                        style={{ letterSpacing: '0.14em' }}
                    >
                        Parceiros
                    </Title>
                    <Text fz={15} mt={12} maw={520} style={{ color: muted, lineHeight: 1.55 }}>
                        Somos reconhecidos por líderes do setor por fornecer soluções tecnológicas de alta
                        qualidade e impulsionar o sucesso de nossos clientes.
                    </Text>
                </Flex>
                <Box p={{ base: 20, md: 40 }} style={{ backgroundColor: ink }}>
                    <CarouselParceiros content={cardParceiros} mediaQuery={mediaQuery} />
                </Box>
            </Container>
        </Box>
    );
}

export default Parceiros;
