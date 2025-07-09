import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const postPath = path.join(process.cwd(), 'src/posts', `${slug}.mdx`)
    const source = fs.readFileSync(postPath, 'utf8')
    const { data } = matter(source)
    const { default: Post } = await import(`@/posts/${slug}.mdx`)

    return (
        <div>
            <Post />
            <div>
                {data.tags && data.tags.map((tag: string) => (
                    <span key={tag}>{tag} </span>
                ))}
            </div>
        </div>
    )
}
