export default function HauntingCallSection() {
  return (
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
            No call should happen without explicit permission, age confirmation,
            scare-level selection, timezone confirmation, and a way to cancel
            before the scheduled call.
          </p>
        </div>
      </div>
    </section>
  );
}
