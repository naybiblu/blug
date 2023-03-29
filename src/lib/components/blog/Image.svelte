<script lang="ts">
    export let src: string;
    export let alt = "image";
</script>

<div class="flex justify-center w-full">
    <img src={src} alt={alt} class="aspect-video w-2/3 rounded-lg
    xs:w-full"/>
</div>