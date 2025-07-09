import { Box, Title, Anchor, useMantineTheme } from '@mantine/core';
import { title2 } from '@/theme/typoghaphy';
import classes from "./elements.module.css";
import { IconBrandLinkedin, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

function SigaFooter() {
    const theme = useMantineTheme();

    return (
        <Box c={theme.white}>
            <Title
                order={2}
                fz={title2.fontSize}
                py={10}
            >
                Siga
            </Title>
            <Anchor
                className={classes.imageLink}
                href="/#home"
                target="_blank"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                }}
            >
                <IconBrandLinkedin size={20} /> Linkedln
            </Anchor>
            <Anchor
                className={classes.imageLink}
                href="/#home"
                target="_blank"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                }}
            >
                <IconBrandYoutube size={20} /> YouTube
            </Anchor>
            <Anchor
                className={classes.imageLink}
                href="/#home"
                target="_blank"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                }}
            >
                <IconBrandInstagram size={20} /> Instagram
            </Anchor>
        </Box>
    );
}

export default SigaFooter;
