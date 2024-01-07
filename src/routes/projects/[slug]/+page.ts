import { error } from '@sveltejs/kit'

export async function load({ params }) {
    try {
        const project = await import(`../../../data/projects/${params.slug}.svx`)
        return {
            content: project.default,
            meta: project.metadata,
            slug: params.slug
        }
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`)
    }
}