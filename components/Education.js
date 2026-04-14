// components/Education.jsx
export default function Education() {
  return (
    <section id="education" className="px-6 sm:px-10 lg:px-14 py-16 lg:py-48 bg-[#1c1917] relative">
      <div className="absolute top-0 left-6 sm:left-10 lg:left-14 right-6 sm:right-10 lg:right-14 h-px bg-white/5" />

      <p className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-stone-600 mb-3">
        <span className="w-5 h-px bg-amber-700/60" />
        Academic background
      </p>
      <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-50 leading-none mb-10">
        My <em className="italic text-amber-600">education</em>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-800">
        {/* Post Graduate */}
        <div className="bg-[#1c1917] p-8 relative overflow-hidden hover:bg-[#221e1b] transition-colors duration-300 cursor-default group">
          {/* faded number */}
          <div className="font-serif text-[80px] italic text-stone-800 absolute bottom-[-10px] right-4 leading-none select-none pointer-events-none group-hover:text-stone-700/40 transition-colors duration-300">
            01
          </div>

          <div className="text-[10px] tracking-widest uppercase text-stone-600 font-sans mb-4">May 2022 — Aug 2023</div>

          <span className="inline-block text-[9px] tracking-widest uppercase text-amber-600 border border-amber-600/30 px-3 py-1 font-sans mb-5">
            Post Graduate
          </span>

          <h3 className="font-serif text-[20px] text-stone-50 leading-snug mb-5">Post Graduate Diploma in Mobile Application Development</h3>

          <div className="mt-auto">
            <p className="text-[10px] tracking-widest uppercase text-stone-600 font-sans mb-2">Fanshawe College</p>
            <p className="text-sm text-stone-600 font-sans flex items-center gap-2">
              <span className="w-3 h-px bg-amber-700 inline-block" />
              London, Ontario, Canada
            </p>
          </div>
        </div>

        {/* Bachelor's */}
        <div className="bg-[#221e1b] p-8 relative overflow-hidden hover:bg-[#26211d] transition-colors duration-300 cursor-default group">
          {/* faded number */}
          <div className="font-serif text-[80px] italic text-stone-800 absolute bottom-[-10px] right-4 leading-none select-none pointer-events-none group-hover:text-stone-700/40 transition-colors duration-300">
            02
          </div>

          <div className="text-[10px] tracking-widest uppercase text-stone-600 font-sans mb-4">Aug 2017 — May 2021</div>

          <span className="inline-block text-[9px] tracking-widest uppercase text-amber-600 border border-amber-600/30 px-3 py-1 font-sans mb-5">
            Bachelor's
          </span>

          <h3 className="font-serif text-[20px] text-stone-50 leading-snug mb-5">Bachelor of Technology in Computer Science & Engineering</h3>

          <div className="mt-auto">
            <p className="text-[10px] tracking-widest uppercase text-stone-600 font-sans mb-2">St. Joseph's College of Engineering & Technology</p>
            <p className="text-sm text-stone-600 font-sans flex items-center gap-2">
              <span className="w-3 h-px bg-amber-700 inline-block" />
              Palai, Kerala, India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
