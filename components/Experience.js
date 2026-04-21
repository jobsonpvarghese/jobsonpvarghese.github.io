// SVG icon helpers
const IconBriefcase = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>
  </svg>
)
const IconBuilding = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9M15 21V9"/>
  </svg>
)
const IconPin = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const IconChevron = () => (
  <svg className="mt-[3px] shrink-0" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
)

function JobCard({ job, firstPt }) {
  return (
    <div className={`py-6 border-b border-stone-800 last:border-none ${firstPt}`}>
      <div className="flex items-start justify-between mb-3">
        <span className="inline-block text-[9px] tracking-widest uppercase text-amber-600 border border-amber-600/30 px-2 py-0.5">
          {job.duration}
        </span>
        <IconBuilding />
      </div>
      <h3 className="text-lg text-stone-50 leading-tight mb-1">{job.title}</h3>
      <p className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-stone-600 mb-3">
        <IconPin />
        {job.company} · {job.location}
      </p>
      <ul className="space-y-1.5 mt-2 ml-1">
        {job.responsibilities.slice(0, 5).map((resp, j) => (
          <li key={j} className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed">
            <IconChevron />
            {resp}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience({ data }) {
  return (
    <section id="experience" className="px-6 sm:px-14 lg:px-24 py-28 lg:py-52 bg-[#1c1917] relative">
      {/* bg: amber radial glow — top-left, extended upward to bleed into Hero */}
      <div className="pointer-events-none absolute -top-64 -left-32 w-[600px] h-[700px] rounded-full bg-amber-700/10 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-600/8 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-amber-700/5 blur-[100px]" />

      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="exp-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d97706" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#exp-grid)" />
      </svg>

      <svg className="pointer-events-none absolute top-16 right-10 opacity-[0.06] animate-[spin_40s_linear_infinite]" width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="79" stroke="#d97706" strokeWidth="0.75" strokeDasharray="6 10" />
        <circle cx="80" cy="80" r="55" stroke="#d97706" strokeWidth="0.5" strokeDasharray="3 14" />
      </svg>
      <svg className="pointer-events-none absolute bottom-20 left-8 opacity-[0.05] animate-[spin_60s_linear_infinite_reverse]" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="98" height="98" stroke="#d97706" strokeWidth="0.75" strokeDasharray="4 8" />
        <rect x="14" y="14" width="72" height="72" stroke="#d97706" strokeWidth="0.5" strokeDasharray="2 10" />
      </svg>

      {/* header */}
      <div data-scroll="up" className="pb-5 border-b border-stone-800 mb-12 lg:mb-14">
        <div className="flex flex-col gap-6 lg:flex lg:flex-row lg:justify-between lg:items-end">
          <div>
            <p className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-stone-600 mb-3">
              <IconBriefcase />
              Experience
            </p>
            <h2 className="text-4xl sm:text-5xl font-normal text-stone-50 leading-none">
              Where I've <em className="italic text-amber-600">worked</em>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-stone-600 lg:self-end max-w-sm text-left lg:text-right">
            Six years across design studios, product teams, and agencies — building interfaces that balance craft with clarity.
          </p>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-col divide-y divide-stone-800 lg:grid lg:grid-cols-[1fr_1px_1fr] lg:divide-y-0">
        <div data-scroll="left" data-scroll-delay="0.1" className="lg:pr-10">
          {data.slice(0, Math.ceil(data.length / 2)).map((job, i) => (
            <JobCard key={i} job={job} firstPt="first:pt-1" />
          ))}
        </div>
        <div className="hidden lg:block bg-stone-800" />
        <div data-scroll="right" data-scroll-delay="0.2" className="lg:pl-10">
          {data.slice(Math.ceil(data.length / 2)).map((job, i) => (
            <JobCard key={i} job={job} firstPt="first:pt-6 lg:first:pt-1" />
          ))}
        </div>
      </div>
    </section>
  )
}
