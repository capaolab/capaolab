import {
    Box,
    Title,
    Text,
    Flex,
    Button,
    Badge,
    Divider,
    useMantineTheme
} from '@mantine/core';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IPost } from '@/app/blog/page';
import { title2, normalText } from '@/theme/typoghaphy';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import classes from "./elements.module.css";
import { formatFullDate } from '@/utils/dateFormat';


function PostCard({ slug, title, date, description, tags, recommendations }: IPost) {
    const theme = useMantineTheme();
    const [localRecommendations, setLocalRecommendations] = useState(recommendations);
    const [pending, setPending] = useState(false);
    const [hasRecommended, setHasRecommended] = useState(false);

    useEffect(() => {
        setLocalRecommendations(recommendations);
        const recommended = localStorage.getItem(`recommended_${slug}`);
        setHasRecommended(!!recommended);
    }, [recommendations, slug]);

    const handleRecommend = async () => {
        if (hasRecommended) return;
        setPending(true);
        try {
            const res = await fetch(`/api/posts/${slug}/recommendations`, { method: 'POST' });
            const data = await res.json();
            setLocalRecommendations(data.stars);
            localStorage.setItem(`recommended_${slug}`, 'true');
            setHasRecommended(true);
        } catch (e) {
            console.error(e);
        } finally {
            setPending(false);
        }
    };

    return (
        <Box
            component='article'
            mt={{ base: 20, sm: 20, md: 20, lg: 40, xl: 40 }}
        >
            <Flex
                direction='column'
                gap={10}
            >
                <Flex
                    direction='row'
                    justify='flex-start'
                    align='flex-start'
                    gap={20}
                >
                    <Button.Group>
                        <Button
                            size='xs'
                            p={6}
                            variant="default"
                            onClick={handleRecommend}
                            loading={pending}
                            disabled={hasRecommended}
                        >
                            {
                                hasRecommended
                                    ?
                                    <IconHeartFilled color='var(--mantine-color-terracota-5)' size={18} />
                                    :
                                    <IconHeart color='var(--mantine-color-terracota-5)' size={18} />
                            }
                        </Button>
                        <Button.GroupSection
                            bg={theme.colors.terracota[5]}
                            size='xs'
                            radius='md'
                            fw='bold'
                        >
                            {localRecommendations}
                        </Button.GroupSection>
                    </Button.Group>
                    <Text fz={normalText.fontSize}>{formatFullDate(date)}</Text>
                </Flex>
                <Flex
                    direction='column'
                    justify='space-between'
                    align='flex-start'
                >

                    <Box>
                        <Link href={`/blog/${slug}`} >
                            <Title
                                order={2}
                                c={theme.colors.terracota[5]}
                                fz={title2.fontSize}
                                fw={'bold'}
                            >
                                {title}
                            </Title>
                        </Link>
                        <Text>{description}</Text>
                    </Box>
                </Flex>
                <Flex
                    w={'100%'}
                    direction='row'
                    gap={10}
                >
                    {tags.map((tag, index) => (
                        <Link
                            key={index}
                            href={`/blog/tag/${tag}`}
                            className={classes.tagLink}
                        >
                            <Badge
                                w='100%'
                                color='var(--mantine-color-terracota-7)'
                                variant='outline'
                            >
                                {tag}
                            </Badge>
                        </Link>
                    ))}
                </Flex>
            </Flex>
            <Divider orientation='horizontal' mt={40} />
        </Box>
    );
}

export default PostCard;
