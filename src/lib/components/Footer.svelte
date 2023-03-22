<script lang="ts">
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

<section class="h-[40vh] w-full bg-[#39393f] flex flex-col items-center py-5
    pl-20 rounded-tl-full overflow-hidden">
    <div class="flex flex-row items-center justify-between gap-20
        border-b-2 border-white/60">
        <div class="flex flex-col w-60">
            <a href="/home" class="w-max h-max">
                <div class="flex gap-3 items-center font-extrabold scale-125">
                    <img src="png/icon.png" alt="hisvelte" class="h-16 brightness-0 invert"/>
                    <p class="flex flex-col font-[Bold]">
                        <span class="text-xs font-extralight -mb-2 tracking-widest">BLUG WITH</span>
                        <span class="text-2xl font-black tracking-widest">naybiblu</span>
                    </p>
                </div>  
            </a>
        </div>
        <div class="flex flex-row gap-12 h-full items-center justify-center py-10">
            <div class="flex flex-col justify-start">
                <h1 class="font-[Bold] text-sm tracking-wide pb-5">Categories</h1>
                {#each categoryArr as category}
                    <a href="/search/{category.toLowerCase().replace(" ", "-")}"
                        class="opacity-80 hover:opacity-100">
                        <p>{category}</p>
                    </a>  
                {/each}
            </div>
            <div class="flex flex-col justify-start">
                <h1 class="font-[Bold] text-sm tracking-wide pb-5">Fun Things</h1>
                {#each funThings() as fun}
                    <a href={fun.link}
                        class="opacity-80 hover:opacity-100">
                        <p>{fun.name}</p>
                    </a>  
                {/each}
            </div>
        </div>
        <div class="flex flex-col items-center justify-center w-[30rem] gap-3">
            <form class="flex flex-col items-center justify-center">
                <div class="relative flex-row opacity-70">
                    <p class="font-[Bold] text-sm pb-1 flex flex-row items-center justify-start gap-2
                        tracking-wide opacity-100">
                        <img src="svg/arrow.svg" alt="arrow"
                            class="invert h-4">
                        Why not subscribe for more updates?
                    </p>
                    <input type="email" name="email"
                        class="h-10 w-96 bg-transparent border-4 rounded-full
                        px-5 outline-none">
                    <button class="-ml-12 bg-white rounded-full h-10 px-6
                        text-[#39393f] hover:scale-105 font-bold" disabled>
                        Sure
                    </button> 
                </div>
            </form> 
            <div class="flex flex-row justify-between items-center gap-5">
                {#each socials() as social} 
                    <a href={social.link}>
                        <img src="svg/{social.name.toLowerCase()}.svg" alt={social.name.toLowerCase()}
                            class="h-8 invert opacity-70 hover:opacity-100">
                    </a>
                {/each}
            </div>
        </div>
    </div>
    <p class="font-[Bold] opacity-60 text-xs mt-2 tracking-widest">
        Blug with Naybiblu © 2023 - All Rights Reserved
    </p>
</section>