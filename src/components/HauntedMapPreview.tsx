export default function HauntedMapPreview() {
  return (
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
            The map will eventually let users explore haunted hotels, paranormal
            hotspots, famous tragedy locations, UFO sightings, and strange
            historical places.
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
  );
}
