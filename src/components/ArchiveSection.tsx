import { archiveCategories } from "@/data/homepage";

export default function ArchiveSection() {
  return (
    <section
      id="archive"
      className="border-t border-white/10 bg-zinc-950 px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-red-300">
            The Archive
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Explore the first four chambers.
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            This first version sets the foundation for the horror library,
            haunted map, haunted hotels, and the AI-powered Halloween call
            experience.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {archiveCategories.map((category) => (
            <article
              key={category.title}
              className="horror-card group rounded-[1.7rem] border border-red-950/60 bg-black p-6 transition hover:-translate-y-1 hover:border-red-500/60 hover:bg-red-950/20"
            >
              <div className="mb-8 h-12 w-12 rounded-full border border-red-500/30 bg-red-950/30 shadow-[0_0_30px_rgba(185,28,28,0.22)]" />
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
