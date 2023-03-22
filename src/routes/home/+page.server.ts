import { filterPosts } from '$lib/metadata/blog/posts'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    console.log(filterPosts(true));
}