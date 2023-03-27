<script lang='ts'>
    export let text: string;
    export let level = 1;
    
    let style = "text-5xl";

    switch (Number(level)) {
        case 2: style = "text-4xl"; break;
        case 3: style = "text-3xl"; break;
        case 4: style = "text-2xl"; break;
        case 5: style = "text-xl"; break;
        case 6: style = "text-lg";
    }
</script>

<h1 id={text.toLowerCase().replaceAll(" ", "-")}
    class="{style} font-bold">
    {text}
</h1>