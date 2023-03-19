<script lang="ts">
    import AlbumCover from "$lib/components/AlbumCover.svelte";
    import { categories } from "$lib/metadata/blog/categories";
    import { splitString } from "$lib/helpers/text";
    import { onMount } from "svelte";

    let sample = categories();
    $: first = sample[0];

    const move = (pos: any) => {
        if (pos === 0) return;
        let last = sample[sample.length - 1];
        sample = sample.filter((s: any, i: number) => i !== sample.length - 1);
        sample = [last, ...sample];
    }
</script>

<section class="w-full h-[200vh] mt-[4.6rem] flex flex-row flex-wrap z-10 bg-gradient-to-br
    justify-between items-center px-56 from-black/90 border-y-4">
    <div class="h-5/6 w-1/2 flex items-center">
        {#each sample as s, i}
            <AlbumCover img={s.img} title={s.title} sub={s.sub} pos={i} moveScript={move}
                blogCount={s.blogCount}/>
        {/each}
    </div>
    <div class="h-5/6 w-[45%] flex justify-center flex-col gap-2">
        <hr>
        <div class="flex flex-col">
            <h1 class="font-[Bold] text-7xl break-words leading-[0.95] text-white">
                {first.title}
            </h1>
            <p class="italic text-xs mt-2 break-words text-justify">
                {first.description}
            </p>
        </div>
        <hr>
        <div class="flex flex-row justify-start items-center">
            <a href="/search/{first.title.toLowerCase().replace(" ", "-")}"
                class="opacity-70 hover:opacity-100 flex flex-row gap-2 items-center justify-center">
                <img src="svg/arrow.svg" alt="arrow" class="invert h-5 rotate-180">
                <p class="font-[Bold] tracking-wider">see more</p>
            </a>
        </div>
    </div>
</section>