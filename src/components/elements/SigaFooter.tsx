import { Box, Text } from '@mantine/core';
import { useDesignTokens } from '@/theme/tokens';
import classes from '../sections/sections.module.css';
import { page } from '@/content/infos'


function SigaFooter() {
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
                Siga
            </Text>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {page.footer.siga.map((link) => (
                    <Text key={link.label} component="a" href={link.href} fz="sm" className={classes.footerLink}>
                        {link.label}
                    </Text>
                ))}
            </Box>
        </Box>
    );
}

export default SigaFooter;
