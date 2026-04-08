// components/Education.jsx
export default function Education() {
  return (
    <section id="education" className="px-6 sm:px-10 lg:px-14 py-16 lg:py-20 bg-[#f5f0e8] relative">
      <div className="absolute top-0 left-6 sm:left-10 lg:left-14 right-6 sm:right-10 lg:right-14 h-px bg-stone-900/10" />

      <p className="flex items-center gap-3 text-[11px] tracking-widest uppercase text-stone-400 mb-3">
        <span className="w-5 h-px bg-amber-700/60" />
        Academic background
      </p>
      <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900 leading-none mb-12">
        My <em className="italic text-amber-700">education</em>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5">
        {/* featured — postgrad */}
        <div className="bg-stone-900 p-8 relative overflow-hidden hover:-translate-y-1 transition-transform duration-300 cursor-default">
          {/* faded number */}
          <div className="font-serif text-[96px] text-stone-900/10 absolute bottom-0 right-3 leading-none select-none pointer-events-none">01</div>
          <div className="flex justify-between items-start mb-7">
            <span className="text-[10px] tracking-widest uppercase text-amber-700 border border-amber-700/30 px-3 py-1">Post Graduate</span>
            <div className="text-[11px] text-stone-600 text-right leading-relaxed">
              May 2022
              <br />
              Aug 2023
            </div>
          </div>
          <h3 className="font-serif text-[22px] text-[#f5f0e8] leading-tight mb-3">Post Graduate Diploma in Mobile Application Development</h3>
          <p className="text-[11px] tracking-widest uppercase text-stone-600 mb-2">Fanshawe College</p>
          <p className="text-sm text-stone-600 flex items-center gap-2">
            <span className="w-4 h-px bg-amber-700 inline-block" />
            London, Ontario, Canada
          </p>
        </div>

        {/* bachelor's */}
        <div className="bg-white p-8 hover:-translate-y-1 transition-transform duration-300 cursor-default">
          <div className="flex justify-between items-start mb-7">
            <span className="text-[10px] tracking-widest uppercase text-amber-700 border border-amber-700/30 px-3 py-1">Bachelor's</span>
            <div className="text-[11px] text-stone-400 text-right leading-relaxed">
              Aug 2017
              <br />
              May 2021
            </div>
          </div>
          <h3 className="font-serif text-[22px] text-stone-900 leading-tight mb-3">Bachelor of Technology in Computer Science & Engineering</h3>
          <p className="text-[11px] tracking-widest uppercase text-stone-400 mb-2">St. Joseph's College of Engineering & Technology</p>
          <p className="text-sm text-stone-400 flex items-center gap-2">
            <span className="w-4 h-px bg-amber-700 inline-block" />
            Palai, Kerala, India
          </p>
        </div>
      </div>
    </section>
  )
}
