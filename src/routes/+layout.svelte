<script lang="ts">
    import "../app.css";
    import TopNav from '$lib/components/TopNav.svelte';
    import SideNav from "$lib/components/SideNav.svelte";
    import Footer from '$lib/components/Footer.svelte';
    import { page } from '$app/stores';

    let current: string, level: number;
    
    $: {
        current = $page.url.pathname;
        level = (current.match(/\//g) || []).length;
    };
</script>

{#if current !== "/sign"}
    <TopNav level={level}/>
    <SideNav level={level}/>
    <main class="mt-[4.6rem] w-full h-full z-0 overflow-x-hidden overflow-y-auto flex flex-col relative
        xs:mt-0">
        <slot/>
        <Footer level={level}/>
    </main>
{:else}
    <main class="h-full w-full z-0 overflow-hidden">
        <slot/>
    </main>
{/if}