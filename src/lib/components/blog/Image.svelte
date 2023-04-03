<script lang="ts">
    export let src: string;
    export let alt = "image";
</script>

<div class="flex justify-center w-full items-center">
    <img src={src} alt={alt} class="aspect-video w-[70%] rounded-lg
    xs:w-full"/>
</div>