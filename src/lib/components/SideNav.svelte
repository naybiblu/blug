<script lang="ts">
    export let level = 1;

    let typed: string, showable = false, menuShow = false, searchShow = false,
        scrollPos = 0;

    $: typed = "";
    const reset = () => typed = "";
    const showNav = () => {
        let current = document.documentElement.scrollTop;
        showable = scrollPos < current;
        if (scrollPos < current) {
            menuShow = false;
        }
        scrollPos = current <= 0 ? 0 : current;
    }
    const showMenu = () => menuShow = !menuShow;
    const showSearch = () => searchShow = !searchShow;
    const back2Top = () => document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
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

<svelte:window on:scroll={showNav}/>

<section class="fixed bottom-7 left-7 items-center justify-between 
    z-50 select-none transition-all xs:flex origin-bottom
    {showable ? "scale-100" : "scale-0"}
    lg:hidden xl:hidden 2xl:hidden">
    <div class="relative flex flex-col">
        <button class="bg-amber-700 h-[3.5rem] w-[3.5rem] rounded-full flex
            justify-center items-center z-20 hover:bg-[#4e4e55]"
            on:click={showMenu}>
            <img src="{"../".repeat(level - 1)}/svg/menu.svg" alt="menu"
                class="h-5 invert"/>
        </button>
        <div class="absolute flex-col flex bg-[#4e4e55] w-[3.5rem] rounded-full
            z-10 origin-bottom {menuShow ? '' : 'scale-0'}
            bottom-0 transition-all pb-[3.5rem] pt-2">
            <a href="/home">
                <button class="h-[3.5rem] w-[3.5rem] rounded-full flex
                    justify-center items-center opacity-75 hover:opacity-100">
                    <img src="{"../".repeat(level - 1)}/svg/home.svg" alt="arrow"
                        class="h-8 invert"/>
                </button>
            </a>
            
            <button class="h-[3.5rem] w-[3.5rem] rounded-full flex
                justify-center items-center opacity-75 hover:opacity-100"
                on:click={showSearch}>
                <img src="{"../".repeat(level - 1)}/svg/search.svg" alt="arrow"
                    class="h-7 invert"/>
            </button>
            <button class="h-[3.5rem] w-[3.5rem] rounded-full flex
                justify-center items-center opacity-75 hover:opacity-100"
                on:click={back2Top}>
                <img src="{"../".repeat(level - 1)}/svg/arrow.svg" alt="arrow"
                    class="h-7 invert rotate-180"/>
            </button>
        </div>
    </div>
</section>
<div class="fixed top-5 w-full z-30 flex justify-center items-center transition-all origin-top
    {searchShow ? "" : "scale-0"}">
    <form class="flex items-center justify-center relative w-5/6" on:submit={redirect}>
        <input type="text" placeholder="Explore more blogs in specific..."
            class="h-10 w-[30rem] px-5 rounded-l-full border-white/5 border bg-[#1c1c1c]
            focus:border-white outline-none text-sm" name="search" bind:value={typed}>
        {#if typed}
            <button class="rounded-r-full h-10 px-5 absolute right-12" type="reset" on:click={reset}>
                <img src="{"../".repeat(level - 1)}svg/wrong.svg" alt="wrong" class="h-5 invert opacity-70">
            </button>
        {/if}
        <button class="bg-[#39393f] rounded-r-full h-10 px-5 flex items-center justify-center">
            <img src="{"../".repeat(level - 1)}svg/search.svg" alt="search" class="h-5 invert opacity-70">
        </button>
    </form>
</div>
