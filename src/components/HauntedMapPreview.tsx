export default function HauntedMapPreview() {
  return (
    <section
      id="map"
      className="border-t border-[rgba(200,155,74,0.18)] bg-black px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="vintage-label text-xs text-[var(--gold)]">
            Haunted Map
          </p>

          <h2 className="poster-heading mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Every place has a shadow.
          </h2>

          <div className="my-6 max-w-xl">
            <div className="ornate-divider" />
          </div>

          <p className="text-lg leading-8 text-zinc-400">
            The map will eventually let users explore haunted hotels, paranormal
            hotspots, famous tragedy locations, UFO sightings, and strange
            historical places.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Haunted Hotels",
              "Ghost Sightings",
              "UFO Locations",
              "Tragic Histories",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-[rgba(200,155,74,0.22)] bg-red-950/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold-bright)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="ornate-panel rounded-[2rem] p-6">
          <div className="relative grid min-h-[390px] place-items-center overflow-hidden rounded-[1.5rem] border border-[rgba(200,155,74,0.22)] bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,0,0,0.35),transparent_56%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(200,155,74,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(200,155,74,0.045)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />

            <div className="absolute left-[18%] top-[24%] h-4 w-4 rounded-full bg-red-700 shadow-[0_0_25px_rgba(220,38,38,0.9)]" />
            <div className="absolute right-[28%] top-[38%] h-3 w-3 rounded-full bg-[var(--gold-bright)] shadow-[0_0_22px_rgba(244,211,138,0.65)]" />
            <div className="absolute bottom-[26%] left-[42%] h-5 w-5 rounded-full border border-red-400 bg-red-950 shadow-[0_0_28px_rgba(185,28,28,0.75)]" />
            <div className="absolute bottom-[18%] right-[18%] h-3 w-3 rounded-full bg-red-800 shadow-[0_0_20px_rgba(220,38,38,0.7)]" />

            <div className="relative z-10 text-center">
              <p className="gold-text text-7xl">⌖</p>
              <p className="mt-5 text-sm uppercase tracking-[0.35em] text-[var(--gold-bright)]">
                Cursed Map Coming Soon
              </p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-zinc-400">
                Pins will reveal haunted hotels, paranormal landmarks, UFO
                sightings, and infamous locations preserved inside the archive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
