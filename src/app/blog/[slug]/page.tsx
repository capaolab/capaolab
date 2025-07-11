import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import PostLayout from '@/components/PostLayout'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogParams {
    params: Promise<{ slug: string }>
}
export default async function Page({ params }: BlogParams) {
    const { slug } = await params
    const postPath = path.join(process.cwd(), 'src/posts', `${slug}.mdx`)
    const source = fs.readFileSync(postPath, 'utf8')
    const { content } = matter(source)

    return (
        <PostLayout>
            <MDXRemote source={content} />
        </PostLayout>
    )
}
