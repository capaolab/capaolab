import { Image } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselParceirosProps {
    content: { parceiro: string }[]
    mediaQuery?: boolean;
}

function CarouselParceiros({ content, mediaQuery }: CarouselParceirosProps) {
    const autoplay = useRef(Autoplay({ delay: 3000 }));
    return (
        <Carousel
            w={'100%'}
            // height={200}
            slideSize={mediaQuery ? "100%" : "33.333333%"}
            slideGap={{ base: 0, '300px': 'md', '500px': 'xl' }}
            controlsOffset="xl"
            controlSize={20}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}
            emblaOptions={{
                loop: true,
                dragFree: false,
                align: 'start',
                slidesToScroll: 1
            }}
        >
            {content.map((card, index) => (
                <Carousel.Slide key={index}>
                    <Image
                        fit="contain"
                        w={mediaQuery ? '100%' : '70%'}
                        src={`/svg/parceiros/${card.parceiro}.svg`}
                        alt={card.parceiro}
                    />
                </Carousel.Slide>
            ))}
        </Carousel>
    );
}

export default CarouselParceiros;
