import { featuredRecords } from "@/data/homepage";

export default function HeroSection() {
  return (
    <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
      <section>
        <div className="blood-mark mb-8 inline-flex rounded-full border border-[rgba(200,155,74,0.35)] bg-red-950/20 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--gold-bright)]">
          You enter. The archive watches.
        </div>

        {/* <h2 className="poster-heading max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl"> */}
        {/* <h2 className="poster-heading font-nosifer max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl"> */}
        <h2 className="poster-heading font-gothic max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl">
          A horror archive for what waits{" "}
          <span className="blood-text block">in the dark.</span>
        </h2>

        <div className="my-7 max-w-2xl">
          <div className="ornate-divider" />
        </div>

        <p className="max-w-2xl text-lg leading-8 text-zinc-300">
          Explore haunted locations, horror media, tragic event archives, ghost
          stories, extraterrestrial mysteries, haunted hotels, and optional
          AI-powered scare experiences built for Halloween.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#archive"
            className="cursed-button rounded-full px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] transition"
          >
            Enter the Archive
          </a>

          <a
            href="#call"
            className="rounded-full border border-[rgba(200,155,74,0.32)] bg-black/40 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold-bright)] transition hover:border-red-400/60 hover:bg-red-950/30 hover:text-white"
          >
            Join the 3 AM Call
          </a>
        </div>
      </section>

      <aside className="relative">
        <div className="absolute -inset-8 rounded-[2rem] bg-red-950/30 blur-3xl" />

        <div className="ornate-panel relative rounded-[2rem] p-7 shadow-2xl backdrop-blur">
          <div className="relative rounded-[1.5rem] border border-[rgba(200,155,74,0.2)] bg-black/80 p-6">
            <p className="vintage-label text-xs text-[var(--gold-bright)]">
              Featured Records
            </p>

            <div className="mt-6 space-y-3">
              {featuredRecords.map((record, index) => (
                <div
                  key={record}
                  className="flex items-center justify-between rounded-2xl border border-[rgba(200,155,74,0.18)] bg-white/[0.025] px-4 py-4 transition hover:border-red-500/50 hover:bg-red-950/20"
                >
                  <span className="text-sm text-zinc-200">{record}</span>
                  <span className="text-xs font-bold text-[var(--gold-bright)]">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-red-500/25 bg-red-950/20 p-5">
              <p className="gold-text text-sm font-semibold uppercase tracking-[0.12em]">
                Archive Notice
              </p>
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
