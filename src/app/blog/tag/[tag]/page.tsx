import { getAllPosts } from '@/lib/postsService'

interface TagPageProps {
    params: Promise<{ tag: string }>
}

export default async function TagPage({ params }: TagPageProps) {
    const { tag } = await params
    const posts = getAllPosts().filter(post =>
        post.tags.includes(tag)
    )

    return (
        <div>
            <h1>Posts tagged with {tag}</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.slug}>
                        <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
