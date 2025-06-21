'use client';

import React from 'react';
import { Box, Title, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ContactModalForm from '../forms/ContactModalForm';
import { Image } from '@mantine/core';

export default function CallAction() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Box mt={{ base: 60, lg: 100 }}>
            <Image
                src="/svg/principal.svg"
                alt=""
                radius="md"
                width="300"
                pb={80}
            />
            <Title
                order={1}
                fz={{ xs: 'xl', sm: 'axl', md: 'axl', lg: 'cxl', xl: 'dxl' }}
            >
                Use IA para impulsionar o seu negócio
            </Title>
            <Title
                order={3}
                mt={10}
                fz={{ xs: 'md', sm: 'md', md: 'lg', lg: 'xl', xl: 'xl' }}
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
