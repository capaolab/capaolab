import { Box, Title, Text, Anchor } from '@mantine/core';
import { title2 } from '@/theme/typoghaphy';
import { IconMail } from '@tabler/icons-react';
import classes from "./elements.module.css";


function ContatoFooter() {
    return (
        <Box>
            <Title
                fz={title2.fontSize}
                py={10}
            >
                Contato
            </Title>
            <Text py={2}>Caeté-Açu, Palmeiras - Bahia</Text>
            <Text py={2}>(71) 9 9999-9999</Text>
            <Anchor
                className={classes.imageLink}
                href="mailto:accounts@capaolab.com.br"
                target="_blank"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                }}
            >
                <IconMail size={20} /> accounts@capaolab.com.br
            </Anchor>
        </Box>
    );
}

export default ContatoFooter;
