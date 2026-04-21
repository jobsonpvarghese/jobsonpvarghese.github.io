// components/Certifications.jsx
const certs = [
  {
    name: "UX Design Fundamentals",
    issuer: "Coursera · California Institute of the Arts"
  },
  {
    name: "Planning a Career in User Experience",
    issuer: "LinkedIn Learning"
  },
  {
    name: "Adobe XD for Designers",
    issuer: "LinkedIn Learning"
  },
  {
    name: "UX Design Series",
    issuer: "LinkedIn Learning · Overview, User Data & Personas"
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 sm:px-14 lg:px-24 py-28 lg:py-44 bg-[#1c1917] relative">
      <div className="absolute top-0 left-6 sm:left-10 lg:left-14 right-6 sm:right-10 lg:right-14 h-px bg-white/5" />

      {/* bg: amber radial glow — top-right */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-amber-700/10 blur-[120px]" />
      {/* bg: amber radial glow — bottom-left */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-amber-600/8 blur-[130px]" />
      {/* bg: amber radial glow — center */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-amber-700/5 blur-[100px]" />

      {/* bg: decorative SVG grid */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cert-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e7e5e4" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cert-grid)" />
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start relative">
        {/* left */}
        <div data-scroll="left">
          <p className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-stone-600 mb-3">
            <span className="w-5 h-px bg-amber-700/60" />
            Credentials
          </p>
          <h2 className="text-4xl font-normal text-stone-50 leading-none mb-5">
            My <em className="italic text-amber-600">certifications</em>
          </h2>
          <p className="text-sm leading-relaxed text-stone-600">
            Continuously expanding expertise through structured learning across UX, design, and product thinking.
          </p>
        </div>

        {/* right — cert list */}
        <div className="flex flex-col gap-px bg-stone-800">
          {certs.map((cert, i) => (
            <div
              key={i}
              data-scroll="up"
              data-scroll-delay={`${i * 0.1}`}
              className="bg-[#1c1917] px-6 py-5 flex items-center justify-between gap-4
                         group relative overflow-hidden cursor-pointer
                         hover:bg-[#221e1b] transition-colors duration-300"
            >
              {/* amber left bar */}
              <div className="absolute left-0 top-0 bottom-0 w-0 bg-amber-600 group-hover:w-0.5 transition-all duration-300" />

              {/* blended amber glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700/0 to-amber-700/0 group-hover:from-amber-700/5 group-hover:to-transparent transition-all duration-500" />

              <div className="relative">
                <p className="text-[17px] text-stone-300 leading-snug mb-1 group-hover:text-stone-50 transition-colors duration-300">{cert.name}</p>
                <p className="text-[11px] tracking-wide uppercase text-stone-700 group-hover:text-stone-500 transition-colors duration-300">
                  {cert.issuer}
                </p>
              </div>

              <span className="text-stone-700 group-hover:text-amber-600 transition-colors duration-300 shrink-0 relative">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
