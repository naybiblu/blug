<script lang='ts'>
    export let text: string;
    export let level = 2;
    
    let style = "text-5xl xs:text-3xl";

    switch (Number(level)) {
        case 2: style = "text-4xl xs:text-2xl"; break;
        case 3: style = "text-3xl xs:text-xl"; break;
        case 4: style = "text-2xl xs:text-lg"; break;
        case 5: style = "text-xl xs:text-base"; break;
        case 6: style = "text-lg xs:text-sm";
    }
</script>

<h1 id={text.toLowerCase().replaceAll(" ", "-")}
    class="{style} font-bold text-left">
    {text}
</h1>