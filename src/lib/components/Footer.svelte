<script lang="ts">
    export let level = 1;

    import { categories } from '$lib/metadata/blog/categories';
    import { socials } from '$lib/metadata/main/socials';
    import { funThings } from '$lib/metadata/main/funThings';

    $: categoryArr = categories().map((c: any) => c.title);
</script>

<style>
	input:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 5.75rem #39393f inset !important;
		-webkit-text-fill-color: white !important;
	}
</style>

<section class="h-max w-full bg-[#39393f] flex flex-col items-center pt-8 pb-2
    overflow-hidden
    xs:pb-0">
    <div class="flex flex-row items-center justify-between gap-20
        border-b-2 border-white/60 pb-8
        xs:flex-col xs:gap-1 xs:pt-0 xs:pb-5">
        <div class="flex flex-col w-60 items-center justify-center">
            <a href="/home" class="w-max h-max">
                <div class="flex gap-3 items-center font-extrabold scale-125 justify-center
                    animate-pulse
                    xs:scale-150 xs:gap-1">
                    <img src="{"../".repeat(level - 1)}png/icon.png" alt="hisvelte" class="h-16 brightness-0 invert"/>
                    <p class="flex flex-col font-[Bold]
                        xs:-mb-2">
                        <span class="text-xs font-extralight -mb-2 tracking-widest">BLUG WITH</span>
                        <span class="text-2xl font-black tracking-widest">naybiblu</span>
                    </p>
                </div>  
            </a>
        </div>
        <div class="flex flex-row gap-12 h-full items-center justify-center
            xs:gap-10 xs:py-10">
            <div class="flex flex-col justify-start
                xs:justify-center">
                <h1 class="font-[Bold] text-sm tracking-wide pb-5">Categories</h1>
                {#each categoryArr as category}
                    <a href="/search/{category.toLowerCase().replace(" ", "-")}"
                        class="opacity-80 hover:opacity-100 transition-opacity">
                        <p>{category}</p>
                    </a>  
                {/each}
            </div>
            <div class="flex flex-col justify-start">
                <h1 class="font-[Bold] text-sm tracking-wide pb-5">Fun Things</h1>
                {#each funThings() as fun}
                    <a href={fun.link}
                        class="opacity-80 hover:opacity-100 transition-opacity">
                        <p>{fun.name}</p>
                    </a>  
                {/each}
            </div>
        </div>
        <div class="flex flex-col items-center justify-center w-[30rem] gap-3">
            <form class="flex flex-col items-center justify-center w-full">
                <div class="relative opacity-70">
                    <p class="font-[Bold] text-sm pb-1 flex flex-row items-center justify-start gap-2
                        tracking-wide opacity-100">
                        <img src="{"../".repeat(level - 1)}svg/arrow.svg" alt="arrow"
                            class="invert h-4">
                        Why not subscribe for more updates?
                    </p>
                    <div class="flex flex-row w-96 items-center justify-center
                        xs:w-[19.5rem]">
                        <input type="email" name="email" placeholder="ampingping@example.com"
                            class="h-10 w-full bg-transparent border-4 rounded-full
                            px-5 outline-none">
                        <button class="-ml-12 bg-white rounded-full h-10 px-6
                            text-[#39393f] hover:scale-105 font-bold transition-all" disabled>
                            Sure
                        </button> 
                    </div>
                </div>
            </form> 
            <div class="flex flex-row justify-between items-center gap-5">
                {#each socials() as social} 
                    <a href={social.link}>
                        <img src="{"../".repeat(level - 1)}svg/{social.name.toLowerCase()}.svg" alt={social.name.toLowerCase()}
                            class="h-8 invert opacity-70 hover:opacity-100 transition-opacity">
                    </a>
                {/each}
            </div>
        </div>
    </div>
    <p class="font-[Bold] opacity-60 text-xs mt-2 tracking-widest
        xs:scale-75 xs:mt-1">
        Blug with Naybiblu © 2023 - All Rights Reserved
    </p>
</section>