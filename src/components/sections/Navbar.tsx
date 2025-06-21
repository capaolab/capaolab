import {
    AppShell,
    useMantineTheme,
    Box,
    Overlay,
    Anchor,
} from '@mantine/core';
import classes from './nav.module.css';


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
                marginTop: 60
            }}>
                <Anchor
                    href="/blog"
                    c="inherit"
                    // fw="bold"
                    // fz="axl"
                    className={classes.control}
                >
                    Blog
                </Anchor>
                <Anchor
                    href="/blog"
                    c="inherit"
                    // fw="bold"
                    // fz="axl"
                    className={classes.control}
                >
                    Blog
                </Anchor>
                <Anchor
                    href="/blog"
                    c="inherit"
                    // fw="bold"
                    // fz="axl"
                    className={classes.control}
                >
                    Blog
                </Anchor>
            </Box>
            <Overlay color={theme.colors.terracota[9]} backgroundOpacity={0.75} blur={10} zIndex={100} />
        </AppShell.Navbar>
    );
}

export default Navbar;
