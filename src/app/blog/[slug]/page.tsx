import fs from 'fs'
import path from 'path'

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { default: Post } = await import(`@/posts/${slug}.mdx`)

    return <Post />
}

export function generateStaticParams() {
    const postsDir = path.join(process.cwd(), 'src/posts')
    const files = fs.readdirSync(postsDir)
    return files
        .filter(file => file.endsWith('.mdx'))
        .map(file => ({
            slug: file.replace(/\.mdx$/, '')
        }))
}

export const dynamicParams = false
