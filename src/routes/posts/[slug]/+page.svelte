<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data: any;

    import { getYear, getMonth, getDate } from "$lib/helpers/time";

    $: data = data.data;
</script>

<svelte:head>
    <title>[{data.title}] Blug With Naybiblu</title>
    <link rel="icon" href="../png/icon.png" />
    <meta name="og:title" content="[{data.title}] Blug With Naybiblu">
    <meta name="description" content={data.summary}>
    <meta name="og:description" content={data.summary}>
    <meta name="author" content="Mharc Nyvhie Guillermo">
    <meta name="keywords" content={data.tags.join(", ")}>
    <meta name="og:image" content={data.img}>
</svelte:head>

<section class="flex flex-row w-[80%] h-max self-center py-12 gap-10">
    <div class="w-full flex flex-col gap-12
        xs:gap-8">
        <div class="w-full h-full select-none">
            <div class="flex flex-col gap-4 z-20 text-center">
                <p class="text-sm font-[Bold] flex flex-row gap-2 flex-wrap items-center
                    opacity-75 justify-center
                    xs:text-xs">
                    <span>{data.category}</span>
                    <span>•</span>
                    <span>{getMonth(data.date)} {getDate(data.date)}, {getYear(data.date)}</span>
                </p>
                <h1 class="text-5xl font-black
                    xs:text-3xl">
                    {data.title}
                </h1>
                <p class="flex flex-col gap-3 self-center flex-wrap justify-self-center
                    items-center justify-center">
                    <a href="/search/{data.language.toLowerCase().split(' ')[0]}"
                            class="flex items-center justify-center">
                        <span class="px-3 py-1 text-xs bg-amber-700 font-extralight
                                rounded-full font-[Bold] tracking-widest
                                xs:text-[0.60rem] xs:pb-1 xs:pt-[0.35rem]">{data.language}</span> 
                    </a>
                    <span class="flex flex-row flex-wrap gap-2">
                        {#each data.tags as tag}
                            <a href="/search/{tag}"
                                class="flex items-center justify-center">
                            <span class="px-3 py-1 text-xs bg-[#39393f] font-extralight
                                    rounded-full font-[Bold] tracking-widest
                                    xs:text-[0.60rem] xs:pb-1 xs:pt-[0.35rem]">{tag}</span> 
                            </a>
                        {/each}
                    </span>
                </p>
                <p class="mt-4 italic px-5
                    xs:mt-2 xs:text-sm">
                    {data.exciter}
                </p>
            </div>
            <img class="w-full h-96 my-10 rounded-lg aspect-video
                xs:h-60"
                src={data.img} alt={data.img}/>
        </div>
        <div class="flex flex-col w-[85%] self-center gap-10 text-lg justify-self-center select-auto
            xs:text-base xs:w-[95%] text-justify">
            {@html data.content.code}
        </div>
    </div>
    <!--<div class="w-96 h-full flex flex-col gap-5">
        <div class="w-full flex flex-col rounded-lg relative">
            <div class="font-[Bold] text-sm text-white/80">
                <button class="h-6 font-bold rounded-t-lg px-3
                    {clickedTags ? "bg-[#39393f]" : "bg-[#494950]"}"
                    on:click={clickedInfo}>
                    Tags
                </button>
                <button class="h-6 font-bold rounded-t-lg px-3
                {clickedTags ? "bg-[#494950]" : "bg-[#39393f]"} "
                    on:click={clickedInfo}>
                    Language
                </button>
            </div>
            <div class="bg-[#39393f] w-full flex flex-col rounded-b-lg rounded-tr-lg px-4 py-3">
                {#if clickedTags}
                    <p class="flex flex-row gap-2 flex-wrap">
                        {#each data.tags as tag}
                            <a href="/search/{tag}"
                                class="flex items-center justify-center">
                            <span class="px-3 py-1 text-xs bg-amber-700 font-extralight
                                    rounded-full font-[Bold] tracking-widest
                                    xs:text-[0.60rem] xs:pb-1 xs:pt-[0.35rem]">{tag}</span> 
                            </a>
                        {/each}
                    </p>
                {:else}
                    {data.language}
                {/if}
            </div>
        </div>
    </div>-->
</section>
