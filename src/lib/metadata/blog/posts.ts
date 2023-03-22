export const getMetadata = () => {
    const allFiles = import.meta.glob('$lib/posts/*.md', { eager: true });
    const all = Object.entries(allFiles).map(([ path, post ]) => {
        const fileName = path.replace("/src/lib/posts/", "")
        return { ...post?.metadata, file: fileName };
    });
    return all;
};

export const filterPosts = (removeDraft: boolean) => {
    let tbFiltered = getMetadata();
    if (removeDraft) tbFiltered = tbFiltered.filter((p: any) => !p.draft);
    return tbFiltered;
}