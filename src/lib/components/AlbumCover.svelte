<script lang="ts">
    import { scale, fade } from 'svelte/transition';

    export let img: string;
    export let title: string;
    export let sub: string;
    export let pos: number;
    export let moveScript: any;
    export let blogCount: number;

    const determinePos = (pos: number) => {
        switch (pos) {
            case 0: return "z-10 cursor-pointer";
            case 1: return "z-0 scale-[.8] -ml-48 blur-[2px] xs:hidden";
            case 2: return "-z-10 scale-[.6] -ml-52 blur-[3px] xs:hidden";
        };
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#key title}
    {#if pos === 0}
        <div class="aspect-square h-full bg-blue-500 drop-shadow-2xl rounded-sm relative
            flex flex-col {determinePos(pos)} items-center justify-center
            xs:w-full" id="firstAlbum" on:click={moveScript(pos)} in:scale>
            <img src={img}
                class="absolute h-full w-full z-10" alt="it">
            <div class="bg-gradient-to-tr absolute h-full w-full from-black z-20"></div>
            <div class="w-full z-20 px-5 py-3 absolute bottom-0 flex flex-col gap-1
                text-white/90">
                <p class="text-[0.5rem] opacity-70 -mb-1 font-[Bold] tracking-widest">
                    {blogCount} POST{blogCount > 1 ? "S" : ""}
                </p>
                <h1 class="text-4xl w-full break-words font-[Bold] tracking-widest leading-none">
                    {title.toUpperCase()}
                </h1>
                <p class="text-[0.5rem] italic opacity-70 flex flex-row gap-1 items-center">
                    <img src="svg/arrow.svg" alt="arrow" class="h-3 invert rotate-180">
                    {sub}
                </p>
            </div>
        </div>
    {:else}
        <div class="aspect-square h-full bg-blue-500 drop-shadow-2xl rounded-sm relative
        flex flex-col {determinePos(pos)}
        xs:w-full" on:click={moveScript(pos)} in:fade>
            <img src={img}
                class="absolute h-full w-full z-10" alt="it">
            <div class="bg-gradient-to-tr absolute h-full w-full from-black z-20"></div>
            <div class="w-full z-20 px-5 py-3 absolute bottom-0 flex flex-col gap-1
                text-white/90">
                <p class="text-[0.5rem] opacity-70 -mb-1 font-[Bold] tracking-widest">
                    {blogCount} POST{blogCount > 1 ? "S" : ""}
                </p>
                <h1 class="text-4xl w-full break-words font-[Bold] tracking-widest leading-none">
                    {title.toUpperCase()}
                </h1>
                <p class="text-[0.5rem] italic opacity-70 flex flex-row gap-1 items-center">
                    <img src="svg/arrow.svg" alt="arrow" class="h-3 invert rotate-180">
                    {sub}
                </p>
            </div>
        </div>
    {/if}   
{/key}