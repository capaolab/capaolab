import { Box, Text } from '@mantine/core';
import { useDesignTokens } from '@/theme/tokens';
import { base } from '@/content/infos';

function ContatoFooter() {
    const { muted } = useDesignTokens();

    return (
        <Box>
            <Text
                ff="var(--mantine-font-family-monospace)"
                fz={12}
                tt="uppercase"
                mb={12}
                style={{ letterSpacing: '0.14em', color: muted }}
            >
                Contato
            </Text>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Text fz="xs">{base.address}</Text>
                <Text fz="xs">{base.phone}</Text>
                <Text component="a" href="mailto:contato@capaolab.com.br" fz="xs" style={{ color: 'inherit' }}>
                    {base.email}
                </Text>
            </Box>
        </Box>
    );
}

export default ContatoFooter;
