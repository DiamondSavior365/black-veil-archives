import Link from "next/link";
const libraryItems = [
  {
    title: "Horror Books",
    description:
      "Explore haunted novels, true-crime books, paranormal research, urban legends, and disturbing literary collections.",
  },
  {
    title: "Horror Movies",
    description:
      "Discover classic horror films, supernatural thrillers, slashers, found-footage nightmares, and disturbing documentaries.",
  },
  {
    title: "Dark Music",
    description:
      "Find horror soundtracks, dark ambient albums, gothic records, and eerie music built for late-night listening.",
  },
  {
    title: "Cursed Objects",
    description:
      "Browse horror collectibles, Halloween props, ghost-hunting gear, books, films, and affiliate-supported finds.",
  },
];

export default function HorrorLibraryPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white sm:px-10 lg:px-20">
      <section className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.22em] text-[var(--gold)] transition hover:text-red-400"
        >
          ← Return to the Archive
        </Link>

        <div className="mt-16 max-w-4xl">
          <p className="vintage-label text-xs text-[var(--gold)]">
            Horror Library
          </p>

          <h1 className="poster-heading font-gothic mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
            Media preserved from the dark.
          </h1>

          <div className="my-7 max-w-2xl">
            <div className="ornate-divider" />
          </div>

          <p className="max-w-3xl text-lg leading-8 text-zinc-400">
            The Horror Library will become a curated collection of books,
            movies, music, documentaries, and affiliate-supported horror finds.
            This section will eventually help fund the site through carefully
            placed purchase links and recommendations.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {libraryItems.map((item, index) => (
            <article
              key={item.title}
              className="ornate-panel rounded-[1.7rem] p-7 transition hover:-translate-y-1 hover:border-red-500/60"
            >
              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-[rgba(200,155,74,0.35)] bg-red-950/30">
                    <span className="gold-text text-sm font-black">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="h-px flex-1 bg-gradient-to-r from-[rgba(200,155,74,0.45)] to-transparent" />
                </div>

                <h2 className="gold-text text-2xl font-black uppercase tracking-[0.08em]">
                  {item.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-7">
                  <button className="rounded-full border border-[rgba(200,155,74,0.32)] bg-black/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-bright)]">
                    Coming Soon
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
