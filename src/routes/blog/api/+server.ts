import { json } from '@sveltejs/kit'
import type { PostDisplay } from '$lib/types'


async function getPosts() {
    let posts: PostDisplay[] = []

    const paths = import.meta.glob('/src/data/posts/*.svx', { eager: true })


    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.svx', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<PostDisplay, 'slug'>
            const post = { ...metadata, slug } satisfies PostDisplay
            post.published && posts.push(post)
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}