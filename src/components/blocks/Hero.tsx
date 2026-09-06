'use client';

import React, { useState } from 'react';
import { Box, Container, Flex, Text, Title } from '@mantine/core';
import { useDesignTokens } from '@/theme/tokens';
import { SEARCH_SUGGESTIONS } from '@/content/searchKb';
import { base } from '@/content/infos';
import classes from './blocks.module.css';

interface HeroProps {
    onSearch: (query: string) => void;
}

function Hero({ onSearch }: HeroProps) {
    const { accent, muted, line, ink } = useDesignTokens();
    const [query, setQuery] = useState('');

    function submit(e: React.FormEvent) {
        e.preventDefault();
        onSearch(query);
    }

    return (
        <Box id="topo" className={classes.heroSlot} style={{ borderBottom: `1px solid ${line}` }}>
            <Container size="xxl" w="100%" py={{ base: 40, md: 60 }}>
                <Text
                    ff="var(--mantine-font-family-monospace)"
                    fz={13}
                    tt="uppercase"
                    mb={16}
                    style={{ letterSpacing: '0.14em', color: muted }}
                >
                    {base.subtitle}
                </Text>

                <Flex
                    align="center"
                    gap={10}
                    mb={34}
                    style={{
                        display: 'inline-flex',
                        width: 'fit-content',
                        border: `1px solid ${accent}`,
                        backgroundColor: 'var(--mantine-color-terracota-0)',
                        padding: '6px 14px 6px 10px',
                    }}
                >
                    <Box
                        className={classes.pulseDotSlow}
                        style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: accent,
                        }}
                    />
                    <Text
                        ff="var(--mantine-font-family-monospace)"
                        fz={10}
                        tt="uppercase"
                        style={{ letterSpacing: '0.14em', color: muted }}
                    >
                        busca em linguagem natural · índice v0.1
                    </Text>
                </Flex>

                <Title
                    order={1}
                    fw={500}
                    fz={{ base: 48, sm: 62, md: 77, lg: 91 }}
                    lh={0.98}
                    maw={1080}
                    mb={12}
                    style={{ letterSpacing: '-0.035em' }}
                >
                    O que você precisa saber sobre o{' '}
                    <Text component="span" inherit style={{ color: accent }}>
                        Capão Lab
                    </Text>
                    ?
                </Title>
                <Text fz={{ base: 19, md: 23 }} maw={740} mb={44} style={{ color: muted, lineHeight: 1.5 }}>
                    Escreva a pergunta como você falaria. O índice responde em texto e aponta para o projeto,
                    a frente ou o contato correspondente.
                </Text>

                <Box component="form" onSubmit={submit} maw={1080} style={{ borderBottom: `1.5px solid ${ink}` }} pb={14}>
                    <Flex align="center" gap={16}>
                        <Text ff="var(--mantine-font-family-monospace)" fz={26} style={{ color: accent }}>
                            &gt;
                        </Text>
                        <Box
                            component="input"
                            value={query}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                            placeholder="quem faz parte do lab? quais projetos estão ativos?"
                            className={classes.heroInput}
                            style={{
                                flex: 1,
                                border: 'none',
                                outline: 'none',
                                background: 'transparent',
                                fontFamily: 'var(--mantine-font-family-monospace)',
                                fontSize: 25,
                                color: ink,
                                padding: 0,
                                minWidth: 0,
                            }}
                        />
                        <Box
                            component="button"
                            type="submit"
                            className={classes.ctaButton}
                            style={{
                                border: 'none',
                                background: ink,
                                color: 'var(--mantine-color-body)',
                                fontFamily: 'var(--mantine-font-family-monospace)',
                                fontSize: 14,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                padding: '11px 18px',
                                cursor: 'pointer',
                            }}
                        >
                            perguntar
                        </Box>
                    </Flex>
                </Box>

                <Flex wrap="wrap" gap={8} mt={20} maw={1080}>
                    {SEARCH_SUGGESTIONS.map((suggestion) => (
                        <Box
                            key={suggestion}
                            component="button"
                            type="button"
                            onClick={() => onSearch(suggestion)}
                            className={classes.suggestion}
                            style={{
                                fontFamily: 'var(--mantine-font-family-monospace)',
                                fontSize: 14,
                                border: `1px solid ${line}`,
                                padding: '7px 12px',
                            }}
                        >
                            {suggestion.toLowerCase()}
                        </Box>
                    ))}
                </Flex>
            </Container>
        </Box>
    );
}

export default Hero;
