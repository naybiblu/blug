<script lang="ts">
    import AlbumCover from "$lib/components/AlbumCover.svelte";
    import { categories } from "$lib/metadata/blog/categories";
    import { fade } from 'svelte/transition';
    import { onMount } from "svelte";

    let sample = categories();
    let timer = 0;
    $: first = sample[0];

    onMount(() => {
        let album = document.querySelector("#firstAlbum");
        setInterval(() => {
            timer++;
            if (timer === 20) album!.innerHTML += "<div class='absolute z-40 h-6 w-6 animate-ping border-2 rounded-full'></div><div class='absolute z-40 h-3 w-3 animate-ping border-2 rounded-full'></div>";
        }, 1000);
    });

    const move = (pos: any) => {
        if (pos !== 0) return;
        timer = 0;
        let last = sample[sample.length - 1];
        sample = sample.filter((s: any, i: number) => i !== sample.length - 1);
        sample = [last, ...sample];
    }
</script>

<section class="w-full h-full flex flex-row flex-wrap z-10 bg-gradient-to-br
    justify-between items-center px-52 from-black/90 border-y-4 overflow-hidden
    xs:px-0 xs:justify-center xs:items-center">
    <div class="h-5/6 w-1/2 flex items-center overflow-hidden
        xs:w-[90%] xs:h-max">
        {#each sample.slice(0, 4) as s, i}
            <AlbumCover img={s.img} title={s.title} sub={s.sub} pos={i} moveScript={move}
                blogCount={s.blogCount}/>
        {/each}
    </div>
    {#key first}
        <div class="h-5/6 w-[45%] flex justify-center flex-col gap-2
            xs:w-[90%] xs:h-min" in:fade>
            <p class="font-[Bold] text-sm mt-2 break-words text-justify opacity-60
                    xs:-mt-2">
                    Handpicked categories
            </p>
            <hr>
            <div class="flex flex-col">
                <h1 class="font-[Bold] text-7xl break-words leading-[0.95] text-white
                    xs:text-6xl">
                    {first.title}
                </h1>
                <p class="italic text-xs mt-2 break-words text-justify
                    xs:-mt-2">
                    {first.description}
                </p>
            </div>
            <hr>
            <div class="flex flex-row justify-start items-center">
                <a href="/search/{first.title.toLowerCase().replace(" ", "-")}"
                    class="opacity-70 hover:opacity-100 flex flex-row gap-2 items-center justify-center">
                    <img src="svg/arrow.svg" alt="arrow" class="invert h-5 rotate-180
                        xs:h-3">
                    <p class="font-[Bold] tracking-wider 
                        xs:text-xs">
                    see more
                    </p>
                </a>
            </div>
        </div>
    {/key}
</section>