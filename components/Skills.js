const skills = [
  {
    title: "Technical Support & Troubleshooting",
    category: "Core Strength",
    featured: true,
    pills: [
      "Hardware Diagnostics",
      "Windows",
      "macOS",
      "System Patching",
      "Mobile Devices",
      "OS Configuration",
      "Preventive Maintenance",
      "Software Troubleshooting",
      "System Performance"
    ]
  },
  {
    title: "Customer Service",
    category: "Ticketing",
    pills: ["Jira", "GitHub Projects", "Agile", "Incident Management", "Remote Assistance"]
  },
  {
    title: "Systems & Networks",
    category: "Cloud",
    pills: ["Azure", "AWS", "GCP", "Nginx", "VPC", "Wi-Fi Config", "Load Balancers"]
  },
  {
    title: "Tools & Tech",
    category: "Dev Tools",
    pills: ["HTML · CSS · JS", "REST APIs", "JWT Auth", "Git", "Front-end Debugging"]
  },
  {
    title: "Compliance & Docs",
    category: "Security",
    pills: ["Data Protection", "Access Control", "IT Compliance", "Asset Management", "Support Docs"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-14 lg:px-24 py-28 lg:py-40 bg-[#1c1917] relative">
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
          <pattern id="skills-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e7e5e4" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#skills-grid)" />
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
        <circle cx="80" cy="80" r="79" stroke="#e7e5e4" strokeWidth="0.75" strokeDasharray="6 10" />
        <circle cx="80" cy="80" r="55" stroke="#e7e5e4" strokeWidth="0.5" strokeDasharray="3 14" />
      </svg>

      <svg
        className="pointer-events-none absolute bottom-20 left-8 opacity-[0.05] animate-[spin_60s_linear_infinite_reverse]"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="98" height="98" stroke="#e7e5e4" strokeWidth="0.75" strokeDasharray="4 8" />
        <rect x="14" y="14" width="72" height="72" stroke="#e7e5e4" strokeWidth="0.5" strokeDasharray="2 10" />
      </svg>

      {/* heading */}
      <div className="mb-12">
        <p className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-stone-600 mb-3">
          <span className="w-5 h-px bg-amber-700/60" />
          Capabilities
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-50 leading-none">
          Skills & <em className="italic text-amber-600">expertise</em>
        </h2>
      </div>

      {/* masonry grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {/* featured card — spans 2 rows on lg */}
        <div className="bg-[#221e1b] p-7 sm:row-span-2 hover:-translate-y-1 transition-transform duration-300 order-first cursor-pointer border border-stone-800">
          {/* large faded number */}
          <div className="font-serif text-7xl lg:text-8xl font-normal text-white/5 leading-none mb-3 select-none">01</div>

          <p className="text-[10px] tracking-widest uppercase text-amber-700 mb-3">Core Strength</p>

          <h3 className="font-serif text-2xl lg:text-[26px] text-[#f5f0e8] leading-tight mb-6">
            Technical Support &<br />
            Troubleshooting
          </h3>

          <div className="flex flex-wrap gap-1.5">
            {skills[0].pills.map((pill, i) => (
              <span
                key={i}
                className="text-[11px] text-stone-500 border border-stone-700 px-3 py-1
                           hover:border-amber-700 hover:text-amber-700 transition-colors cursor-pointer"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* remaining cards */}
        {skills.slice(1).map((skill, i) => (
          <div key={i} className="bg-[#1c1917] border border-stone-800 p-6 hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
            {/* faded number */}
            <div className="font-serif text-5xl font-normal text-white/5 leading-none mb-3 select-none">0{i + 2}</div>

            <p className="text-[10px] tracking-widest uppercase text-stone-600 mb-2">{skill.category}</p>

            <h3 className="font-serif text-xl text-stone-50 leading-tight mb-5">{skill.title}</h3>

            <div className="flex flex-wrap gap-1.5">
              {skill.pills.map((pill, j) => (
                <span
                  key={j}
                  className="text-[11px] text-stone-600 border border-stone-700 px-3 py-1
                             hover:border-amber-600 hover:text-amber-600 transition-colors cursor-pointer"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
