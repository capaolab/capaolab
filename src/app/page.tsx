'use client';

import React from 'react';
import CallAction from '@/components/blocks/CallAction';
import CardHome from '@/components/blocks/CardHome';
import { Flex, Box, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Home() {
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    return (
        <Flex
            gap={{ sm: 10, md: 100, lg: 100, xl: 100 }}
            direction={mediaQuery ? 'row' : 'column'}
            justify="flex-start"
            align="flex-start"
        >
            <CallAction />
            <Box
                mt={{ base: 60 }}
                hiddenFrom='md'
            >
                <CardHome />
            </Box>
        </Flex>
    );
}
