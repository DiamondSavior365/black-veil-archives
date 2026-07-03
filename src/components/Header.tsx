export default function Header() {
  return (
    <header className="relative flex items-center justify-between border-b border-[rgba(200,155,74,0.22)] pb-6">
      <div>
        <p className="vintage-label text-xs text-red-300/80">
          Black Veil Archives
        </p>

        <h1 className="gold-text mt-2 text-2xl font-black uppercase tracking-[0.08em]">
          {/* <h1 className="gold-text font-gothic mt-2 text-2xl font-black uppercase tracking-[0.08em]"> */}
          Step Beyond the Veil
        </h1>
      </div>

      <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--gold)] md:flex">
        <a className="transition hover:text-red-400" href="#archive">
          Archive
        </a>

        <a className="transition hover:text-red-400" href="#map">
          Haunted Map
        </a>

        <a className="transition hover:text-red-400" href="#call">
          3 AM Call
        </a>

        <a
          className="cursed-button rounded-full px-5 py-3 text-xs uppercase tracking-[0.2em] transition"
          href="#call"
        >
          Enter If You Dare
        </a>
      </nav>
    </header>
  );
}
