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
    <section id="certifications" className="px-6 sm:px-10 lg:px-14 py-16 lg:py-20 bg-[#f5f0e8] relative">
      <div className="absolute top-0 left-6 sm:left-10 lg:left-14 right-6 sm:right-10 lg:right-14 h-px bg-stone-900/10" />

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
        {/* left */}
        <div>
          <p className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-stone-400 mb-3">
            <span className="w-5 h-px bg-amber-700/60" />
            Credentials
          </p>
          <h2 className="font-serif text-4xl font-normal text-stone-900 leading-none mb-5">
            My <em className="italic text-amber-700">certifications</em>
          </h2>
          <p className="text-sm font-light leading-relaxed text-stone-400">
            Continuously expanding expertise through structured learning across UX, design, and product thinking.
          </p>
        </div>

        {/* right — cert list */}
        <div className="flex flex-col gap-0.5">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="bg-white px-6 py-5 flex items-center justify-between gap-4
                         group relative overflow-hidden cursor-default
                         hover:bg-stone-900 transition-colors duration-200"
            >
              {/* amber left bar */}
              <div className="absolute left-0 top-0 bottom-0 w-0 bg-amber-700 group-hover:w-0.5 transition-all duration-300" />

              <div>
                <p
                  className="font-serif text-[17px] text-stone-900 leading-snug mb-1
                               group-hover:text-[#f5f0e8] transition-colors duration-200"
                >
                  {cert.name}
                </p>
                <p
                  className="text-[11px] tracking-wide uppercase text-stone-400
                               group-hover:text-stone-600 transition-colors duration-200"
                >
                  {cert.issuer}
                </p>
              </div>

              <span className="text-stone-300 group-hover:text-amber-700 transition-colors duration-200 shrink-0">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
