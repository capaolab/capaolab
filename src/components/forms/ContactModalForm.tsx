import { Box, Title, Modal } from '@mantine/core';

interface ContactModalFormProps {
    opened: boolean;
    close: () => void;
}

function ContactModalForm({ opened, close }: ContactModalFormProps) {

    return (
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
    );
}

export default ContactModalForm;
