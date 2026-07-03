import Link from "next/link";
import { archiveCategories } from "@/data/homepage";

export default function ArchiveSection() {
  return (
    <section
      id="archive"
      className="border-t border-[rgba(200,155,74,0.18)] bg-zinc-950 px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="vintage-label text-xs text-[var(--gold)]">
            The Archive
          </p>

          <h2 className="poster-heading mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Explore the first four chambers.
          </h2>

          <div className="my-6 max-w-xl">
            <div className="ornate-divider" />
          </div>

          <p className="text-lg leading-8 text-zinc-400">
            This first version sets the foundation for the horror library,
            haunted map, haunted hotels, and the AI-powered Halloween call
            experience.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {archiveCategories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="ornate-panel group rounded-[1.7rem] p-6 transition hover:-translate-y-1 hover:border-red-500/60"
            >
              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-[rgba(200,155,74,0.35)] bg-red-950/30 shadow-[0_0_30px_rgba(185,28,28,0.22)]">
                    <span className="gold-text text-sm font-black">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="h-px flex-1 bg-gradient-to-r from-[rgba(200,155,74,0.45)] to-transparent" />
                </div>

                <h3 className="gold-text text-xl font-black uppercase tracking-[0.08em]">
                  {category.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
