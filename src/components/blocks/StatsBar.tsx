import React from 'react';
import { Box, SimpleGrid, Text } from '@mantine/core';
import { useDesignTokens } from '@/theme/tokens';
import { page } from '@/content/infos'


function StatsBar() {
    const { muted, line } = useDesignTokens();

    return (
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={0} style={{ borderBottom: `1px solid ${line}` }}>
            {page.stats.map((stat, index) => (
                <Box
                    key={stat.label}
                    px={40}
                    py={26}
                    style={{
                        borderRight: index < page.stats.length - 1 ? `1px solid ${line}` : undefined,
                        borderTop: `1px solid ${line}`,
                    }}
                >
                    <Text
                        ff="var(--mantine-font-family-monospace)"
                        fz={12}
                        tt="uppercase"
                        mb={8}
                        style={{ letterSpacing: '0.14em', color: muted }}
                    >
                        {stat.label}
                    </Text>
                    <Text ff="var(--mantine-font-family-monospace)" fz={18}>
                        {stat.value}
                    </Text>
                </Box>
            ))}
        </SimpleGrid>
    );
}

export default StatsBar;
