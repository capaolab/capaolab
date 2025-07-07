import React from 'react';
import CallAction from '@/components/blocks/CallAction';
import { Flex, Container, Image } from '@mantine/core';
import { marginX } from '@/theme/layout';

interface BannerProps {
    containerQuery: boolean;
    mediaQuery: boolean;
}

function Banner({ containerQuery, mediaQuery }: BannerProps) {
    return (
        <Container
            component='section'
            h={'100vh'}
            size={containerQuery ? 'xxl' : 'lg'}
            mx={marginX}
        >
            <Flex
                id='home'
                gap={{ sm: 10, md: 100, lg: 100, xl: 100 }}
                direction={mediaQuery ? 'row' : 'column'}
                justify="flex-start"
                align="flex-start"
            >
                <CallAction />
            </Flex>
            <Image
                src="/svg/seta_terra.svg"
                alt=""
                radius="md"
                w={{ base: '25px', md: '40px', lg: '40px', xl: '40px' }}
                pos={'absolute'}
                bottom={0}
                right={'50%'}
            />
        </Container>
    );
}

export default Banner;
