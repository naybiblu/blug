/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }: any) {
   const blugs = await (await fetch(`/api/posts/search/${params.query}`)).json();
   return {
      blugs: blugs,
      query: params.query
   };
}
