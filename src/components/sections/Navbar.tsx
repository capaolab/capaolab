import {
    AppShell,
    useMantineTheme,
    Box,
    Overlay,
    Anchor,
} from '@mantine/core';
import { navLinksContent } from '@/content/navigation';
import { navLink } from '@/theme/typoghaphy';

import classes from './sections.module.css';


function Navbar() {
    const theme = useMantineTheme();

    return (
        <AppShell.Navbar
            withBorder={false}
            style={
                (theme) => ({
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'transparent',
                    color: theme.white,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    justifyContent: 'start',
                    zIndex: 100,
                })}
        >
            <Box style={{
                width: "100%",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyItems: 'start',
                justifyContent: 'start',
                zIndex: 110,
                marginTop: 50
            }}>
                {navLinksContent.map((link) => (
                    <Anchor
                        key={link.label}
                        href={link.link}
                        fw="bold"
                        fz={navLink.fontSize}
                        className={classes.control}
                    >
                        {link.label}
                    </Anchor>
                ))}
            </Box>
            <Overlay color={theme.colors.gray[1]} backgroundOpacity={0.75} blur={15} zIndex={100} />
        </AppShell.Navbar>
    );
}

export default Navbar;
