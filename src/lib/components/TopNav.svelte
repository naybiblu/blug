<script lang="ts">
    export let level = 1;

    let typed: string;

    const reset = () => typed = "";
    const redirect = (e: any) => {
        const form = new FormData(e.target);
        const query = form.get("search");

        throw location.href = `/search/${query!.replaceAll(" ", "-")}`;
    }
</script>

<style>
    input:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 5.75rem #39393f inset !important;
		-webkit-text-fill-color: white !important;
	}
</style>

<section class="w-full h-[4.5rem] flex fixed top-0 left-0 items-center px-20 justify-between bg-[#1c1c1c]
    shadow-lg z-50 select-none
    xs:hidden">
    <a href="/home" class="w-max h-max">
        <div class="flex gap-3 items-center font-extrabold">
            <img src="{"../".repeat(level - 1)}png/icon.png" alt="hisvelte" class="h-16 brightness-0 invert"/>
            <p class="flex flex-col font-[Bold]">
                <span class="text-xs font-extralight -mb-2 tracking-widest">BLUG WITH</span>
                <span class="text-2xl font-black tracking-widest">naybiblu</span>
            </p>
	    </div>  
    </a>
    <form class="flex items-center justify-center relative" on:submit={redirect}>
        <input type="text" placeholder="Explore more blogs in specific..."
            class="h-10 w-[30rem] px-5 rounded-l-full border-white/5 border bg-transparent 
            focus:border-white outline-none" name="search" bind:value={typed}>
        {#if typed}
            <button class="rounded-r-full h-10 px-5 absolute right-12" type="reset" on:click={reset}>
                <img src="{"../".repeat(level - 1)}svg/wrong.svg" alt="wrong" class="h-5 invert opacity-70">
            </button>
        {/if}
        <button class="bg-[#39393f] rounded-r-full h-10 px-5 flex items-center justify-center">
            <img src="{"../".repeat(level - 1)}svg/search.svg" alt="search" class="h-5 invert opacity-70">
        </button>
    </form>
    <div class="flex gap-5 items-center justify-center">
        <a href="/sign" class="h-10">
           <button class="bg-amber-700 h-full px-8 rounded-full font-bold
           hover:bg-[#39393f] transition-colors">Sign in/up</button> 
        </a>
        <img src="{"../".repeat(level - 1)}png/icon.png" alt="user" class="h-12 rounded-full invert"/>
    </div>
</section>