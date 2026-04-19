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
    handle: "/in/jobsonpvarghese",
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
    <footer className="bg-[#1c1917] relative">
      {/* shared bg effects across whole footer */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-amber-700/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-amber-600/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -right-40 w-[450px] h-[450px] rounded-full bg-amber-700/6 blur-[120px]" />

      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footer-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e7e5e4" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-grid)" />
      </svg>

      <svg
        className="pointer-events-none absolute top-10 right-16 opacity-[0.05] animate-[spin_50s_linear_infinite]"
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="90" cy="90" r="89" stroke="#d97706" strokeWidth="0.75" strokeDasharray="6 10" />
        <circle cx="90" cy="90" r="62" stroke="#d97706" strokeWidth="0.5" strokeDasharray="3 14" />
      </svg>

      {/* CTA section */}
      <div className="relative px-6 sm:px-14 lg:px-24 pt-32 pb-28 border-b border-white/5">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div>
            <p className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-stone-600 mb-5">
              <span className="w-5 h-px bg-amber-700/60" />
              Let's collaborate
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-50 leading-[1.05]">
              Let's build something
              <br />
              <em className="italic text-amber-600">great together.</em>
            </h2>
          </div>

          <div className="flex flex-col gap-4 lg:items-end shrink-0">
            <a
              href="mailto:jobson@email.com"
              className="inline-flex items-center gap-3 border border-amber-600/40 text-amber-600
                         text-[11px] tracking-widest uppercase px-8 py-4
                         hover:bg-amber-600 hover:text-[#131110] hover:border-amber-600
                         transition-all duration-300"
            >
              Get in touch ↗
            </a>
            <p className="text-[11px] text-stone-700 tracking-wide lg:text-right">jobsonvarghese1@email.com</p>
          </div>
        </div>
      </div>

      {/* main footer */}
      <div className="relative px-6 sm:px-14 lg:px-24 pt-20 pb-12">
        {/* top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-14">
          {/* brand */}
          <div>
            <h3 className="text-4xl font-normal text-stone-50 leading-none mb-2 fraunces">
              Jobson <em className="italic text-amber-600">Varghese</em>
            </h3>
            <p className="text-[11px] tracking-widest uppercase text-stone-700 mb-5">Designer · Developer</p>
            <div className="flex items-center gap-2 text-xs text-stone-600">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new projects
            </div>
          </div>

          {/* nav */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-amber-600/70 mb-5">Navigation</p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-600 hover:text-stone-50 transition-colors
                             flex items-center gap-2 group"
                >
                  {link.label}
                  <span className="opacity-0 group-hover:opacity-100 text-amber-600 transition-opacity text-xs">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* socials */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-amber-600/70 mb-5">Connect</p>
            <div className="flex flex-col gap-px bg-stone-800/60">
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-[#1c1917]
                             text-stone-600 hover:bg-[#1c1917] hover:text-stone-50
                             transition-all duration-200 group"
                >
                  <span className="text-stone-700 group-hover:text-amber-600 transition-colors">{s.icon}</span>
                  <span className="text-sm flex-1">{s.name}</span>
                  <span className="text-[11px] text-stone-800 group-hover:text-stone-600 transition-colors">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-white/5 mb-7" />

        {/* bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[11px] text-stone-800 tracking-wide">
            © 2025 <span className="text-amber-600/70">Jobson Varghese</span> · Designed & built with love in Next.js
          </p>
          <a
            href="#hero"
            className="text-[11px] tracking-widest uppercase text-stone-700
                       hover:text-amber-600 transition-colors flex items-center gap-2"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
