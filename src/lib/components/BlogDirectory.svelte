<script lang="ts">
    export let data: any[];
    
    import { getYear, getMonth, getDate } from "$lib/helpers/time";
    import { slugify } from "$lib/helpers/text";
    import { fade } from "svelte/transition";
</script>

{#key data}
    <div class="flex flex-col w-full gap-5 pt-2" in:fade>
        {#each data as d}
        {@const slug = slugify(d.title).toLowerCase().replaceAll(" ", "-")}
            <div class="p-5 h-[11.5rem] w-full bg-[#39393f] rounded-xl flex flex-row gap-10 relative
                xs:h-max xs:flex-col xs:gap-5"
                id="blogDir">
                <a href="/posts/{slug}" class="aspect-video h-36
                    xs:h-32">
                    <img src={d.img} alt={slug}
                        class="h-full w-full rounded-lg">
                </a>
                <div class="flex flex-col w-full gap-1 h-full overflow-hidden text-ellipsis">
                    <p class="text-sm opacity-50 font-[Bold] flex flex-row gap-2 flex-wrap
                        xs:text-xs">
                        <span>{d.category.toUpperCase()}</span>
                        <span>•</span>
                        <span>{getMonth(d.date)} {getDate(d.date)}, {getYear(d.date)}</span>
                    </p>
                    <hr class="opacity-50">
                    <a href="/posts/{slug}">
                        <h1 class="text-2xl font-black hover:underline
                            xs:text-2xl w-full truncate"
                            title={d.title}>
                            {d.title}
                        </h1>
                    </a>
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
                    <p id={slug}
                        class="relative"
                        style="display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;">
                        {d.summary}
                        <a href="/posts/{slug}"
                            class="absolute bottom-0 right-0 bg-gradient-to-l font-black
                            w-56 text-right from-[#39393f] via-[#39393f] text-white/60
                            hover:text-white/90 transition-colors">
                            <p>
                                Read more...
                            </p>
                        </a>
                    </p>
                </div>
                <!--<a href="/posts/{slug}"
                    class="absolute bottom-[1.4rem] right-6 bg-gradient-to-l font-black
                    w-56 text-right from-[#39393f] via-[#39393f] text-white/60
                    hover:text-white/90 transition-colors
                    xs:bottom-[0.87rem]">
                    <p>
                        Read more...
                    </p>
                </a>-->
            </div>
        {/each}
    </div>
{/key}

