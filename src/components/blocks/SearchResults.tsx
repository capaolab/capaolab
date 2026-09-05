'use client';

import React, { useState } from 'react';
import { Box, Container, Flex, SimpleGrid, Text } from '@mantine/core';
import { useDesignTokens } from '@/theme/tokens';
import type { SearchEntry } from '@/content/searchKb';
import classes from './blocks.module.css';

interface SearchResultsProps {
    query: string;
    thinking: boolean;
    hit: SearchEntry | null;
    onBack: () => void;
    onSubmit: (query: string) => void;
    onSuggest: (query: string) => void;
    onSourceClick: (href: string) => void;
}

function SearchResults({ query, thinking, hit, onBack, onSubmit, onSuggest, onSourceClick }: SearchResultsProps) {
    const { accent, muted, line, ink } = useDesignTokens();
    const [draft, setDraft] = useState(query);

    function submit(e: React.FormEvent) {
        e.preventDefault();
        onSubmit(draft);
    }

    const sourceCount = hit?.sources.length ?? 0;
    const statusLine = thinking
        ? 'consultando índice…'
        : `resposta gerada a partir do índice público · ${sourceCount} fonte${sourceCount === 1 ? '' : 's'}`;

    return (
        <Container size="xxl" w="100%" pb={100}>
            <Box pt={44}>
                <Box
                    component="button"
                    type="button"
                    onClick={onBack}
                    style={{
                        fontFamily: 'var(--mantine-font-family-monospace)',
                        fontSize: 12,
                        letterSpacing: '0.08em',
                        background: 'transparent',
                        border: 'none',
                        color: muted,
                        padding: 0,
                        cursor: 'pointer',
                        marginBottom: 40,
                    }}
                >
                    ← voltar ao índice
                </Box>

                <Box component="form" onSubmit={submit} pb={14} mb={28} style={{ borderBottom: `1.5px solid ${ink}` }}>
                    <Flex align="center" gap={16}>
                        <Text ff="var(--mantine-font-family-monospace)" fz={18} style={{ color: accent }}>
                            &gt;
                        </Text>
                        <Box
                            component="input"
                            value={draft}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDraft(e.target.value)}
                            style={{
                                flex: 1,
                                border: 'none',
                                outline: 'none',
                                background: 'transparent',
                                fontFamily: 'var(--mantine-font-family-monospace)',
                                fontSize: 18,
                                color: ink,
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
                                fontSize: 11,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                padding: '9px 16px',
                                cursor: 'pointer',
                            }}
                        >
                            perguntar
                        </Box>
                    </Flex>
                </Box>

                <Flex align="center" gap={10} mb={36}>
                    <Box className={classes.pulseDot} style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: accent }} />
                    <Text
                        ff="var(--mantine-font-family-monospace)"
                        fz={11}
                        tt="uppercase"
                        style={{ letterSpacing: '0.12em', color: muted }}
                    >
                        {statusLine}
                    </Text>
                </Flex>

                <SimpleGrid cols={{ base: 1, md: 2 }} spacing={72} style={{ alignItems: 'start' }}>
                    <Box>
                        {!thinking && hit && hit.paragraphs.map((paragraph, index) => (
                            <Text key={index} fz={21} mb={22} style={{ lineHeight: 1.55, letterSpacing: '-0.01em' }}>
                                {paragraph}
                            </Text>
                        ))}
                        <span className={classes.cursor} />

                        {!thinking && hit && hit.followups.length > 0 && (
                            <Box mt={52} pt={20} style={{ borderTop: `1px solid ${line}` }}>
                                <Text
                                    ff="var(--mantine-font-family-monospace)"
                                    fz={10}
                                    tt="uppercase"
                                    mb={16}
                                    style={{ letterSpacing: '0.14em', color: muted }}
                                >
                                    continuar
                                </Text>
                                <Flex wrap="wrap" gap={8}>
                                    {hit.followups.map((followup) => (
                                        <Box
                                            key={followup}
                                            component="button"
                                            type="button"
                                            onClick={() => onSuggest(followup)}
                                            className={classes.suggestion}
                                            style={{
                                                fontFamily: 'var(--mantine-font-family-monospace)',
                                                fontSize: 12,
                                                border: `1px solid ${line}`,
                                                padding: '7px 12px',
                                            }}
                                        >
                                            {followup}
                                        </Box>
                                    ))}
                                </Flex>
                            </Box>
                        )}
                    </Box>

                    <Box pt={20} style={{ borderTop: `1px solid ${ink}` }}>
                        <Text
                            ff="var(--mantine-font-family-monospace)"
                            fz={10}
                            tt="uppercase"
                            mb={4}
                            style={{ letterSpacing: '0.14em', color: muted }}
                        >
                            fontes no índice
                        </Text>
                        {!thinking && hit && hit.sources.map((source) => (
                            <Box
                                key={source.label}
                                component="a"
                                href={source.href}
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    onSourceClick(source.href);
                                }}
                                className={classes.sourceLink}
                                py={18}
                                style={{ borderBottom: `1px solid ${line}` }}
                            >
                                <Text
                                    ff="var(--mantine-font-family-monospace)"
                                    fz={10}
                                    tt="uppercase"
                                    mb={7}
                                    style={{ letterSpacing: '0.12em', color: muted }}
                                >
                                    {source.kind}
                                </Text>
                                <Text fz={17} style={{ letterSpacing: '-0.01em' }}>
                                    {source.label}
                                </Text>
                                <Text fz={14} mt={5} style={{ color: muted, lineHeight: 1.45 }}>
                                    {source.meta}
                                </Text>
                            </Box>
                        ))}
                    </Box>
                </SimpleGrid>
            </Box>
        </Container>
    );
}

export default SearchResults;
