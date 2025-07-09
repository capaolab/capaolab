import { Container, Flex, Title, Image, Button } from "@mantine/core";
import { title1 } from "@/theme/typoghaphy";

interface CallPotencilizeProps {
    containerQuery?: boolean;
    mediaQuery?: boolean;
}
function CallPotencialize({ containerQuery, mediaQuery }: CallPotencilizeProps) {
    return (
        <Container
            component='section'
            size={containerQuery ? 'xxl' : 'lg'}
            w={'100%'}
            py={{ base: 40, sm: 40, md: 60, lg: 80, xl: 80 }}
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
                    Potencialize sua Empresa com Nossas Soluções Tecnolpogicas
                </Title>
                <Button
                    // onClick={open}
                    size={mediaQuery ? 'lg' : 'xl'}
                    mt={30}
                    autoContrast
                >
                    Começar
                </Button>
                <Image
                    mt={{ base: 100, sm: 100, md: 100, lg: 100, xl: 100 }}
                    src="/svg/potencialize.svg"
                    alt=""
                    radius="md"
                    w={`${mediaQuery ? '100%' : '40%'}`}
                />
            </Flex>
        </Container>
    );
}

export default CallPotencialize;
