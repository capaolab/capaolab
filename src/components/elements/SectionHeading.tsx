import React from 'react';
import { Box, Flex, Text, Title } from '@mantine/core';
import { useDesignTokens } from '@/theme/tokens';

interface SectionHeadingProps {
    index: string;
    title: string;
    /** Large display text; defaults to the section title. */
    headline?: React.ReactNode;
    meta?: React.ReactNode;
    intro?: React.ReactNode;
    dark?: boolean;
}

/**
 * Shared section opener: numbered mono eyebrow + large title, closed by an
 * ink rule. Gives every homepage section the same, clearly louder entry
 * point than the item-level titles and metadata inside it.
 */
function SectionHeading({ index, title, headline, meta, intro, dark = false }: SectionHeadingProps) {
    const { accent, muted, ink, paper } = useDesignTokens();
    const fg = dark ? paper : ink;
    const soft = dark ? 'rgba(246, 243, 240, 0.62)' : muted;

    return (
        <Box pb={{ base: 20, md: 28 }} mb={{ base: 8, md: 12 }} style={{ borderBottom: `1px solid ${fg}` }}>
            <Flex justify="space-between" align="baseline" wrap="wrap" gap={8} mb={{ base: 14, md: 18 }}>
                <Text
                    ff="var(--mantine-font-family-monospace)"
                    fz={13}
                    tt="uppercase"
                    style={{ letterSpacing: '0.14em', color: soft }}
                >
                    <Text component="span" inherit style={{ color: accent }}>
                        {index}
                    </Text>
                    {' / '}
                    {title}
                </Text>
                {meta && (
                    <Text ff="var(--mantine-font-family-monospace)" fz={13} style={{ color: soft }}>
                        {meta}
                    </Text>
                )}
            </Flex>
            <Flex
                justify="space-between"
                align={{ base: 'start', md: 'end' }}
                direction={{ base: 'column', md: 'row' }}
                gap={{ base: 16, md: 64 }}
            >
                <Title
                    order={2}
                    fw={500}
                    fz={{ base: 44, md: 64, lg: 86 }}
                    lh={0.95}
                    style={{ letterSpacing: '-0.04em', color: fg }}
                >
                    {headline ?? title}
                </Title>
                {intro && (
                    <Text fz={{ base: 17, md: 19 }} maw={520} style={{ color: soft, lineHeight: 1.55 }}>
                        {intro}
                    </Text>
                )}
            </Flex>
        </Box>
    );
}

export default SectionHeading;
