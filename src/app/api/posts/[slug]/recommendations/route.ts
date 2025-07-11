import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
    params: Promise<{ slug: string }>
}

export async function POST(request: NextRequest, { params }: Params): Promise<NextResponse> {
    const { slug } = await params
    const postPath = path.join(process.cwd(), 'src/posts', `${slug}.mdx`)
    const source = fs.readFileSync(postPath, 'utf8')
    const { data, content } = matter(source)
    const current = (data.recommendations || 0) + 1
    const newFrontmatter = matter.stringify(content, { ...data, recommendations: current })
    fs.writeFileSync(postPath, newFrontmatter)
    return NextResponse.json({ recommendations: current })
}
