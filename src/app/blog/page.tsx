'use client';

import Link from 'next/link'
import { Box, Title, Text, Flex, Button, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


function Blog() {
    const [posts, setPosts] = useState([])
    const [tags, setTags] = useState<{ tag: string }[]>([])
    const router = useRouter()
    const theme = useMantineTheme();

    useEffect(() => {
        fetch('/api/posts') // Use the correct API route path
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts)
                setTags(data.tags)
            })
    }, [])


    return (
        <Box component='div'>
            <Flex
                // gap={{ sm: 100, md: 100, lg: 100, xl: 100 }}
                direction='row'
                justify="center"
                align="center"
                bg={theme.colors.terracota[7]}
                c={theme.white}
            >
                {tags.map((tag, index) => (
                    <div key={index} >
                        {tag.tag}
                    </div>
                ))}
            </Flex>
            <h1>Blog</h1>
            <p>Welcome to the blog page!</p>
        </Box>
    );
}



export default Blog;
