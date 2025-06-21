import {
    AppShell,
    useMantineTheme,
    Box,
    Title,
    Overlay
} from '@mantine/core';


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
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 100,
                })}
        >
            <Box style={{
                zIndex: 110,
            }}>
                <Title order={3}>NavBar</Title>
            </Box>
            <Overlay color={theme.colors.gray[6]} backgroundOpacity={0.35} blur={10} zIndex={100} />
        </AppShell.Navbar>
    );
}

export default Navbar;
