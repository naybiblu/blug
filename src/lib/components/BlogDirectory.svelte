<script lang="ts">
    import { categories } from "$lib/metadata/blog/categories";
    import { getYear, getMonth, getDate } from "$lib/helpers/time";

    const sample = [
        {
            title: "How to Eat Your Dragon",
            img: "https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/thumbs/Best-Covers-For-Facebook-Timeline-sunflower.jpg",
            category: categories()[0].title,
            tags: ["tite", "naybi", "pogi"],
            date: "2017-06-15",
            content: "This page shares my best articles to read on topics like health, happiness, creativity, productivity and more. The central question that drives my work is, “How can we live better?” To answer that question, I like to write about science-based ways to solve practical problems."
        },
        {
            title: "How to Eat Your Dragon",
            img: "https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/thumbs/Best-Covers-For-Facebook-Timeline-sunflower.jpg",
            category: categories()[0].title,
            tags: ["tite", "naybi", "pogi"],
            date: "2017-06-15",
            content: "This page shares my best articles to read on topics like health, happiness, creativity, productivity and more. The central question that drives my work is, “How can we live better?” To answer that question, I like to write about science-based ways to solve practical problems."

        },
        {
            title: "How to Eat Your Dragon",
            img: "https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/thumbs/Best-Covers-For-Facebook-Timeline-sunflower.jpg",
            category: categories()[0].title,
            tags: ["tite", "naybi", "pogi"],
            date: "2017-06-15",
            content: "This page shares my best articles to read on topics like health, happiness, creativity, productivity and more. The central question that drives my work is, “How can we live better?” To answer that question, I like to write about science-based ways to solve practical problems."

        }
    ];
</script>

<div class="flex flex-col w-5/6 gap-5 py-10">
    {#each sample as s, i}
        <div class="p-5 h-[11.5rem] w-full bg-[#39393f] rounded-xl flex flex-row gap-10 relative">
            <img src={s.img} alt={s.title.toLowerCase().replace(" ", "-")}
                class="aspect-video h-36 rounded-lg">
            <div class="flex flex-col w-full gap-1 h-full overflow-hidden text-ellipsis">
                <p class="text-sm opacity-50 font-[Bold] flex flex-row gap-2">
                    <span>{s.category.toUpperCase()}</span>
                    <span>•</span>
                    <span>{getMonth(s.date)} {getDate(s.date)}, {getYear(s.date)}</span>
                </p>
                <hr class="opacity-50">
                <h1 class="text-2xl font-black">{s.title}</h1>
                <p class="flex flex-row gap-2">
                    {#each s.tags as tag}
                        <a href="/search/{tag}">
                           <span class="px-3 py-1 text-xs bg-amber-700 font-extralight
                                rounded-full font-[Bold] tracking-widest">{tag}</span> 
                        </a>
                        
                    {/each}
                </p>
                <p class="">
                    {s.content}
                </p>
            </div>
            <p class="absolute bottom-[1.4rem] right-6 bg-gradient-to-l font-black
                w-56 text-right from-[#39393f] via-[#39393f] text-white/60
                hover:text-white/90">
                Read more...
            </p>
        </div>
    {/each}
</div>

