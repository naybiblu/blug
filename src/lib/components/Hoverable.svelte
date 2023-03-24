<script lang="ts">
    export let message: string;
    export let icon: string;
    export let css: string | undefined;
</script>

<div class="h-16 {css} flex gap-3 items-end text-left font-[Regular] z-50 cursor-pointer">
    <img
        src={icon}
        alt="icon"
        class="h-6 animate-pulse peer/bdaywarn"
    />
    <div
        class="bg-[#39393f] max-w-[19rem] px-5 py-2 rounded-lg text-white scale-0
peer-hover/bdaywarn:scale-100 transition-transform origin-left font-semibold -mb-12"
    >
        <p class="text-sm">{message}</p>
    </div>
</div>