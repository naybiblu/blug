import { searchPost } from '$lib/metadata/blog/posts';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
   const post = searchPost({ slug: params.slug });
   const content = await import(`/src/lib/posts/${post.file}`);
   return { 
      data: { 
         ...post, 
         id: params.slug,
         component: content.default
      }
   };
}