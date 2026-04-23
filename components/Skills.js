const skills = [
  {
    number: "01",
    title: "Technical Support & Troubleshooting",
    category: "Core Strength",
    pills: ["Hardware Diagnostics", "Windows", "macOS", "System Patching", "Mobile Devices", "OS Configuration", "Preventive Maintenance", "Software Troubleshooting", "System Performance"],
    span: "lg:col-span-2 lg:row-span-2"
  },
  {
    number: "02",
    title: "Customer Service",
    category: "Ticketing",
    pills: ["Jira", "GitHub Projects", "Agile", "Incident Management", "Remote Assistance"],
    span: ""
  },
  {
    number: "03",
    title: "Systems & Networks",
    category: "Cloud & Infra",
    pills: ["Azure", "AWS", "GCP", "Nginx", "VPC", "Wi-Fi Config", "Load Balancers"],
    span: ""
  },
  {
    number: "04",
    title: "Tools & Tech",
    category: "Dev Tools",
    pills: ["HTML · CSS · JS", "REST APIs", "JWT Auth", "Git", "Front-end Debugging"],
    span: ""
  },
  {
    number: "05",
    title: "Compliance & Docs",
    category: "Security",
    pills: ["Data Protection", "Access Control", "IT Compliance", "Asset Management", "Support Docs"],
    span: ""
  }
]

const icons = [
  <svg key="0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
  <svg key="1" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>,
  <svg key="2" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>,
  <svg key="3" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>,
  <svg key="4" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-14 lg:px-24 py-28 lg:py-40 bg-[#1c1917] relative">
      {/* top border */}
      <div className="absolute top-0 left-6 sm:left-10 lg:left-14 right-6 sm:right-10 lg:right-14 h-px bg-white/5" />

      {/* bg glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-amber-700/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-600/8 blur-[130px]" />

      {/* SVG grid */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="skills-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e7e5e4" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#skills-grid)" />
      </svg>

      {/* rotating deco */}
      <svg
        className="pointer-events-none absolute top-16 right-10 opacity-[0.05] animate-[spin_50s_linear_infinite]"
        width="140" height="140" viewBox="0 0 140 140" fill="none"
      >
        <circle cx="70" cy="70" r="69" stroke="#d97706" strokeWidth="0.75" strokeDasharray="6 10" />
        <circle cx="70" cy="70" r="48" stroke="#d97706" strokeWidth="0.5" strokeDasharray="3 14" />
      </svg>

      {/* heading */}
      <div data-scroll="up" className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
        <div>
          <p className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-stone-600 mb-4">
            <span className="w-5 h-px bg-amber-700/60" />
            Capabilities
          </p>
          <h2 className="text-4xl sm:text-5xl font-normal text-stone-50 leading-none">
            Skills &amp; <em className="italic text-amber-600">expertise</em>
          </h2>
        </div>
        <p className="text-[11px] tracking-widest uppercase text-stone-700 pb-1 hidden sm:block">
          {skills.length} skill areas
        </p>
      </div>

      {/* bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 auto-rows-[minmax(200px,auto)]">

        {/* ── 01 featured: spans 2×2 ── */}
        <div
          data-scroll="scale"
          data-scroll-delay="0.05"
          className="group relative bg-[#221e1b] border border-stone-800 p-7 lg:p-8 overflow-hidden
                     hover:border-amber-700/30 transition-all duration-500 lg:col-span-2 lg:row-span-2"
        >
          {/* amber left bar */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-600/20 group-hover:bg-amber-600/60 transition-colors duration-500" />
          {/* inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700/0 group-hover:from-amber-700/6 to-transparent transition-all duration-700" />
          {/* giant watermark */}
          <div className="absolute -right-6 -bottom-8 text-[160px] font-normal leading-none select-none pointer-events-none"
            style={{ color: "rgba(255,255,255,0.025)" }}>
            {skills[0].number}
          </div>

          <div className="relative h-full flex flex-col justify-between">
            {/* top */}
            <div className="flex items-start justify-between">
              <span className="text-[10px] tracking-widest uppercase text-amber-600/60 border border-amber-600/20 px-3 py-1.5">
                {skills[0].category}
              </span>
              <span className="text-stone-700 group-hover:text-amber-700/60 transition-colors duration-300">
                {icons[0]}
              </span>
            </div>

            {/* middle */}
            <div className="my-6">
              <h3 className="text-2xl lg:text-3xl font-normal text-stone-50 leading-snug mb-2">
                {skills[0].title}
              </h3>
              <div className="w-8 h-px bg-amber-700/30 mt-4 mb-6" />
              <div className="flex flex-wrap gap-2">
                {skills[0].pills.map((pill, j) => (
                  <span key={j}
                    className="text-[11px] tracking-wide text-stone-500 border border-stone-700/60 px-3 py-1.5
                               hover:border-amber-700/50 hover:text-amber-600/70 transition-colors duration-200">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* bottom number */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-widest text-stone-700">{skills[0].number} / 0{skills.length}</span>
              <div className="flex-1 h-px bg-stone-800" />
            </div>
          </div>
        </div>

        {/* ── 02–05 compact cards ── */}
        {skills.slice(1).map((skill, i) => (
          <div
            key={skill.number}
            data-scroll="up"
            data-scroll-delay={`${(i + 1) * 0.08}`}
            className="group relative bg-[#1c1917] border border-stone-800/70 p-6 overflow-hidden
                       hover:bg-[#221e1b] hover:border-stone-700/80 transition-all duration-300"
          >
            {/* amber left bar */}
            <div className="absolute left-0 top-0 bottom-0 w-0 bg-amber-600 group-hover:w-0.5 transition-all duration-300" />
            {/* inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700/0 group-hover:from-amber-700/4 to-transparent transition-all duration-500" />
            {/* watermark */}
            <div className="absolute right-3 bottom-3 text-[64px] font-normal leading-none select-none pointer-events-none"
              style={{ color: "rgba(255,255,255,0.03)" }}>
              {skill.number}
            </div>

            <div className="relative h-full flex flex-col justify-between">
              {/* top row */}
              <div className="flex items-start justify-between mb-4">
                <p className="text-[10px] tracking-widest uppercase text-stone-600 group-hover:text-stone-500 transition-colors">
                  {skill.category}
                </p>
                <span className="text-stone-700 group-hover:text-amber-700/60 transition-colors duration-300 mt-0.5">
                  {icons[i + 1]}
                </span>
              </div>

              {/* title */}
              <h3 className="text-[17px] font-normal text-stone-400 group-hover:text-stone-50 transition-colors duration-300 leading-snug flex-1 mb-5">
                {skill.title}
              </h3>

              {/* pills */}
              <div className="flex flex-wrap gap-1.5">
                {skill.pills.map((pill, j) => (
                  <span key={j}
                    className="text-[10px] tracking-wide text-stone-700 border border-stone-800 px-2.5 py-1
                               group-hover:border-stone-700 group-hover:text-stone-500 transition-colors duration-200">
                    {pill}
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
