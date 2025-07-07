import { Container, Flex, Text, Title } from '@mantine/core';
import { title1, title3 } from '@/theme/typoghaphy';
import { marginX } from '@/theme/layout';

interface MissaoProps {
    containerQuery: boolean;
    mediaQuery: boolean;
}

function Compromisso({ containerQuery, mediaQuery }: MissaoProps) {
    return (
        <Container
            component='section'
            size={containerQuery ? 'xxl' : 'lg'}
            w={'100%'}
            h={'100%'}
            mx={marginX}
        >
            <Flex
                gap={{ base: 0, sm: 20, md: 20, lg: 20, xl: 20 }}
                direction={mediaQuery ? 'column' : 'row'}
                justify="flex-start"
                align="flex-start"

            >
                <Title
                    order={1}
                    fz={title1.fontSize}
                    py={{ base: 20, sm: 20, md: 40, lg: 40, xl: 40 }}
                >
                    Nosso Compromisso
                </Title>
                <Text
                    fz={title3.fontSize}
                >
                    Nossa equipe se dedica a fornecer soluções
                    tecnológicas inovadoras e funcionais, adaptadas para impulsionar
                    o crescimento dos negócios
                </Text>
            </Flex>
        </Container>
    );
}

export default Compromisso;
