

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
   const blug = await (await fetch(`/api/posts/${params.slug}`)).json();
  
   return { 
      data: { 
         id: params.slug,
         ...blug.metadata,
         content: blug.content
      }
   };
}