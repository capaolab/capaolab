import { Box, Title, useMantineTheme } from '@mantine/core';
import { title2 } from '@/theme/typoghaphy';
import Link from "next/link";
import classes from "./elements.module.css";

function LinksRapidosFooter() {
    const theme = useMantineTheme();

    return (
        <Box py={20} c={theme.white}>
            <Title
                order={2}
                fz={title2.fontSize}
                py={10}
            >
                Links Rapidos
            </Title>
            <Link href="/#home" className={classes.imageLink}>Termos & Condições</Link>
            <Link href="/#home" className={classes.imageLink}>Politica de Privacidade</Link>
            <Link href="/#home" className={classes.imageLink}>Politica de Cookies</Link>
        </Box>
    );
}

export default LinksRapidosFooter;
