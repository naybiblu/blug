<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Directory from '$lib/components/BlogDirectory.svelte';
</script>

<section class="flex flex-col w-full h-[70vh]
    xs:h-screen overflow-hidden">
        <Header/>
</section>
<section class="flex flex-col w-full h-max items-center">
    <Directory/>
</section>
