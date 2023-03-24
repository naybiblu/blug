import { categories, lang } from "$lib/metadata/blog/categories";
import { shuffle, sortByDate } from "$lib/helpers/array";

let categoryNames = [].concat(...categories().map((c: any) => c.title.toLowerCase().split(" ")));

const getMetadata = () => {
    const allFiles = import.meta.glob('$lib/posts/*.md', { eager: true });
    const blogPosts = Object.entries(allFiles).filter(([ path ]) => !path.includes("template.md"))
    const all = blogPosts.map(([ path, post ]) => {
        const fileName = path.replace("/src/lib/posts/", "");
        const metadata = { ...post!.metadata };
        if (!isNaN(metadata.category)) metadata.category = categories()[Number(metadata.category)].title;
        if (!isNaN(metadata.language)) metadata.language = lang()[Number(metadata.language)];
        return { ...metadata, file: fileName};
    });
    return all;
};

export const filterPosts = ({ removeDraft = true, randomize = false, recent = true, originalArr = null, category }: 
    { removeDraft?: boolean, randomize?: boolean, recent?: boolean, originalArr?: any[] | null,
        category: number | undefined }) => {
    let tbFiltered = originalArr || getMetadata();
    if (removeDraft) tbFiltered = tbFiltered.filter((p: any) => !p.draft);
    if (category) tbFiltered = tbFiltered.filter((p: any) => p.category === category);
    if (randomize) tbFiltered = shuffle(tbFiltered);
    tbFiltered = sortByDate(tbFiltered, recent);
    return tbFiltered;
};

export const searchPosts = ({ query, originalArr = null }: { query: string, originalArr?: any[] | null }) => {
    query = query.toLowerCase();
    let tbFiltered = originalArr || getMetadata();
    let queryArr = query.split(" ");
    let tempArr = [];
    if (queryArr.length === 1) { 
        tempArr.push(...tbFiltered.filter((p: any) => p.title.toLowerCase().split(" ").includes(query)));
        tempArr.push(...tbFiltered.filter((p: any) => p.category.toLowerCase().split(" ").includes(query)));
        tempArr.push(...tbFiltered.filter((p: any) => p.tags.map((t: any) => t.toLowerCase()).includes(query)));
        tbFiltered = [...new Set(tempArr)];
    } else {
        tempArr.push(...tbFiltered.filter((p: any) => p.title.toLowerCase().split(" ").some((w: any) => queryArr.includes(w))));
        tempArr.push(...tbFiltered.filter((p: any) => p.category.toLowerCase().split(" ").some((w: any) => queryArr.includes(w))));
        tempArr.push(...tbFiltered.filter((p: any) => p.tags.map((t: any) => t.toLowerCase()).some((w: any) => queryArr.includes(w))));
        tbFiltered = [...new Set(tempArr)];
    }
    return tbFiltered;
};

export const searchPost = ({ slug, originalArr = null}: { slug: string, originalArr?: any[] | null }) => {
    slug = slug.toLowerCase().replaceAll("-", " ");
    let postsArr = originalArr || filterPosts({ category: undefined });
    return postsArr.filter((p: any) => p.title.toLowerCase() === slug)[0];
};