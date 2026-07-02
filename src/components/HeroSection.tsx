import { featuredRecords } from "@/data/homepage";

export default function HeroSection() {
  return (
    <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
      <section>
        <div className="blood-mark mb-8 inline-flex rounded-full border border-red-500/30 bg-red-950/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-red-200">
          Halloween 2026 Experience
        </div>

        <h2 className="text-blood-glow max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
          A horror archive for what waits in the dark.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
          Explore haunted locations, horror media, tragic event archives, ghost
          stories, extraterrestrial mysteries, haunted hotels, and optional
          AI-powered scare experiences built for Halloween.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#archive"
            className="rounded-full border border-red-500/40 bg-red-900 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_35px_rgba(127,0,0,0.45)] transition hover:bg-red-800"
          >
            Enter the Archive
          </a>

          <a
            href="#call"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-red-300/50 hover:bg-white/10"
          >
            Join the 3 AM Call
          </a>
        </div>
      </section>

      <aside className="relative">
        <div className="absolute -inset-6 rounded-[2rem] bg-red-900/20 blur-3xl" />

        <div className="horror-card relative rounded-[2rem] border border-red-950/80 bg-zinc-950/90 p-6 shadow-2xl backdrop-blur">
          <div className="rounded-[1.5rem] border border-red-900/50 bg-black p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-red-300">
              Featured Records
            </p>

            <div className="mt-6 space-y-3">
              {featuredRecords.map((record, index) => (
                <div
                  key={record}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <span className="text-sm text-zinc-200">{record}</span>
                  <span className="text-xs text-red-300">0{index + 1}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-950/20 p-5">
              <p className="text-sm font-semibold text-white">Archive Notice</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Real tragedies and disturbing records will be handled with
                content warnings, respectful context, and source notes.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
