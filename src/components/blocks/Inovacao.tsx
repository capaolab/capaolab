import { Container, Flex, Title, Text, Box, Image } from "@mantine/core";
import { title1, normalText } from "@/theme/typoghaphy";


interface InovacaoProps {
    containerQuery?: boolean;
    mediaQuery?: boolean;
}


function Inovacao({ containerQuery, mediaQuery }: InovacaoProps) {
    return (
        <Container
            component='section'
            size={containerQuery ? 'xxl' : 'lg'}
            w={'100%'}
            h={'100%'}
            visibleFrom="lg"
            py={{ base: 40, sm: 40, md: 80, lg: 100, xl: 100 }}
        >
            <Flex
                w={'100%'}
                gap={{ base: 0, sm: 20, md: 20, lg: 20, xl: 20 }}
                direction={mediaQuery ? 'column' : 'row'}
                justify={mediaQuery ? 'flex-start' : 'center'}
                align={mediaQuery ? 'flex-start' : 'center'}
            >
                <Image
                    mt={{ base: 100, sm: 100, md: 0, lg: 0, xl: 0 }}
                    src="/svg/inovacao.svg"
                    alt=""
                    radius="md"
                    w={mediaQuery ? '100%' : 800}
                />
                <Box w={{ base: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' }}>
                    <Title
                        order={1}
                        fz={title1.fontSize}
                        py={10}
                        mt={{ base: 20, sm: 20, md: 40, lg: 40, xl: 60 }}
                        textWrap="balance"
                    >
                        Empenhados em Inovação
                    </Title>
                    <Text
                        w={{ base: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' }}
                        fz={normalText.fontSize}
                        fw={normalText.fontWeight}
                    // mt={{ base: 60, md: 0 }}
                    >
                        Nossa equipe é apaixonada por desenvolver ferramentas e soluções tecnológicas
                        que inspirem a criatividade e impulsionem a inovação em cada projeto
                    </Text>
                </Box>
            </Flex>
        </Container>
    );
}

export default Inovacao;
