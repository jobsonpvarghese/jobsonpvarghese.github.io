export default function Experience({ data }) {
  return (
    <section id="experience" className="px-6 sm:px-14 lg:px-24 py-28 lg:py-52 bg-[#1c1917] relative">
      {/* top border */}
      <div className="absolute top-0 left-6 sm:left-10 lg:left-14 right-6 sm:right-10 lg:right-14 h-px bg-white/5" />

      {/* bg: amber radial glow — top-left */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-amber-700/10 blur-[120px]" />

      {/* bg: amber radial glow — bottom-right */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-600/8 blur-[130px]" />

      {/* bg: amber radial glow — center */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-amber-700/5 blur-[100px]" />

      {/* bg: decorative SVG grid lines */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="exp-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d97706" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#exp-grid)" />
      </svg>

      {/* bg: floating geometric accents */}
      <svg
        className="pointer-events-none absolute top-16 right-10 opacity-[0.06] animate-[spin_40s_linear_infinite]"
        width="160"
        height="160"
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="80" cy="80" r="79" stroke="#d97706" strokeWidth="0.75" strokeDasharray="6 10" />
        <circle cx="80" cy="80" r="55" stroke="#d97706" strokeWidth="0.5" strokeDasharray="3 14" />
      </svg>

      <svg
        className="pointer-events-none absolute bottom-20 left-8 opacity-[0.05] animate-[spin_60s_linear_infinite_reverse]"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="98" height="98" stroke="#d97706" strokeWidth="0.75" strokeDasharray="4 8" />
        <rect x="14" y="14" width="72" height="72" stroke="#d97706" strokeWidth="0.5" strokeDasharray="2 10" />
      </svg>

      {/* header */}
      <div className="pb-5 border-b border-stone-800 mb-12 lg:mb-14">
        <div
          className="flex flex-col gap-6
                        lg:flex lg:flex-row lg:justify-between lg:items-end"
        >
          <div>
            <p className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-stone-600 mb-3">
              <span className="w-5 h-px bg-amber-700/60" />
              Experience
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-50 leading-none">
              Where I've <em className="italic text-amber-600">worked</em>
            </h2>
          </div>

          <p className="text-sm font-light leading-relaxed text-stone-600 lg:self-end max-w-sm text-left lg:text-right">
            Six years across design studios, product teams, and agencies — building interfaces that balance craft with clarity.
          </p>
        </div>
      </div>

      {/* body */}
      <div
        className="flex flex-col divide-y divide-stone-800
                      lg:grid lg:grid-cols-[1fr_1px_1fr] lg:divide-y-0"
      >
        {/* left column */}
        <div className="lg:pr-10">
          {data.slice(0, Math.ceil(data.length / 2)).map((job, i) => (
            <div key={i} className="py-6 border-b border-stone-800 last:border-none first:pt-1">
              {/* year tag */}
              <span className="inline-block text-[9px] tracking-widest uppercase text-amber-600 border border-amber-600/30 px-2 py-0.5 mb-3">
                {job.duration}
              </span>

              <h3 className="font-serif text-lg text-stone-50 leading-tight mb-1">{job.title}</h3>

              <p className="text-[10px] tracking-widest uppercase text-stone-600 mb-3">
                {job.company} · {job.location}
              </p>
              <ul className="space-y-1.5 mt-2 ml-5">
                {job.responsibilities.slice(0, 5).map((resp, j) => (
                  <li key={j} className="flex items-start text-xs font-light text-stone-600 leading-relaxed">
                    <span className="w-3 h-px bg-amber-700 inline-block mt-[0.55em] shrink-0" />
                    &nbsp;{resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* vertical rule — desktop only */}
        <div className="hidden lg:block bg-stone-800" />

        {/* right column */}
        <div className="lg:pl-10">
          {data.slice(Math.ceil(data.length / 2)).map((job, i) => (
            <div key={i} className="py-6 border-b border-stone-800 last:border-none first:pt-6 lg:first:pt-1">
              {/* year tag */}
              <span className="inline-block text-[9px] tracking-widest uppercase text-amber-600 border border-amber-600/30 px-2 py-0.5 mb-3">
                {job.duration}
              </span>

              <h3 className="font-serif text-lg text-stone-50 leading-tight mb-1">{job.title}</h3>

              <p className="text-[10px] tracking-widest uppercase text-stone-600 mb-3">
                {job.company} · {job.location}
              </p>
              <ul className="space-y-1.5 mt-2 ml-5">
                {job.responsibilities.slice(0, 5).map((resp, j) => (
                  <li key={j} className="flex items-start text-xs font-light text-stone-600 leading-relaxed">
                    <span className="w-3 h-px bg-amber-700 inline-block mt-[0.55em] shrink-0" />
                    &nbsp;{resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
