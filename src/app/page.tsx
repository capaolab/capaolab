'use client';

import React from 'react';
import CallAction from '@/components/blocks/CallAction';
import CardHome from '@/components/blocks/CardHome';
import { Flex, Box, useMantineTheme, Container, Text, Title, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { normalText, title2 } from '@/theme/typoghaphy';

export default function Home() {
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const containerQuery = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);
    return (
        <Box
            component='div'
        >
            <Container
                h={'100vh'}
                size={containerQuery ? 'xxl' : 'lg'}
            >
                <Flex
                    id='home'
                    gap={{ sm: 10, md: 100, lg: 100, xl: 100 }}
                    direction={mediaQuery ? 'row' : 'column'}
                    justify="flex-start"
                    align="flex-start"
                >
                    <CallAction />
                    <Box
                        mt={{ base: 60 }}
                        hiddenFrom='md'
                    >
                        <CardHome />
                    </Box>
                </Flex>
                <Image
                    src="/svg/seta_terra.svg"
                    alt=""
                    radius="md"
                    w={'40px'}
                    pos={'absolute'}
                    bottom={0}
                    right={'50%'}
                />
            </Container>
            <Box
                component='section'
                h={'50vh'}
                bg={theme.colors.terracota[8]}
                c={theme.white}
            >
                <Container
                    size={containerQuery ? 'xxl' : 'lg'}
                    w={'100%'}
                    h={'100%'}
                >
                    <Flex
                        gap={{ sm: 10, md: 100, lg: 100, xl: 100 }}
                        direction={mediaQuery ? 'column' : 'row'}
                        justify="center"
                        align="center"
                        w={'100%'}
                        h={'100%'}
                    >
                        <Title
                            order={2}
                            fz={title2.fontSize}
                        >
                            Desenvolvimento de soluções personalizadas
                        </Title>
                        <Text
                            w={{ base: '100%', md: '50%' }}
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
        </Box>
    );
}
