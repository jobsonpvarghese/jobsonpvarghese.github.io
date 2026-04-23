// components/Projects.js
const projects = [
  {
    number: "01",
    title: "Cloud Dashboard UI",
    subtitle: "UI/UX Design · Web App",
    year: "2021",
    description:
      "A cloud-based web application dashboard designed collaboratively using Adobe XD and Photoshop. Focused on clean data visualisation, intuitive layout, and a modern webapp aesthetic.",
    stack: ["Adobe XD", "Adobe Photoshop", "UI Design", "UX"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/a90777119191285.Y3JvcCwxMjI3LDk2MCwyNyww.jpeg",
    link: "https://www.behance.net/gallery/119191285/Cloud-Dashboard-UI"
  },
  {
    number: "02",
    title: "Hospital Web UI",
    subtitle: "UI/UX Design · Healthcare",
    year: "2021",
    description:
      "A multi-page hospital web interface covering Home, Departments, Department Details, and Booking — designed with a focus on clarity and patient-friendly navigation.",
    stack: ["Adobe XD", "Photoshop", "Illustrator", "UI Design"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/97e14e121424269.Y3JvcCwxMzgwLDEwODAsMjcsMA.png",
    link: "https://www.behance.net/gallery/121424269/Hospital-Web-UI"
  },
  {
    number: "03",
    title: "Fashion Dark UI",
    subtitle: "UI/UX Design · Fashion",
    year: "2021",
    description:
      "A dark-themed fashion landing page UI concept with a bold, editorial aesthetic. Designed to communicate luxury and style through contrast and typography.",
    stack: ["Adobe XD", "UI Design", "UX", "Dark Theme"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/18bd8f121425425.Y3JvcCwxMzgwLDEwODAsMjMsMA.png",
    link: "https://www.behance.net/gallery/121425425/Fashion-Dark-UI"
  },
  {
    number: "04",
    title: "Pet Adoption App",
    subtitle: "UI/UX Design · Mobile",
    year: "2021",
    description:
      "A mobile application UI concept for pet adoption, designed with a warm and approachable aesthetic to connect animals with loving homes.",
    stack: ["Adobe XD", "Photoshop", "Mobile UI", "UX"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/cedc62116392691.Y3JvcCw4MDgsNjMyLDAsMA.jpg",
    link: "https://www.behance.net/gallery/116392691/Pet-adoption-app"
  },
  {
    number: "05",
    title: "Web Design Concept",
    subtitle: "UI/UX Design · Concept",
    year: "2021",
    description:
      "A clean and modern web design concept exploring layout composition, colour hierarchy, and user-centred visual flow built in Adobe XD and Photoshop.",
    stack: ["Adobe XD", "Photoshop", "UI Design", "Concept"],
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/569fbd116394451.Y3JvcCwxMjI3LDk2MCwyNCww.jpeg",
    link: "https://www.behance.net/gallery/116394451/Web-design-concept"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-14 lg:px-24 py-28 lg:py-44 bg-[#1c1917] relative overflow-hidden">
      {/* top rule */}
      <div className="absolute top-0 left-6 sm:left-10 lg:left-14 right-6 sm:right-10 lg:right-14 h-px bg-white/5" />

      {/* bg glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-amber-700/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-600/8 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-amber-700/5 blur-[100px]" />

      {/* SVG grid */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.022]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="projects-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e7e5e4" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#projects-grid)" />
      </svg>

      {/* rotating rings */}
      <svg className="pointer-events-none absolute top-12 right-8 opacity-[0.06] animate-[spin_60s_linear_infinite_reverse]"
        width="180" height="180" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="89" stroke="#d97706" strokeWidth="0.75" strokeDasharray="6 12" />
        <circle cx="90" cy="90" r="62" stroke="#d97706" strokeWidth="0.5" strokeDasharray="3 14" />
        <circle cx="90" cy="90" r="36" stroke="#d97706" strokeWidth="0.4" strokeDasharray="2 10" />
      </svg>
      <svg className="pointer-events-none absolute bottom-16 left-6 opacity-[0.04] animate-[spin_80s_linear_infinite]"
        width="120" height="120" viewBox="0 0 120 120" fill="none">
        <rect x="1" y="1" width="118" height="118" stroke="#e7e5e4" strokeWidth="0.75" strokeDasharray="4 8" />
        <rect x="18" y="18" width="84" height="84" stroke="#e7e5e4" strokeWidth="0.5" strokeDasharray="2 8" />
      </svg>

      {/* heading */}
      <div data-scroll="up" className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
        <div>
          <p className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-stone-600 mb-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <polyline points="8 21 12 17 16 21" />
            </svg>
            Selected work
          </p>
          <h2 className="text-4xl sm:text-5xl font-normal text-stone-50 leading-none">
            Projects &amp; <em className="italic text-amber-600">builds</em>
          </h2>
        </div>
        <div className="flex items-center gap-4 pb-1">
          <span className="text-[11px] tracking-widest uppercase text-stone-700">{projects.length} projects</span>
          <span className="w-px h-3 bg-stone-800" />
          <a href="https://www.behance.net/jobsonvarghese" target="_blank" rel="noreferrer"
            className="text-[11px] tracking-widest uppercase text-stone-700 hover:text-amber-600 transition-colors flex items-center gap-1.5">
            Behance
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── FEATURED card ── */}
      {(() => {
        const p = projects[0]
        return (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            data-scroll="up"
            data-scroll-delay="0.05"
            className="group relative flex flex-col lg:flex-row mb-3 overflow-hidden cursor-pointer border border-stone-800/60 hover:border-amber-700/30 transition-all duration-500 bg-[#18140f]"
            style={{ minHeight: "clamp(320px, 44vw, 500px)" }}
          >
            {/* image — right half */}
            <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[58%] h-56 lg:h-auto overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "brightness(0.6) contrast(1.08) saturate(0.9)" }}
              />
              {/* left fade — desktop only */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#18140f] to-transparent" />
              {/* bottom fade — mobile only */}
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#18140f] to-transparent" />
            </div>

            {/* amber left border accent */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-600/20 group-hover:bg-amber-600/60 transition-colors duration-500" />

            {/* content — left */}
            <div className="relative z-10 flex flex-col justify-between p-8 lg:p-12 lg:w-[50%]">
              {/* top */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-widest uppercase text-amber-500/70 border border-amber-600/20 px-3 py-1.5">
                  Featured
                </span>
                <span className="w-px h-3 bg-stone-800" />
                <span className="text-[10px] tracking-widest uppercase text-stone-600">{p.year}</span>
              </div>

              {/* middle */}
              <div className="my-8">
                {/* big number */}
                <div className="text-[90px] lg:text-[120px] font-normal leading-none select-none mb-1"
                  style={{ color: "rgba(255,255,255,0.04)" }}>
                  {p.number}
                </div>
                <p className="text-[11px] tracking-widest uppercase text-stone-600 mb-3">{p.subtitle}</p>
                <h3 className="text-3xl lg:text-[2.6rem] font-normal text-stone-50 leading-tight mb-5">{p.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed max-w-sm">{p.description}</p>
              </div>

              {/* bottom */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s, i) => (
                    <span key={i} className="text-[10px] tracking-wide uppercase text-stone-600 border border-stone-700/60 px-3 py-1.5
                                             group-hover:border-amber-700/30 group-hover:text-stone-500 transition-colors duration-300">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-stone-600 group-hover:text-amber-500 transition-colors duration-300">
                  <span>View on Behance</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </div>

            {/* corner marks — appear on hover */}
            {[
              { top: "14px", left: "14px", borderTop: "0.5px solid rgba(217,119,6,0.5)", borderLeft: "0.5px solid rgba(217,119,6,0.5)" },
              { top: "14px", right: "14px", borderTop: "0.5px solid rgba(217,119,6,0.5)", borderRight: "0.5px solid rgba(217,119,6,0.5)" },
              { bottom: "14px", left: "14px", borderBottom: "0.5px solid rgba(217,119,6,0.5)", borderLeft: "0.5px solid rgba(217,119,6,0.5)" },
              { bottom: "14px", right: "14px", borderBottom: "0.5px solid rgba(217,119,6,0.5)", borderRight: "0.5px solid rgba(217,119,6,0.5)" }
            ].map((s, i) => (
              <div key={i} className="pointer-events-none absolute z-20 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={s} />
            ))}
          </a>
        )
      })()}

      {/* ── GRID cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {projects.slice(1).map((p, i) => (
          <a
            key={p.number}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            data-scroll="up"
            data-scroll-delay={`${(i + 1) * 0.08}`}
            className="group relative block overflow-hidden cursor-pointer border border-stone-800/40 hover:border-amber-700/25 transition-all duration-500"
            style={{ height: "clamp(240px, 28vw, 340px)" }}
          >
            {/* image */}
            <img
              src={p.image}
              alt={p.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              style={{ filter: "brightness(0.45) contrast(1.1) saturate(0.85)" }}
            />

            {/* gradient — stronger at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0b] via-[#0f0d0b]/50 to-transparent" />
            {/* side vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0b]/30 via-transparent to-[#0f0d0b]/20" />

            {/* amber shimmer on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/0 group-hover:from-amber-900/10 to-transparent transition-all duration-700" />

            {/* top bar */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 pt-4 z-10">
              <span className="text-[10px] tracking-widest uppercase text-stone-700 group-hover:text-amber-700/60 transition-colors duration-300 tabular-nums">
                {p.number}
              </span>
              <div className="flex items-center gap-1.5 text-[9px] tracking-widest uppercase text-stone-700 group-hover:text-amber-500 transition-colors duration-300">
                <span className="hidden sm:block">{p.year}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </div>

            {/* corner marks on hover */}
            <div className="absolute top-3 left-3 w-3 h-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ borderTop: "0.5px solid rgba(217,119,6,0.55)", borderLeft: "0.5px solid rgba(217,119,6,0.55)" }} />
            <div className="absolute bottom-3 right-3 w-3 h-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ borderBottom: "0.5px solid rgba(217,119,6,0.55)", borderRight: "0.5px solid rgba(217,119,6,0.55)" }} />

            {/* content — slides up on hover */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-5 translate-y-1.5 group-hover:translate-y-0 transition-transform duration-400 ease-out">
              <p className="text-[9px] tracking-widest uppercase text-amber-600/60 mb-1.5">{p.subtitle}</p>
              <h3 className="text-[15px] font-normal text-stone-200 leading-snug mb-3 group-hover:text-stone-50 transition-colors duration-300">
                {p.title}
              </h3>
              {/* pills — fade in */}
              <div className="flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {p.stack.slice(0, 3).map((s, j) => (
                  <span key={j} className="text-[9px] tracking-wide uppercase text-stone-600 border border-stone-800/80 px-2 py-0.5 bg-black/40 backdrop-blur-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
