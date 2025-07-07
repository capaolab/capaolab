import { Text, Paper, Button } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
function CardBusiness() {
    const theme = useMantineTheme();
    return (
        <Paper
            shadow='xl'
            radius="md"
            p="md"
            mt={80}
            component='article'
            c={theme.colors.gray[9]}
            style={(theme) => ({
                backgroundColor: theme.colors.gray[8],
            })}
        >
            <Text size="xl" fw="500" fs='italic' td="underline">Forum de IA</Text>
            <Text mt={10} size="lg" fw="400" lh={theme.lineHeights.md}>
                Projeto que visa impulsionar o uso da Inteligência Artificial em empresas.
            </Text>
            <Button color={theme.colors.gray[7]} mt={20}>Saiba mais</Button>
        </Paper>
    );
}

export default CardBusiness;
