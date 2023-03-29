<script lang="ts">
    export let id: string;
    export let name = id;
</script>

<div class="flex justify-center w-full">
    <iframe
        class="aspect-video w-2/3 rounded-lg
        xs:w-full"
        src="https://www.youtube.com/embed/{id}" 
        title={name}
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
</div>

