
'use client';

import React from 'react';
import { Flex, Box, useMantineTheme, Container, Text, Title } from '@mantine/core';
import { normalText, title2 } from '@/theme/typoghaphy';


interface MissaoProps {
    containerQuery: boolean;
    mediaQuery: boolean;
}

function Missao({ containerQuery, mediaQuery }: MissaoProps) {
    const theme = useMantineTheme();


    return (
        <Box
            component='section'
            h={'50vh'}
            bg={theme.colors.terracota[7]}
            c={theme.white}
        >
            <Container
                size={containerQuery ? 'xxl' : 'lg'}
                w={'100%'}
                h={'100%'}
            >
                <Flex
                    gap={{ sm: 100, md: 100, lg: 100, xl: 100 }}
                    direction={mediaQuery ? 'column' : 'row'}
                    justify="center"
                    align="center"
                    w={'100%'}
                    h={'100%'}
                >
                    <Title
                        w={{ base: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' }}
                        order={2}
                        fz={title2.fontSize}
                    >
                        Desenvolvimento de soluções personalizadas
                    </Title>
                    <Text
                        w={{ base: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' }}
                        fz={normalText.fontSize}
                        fw={normalText.fontWeight}
                    >
                        Somos especialistas em desenvolver softwares e soluções tecnológicas personalizadas
                        para atender às necessidades específicas de cada cliente. Nossa missão é impulsionar
                        grandes conquistas por meio da tecnologia.
                    </Text>
                </Flex>
            </Container>
        </Box>
    );
}

export default Missao;
