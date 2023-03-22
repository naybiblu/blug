<script lang="ts">
    import "../app.css";
    import TopNav from '$lib/components/TopNav.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { page } from '$app/stores';
    $: current = $page.url.pathname;
</script>

{#if current !== "/sign"}
    <TopNav/>
    <main class="mt-[4.6rem] w-full h-full z-0 overflow-x-hidden overflow-y-auto flex flex-col relative
        xs:mt-0">    
        <slot/>
        <Footer/>
    </main>
{:else}
    <main class="h-full w-full z-0 overflow-hidden">
        <slot/>
    </main>
{/if}