import { getAllPosts } from '@/lib/postsService'

interface TagPageProps {
    params: { tag: string }
}

export default function TagPage({ params }: TagPageProps) {
    const posts = getAllPosts().filter(post =>
        post.tags.includes(params.tag)
    )

    return (
        <div>
            <h1>Posts tagged with {params.tag}</h1>
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
