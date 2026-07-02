import { archiveCategories, featuredRecords } from "@/data/homepage";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* <section className="relative min-h-screen px-6 py-8 sm:px-10 lg:px-20"> */}
      <section className="blood-stain relative min-h-screen px-6 py-8 sm:px-10 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(127,29,29,0.35),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(120,53,15,0.16),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col">
          <header className="flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-red-300/80">
                Black Veil Archives
              </p>
              <h1 className="mt-2 text-xl font-semibold tracking-wide text-white">
                Step beyond the veil.
              </h1>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
              <a className="transition hover:text-white" href="#archive">
                Archive
              </a>
              <a className="transition hover:text-white" href="#map">
                Haunted Map
              </a>
              <a className="transition hover:text-white" href="#call">
                3 AM Call
              </a>
            </nav>
          </header>

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
            <section>
              {/* <div className="mb-6 inline-flex rounded-full border border-red-500/30 bg-red-950/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-red-200">
                Halloween 2026 Experience
              </div> */}
              <div className="blood-mark mb-8 inline-flex rounded-full border border-red-500/30 bg-red-950/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-red-200">
                Halloween 2026 Experience
              </div>

              {/* <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                A horror archive for what waits in the dark.
              </h2> */}
              {/* <h2 className="blood-drip text-blood-glow max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                A horror archive for what waits in the dark.
              </h2> */}
              <h2 className="text-blood-glow max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                A horror archive for what waits in the dark.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
                Explore haunted locations, horror media, tragic event archives,
                ghost stories, extraterrestrial mysteries, haunted hotels, and
                optional AI-powered scare experiences built for Halloween.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#archive"
                  // className="rounded-full bg-red-700 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_35px_rgba(185,28,28,0.35)] transition hover:bg-red-600"
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

              {/* <div className="relative rounded-[2rem] border border-white/10 bg-zinc-950/80 p-6 shadow-2xl backdrop-blur"> */}
              <div className="horror-card relative rounded-[2rem] border border-red-950/80 bg-zinc-950/90 p-6 shadow-2xl backdrop-blur">
                {/* <div className="rounded-[1.5rem] border border-red-500/20 bg-black p-6"> */}
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
                        <span className="text-xs text-red-300">
                          0{index + 1}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-950/20 p-5">
                    <p className="text-sm font-semibold text-white">
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
        </div>
      </section>

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
                // className="group rounded-[1.7rem] border border-white/10 bg-black p-6 transition hover:-translate-y-1 hover:border-red-400/40 hover:bg-red-950/10"
                className="horror-card group rounded-[1.7rem] border border-red-950/60 bg-black p-6 transition hover:-translate-y-1 hover:border-red-500/60 hover:bg-red-950/20"
              >
                <div className="mb-8 h-12 w-12 rounded-full border border-red-500/30 bg-red-950/30 shadow-[0_0_30px_rgba(185,28,28,0.22)]" />
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="map"
        className="border-t border-white/10 bg-black px-6 py-24 sm:px-10 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-red-300">
              Haunted Map
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Every place has a shadow.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              The map will eventually let users explore haunted hotels,
              paranormal hotspots, famous tragedy locations, UFO sightings, and
              strange historical places.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-6">
            <div className="grid min-h-[360px] place-items-center rounded-[1.5rem] border border-red-500/20 bg-[radial-gradient(circle,rgba(127,29,29,0.35),transparent_55%)]">
              <div className="text-center">
                <p className="text-6xl">⌖</p>
                <p className="mt-4 text-sm uppercase tracking-[0.35em] text-red-200">
                  Google Maps Integration Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="call"
        className="border-t border-white/10 bg-zinc-950 px-6 py-24 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-red-500/20 bg-black p-8 sm:p-12 lg:p-16">
          <p className="text-xs uppercase tracking-[0.4em] text-red-300">
            The 3 AM Haunting Call
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            A scheduled AI scare experience for Halloween night.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Users will be able to sign up, choose a scare level, accept a clear
            disclaimer, and receive a spooky AI-powered phone call for
            entertainment purposes.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm font-semibold text-white">
              Safety and consent will come first.
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              No call should happen without explicit permission, age
              confirmation, scare-level selection, timezone confirmation, and a
              way to cancel before the scheduled call.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
