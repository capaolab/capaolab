import { Text, Paper, Title, Box, Image } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { title2 } from '@/theme/typoghaphy';

interface CardBusinessProps {
    id: string
    title: string
    content: string
}
function CardBusiness({ title, content, id}: CardBusinessProps) {
    const theme = useMantineTheme();
    return (
        <Box>
            <Paper
                shadow='md'
                radius="lg"
                p="md"
                mt={80}
                component='article'
                c={theme.colors.gray[9]}
                style={(theme) => ({
                    backgroundColor: theme.colors.gray[2],
                })}
            >
                <Image
                    fit='contain'
                    src={`/svg/card-business/card-${id}.svg`}
                    alt={title}
                    width={278}
                    height={312}
                    p={20}
                />
            </Paper>
            <Title
                w={'80%'}
                mt={40}
                order={2}
                fz={title2.fontSize}
            >
                {title}
            </Title>
            <Text mt={10} size="lg" fw="400" lh={theme.lineHeights.md}>
                {content}
            </Text>
        </Box>
    );
}

export default CardBusiness;
