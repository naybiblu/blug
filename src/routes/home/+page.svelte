<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Directory from '$lib/components/BlogDirectory.svelte';
</script>

<svelte:head>
    <title>[Home] Blug with Naybiblu</title>
</svelte:head>

<section class="flex flex-col w-full h-[60vh]
    xs:h-screen overflow-hidden">
        <Header/>
</section>
<section class="flex flex-col w-5/6 h-max self-center py-10 gap-2">
    <div class="flex flex-row border-b-2 border-white/50 justify-between items-center pb-1">
        <h1 class="font-[Bold] text-2xl tracking-wider">
            Recent blugs
        </h1>
        <!--<button class="flex items-center justify-center hover:bg-[#39393f] rounded-full opacity-60
            p-2">
            <img src="svg/filter.svg" alt="filter" class="h-5 invert">
        </button>-->
    </div>
    <Directory/>
</section>
