/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
   return {
      query: params.query
   };
}