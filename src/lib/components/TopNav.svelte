<script lang="ts">
    let typed: string;
    const reset = () => typed = "";
</script>

<section class="w-full h-[4.5rem] flex fixed top-0 left-0 items-center px-20 justify-between bg-[#1c1c1c]
    shadow-lg z-50">
    <a href="/" class="w-max h-max">
        <div class="flex gap-3 items-center font-extrabold">
            <img src="png/icon.png" alt="hisvelte" class="h-16 brightness-0 invert"/>
            <p class="flex flex-col font-[Bold]">
                <span class="text-xs font-extralight -mb-2 tracking-widest">BLUG WITH</span>
                <span class="text-2xl font-black tracking-widest">naybiblu</span>
            </p>
	    </div>  
    </a>
    <form class="flex items-center justify-center relative">
        <input type="text" placeholder="Explore more blogs in specific..."
            class="h-10 w-[30rem] px-5 rounded-l-full border-white/5 border bg-transparent 
            focus:border-white outline-none" bind:value={typed}>
        {#if typed}
            <button class="rounded-r-full h-10 px-5 absolute right-12" type="reset" on:click={reset}>
                <img src="svg/wrong.svg" alt="wrong" class="h-5 invert opacity-70">
            </button>
        {/if}
        <button class="bg-[#39393f] rounded-r-full h-10 px-5 flex items-center justify-center">
            <img src="svg/search.svg" alt="search" class="h-5 invert opacity-70">
        </button>
    </form>
    <div class="flex gap-5 items-center justify-center">
        <a href="/ask" class="h-10">
           <button class="bg-amber-700 h-full px-8 rounded-full font-bold
           hover:bg-[#39393f]">Sign in</button> 
        </a>
        <img src="png/icon.png" alt="user" class="h-12 rounded-full invert"/>
    </div>
</section>