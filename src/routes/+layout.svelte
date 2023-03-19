<script lang="ts">
    import "../app.css";
    import TopNav from '$lib/components/TopNav.svelte';
    import Header from '$lib/components/Header.svelte';
    import { page } from '$app/stores';
    let current = $page.url.pathname
</script>

<main class="flex flex-col h-screen w-full items-center">
    {#if current !== "/sign"}
        <TopNav/>
        {#if current === "/"}
            <Header/>
        {/if}
        <section class="flex {current === "/" ? "" : "mt-[4.6rem]"}
            h-full z-0 overflow-x-hidden overflow-y-auto py-8 w-[90%]">
            <slot/>
        </section>
    {:else}
        <section class="h-full z-0 overflow-hidden">
            <slot/>
        </section>
    {/if}
</main>