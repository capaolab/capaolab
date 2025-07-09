import { Container, Flex, Text, Title, Grid } from '@mantine/core';
import { title1, normalText } from '@/theme/typoghaphy';
import { cardBusinessContent } from '@/content/cards';
import CardBusiness from '../elements/CardBusiness';

interface MissaoProps {
    containerQuery?: boolean;
    mediaQuery?: boolean;
}

function Compromisso({ containerQuery, mediaQuery }: MissaoProps) {
    return (
        <Container
            component='section'
            size={containerQuery ? 'xxl' : 'lg'}
            w={'100%'}
            h={'100%'}
            py={{ base: 20, sm: 20, md: 0, lg: 0, xl: 0 }}
        >
            <Flex
                w={mediaQuery ? '100%' : '60%'}
                gap={{ base: 0, sm: 20, md: 20, lg: 20, xl: 20 }}
                direction='column'
                justify="flex-start"
                align="flex-start"
            >
                <Title
                    order={1}
                    fz={title1.fontSize}
                    py={10}
                    mt={{ base: 20, sm: 20, md: 40, lg: 40, xl: 60 }}
                >
                    Nosso Compromisso
                </Title>
                <Text
                    w={mediaQuery ? '100%' : '80%'}
                    fz={normalText.fontSize}
                    fw={normalText.fontWeight}
                >
                    Nossa equipe se dedica a fornecer soluções
                    tecnológicas inovadoras e funcionais, adaptadas para impulsionar
                    o crescimento dos negócios
                </Text>
            </Flex>
            <Grid gutter={'md'} overflow='hidden'>
                {cardBusinessContent.map((card, index) => (
                    <Grid.Col key={index} span={'auto'}>
                        <CardBusiness
                            id={card.id}
                            title={card.title}
                            content={card.description}
                            mediaQuery={mediaQuery}
                        />
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    );
}

export default Compromisso;
