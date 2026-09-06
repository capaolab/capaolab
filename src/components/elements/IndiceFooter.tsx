import { Box, Text } from '@mantine/core';
import Link from 'next/link';
import { useDesignTokens } from '@/theme/tokens';
import { useSectionNavigate } from '@/providers/HomeSearchContext';
import classes from '../sections/sections.module.css';
import { page } from '@/content/infos'


function IndiceFooter() {
    const { muted } = useDesignTokens();
    const navigateSection = useSectionNavigate();

    return (
        <Box>
            <Text
                ff="var(--mantine-font-family-monospace)"
                fz={12}
                tt="uppercase"
                mb={12}
                style={{ letterSpacing: '0.14em', color: muted }}
            >
                Índice
            </Text>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {page.footer.indice.map((link) => (
                    <Text
                        key={link.label}
                        component={Link}
                        href={link.href}
                        onClick={(e) => navigateSection(link.href, e)}
                        fz="sm"
                        className={classes.footerLink}
                    >
                        {link.label}
                    </Text>
                ))}
            </Box>
        </Box>
    );
}

export default IndiceFooter;
