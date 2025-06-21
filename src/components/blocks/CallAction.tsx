'use client';

import React from 'react';
import { Box, Title, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ContactModalForm from '../forms/ContactModalForm';

export default function CallAction() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Box mt={{ base: 60, lg: 100 }}>
            <Title order={1}>
                Use IA para impulsionar o seu negócio
            </Title>
            <Title order={3} mt={20}>Capao Lab é especializada em implementar IA para automação</Title>
            <ContactModalForm opened={opened} close={close} />
            <Button onClick={open} mt={20}>
                Contato
            </Button>
        </Box>
    );
}
