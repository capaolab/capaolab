'use client';

import React, { useSyncExternalStore } from 'react';
import { Box, Container, SimpleGrid, Text } from '@mantine/core';
import { useDesignTokens } from '@/theme/tokens';
import ContourField from '@/components/elements/ContourField';
import SectionHeading from '@/components/elements/SectionHeading';
import classes from './blocks.module.css';

const FIELD_ORIGIN: [number, number] = [0.96, 1];

const PROCESSO = [
    {
        id: '01',
        title: 'Comunicação',
        description: 'Entendemos a operação antes de escrever código: conversa direta com quem vai usar o sistema.',
    },
    {
        id: '02',
        title: 'Colaboração',
        description: 'O cliente acompanha cada etapa e decide junto o que entra no escopo.',
    },
    {
        id: '03',
        title: 'Criação',
        description: 'Construímos, entregamos e seguimos mantendo o que foi feito, com canal direto de quem escreveu.',
    },
];

// Local time at the lab, ticking once per minute. Read through an external
// store so the server render (no clock) and the first client render agree.
const timeFormat = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Bahia',
});

function subscribeClock(onChange: () => void) {
    const id = window.setInterval(onChange, 15_000);
    return () => window.clearInterval(id);
}

function useLabTime() {
    return useSyncExternalStore(subscribeClock, () => timeFormat.format(new Date()), () => '');
}

function QuemSomos() {
    const { accent, paper } = useDesignTokens();
    const labTime = useLabTime();
    const soft = 'rgba(246, 243, 240, 0.62)';

    return (
        <Box id="quem-somos" component="section" className={`${classes.anchorSection} ${classes.darkBand}`}>
            <Box className={classes.darkBandField}>
                <ContourField
                    origin={FIELD_ORIGIN}
                    step={0.1}
                    lineColor="rgba(246, 243, 240, 0.1)"
                    accentColor="rgba(194, 84, 47, 0.55)"
                />
            </Box>
            <Container size="xxl" w="100%" py={{ base: 64, md: 112 }} className={classes.heroContent}>
                <SectionHeading
                    dark
                    index="03"
                    title="Quem somos"
                    headline="Uma soft house na Chapada Diamantina."
                    meta={
                        <>
                            <Box component="span" className={classes.pulseDotSlow} style={{ color: accent }}>
                                ●
                            </Box>{' '}
                            12°36′S 41°29′W · Caeté-Açu{labTime && ` · ${labTime}`}
                        </>
                    }
                    intro="Desenvolvemos soluções sob demanda, específicas para cada negócio — da conversa inicial ao código em produção."
                />

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing={0} mt={{ base: 32, md: 56 }}>
                    {PROCESSO.map((etapa, index) => (
                        <Box
                            key={etapa.id}
                            py={{ base: 24, md: 8 }}
                            pr={{ md: 40 }}
                            pl={{ md: index === 0 ? 0 : 40 }}
                            className={classes.darkBandStep}
                        >
                            <Text ff="var(--mantine-font-family-monospace)" fz={13} mb={12} style={{ color: accent }}>
                                {etapa.id}
                            </Text>
                            <Text fz={{ base: 24, md: 28 }} fw={500} mb={10} style={{ color: paper, letterSpacing: '-0.015em' }}>
                                {etapa.title}
                            </Text>
                            <Text fz={17} style={{ color: soft, lineHeight: 1.55 }}>
                                {etapa.description}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>

                <Text
                    ff="var(--mantine-font-family-monospace)"
                    fz={13}
                    mt={{ base: 32, md: 56 }}
                    maw={720}
                    style={{ color: soft, lineHeight: 1.7 }}
                >
                    O lab associa-se a projetos de terceiros e mantém este site como índice público do que está em
                    curso. Projetos com parceiros entram no índice com escopo, situação e ponto de contato declarados.
                </Text>
            </Container>
        </Box>
    );
}

export default QuemSomos;
