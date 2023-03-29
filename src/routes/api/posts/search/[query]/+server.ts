import { json } from '@sveltejs/kit';
import { searchPosts } from '$lib/metadata/blog/posts';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }: any) {
    const postsMetadata = searchPosts({ query: params.query });
    return json(postsMetadata);
}