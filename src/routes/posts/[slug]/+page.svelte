<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data: any;
    data = data.data;

    import { getYear, getMonth, getDate } from "$lib/helpers/time";

    $: clickedTags = true;
    const html = data.component.render().html;

    const clickedInfo = (e: any) => {
        const infoTitle = e.target.childNodes[0].textContent;
        clickedTags = infoTitle === "Tags";
    };
</script>

<svelte:head>
    <title>[{data.title}] Blug With Naybiblu</title>
    <link rel="icon" href="../png/icon.png" />
</svelte:head>

<section class="flex flex-row w-5/6 h-max self-center py-12 gap-10">
    <div class="w-2/3 flex flex-col gap-12">
        <div class="w-full flex flex-col gap-10">
            <img src={data.img} alt={data.img}
                class="aspect-video w-full h-78">
            <div class="flex flex-col w-full gap-2">
                <h1 class="text-5xl font-black
                xs:text-2xl">
                    {data.title}
                </h1>
                <hr class="opacity-50">
                <p class="text-sm opacity-50 font-[Bold] flex flex-row gap-2 flex-wrap
                xs:text-xs">
                    <span>{data.category}</span>
                    <span>•</span>
                    <span>{getMonth(data.date)} {getDate(data.date)}, {getYear(data.date)}</span>
                </p>
            </div>
        </div>
        <div class="flex flex-col gap-5">
            <svelte:component this={data.component}/>
        </div>
    </div>
    <div class="w-96 h-full flex flex-col gap-5">
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
    </div>
</section>
