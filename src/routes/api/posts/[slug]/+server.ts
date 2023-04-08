import { error, json } from '@sveltejs/kit';
import { searchPost, getContent } from '$lib/metadata/blog/posts';
import { compile } from 'mdsvex';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }: any) {
    const postMetadata = searchPost({ slug: params.slug });
    if (!postMetadata) throw error(469, { message: "There is no blug under this title."});
    const html = await getContent(postMetadata.file);
    return json({ metadata: postMetadata, content: await compile(html!.content) });
}
