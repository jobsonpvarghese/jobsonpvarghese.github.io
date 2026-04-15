export default function Experience({ data }) {
  return (
    <section id="experience" className="px-6 sm:px-10 lg:px-14 py-16 lg:py-40 bg-[#f5f0e8] relative">
      {/* Paper grain background filter */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.2] z-100" aria-hidden="true">
        <filter id="papergrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#papergrain)" />
      </svg>
      {/* top border */}
      <div className="absolute top-0 left-6 sm:left-10 lg:left-14 right-6 sm:right-10 lg:right-14 h-px bg-stone-900/10" />

      {/* header */}
      {/* mobile: stacked | lg: split two col with rule */}
      <div
        className="flex flex-col gap-6 mb-12
                      lg:grid lg:grid-cols-[1fr_1px_1fr] lg:gap-8 lg:mb-14 lg:items-end"
      >
        <div>
          <p className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-stone-400 mb-3">
            <span className="w-5 h-px bg-amber-700/60" />
            Experience
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900 leading-none">
            Where I've <em className="italic text-amber-700">worked</em>
          </h2>
        </div>

        {/* vertical rule — desktop only */}
        <div className="hidden lg:block bg-stone-900/10 self-stretch" />

        <p className="text-sm font-light leading-relaxed text-stone-400 lg:self-end max-w-sm lg:max-w-none">
          Six years across design studios, product teams, and agencies — building interfaces that balance craft with clarity.
        </p>
      </div>

      {/* body */}
      {/* mobile: single col stacked | lg: two col with center rule */}
      <div
        className="flex flex-col divide-y divide-stone-900/10
                      lg:grid lg:grid-cols-[1fr_1px_1fr] lg:divide-y-0"
      >
        {/* left column */}
        <div className="lg:pr-8">
          {data.slice(0, Math.ceil(data.length / 2)).map((job, i) => (
            <div
              key={i}
              className="py-6 border-b border-stone-900/10 last:border-none
                         first:pt-0 lg:first:pt-5"
            >
              {/* role + year row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                <h3 className="font-serif text-xl text-stone-900 leading-tight">{job.title}</h3>
                <span className="text-[11px] text-amber-700 tracking-wide shrink-0">{job.duration}</span>
              </div>

              <p className="text-[11px] tracking-widest uppercase text-stone-400 mb-3">
                {job.company} · {job.location}
              </p>

              <p className="text-sm font-light text-stone-400 leading-relaxed">{job.responsibilities[0]}</p>
            </div>
          ))}
        </div>

        {/* vertical rule — desktop only */}
        <div className="hidden lg:block bg-stone-900/10" />

        {/* right column */}
        <div className="lg:pl-8">
          {data.slice(Math.ceil(data.length / 2)).map((job, i) => (
            <div
              key={i}
              className="py-6 border-b border-stone-900/10 last:border-none
                         first:pt-6 lg:first:pt-5"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                <h3 className="font-serif text-xl text-stone-900 leading-tight">{job.title}</h3>
                <span className="text-[11px] text-amber-700 tracking-wide shrink-0">{job.duration}</span>
              </div>

              <p className="text-[11px] tracking-widest uppercase text-stone-400 mb-3">
                {job.company} · {job.location}
              </p>

              <p className="text-sm font-light text-stone-400 leading-relaxed">{job.responsibilities[0]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
