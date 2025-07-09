import { Container, Flex, Title, Button } from "@mantine/core";
import { title1 } from "@/theme/typoghaphy";


interface CallDigitalProps {
    containerQuery?: boolean;
    mediaQuery?: boolean;
}
function CAllDigital({ containerQuery, mediaQuery }: CallDigitalProps) {
    return (
        <Container
            component='section'
            size={containerQuery ? 'xxl' : 'lg'}
            w={'100%'}
            py={{ base: 80, sm: 80, md: 80, lg: 100, xl: 100 }}
            mt={{ base: 80, sm: 80, md: 80, lg: 100, xl: 100 }}
        >
            <Flex
                w={'100%'}
                direction='column'
                justify="center"
                align="center"
            >
                <Title
                    order={1}
                    fz={title1.fontSize}
                    mb={{ base: 40, sm: 40, md: 40, lg: 40, xl: 40 }}
                    ta={'center'}
                >
                    Você sabe qual é o nível digital da sua empresa? Descubra agora com um diagnóstico gratuito
                    e estratégico.
                </Title>
                <Button
                    // onClick={open}
                    size={mediaQuery ? 'lg' : 'xl'}
                    mt={30}
                    autoContrast
                >
                    Começar
                </Button>
            </Flex>
        </Container>
    );
}

export default CAllDigital;
