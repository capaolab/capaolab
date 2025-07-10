import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
    const { slug } = params
    const postPath = path.join(process.cwd(), 'src/posts', `${slug}.mdx`)
    const source = fs.readFileSync(postPath, 'utf8')
    const { data, content } = matter(source)
    const current = (data.recommendations || 0) + 1
    const newFrontmatter = matter.stringify(content, { ...data, recommendations: current })
    fs.writeFileSync(postPath, newFrontmatter)
    return NextResponse.json({ stars: current })
}
