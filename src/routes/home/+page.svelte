<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Directory from '$lib/components/BlogDirectory.svelte';
    import { filterPosts } from '$lib/metadata/blog/posts';
    import { categoryId } from '$lib/stores/misc';
    import { fade } from 'svelte/transition';
    import { settings } from '$lib/metadata/main/settings';

    let cId: number, condition: boolean, posts: any, pages: number, limit = settings.postsPerPage.home,
        isPrevDisabled: boolean, isNextDisabled: boolean,
        current = 1, index = 0;
    $: {
        pages = 1;
        posts = filterPosts({ category: cId });
        condition = filterPosts({ category: cId }).length === 0;

        if (condition) posts = filterPosts({ category: undefined });
        pages = Math.ceil(posts.length / limit);

        isPrevDisabled = current === 1;
        isNextDisabled = current === pages;
    };

    categoryId.subscribe((v: number) => cId = v);

    const clickPage = (e: any) => {
        current = Number(e.target.childNodes[0].textContent);
        index = limit * (current - 1);
    };
    const next = (e: any) => {
        if (isNextDisabled) return;
        current = ++current;
        index = limit * (current - 1);
    };
    const prev = (e: any) => {
        if (isPrevDisabled) return;
        current = --current;
        index = limit * (current - 1);
    };
</script>

<svelte:head>
    <title>[Home] Blug with Naybiblu</title>
    <link rel="icon" href="png/icon.png" />
</svelte:head>

<section class="flex flex-col w-full h-[60vh] overflow-hidden select-none
    xs:h-screen ">
        <Header/>
</section>
{#key filterPosts({ category: cId })}
    <section class="flex flex-col w-5/6 h-max self-center py-16 gap-2 select-none" in:fade>
        {#if condition}
            <div class="flex flex-col justify-center w-full h-full gap-2 mb-10">
                <div class="flex flex-row border-b-2 border-white/50 justify-between items-center pb-1">
                    <h1 class="font-[Bold] text-3xl tracking-wider flex flex-row relative w-full
                        xs:text-2xl xs:leading-[0.7]">
                        Recent blugs
                    </h1>
                </div>
                <p class="bg-[#39393f] w-full py-5 justify-center flex italic text-sm rounded-lg
                    flex-row items-center gap-3 mt-2
                    xs:flex-col xs:items-center xs:text-center">
                    <img src="svg/warning.svg" alt="warning"
                        class="h-10 animate-pulse">
                    <span class="opacity-70
                        xs:w-5/6">
                        As of the moment, there are no available blugs under this category.
                    </span>
                </p>
            </div>
        {/if}
        <div class="flex flex-row border-b-2 border-white/50 justify-between items-center pb-1">
            <h1 class="font-[Bold] text-3xl tracking-wider flex flex-row relative w-full">
                {condition ? "Popular" : "Recent"} blugs
            </h1>
            <!--<button class="flex items-center justify-center hover:bg-[#39393f] rounded-full opacity-60
                p-2">
                <img src="svg/filter.svg" alt="filter" class="h-5 invert">
            </button>-->
        </div>
        <Directory data={posts.slice(index, limit * current)}/>
        <div class="w-full pt-5 flex flex-row justify-center items-center">
            <ul class="w-full flex flex-row justify-center gap-8">
                <li class="flex items-center justify-center">
                    <button class="flex items-center justify-center bg-[#39393f]
                          h-8 w-8 rounded-full transition-opacity
                        {isPrevDisabled ? "cursor-default opacity-20" : "cursor-pointer opacity-60 hover:opacity-100"}"
                        on:click={prev}>
                        <img src="svg/arrow.svg" alt="prev"
                            class="h-4 invert rotate-90">
                    </button>
                </li>
                {#each (new Array(pages)) as a, i}
                    <li class="flex items-center justify-center">
                        <button class="bg-[#39393f] h-8 w-8 rounded-full
                            flex items-center justify-center transition-opacity
                            {current === i + 1 ? "bg-amber-700 opacity-100 cursor-default" 
                            : "hover:opacity-100  opacity-60"}"
                            on:click={clickPage}>
                            <h1 class="flex items-center justify-center font-bold">{i + 1}</h1>
                        </button>
                    </li>
                {/each}
                <li class="flex items-center justify-center">
                    <button class="flex items-center justify-center
                         bg-[#39393f] h-8 w-8 rounded-full transition-opacity
                        {isNextDisabled ? "cursor-default opacity-20" : "cursor-pointer opacity-60 hover:opacity-100"}"
                        on:click={next}>
                        <img src="svg/arrow.svg" alt="next"
                            class="h-4 invert -rotate-90">
                    </button>
                </li>
            </ul>
        </div>
    </section>
{/key}
