import { error, json } from '@sveltejs/kit';
import { searchPost, getContent } from '$lib/metadata/blog/posts';
import { bindings } from '$lib/metadata/misc/classMap';
import showdown from 'showdown';
import { compile } from 'mdsvex';

/*const options = {
    prefixHeaderId: true,
    simplifiedAutoLink: true,
    tables: true,
    tasklists: true,
    smartIndentationFix: true,
    simpleLineBreaks: true,
    openLinksInNewWindow: true,
    emoji: true,
    underline: true,
    moreStyling: true,
    ghCompatibleHeaderId: true,
    parseImgDimensions: true
};

for (var [k, v] of Object.entries(options)) showdown.setOption(k, v);

showdown.setFlavor('github');
  
const conv = new showdown.Converter({
    extensions: [...bindings]
});*/

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }: any) {
    const postMetadata = searchPost({ slug: params.slug });
    if (!postMetadata) throw error(469, { message: "There is no blug under this title."});
    const html = await getContent(postMetadata.file);
    return json({ metadata: postMetadata, content: await compile(html!.content) });
}