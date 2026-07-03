export default function Footer() {
  return (
    <footer className="border-t border-[rgba(200,155,74,0.18)] bg-black px-6 py-12 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="vintage-label text-xs text-[var(--gold)]">
            Black Veil Archives
          </p>

          <h2 className="gold-text mt-3 text-2xl font-black uppercase tracking-[0.08em]">
            Step Beyond the Veil
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
            A horror archive for haunted locations, disturbing media, tragic
            event records, paranormal stories, haunted hotels, and Halloween
            scare experiences.
          </p>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--gold-bright)]">
            Explore
          </p>

          <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-400">
            <a className="transition hover:text-red-400" href="#archive">
              Archive
            </a>
            <a className="transition hover:text-red-400" href="#map">
              Haunted Map
            </a>
            <a className="transition hover:text-red-400" href="#call">
              3 AM Call
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--gold-bright)]">
            Notice
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-400">
            Some sections may include mature horror themes, references to real
            tragedies, affiliate links, and fictional scare experiences. Viewer
            discretion is advised.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl">
        <div className="ornate-divider" />

        <p className="mt-6 text-xs leading-6 text-zinc-500">
          © 2026 Black Veil Archives. Built as a horror discovery and Halloween
          experience platform.
        </p>
      </div>
    </footer>
  );
}
