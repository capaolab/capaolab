import React from 'react'
import { AppShell, Box, Flex, Text, Container } from '@mantine/core';

import ImageLink from '@/components/elements/ImageLink';
import ContatoFooter from '@/components/elements/ContatoFooter';
import LinksRapidosFooter from '../elements/LinksRapidosFooter';
import SigaFooter from '../elements/SigaFooter';

interface FooterProps {
    containerQuery?: boolean;
    mediaQuery?: boolean;
}
function Footer({ containerQuery, mediaQuery }: FooterProps) {

    return (
        <AppShell.Footer
            w={'100%'}
            withBorder={false}
            style={(theme) => ({
                backgroundColor: theme.colors.terracota[8],
                color: theme.white,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyItems: 'start',
                position: 'relative',
                zIndex: 0,
            })}
        >
            <Container
                w={'100%'}
                h={'100%'}
                component='section'
                size={containerQuery ? 'xxl' : 'lg'}
                py={{ base: 40, sm: 40, md: 40, lg: 20, xl: 20 }}
            >
                <Flex
                    w={'100%'}
                    direction='column'
                    justify='flex-start'
                    align='flex-start'
                >
                    <Box w={'100%'}>
                        <ImageLink
                            url="/"
                            src="/svg/logotipo.svg"
                            alt="Capão Lab Logo"
                            width={mediaQuery ? 160 : 200}
                            height={mediaQuery ? 40 : 40}
                        />
                        <Text size="sm" mt={5}>
                            Nossa Natureza é Tecnológica
                        </Text>
                    </Box>
                    <Flex
                        w={'100%'}
                        direction={mediaQuery ? 'column' : 'row'}
                        justify={'flex-start'}
                        align={mediaQuery ? 'flex-start' : 'center'}
                        gap={mediaQuery ? 10 : 60}
                        py={40}
                    >
                        <ContatoFooter />
                        <LinksRapidosFooter />
                        <SigaFooter />
                    </Flex>
                    <Flex
                        w={'100%'}
                        direction={'row'}
                        justify={'center'}
                        align={'center'}
                        gap={mediaQuery ? 10 : 30}
                        py={{ base: 10, sm: 10, md: 10, lg: 10, xl: 10 }}
                        pos={'absolute'}
                        bottom={0}
                        left={0}
                        style={
                            (theme) => ({
                                backgroundColor: `${theme.black}`,
                                color: theme.white,
                                zIndex: 110,
                            })}
                    >
                        <ImageLink
                            url="/"
                            src="/svg/cl-branco.svg"
                            alt="Capão Lab Logo"
                            width={20}
                            height={20}
                        />
                        <Text
                            fz={{ base: 'xs', sm: 'xs', md: 'md', lg: 'md', xl: 'md' }}
                            fw={700}
                        >
                            © 2023 por Capão Lab. Todos os Direitos Reservados
                        </Text>
                    </Flex>
                </Flex>
            </Container>
        </AppShell.Footer>
    );
}

export default Footer;
