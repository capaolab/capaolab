'use client';

import React from 'react';
import { Box, Title, Button, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ContactModalForm from '../forms/ContactModalForm';
import { Image, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';


export default function CallAction() {
    const [opened, { open, close }] = useDisclosure(false);
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

    return (
        <Flex
            gap={{ base: 10, sm: 40, md: 60, lg: 100, xl: 100 }}
            direction={mediaQuery ? 'column' : 'row'}
            justify="flex-start"
            align="flex-start"
        >
            <Box
                w={`${mediaQuery ? '100%' : '60%'}`}
                mt={{ base: 20, sm: 20, md: 40, lg: 40, xl: 60 }}
            >
                <Title
                    order={1}
                    fz={{ sm: 'axl', md: 'cxl', lg: 'cxl', xl: 'dxl' }}
                >
                    Use IA para impulsionar o seu negócio
                </Title>
                <Title
                    order={3}
                    mt={10}
                    fz={{ sm: 'md', md: 'xl', lg: 'xl', xl: 'xl' }}
                >
                    Capao Lab é uma software house especializada inovação.
                    Nosso principal foco é o desenvolvimento de soluções inteligentes
                    para ajudar pequenos e medios negócios.
                </Title>
                <ContactModalForm opened={opened} close={close} />
                <Button onClick={open} mt={30} autoContrast>
                    Saiba mais
                </Button>
            </Box>
            <Image
                mt={{ base: 20, sm: 20, md: 40, lg: 40, xl: 60 }}
                src="/svg/principal.svg"
                alt=""
                radius="md"
                w={`${mediaQuery ? '100%' : '40%'}`}
            />
        </Flex>
    );
}
