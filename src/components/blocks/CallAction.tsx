'use client';

import React from 'react';
import { Box, Title, Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function CallAction() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Box mt={100}>
            <Title order={1}>
                Use IA para impulsionar o seu negócio
            </Title>
            <Title order={3} mt={20}>Capao Lab é especializada em implementar IA para automação</Title>
            <Modal
                opened={opened}
                onClose={close}
                title="Manifesto"
                size="lg"
                centered
                withCloseButton={false}
                overlayProps={{ opacity: 0.5, blur: 3 }}
            >
                <Box>
                    <Title order={2}>Manifesto do Capão Lab</Title>
                </Box>
            </Modal>
            <Button onClick={open} mt={20}>
                Contato
            </Button>
        </Box>
    );
}
