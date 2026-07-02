export default function Header() {
  return (
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
  );
}
