import { Container, Flex, Title, Text, Box, useMantineTheme } from "@mantine/core";
import { title1, normalText } from "@/theme/typoghaphy";
import { cardParceiros } from '@/content/cards';
import CarouselParceiros from "../elements/CarouselParceiros";

interface InovacaoProps {
    containerQuery?: boolean;
    mediaQuery?: boolean;
}

function Parceiros({ containerQuery, mediaQuery }: InovacaoProps) {
    const theme = useMantineTheme();

    return (
        <Box
            component='section'
            bg={theme.colors.terracota[7]}
            c={theme.white}
            py={{ base: 20, sm: 20, md: 40, lg: 40, xl: 40 }}
        >
            <Container
                component='section'
                size={containerQuery ? 'xxl' : 'lg'}
                w={'100%'}
                py={{ base: 20, sm: 20, md: 0, lg: 0, xl: 0 }}
                c={theme.white}
            >
                <Flex
                    w={'100%'}
                    direction='column'
                    justify="flex-start"
                    align="flex-start"
                >
                    <Title
                        order={1}
                        textWrap="balance"
                        fz={title1.fontSize}
                        mt={{ base: 20, sm: 20, md: 40, lg: 40, xl: 60 }}
                    >
                        Parceiros
                    </Title>
                    <Text
                        w={{ base: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' }}
                        mt={{ base: 20, sm: 20, md: 40, lg: 40, xl: 40 }}
                        fz={normalText.fontSize}
                        fw={normalText.fontWeight}
                    >
                        Somos reconhecidos por lideres do setor por fornecer soluções tecnológicas de alta qualidade
                        e impulsionar o sucesso de nossos clientes.
                    </Text>
                </Flex>
                <Flex
                    // w={'100%'}
                    h={mediaQuery ? '100%' : '50%'}
                    direction='row'
                    justify="flex-start"
                    align="center"
                    py={{ base: 60, sm: 20, md: 40, lg: 40, xl: 80 }}

                    style={{
                        resize: 'horizontal',
                        overflow: 'hidden',
                        maxWidth: '100%',
                        minWidth: 250,
                    }}
                >
                    <CarouselParceiros content={cardParceiros} mediaQuery={mediaQuery} />
                </Flex>
            </Container>
        </Box>
    );
}

export default Parceiros;
