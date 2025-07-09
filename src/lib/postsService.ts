import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export interface Post {
    slug: string
    title: string
    tags: string[]
    content: string
}

export interface TagCount {
    tag: string
    count: number
}

export function getAllPosts(): Omit<Post, 'content'>[] {
    const files = fs.readdirSync(postsDirectory)
    return files
        .filter(file => file.endsWith('.mdx'))
        .map(file => {
            const slug = file.replace(/\.mdx$/, '')
            const filePath = path.join(postsDirectory, file)
            const source = fs.readFileSync(filePath, 'utf8')
            const { data } = matter(source)
            return {
                slug,
                title: data.title || slug,
                tags: data.tags || [],
            }
        })
}

export function getAllTags(): TagCount[] {
    const posts = getAllPosts()
    const tagMap: Record<string, number> = {}
    posts.forEach(post => {
        post.tags.forEach(tag => {
            tagMap[tag] = (tagMap[tag] || 0) + 1
        })
    })
    return Object.entries(tagMap).map(([tag, count]) => ({ tag, count }))
}
