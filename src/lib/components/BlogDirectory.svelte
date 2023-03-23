<script lang="ts">
    export let data: any[];
    
    import { getYear, getMonth, getDate } from "$lib/helpers/time";
    import { fade } from "svelte/transition";
</script>

{#key data}
    <div class="flex flex-col w-full gap-5" in:fade>
        {#each data as d}
            <div class="p-5 h-[11.5rem] w-full bg-[#39393f] rounded-xl flex flex-row gap-10 relative"
                id="blogDir">
                <img src={d.img} alt={d.title.toLowerCase().replace(" ", "-")}
                    class="aspect-video h-36 rounded-lg">
                <div class="flex flex-col w-full gap-1 h-full overflow-hidden text-ellipsis">
                    <p class="text-sm opacity-50 font-[Bold] flex flex-row gap-2">
                        <span>{d.category.toUpperCase()}</span>
                        <span>•</span>
                        <span>{getMonth(d.date)} {getDate(d.date)}, {getYear(d.date)}</span>
                    </p>
                    <hr class="opacity-50">
                    <h1 class="text-2xl font-black">{d.title}</h1>
                    <p class="flex flex-row gap-2">
                        {#each d.tags as tag}
                            <a href="/search/{tag}">
                            <span class="px-3 py-1 text-xs bg-amber-700 font-extralight
                                    rounded-full font-[Bold] tracking-widest">{tag}</span> 
                            </a>
                            
                        {/each}
                    </p>
                    <p id={d.title.toLowerCase().replace(" ", "-")}>
                        {d.summary}
                    </p>
                </div>
                <p class="absolute bottom-[1.4rem] right-6 bg-gradient-to-l font-black
                    w-56 text-right from-[#39393f] via-[#39393f] text-white/60
                    hover:text-white/90 transition-colors">
                    Read more...
                </p>
            </div>
        {/each}
    </div>
{/key}

