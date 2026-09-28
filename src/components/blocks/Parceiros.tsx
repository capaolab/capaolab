'use client';

import { Box, Container, useMantineTheme } from '@mantine/core';
import SectionHeading from '@/components/elements/SectionHeading';
import { useMediaQuery } from '@mantine/hooks';
import { cardParceiros } from '@/content/cards';
import { useDesignTokens } from '@/theme/tokens';
import CarouselParceiros from '../elements/CarouselParceiros';

function Parceiros() {
    const theme = useMantineTheme();
    const { ink } = useDesignTokens();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <Box component="section" py={{ base: 56, md: 96 }}>
            <Container size="xxl" w="100%">
                <SectionHeading
                    index="04"
                    title="Parceiros"
                    intro="Somos reconhecidos por líderes do setor por fornecer soluções tecnológicas de alta qualidade e impulsionar o sucesso de nossos clientes."
                />
                <Box mt={40} p={{ base: 20, md: 40 }} style={{ backgroundColor: ink }}>
                    <CarouselParceiros content={cardParceiros} mediaQuery={mediaQuery} />
                </Box>
            </Container>
        </Box>
    );
}

export default Parceiros;
