'use client';

import React from 'react';
import { Box, Title, Button, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ContactModalForm from '../forms/ContactModalForm';
import { Image, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { title1, title3 } from '@/theme/typoghaphy';


export default function CallAction() {
    const [opened, { open, close }] = useDisclosure(false);
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <Flex
            gap={{ base: 10, sm: 40, md: 60, lg: 100, xl: 250 }}
            direction={mediaQuery ? 'column' : 'row'}
            justify="flex-start"
            align="flex-start"
            color='black'
        >
            <Box
                w={`${mediaQuery ? '100%' : '40%'}`}
                mt={{ base: 20, sm: 20, md: 40, lg: 40, xl: 60 }}
            >
                <Title
                    order={1}
                    fz={title1.fontSize}
                >
                    Desenvolvimento de soluções personalizadas
                </Title>
                <Title
                    order={3}
                    mt={{ base: 20, sm: 20, md: 10, lg: 10, xl: 10 }}
                    fw={300}
                    fz={title3.fontSize}
                    lh={title3.lineHeight}
                >
                    A Capão Lab é uma soft house que desenvolve soluções sob demanda, específicas para cada negócio.
                    Nossa abordagem eficaz permite a comunicação, colaboração e criação de forma integrada.
                </Title>
                <ContactModalForm opened={opened} close={close} />
                <Button
                    onClick={open}
                    size={mediaQuery ? 'sm' : 'lg'}
                    mt={30}
                    autoContrast
                >
                    Saiba mais
                </Button>
            </Box>
            <Image
                mt={{ base: 0, sm: 20, md: 40, lg: 40, xl: 60 }}
                src="/svg/banner.svg"
                alt=""
                radius="md"
                w={`${mediaQuery ? '100%' : '40%'}`}
            />
        </Flex>
    );
}
