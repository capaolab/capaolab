'use client';

import {
    Box,
    Title,
    Divider,
    Flex,
    Container,
    TagsInput,
    useMantineTheme
} from '@mantine/core';
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@mantine/hooks';
import PostCard from '@/components/elements/PostCard';


export interface IPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    recommendations: number;
    tags: string[];
}


function Blog() {
    const theme = useMantineTheme();
    const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
    const containerQuery = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);
    const [posts, setPosts] = useState<IPost[]>([])
    const [tags, setTags] = useState<{ tag: string }[]>([])
    const [currentTags, setCurrentTags] = useState<string[]>([]);

    const filteredPosts = currentTags.length === 0
        ? posts
        : posts.filter(post =>
            currentTags.every(tag => post.tags.includes(tag))
        );

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts)
                setTags(data.tags)
            })
    }, [])


    return (
        <Container
            size={containerQuery ? 'xxl' : 'lg'}
            mt={{ base: 20, sm: 20, md: 40, lg: 40, xl: 40 }}
        >
            <Flex
                w={'100%'}
                direction={mediaQuery ? 'column' : 'row'}
                justify="flex-start"
                align="flex-start"
                gap={{ base: 0, sm: 20, md: 20, lg: 40, xl: 40 }}
            >
                <Box
                    component='section'
                    w={mediaQuery ? '100%' : '70%'}
                >
                    <TagsInput
                        placeholder='Tags'
                        clearable
                        acceptValueOnBlur
                        maxTags={5}
                        radius="md"
                        data={tags.map(tag => tag.tag)}
                        value={currentTags}
                        onChange={setCurrentTags}
                    />

                    {filteredPosts.map((post, index) => (
                        <PostCard key={index} {...post} />
                    ))}
                </Box>
                <Divider orientation="vertical" visibleFrom='md' />
                <Box
                    w={'30%'}
                    component='aside'
                    visibleFrom='md'
                >
                    <Title order={2}>Mais Lidos</Title>
                </Box>
            </Flex>
        </Container>
    );
}



export default Blog;
