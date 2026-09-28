import React from 'react';
import { Box, Container, SimpleGrid, Text, Title } from '@mantine/core';

import { ink, muted, line, terracota } from '@/theme/colors';

// This page has no interactivity, so it stays a server component and reads
// the raw palette instead of the useDesignTokens() hook.
const accent = terracota[7];

const channels = [
    { label: 'Endereço', value: 'Caeté-Açu, Palmeiras — Bahia' },
    { label: 'Telefone', value: '(71) 9 9999-9999' },
    { label: 'E-mail', value: 'accounts@capaolab.com.br', href: 'mailto:accounts@capaolab.com.br' },
];

function ContatoPageContent() {
    return (
        <Box component="section" style={{ borderBottom: `1px solid ${line}` }}>
            <Container size="xxl" w="100%" py={{ base: 56, md: 88 }}>
                <Text
                    ff="var(--mantine-font-family-monospace)"
                    fz={13}
                    tt="uppercase"
                    mb={20}
                    style={{ letterSpacing: '0.14em', color: muted }}
                >
                    Fale com o lab
                </Text>
                <Title order={1} fw={500} fz={{ base: 43, md: 62 }} lh={1.05} maw={910} mb={16} style={{ letterSpacing: '-0.03em' }}>
                    Propostas, dúvidas ou pedido de diagnóstico digital: escreva direto para o lab.
                </Title>
                <Text fz={{ base: 19, md: 22 }} maw={740} mb={56} style={{ color: muted, lineHeight: 1.5 }}>
                    Respondemos pelo e-mail abaixo, com leitura técnica do escopo antes de qualquer retorno.
                </Text>

                <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={40} pt={30} style={{ borderTop: `1px solid ${ink}` }}>
                    {channels.map((channel) => (
                        <Box key={channel.label}>
                            <Text
                                ff="var(--mantine-font-family-monospace)"
                                fz={12}
                                tt="uppercase"
                                mb={10}
                                style={{ letterSpacing: '0.14em', color: muted }}
                            >
                                {channel.label}
                            </Text>
                            {channel.href ? (
                                <Text component="a" href={channel.href} fz={22} style={{ color: accent }}>
                                    {channel.value}
                                </Text>
                            ) : (
                                <Text fz={12}>{channel.value}</Text>
                            )}
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default ContatoPageContent;
