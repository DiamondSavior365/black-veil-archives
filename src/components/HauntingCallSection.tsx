export default function HauntingCallSection() {
  return (
    <section
      id="call"
      className="border-t border-[rgba(200,155,74,0.18)] bg-zinc-950 px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="ornate-panel mx-auto max-w-7xl overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="vintage-label text-xs text-[var(--gold)]">
              The 3 AM Haunting Call
            </p>

            <h2 className="poster-heading mt-4 max-w-4xl text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
              When the clock strikes three, the voice finds you.
            </h2>

            <div className="my-7 max-w-2xl">
              <div className="ornate-divider" />
            </div>

            <p className="max-w-3xl text-lg leading-8 text-zinc-400">
              Users will be able to sign up, choose a scare level, accept a
              clear disclaimer, and receive a spooky AI-powered phone call for
              entertainment purposes.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#call"
                className="cursed-button rounded-full px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] transition"
              >
                Dare to Be Called
              </a>

              <a
                href="#archive"
                className="rounded-full border border-[rgba(200,155,74,0.32)] bg-black/40 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold-bright)] transition hover:border-red-400/60 hover:bg-red-950/30 hover:text-white"
              >
                Read the Warning
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[rgba(200,155,74,0.22)] bg-black/70 p-6">
            <p className="gold-text text-sm font-black uppercase tracking-[0.18em]">
              How the haunting works
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Choose your scare level",
                "Confirm consent and timezone",
                "The call is scheduled",
                "The voice waits until 3 AM",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl border border-[rgba(200,155,74,0.16)] bg-white/[0.025] p-4"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-red-500/35 bg-red-950/40 text-xs font-black text-[var(--gold-bright)]">
                    0{index + 1}
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-zinc-200">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-red-500/25 bg-red-950/20 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                Safety and consent come first.
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                No call should happen without explicit permission, age
                confirmation, scare-level selection, timezone confirmation, and
                a way to cancel before the scheduled call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
