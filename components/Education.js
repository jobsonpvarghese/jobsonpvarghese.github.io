// components/Education.jsx
export default function Education() {
  return (
    <section id="education" className="px-6 sm:px-14 lg:px-24 py-28 lg:py-56 bg-[#1c1917] relative">
      <div className="absolute top-0 left-6 sm:left-10 lg:left-14 right-6 sm:right-10 lg:right-14 h-px bg-white/5" />

      {/* bg: amber radial glow — top-right */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-amber-700/10 blur-[120px]" />

      {/* bg: amber radial glow — bottom-left */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-amber-600/8 blur-[130px]" />

      {/* bg: amber radial glow — center */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-amber-700/5 blur-[100px]" />

      {/* bg: decorative SVG grid lines */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="edu-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d97706" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#edu-grid)" />
      </svg>

      {/* bg: floating geometric accents */}
      <svg
        className="pointer-events-none absolute top-16 left-10 opacity-[0.06] animate-[spin_60s_linear_infinite_reverse]"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="118" height="118" stroke="#d97706" strokeWidth="0.75" strokeDasharray="4 8" />
        <rect x="16" y="16" width="88" height="88" stroke="#d97706" strokeWidth="0.5" strokeDasharray="2 10" />
      </svg>

      <svg
        className="pointer-events-none absolute bottom-20 right-10 opacity-[0.05] animate-[spin_40s_linear_infinite]"
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="70" cy="70" r="69" stroke="#d97706" strokeWidth="0.75" strokeDasharray="6 10" />
        <circle cx="70" cy="70" r="48" stroke="#d97706" strokeWidth="0.5" strokeDasharray="3 14" />
      </svg>

      <p data-scroll="left" className="flex items-center gap-2 text-[11px] tracking-widest uppercase text-stone-600 mb-3">
        {/* graduation cap icon */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
        </svg>
        Academic background
      </p>
      <h2 data-scroll="up" data-scroll-delay="0.1" className="text-4xl sm:text-5xl font-normal text-stone-50 leading-none mb-10">
        My <em className="italic text-amber-600">education</em>
      </h2>

      <div data-scroll="up" data-scroll-delay="0.2" className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-800">
        {/* Post Graduate */}
        <div className="bg-[#1c1917] p-8 relative overflow-hidden hover:bg-[#221e1b] transition-colors duration-300 cursor-default group">
          {/* faded number */}
          <div className="text-[80px] italic text-stone-800 absolute bottom-[-10px] right-4 leading-none select-none pointer-events-none group-hover:text-stone-700/40 transition-colors duration-300">
            01
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="text-[10px] tracking-widest uppercase text-stone-600">May 2022 — Aug 2023</div>
            {/* diploma scroll icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
            </svg>
          </div>

          <span className="inline-block text-[9px] tracking-widest uppercase text-amber-600 border border-amber-600/30 px-3 py-1 mb-5">
            Post Graduate
          </span>

          <h3 className="text-[20px] text-stone-50 leading-snug mb-5">Post Graduate Diploma in Mobile Application Development</h3>

          <div className="mt-auto">
            <p className="text-[10px] tracking-widest uppercase text-stone-600 mb-2">Fanshawe College</p>
            <p className="text-sm text-stone-600 flex items-center gap-2">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              London, Ontario, Canada
            </p>
          </div>
        </div>

        {/* Bachelor's */}
        <div className="bg-[#221e1b] p-8 relative overflow-hidden hover:bg-[#26211d] transition-colors duration-300 cursor-default group">
          {/* faded number */}
          <div className="text-[80px] italic text-stone-800 absolute bottom-[-10px] right-4 leading-none select-none pointer-events-none group-hover:text-stone-700/40 transition-colors duration-300">
            02
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="text-[10px] tracking-widest uppercase text-stone-600">Aug 2017 — May 2021</div>
            {/* book icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#44403c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
          </div>

          <span className="inline-block text-[9px] tracking-widest uppercase text-amber-600 border border-amber-600/30 px-3 py-1 mb-5">
            Bachelor's
          </span>

          <h3 className="text-[20px] text-stone-50 leading-snug mb-5">Bachelor of Technology in Computer Science & Engineering</h3>

          <div className="mt-auto">
            <p className="text-[10px] tracking-widest uppercase text-stone-600 mb-2">St. Joseph's College of Engineering & Technology</p>
            <p className="text-sm text-stone-600 flex items-center gap-2">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Palai, Kerala, India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
