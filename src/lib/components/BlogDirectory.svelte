<script lang="ts">
    export let data: any[];
    
    import { getYear, getMonth, getDate } from "$lib/helpers/time";
    import { fade } from "svelte/transition";
</script>

{#key data}
    <div class="flex flex-col w-full gap-5 pt-2" in:fade>
        {#each data as d}
            <div class="p-5 h-[11.5rem] w-full bg-[#39393f] rounded-xl flex flex-row gap-10 relative
                xs:h-max xs:flex-col xs:gap-5"
                id="blogDir">
                <img src={d.img} alt={d.title.toLowerCase().replace(" ", "-")}
                    class="aspect-video h-36 rounded-lg
                        xs:h-32">
                <div class="flex flex-col w-full gap-1 h-full overflow-hidden text-ellipsis">
                    <p class="text-sm opacity-50 font-[Bold] flex flex-row gap-2 flex-wrap
                        xs:text-xs">
                        <span>{d.category.toUpperCase()}</span>
                        <span>•</span>
                        <span>{getMonth(d.date)} {getDate(d.date)}, {getYear(d.date)}</span>
                    </p>
                    <hr class="opacity-50">
                    <h1 class="text-2xl font-black
                        xs:text-2xl">
                        {d.title}
                    </h1>
                    <p class="flex flex-row gap-2 flex-wrap">
                        {#each d.tags as tag}
                            <a href="/search/{tag}"
                                class="flex items-center justify-center">
                            <span class="px-3 py-1 text-xs bg-amber-700 font-extralight
                                    rounded-full font-[Bold] tracking-widest
                                    xs:text-[0.60rem] xs:pb-1 xs:pt-[0.35rem]">{tag}</span> 
                            </a>
                        {/each}
                    </p>
                    <p id={d.title.toLowerCase().replace(" ", "-")}
                        class="h-[8.6rem]">
                        {d.summary}
                    </p>
                </div>
                <p class="absolute bottom-[1.4rem] right-6 bg-gradient-to-l font-black
                    w-56 text-right from-[#39393f] via-[#39393f] text-white/60
                    hover:text-white/90 transition-colors
                    xs:bottom-[0.87rem]">
                    Read more...
                </p>
            </div>
        {/each}
    </div>
{/key}

