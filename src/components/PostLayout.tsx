'use client'
import { Container, useMantineTheme, } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function PostLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
    const containerQuery = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);


    return (
        <Container
            size={containerQuery ? 'xxl' : 'lg'}
            // mt={{ base: 20, sm: 20, md: 40, lg: 40, xl: 40 }}
            mb={{ base: 20, sm: 20, md: 40, lg: 40, xl: 40 }}
        >
            {children}
        </Container>
    );
}

export default PostLayout;
