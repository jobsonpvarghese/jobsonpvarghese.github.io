// components/Footer.jsx
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" }
]

const socials = [
  {
    name: "LinkedIn",
    handle: "/in/jobsonvarghese",
    href: "https://linkedin.com/in/jobsonvarghese",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    name: "GitHub",
    handle: "@jobsonpvarghese",
    href: "https://github.com/jobsonvarghese",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    )
  },

  {
    name: "Email",
    handle: "jobsonvarghese1@email.com",
    href: "mailto:jobson@email.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.5]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  }
]

export default function Footer() {
  return (
    <footer>
      {/* CTA banner */}
      <div
        className="bg-amber-700 px-6 sm:px-14 lg:px-24 py-14
                      flex flex-col sm:flex-row items-start sm:items-center
                      justify-between gap-8"
      >
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#f5f0e8] leading-tight">
          Let's build something
          <br />
          <em className="italic">great together.</em>
        </h2>
        <a
          href="mailto:jobson@email.com"
          className="border border-[#f5f0e8]/50 text-[#f5f0e8] text-[11px]
                     tracking-widest uppercase px-7 py-4 shrink-0
                     hover:bg-[#f5f0e8] hover:text-amber-700 transition-colors duration-200"
        >
          Get in touch ↗
        </a>
      </div>

      {/* main footer */}
      <div className="bg-stone-900 px-6 sm:px-14 lg:px-24 pt-16 pb-8">
        {/* top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* brand */}
          <div>
            <h3 className="font-serif text-4xl font-normal text-[#f5f0e8] leading-none mb-2">
              Jobson <em className="italic text-amber-700">Varghese</em>
            </h3>
            <p className="text-[11px] tracking-widest uppercase text-stone-600 mb-5">Designer · Developer</p>
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* nav */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-amber-700 mb-5">Navigation</p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-500 hover:text-[#f5f0e8] transition-colors
                             flex items-center gap-2 group"
                >
                  {link.label}
                  <span
                    className="opacity-0 group-hover:opacity-100 text-amber-700
                                   transition-opacity text-xs"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* socials */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-amber-700 mb-5">Connect</p>
            <div className="flex flex-col gap-1.5">
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 border border-stone-800
                             text-stone-500 hover:border-amber-700/40 hover:bg-amber-700/5
                             hover:text-[#f5f0e8] transition-all duration-200 group"
                >
                  <span className="text-stone-600 group-hover:text-amber-700 transition-colors">{s.icon}</span>
                  <span className="text-sm flex-1">{s.name}</span>
                  <span
                    className="text-[11px] text-stone-700 group-hover:text-stone-500
                                   transition-colors"
                  >
                    {s.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-stone-800 mb-7" />

        {/* bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start
                        sm:items-center gap-3"
        >
          <p className="text-[11px] text-stone-700 tracking-wide">
            © 2025 <span className="text-amber-700">Jobson Varghese</span> · Designed & built with love in Next.js
          </p>
          <a
            href="#hero"
            className="text-[11px] tracking-widest uppercase text-stone-600
                       hover:text-amber-700 transition-colors flex items-center gap-2"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
