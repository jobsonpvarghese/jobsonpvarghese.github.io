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
    <section id="skills" className="px-6 sm:px-10 lg:px-14 py-16 lg:py-20 bg-[#f5f0e8] relative">
      {/* top border */}
      <div className="absolute top-0 left-6 sm:left-10 lg:left-14 right-6 sm:right-10 lg:right-14 h-px bg-stone-900/10" />

      {/* heading */}
      <div className="mb-12">
        <p className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-stone-400 mb-3">
          <span className="w-5 h-px bg-amber-700/60" />
          Capabilities
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900 leading-none">
          Skills & <em className="italic text-amber-700">expertise</em>
        </h2>
      </div>

      {/* masonry grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {/* featured card — spans 2 rows on lg */}
        <div className="bg-stone-900 p-7 sm:row-span-2 hover:-translate-y-1 transition-transform duration-300 order-first">
          {/* large faded number */}
          <div className="font-serif text-7xl lg:text-8xl font-normal text-stone-900/10 leading-none mb-3 select-none">01</div>

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
                           hover:border-amber-700 hover:text-amber-700 transition-colors cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* remaining cards */}
        {skills.slice(1).map((skill, i) => (
          <div key={i} className="bg-white p-6 hover:-translate-y-1 transition-transform duration-300 cursor-default">
            {/* faded number */}
            <div className="font-serif text-5xl font-normal text-stone-200 leading-none mb-3 select-none">0{i + 2}</div>

            <p className="text-[10px] tracking-widest uppercase text-stone-400 mb-2">{skill.category}</p>

            <h3 className="font-serif text-xl text-stone-900 leading-tight mb-5">{skill.title}</h3>

            <div className="flex flex-wrap gap-1.5">
              {skill.pills.map((pill, j) => (
                <span
                  key={j}
                  className="text-[11px] text-stone-400 border border-stone-200 px-3 py-1
                             hover:border-amber-700 hover:text-amber-700 transition-colors cursor-default"
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
