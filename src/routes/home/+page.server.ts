import { fetchMarkdownPosts } from '$lib/helpers/converter';

const mdFiles = Object.keys(import.meta.glob('$lib/posts/*.md')).map((k) => k.replace('/src/lib/posts/', ""));

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    
    console.log(fetchMarkdownPosts())
}