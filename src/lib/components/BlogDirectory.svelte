<script lang="ts">
    import { categories } from "$lib/metadata/blog/categories";

    const sample = [
        {
            title: "How to Eat Your Dragon",
            img: "https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/thumbs/Best-Covers-For-Facebook-Timeline-sunflower.jpg",
            category: categories()[0].title,
            tags: ["tite", "naybi", "pogi"],
            date: "2017-06-15"
        },
        {
            title: "How to Eat Your Dragon",
            img: "https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/thumbs/Best-Covers-For-Facebook-Timeline-sunflower.jpg",
            category: categories()[0].title,
            tags: ["tite", "naybi", "pogi"],
            date: "2017-06-15"
        },
        {
            title: "How to Eat Your Dragon",
            img: "https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/thumbs/Best-Covers-For-Facebook-Timeline-sunflower.jpg",
            category: categories()[0].title,
            tags: ["tite", "naybi", "pogi"],
            date: "2017-06-15"
        }
    ];
</script>

<div class="flex flex-col w-5/6 gap-5 py-10">
    {#each sample as s, i}
        <div class="p-5 w-full bg-[#39393f] rounded-xl flex flex-row gap-10">
            <img src={s.img} alt={s.title.toLowerCase().replace(" ", "-")}
                class="aspect-video h-36 rounded-lg">
            <div class="flex flex-col w-full gap-1">
                <p class="text-sm opacity-50 font-[Bold]">
                    {s.category.toUpperCase()}</p>
                <hr class="opacity-50">
                <h1 class="text-2xl font-black">{s.title}</h1>
                <p class="flex flex-row gap-2">
                    {#each s.tags as tag}
                        <span class="px-3 py-1 text-xs bg-amber-700 font-extralight
                            rounded-full font-[Bold] tracking-widest">{tag}</span>
                    {/each}
                </p>
            </div>
        </div>
    {/each}
</div>

