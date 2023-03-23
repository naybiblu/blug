import { categories } from "$lib/metadata/blog/categories";
import { shuffle, sortByDate } from "$lib/helpers/array";

const getMetadata = () => {
    const allFiles = import.meta.glob('$lib/posts/*.md', { eager: true });
    const blogPosts = Object.entries(allFiles).filter(([ path ]) => !path.includes("template.md"))
    const all = blogPosts.map(([ path, post ]) => {
        const fileName = path.replace("/src/lib/posts/", "");
        const metadata = { ...post!.metadata };
        if (!isNaN(metadata.category)) metadata.category = categories()[Number(metadata.category)].title;
        return { ...metadata, file: fileName };
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
    let tbFiltered = originalArr || getMetadata();
    tbFiltered = tbFiltered.filter((p: any) => p.title.toLowerCase().includes(query));
    return tbFiltered;
};