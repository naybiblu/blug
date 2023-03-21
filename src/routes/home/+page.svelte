<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Directory from '$lib/components/BlogDirectory.svelte';
</script>

<svelte:head>
    <title>[Home] Blug With Naybiblu</title>
</svelte:head>

<section class="flex flex-col w-full h-[60vh]
    xs:h-screen overflow-hidden">
        <Header/>
</section>
<section class="flex flex-col w-full h-max items-center">
    <Directory/>
</section>
