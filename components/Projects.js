// components/Projects.js
const projects = [
  {
    number: "01",
    title: "Portfolio Website",
    subtitle: "Personal Brand · Design & Dev",
    description:
      "A dark editorial portfolio built with Next.js and Tailwind CSS. Features scroll-reveal animations, a floating navbar, preloader, and a unified amber dark aesthetic across all sections.",
    stack: ["Next.js", "Tailwind CSS", "React", "Vercel"],
    image: null, // e.g. "/img/projects/portfolio.png"
    link: null,
    github: null,
    featured: true
  },
  {
    number: "02",
    title: "Cloud Infrastructure Dashboard",
    subtitle: "Internal Tool · UI Engineering",
    description:
      "Developed reusable React + Redux UI components for a cloud management interface at Banyan Cloud. Integrated RESTful APIs and unit tested for cross-browser reliability.",
    stack: ["React", "Redux", "REST API", "Jest"],
    image: null, // e.g. "/img/projects/dashboard.png"
    link: null,
    github: null,
    featured: false
  },
  {
    number: "03",
    title: "IT Network Monitor",
    subtitle: "Systems · Co-op Project",
    description:
      "Managed and monitored a 20+ machine network during a co-op at Diamond Canada Hospitality. Built internal maintenance procedures that reduced system downtime by 25%.",
    stack: ["Windows Server", "Active Directory", "Networking", "MS Office"],
    image: null,
    link: null,
    github: null,
    featured: false
  },
  {
    number: "04",
    title: "UX Research & Design",
    subtitle: "Design · Coursera Capstone",
    description:
      "End-to-end UX design project covering user research, persona building, wireframing, and prototype testing — completed as part of the CalArts UX Design Fundamentals certification.",
    stack: ["Adobe XD", "Figma", "User Research", "Prototyping"],
    image: null,
    link: null,
    github: null,
    featured: false
  }
]

// Placeholder shown when no image is provided
function ImagePlaceholder() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#181512] gap-3">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#44403c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="text-[10px] tracking-widest uppercase text-stone-700">No image</span>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-14 lg:px-24 py-28 lg:py-44 bg-[#1c1917] relative">
      {/* top rule */}
      <div className="absolute top-0 left-6 sm:left-10 lg:left-14 right-6 sm:right-10 lg:right-14 h-px bg-white/5" />

      {/* bg glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-amber-700/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-600/8 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-amber-700/5 blur-[100px]" />

      {/* SVG grid */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="projects-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e7e5e4" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#projects-grid)" />
      </svg>

      {/* rotating deco */}
      <svg
        className="pointer-events-none absolute bottom-20 right-12 opacity-[0.05] animate-[spin_55s_linear_infinite_reverse]"
        width="140" height="140" viewBox="0 0 140 140" fill="none"
      >
        <circle cx="70" cy="70" r="69" stroke="#d97706" strokeWidth="0.75" strokeDasharray="6 10" />
        <circle cx="70" cy="70" r="48" stroke="#d97706" strokeWidth="0.5" strokeDasharray="3 14" />
      </svg>

      {/* heading */}
      <div data-scroll="up" className="mb-16">
        <p className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-stone-600 mb-3">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" /><polyline points="8 21 12 17 16 21" />
          </svg>
          Selected work
        </p>
        <h2 className="text-4xl sm:text-5xl font-normal text-stone-50 leading-none">
          Projects &amp; <em className="italic text-amber-600">builds</em>
        </h2>
      </div>

      {/* featured project */}
      {projects.filter(p => p.featured).map((project) => (
        <div
          key={project.number}
          data-scroll="up"
          data-scroll-delay="0.05"
          className="mb-4 group relative bg-[#221e1b] border border-stone-800 overflow-hidden
                     hover:border-amber-700/40 transition-all duration-500 cursor-pointer"
        >
          {/* amber left accent */}
          <div className="absolute left-0 top-0 bottom-0 w-0 bg-amber-600 group-hover:w-0.5 transition-all duration-300" />
          {/* inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700/0 to-amber-700/0 group-hover:from-amber-700/5 group-hover:to-transparent transition-all duration-500" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-0">
            {/* left — content */}
            <div className="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* eyebrow */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] tracking-widest uppercase text-amber-700">Featured</span>
                  <span className="w-px h-3 bg-stone-700" />
                  <span className="text-[10px] tracking-widest uppercase text-stone-600">{project.subtitle}</span>
                </div>

                {/* title */}
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[60px] lg:text-[80px] font-normal text-white/5 leading-none select-none">{project.number}</span>
                  <h3 className="text-3xl lg:text-4xl font-normal text-stone-50 leading-tight">{project.title}</h3>
                </div>

                {/* desc */}
                <p className="text-sm text-stone-500 leading-relaxed max-w-xl mb-6">{project.description}</p>

                {/* stack pills */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s, i) => (
                    <span key={i} className="text-[11px] tracking-wide uppercase text-stone-600 border border-stone-700 px-3 py-1
                                             hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* view link */}
              <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-stone-700 group-hover:text-amber-600 transition-colors mt-8 shrink-0">
                <span>View project</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </div>

            {/* right — thumbnail */}
            <div className="relative h-56 lg:h-auto border-t lg:border-t-0 lg:border-l border-stone-800/60 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "sepia(0.1) brightness(0.85) contrast(1.05)" }}
                />
              ) : (
                <ImagePlaceholder number={project.number} />
              )}
              {/* bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#221e1b]/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      ))}

      {/* remaining projects — grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-800/60">
        {projects.filter(p => !p.featured).map((project, i) => (
          <div
            key={project.number}
            data-scroll="up"
            data-scroll-delay={`${(i + 1) * 0.1}`}
            className="group relative bg-[#1c1917] flex flex-col overflow-hidden
                       hover:bg-[#221e1b] transition-colors duration-300 cursor-pointer"
          >
            {/* amber left bar */}
            <div className="absolute left-0 top-0 bottom-0 w-0 bg-amber-600 group-hover:w-0.5 transition-all duration-300 z-10" />
            {/* inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700/0 to-amber-700/0 group-hover:from-amber-700/5 group-hover:to-transparent transition-all duration-500 z-10" />

            {/* thumbnail */}
            <div className="relative w-full h-44 overflow-hidden border-b border-stone-800/60 shrink-0">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "sepia(0.1) brightness(0.8) contrast(1.05)" }}
                />
              ) : (
                <ImagePlaceholder number={project.number} />
              )}
              {/* bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] to-transparent pointer-events-none group-hover:from-[#221e1b] transition-colors duration-300" />
              {/* number badge */}
              <span className="absolute top-3 left-4 text-[10px] tracking-widest uppercase text-stone-700 z-10">{project.number}</span>
              {/* arrow badge */}
              <svg className="absolute top-3 right-4 text-stone-700 group-hover:text-amber-600 transition-colors duration-300 z-10"
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>

            {/* content */}
            <div className="relative z-10 p-6 flex flex-col flex-1 justify-between">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-stone-600 mb-2 group-hover:text-stone-500 transition-colors">{project.subtitle}</p>
                <h3 className="text-xl text-stone-300 leading-snug mb-3 group-hover:text-stone-50 transition-colors">{project.title}</h3>
                <p className="text-[13px] text-stone-600 leading-relaxed group-hover:text-stone-500 transition-colors">{project.description}</p>
              </div>

              {/* stack pills */}
              <div className="flex flex-wrap gap-1.5 mt-5">
                {project.stack.map((s, j) => (
                  <span key={j} className="text-[10px] tracking-wide uppercase text-stone-700 border border-stone-800 px-2.5 py-0.5
                                           group-hover:border-stone-700 group-hover:text-stone-600 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
