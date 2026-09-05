'use client';

import React, { useState } from 'react';
import { Box, Container, Flex, Text, Title } from '@mantine/core';
import { useDesignTokens } from '@/theme/tokens';
import { SEARCH_SUGGESTIONS } from '@/content/searchKb';
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
                <Flex align="center" gap={10} mb={34}>
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
                        fz={11}
                        tt="uppercase"
                        style={{ letterSpacing: '0.14em', color: muted }}
                    >
                        busca em linguagem natural · índice v0.1
                    </Text>
                </Flex>

                <Title
                    order={1}
                    fw={500}
                    fz={{ base: 40, sm: 52, md: 64, lg: 76 }}
                    lh={0.98}
                    maw={900}
                    mb={12}
                    style={{ letterSpacing: '-0.035em' }}
                >
                    O que você precisa saber sobre o Capão Lab?
                </Title>
                <Text fz={{ base: 16, md: 19 }} maw={620} mb={44} style={{ color: muted, lineHeight: 1.5 }}>
                    Escreva a pergunta como você falaria. O índice responde em texto e aponta para o projeto,
                    a frente ou o contato correspondente.
                </Text>

                <Box component="form" onSubmit={submit} maw={900} style={{ borderBottom: `1.5px solid ${ink}` }} pb={14}>
                    <Flex align="center" gap={16}>
                        <Text ff="var(--mantine-font-family-monospace)" fz={22} style={{ color: accent }}>
                            &gt;
                        </Text>
                        <Box
                            component="input"
                            value={query}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                            placeholder="quem faz parte do lab? quais projetos estão ativos?"
                            style={{
                                flex: 1,
                                border: 'none',
                                outline: 'none',
                                background: 'transparent',
                                fontFamily: 'var(--mantine-font-family-monospace)',
                                fontSize: 21,
                                color: ink,
                                padding: 0,
                                minWidth: 0,
                            }}
                        />
                        <Box
                            component="button"
                            type="submit"
                            style={{
                                border: 'none',
                                background: ink,
                                color: 'var(--mantine-color-body)',
                                fontFamily: 'var(--mantine-font-family-monospace)',
                                fontSize: 12,
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

                <Flex wrap="wrap" gap={8} mt={20} maw={900}>
                    {SEARCH_SUGGESTIONS.map((suggestion) => (
                        <Box
                            key={suggestion}
                            component="button"
                            type="button"
                            onClick={() => onSearch(suggestion)}
                            className={classes.suggestion}
                            style={{
                                fontFamily: 'var(--mantine-font-family-monospace)',
                                fontSize: 12,
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
