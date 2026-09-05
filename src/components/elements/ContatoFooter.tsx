import { Box, Text } from '@mantine/core';
import { useDesignTokens } from '@/theme/tokens';
import { base } from '@/content/infos';

function ContatoFooter() {
    const { muted } = useDesignTokens();

    return (
        <Box>
            <Text
                ff="var(--mantine-font-family-monospace)"
                fz={10}
                tt="uppercase"
                mb={12}
                style={{ letterSpacing: '0.14em', color: muted }}
            >
                Contato
            </Text>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Text fz="sm">{base.address}</Text>
                <Text fz="sm">{base.phone}</Text>
                <Text component="a" href="mailto:accounts@capaolab.com.br" fz="sm" style={{ color: 'inherit' }}>
                    {base.email}
                </Text>
            </Box>
        </Box>
    );
}

export default ContatoFooter;
