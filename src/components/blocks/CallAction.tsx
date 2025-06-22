'use client';

import React from 'react';
import { Box, Title, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ContactModalForm from '../forms/ContactModalForm';
import { Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
export default function CallAction() {
    const [opened, { open, close }] = useDisclosure(false);
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    return (
        <Box mt={{ base: 80, lg: 100 }}>
            <Image
                src="/svg/principal.svg"
                alt=""
                radius="md"
                w={`${mediaQuery ? '100%' : '40%'}`}
                pb={80}
            />
            <Title
                order={1}
                fz={{ sm: 'xl', md: 'axl', lg: 'cxl', xl: 'dxl' }}
            >
                Use IA para impulsionar o seu negócio
            </Title>
            <Title
                order={3}
                mt={10}
                fz={{ sm: 'md', md: 'lg', lg: 'xl', xl: 'xl' }}
            >
                Capao Lab é especializada em implementar IA para automação
            </Title>
            <ContactModalForm opened={opened} close={close} />
            <Button onClick={open} mt={20} autoContrast>
                Saiba mais
            </Button>
        </Box>
    );
}
