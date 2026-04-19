// Hero.jsx
export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-[#f5f0e8]  relative overflow-hidden" id="hero">
      {/* bg blurs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-amber-400/15 blur-[100px] animate-drift" />
      <div
        className="pointer-events-none absolute bottom-0 left-[15%] w-[350px] h-[350px] rounded-full bg-amber-600/10 blur-[90px] animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="pointer-events-none absolute top-[40%] left-[30%] w-[250px] h-[250px] rounded-full bg-amber-500/8 blur-[70px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      {/* spinning dashed circle — top-left */}
      <svg
        className="pointer-events-none absolute top-10 left-10 opacity-[0.08] animate-[spin_50s_linear_infinite_reverse]"
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="75" cy="75" r="74" stroke="#92400e" strokeWidth="0.75" strokeDasharray="6 10" />
        <circle cx="75" cy="75" r="52" stroke="#92400e" strokeWidth="0.5" strokeDasharray="3 14" />
      </svg>

      {/* spinning dashed square — bottom-left */}
      <svg
        className="pointer-events-none absolute bottom-16 left-12 opacity-[0.07] animate-[spin_65s_linear_infinite]"
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="88" height="88" stroke="#92400e" strokeWidth="0.75" strokeDasharray="4 8" />
        <rect x="12" y="12" width="66" height="66" stroke="#92400e" strokeWidth="0.5" strokeDasharray="2 10" />
      </svg>

      <div className="relative overflow-visible lg:overflow-hidden h-[100vw] sm:h-[60vw] lg:h-auto lg:min-h-full lg:order-2">
        <img
          src="/img/hero.png"
          alt="Portrait"
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[6000ms] "
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 lg:bottom-8 lg:left-8 lg:translate-x-0 lg:translate-y-0 bg-[#f5f0e8] px-5 py-3 text-[11px] tracking-widest uppercase shadow-md whitespace-nowrap">
          <span className="text-amber-900 font-bold">Jobson Varghese</span>
          <span className="text-amber-700"> · Full Stack Developer</span>
        </div>
      </div>

      {/* Text — second in DOM, first visually on desktop */}
      <div className="flex flex-col justify-center px-12  xl:px-20 lg:py-0 lg:order-1">
        <div className="flex flex-col justify-center px-8 xl:px-20 py-20 lg:py-0">
          <p
            className="animate-fade-up flex items-center gap-3 text-[11px] tracking-widest uppercase text-stone-400 mb-5"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-5 h-px bg-amber-700/60" />
            Full Stack Developer
          </p>

          <h1 className="animate-fade-up text-4xl xl:text-6xl font-normal leading-[1.05] text-stone-900 mb-7" style={{ animationDelay: "0.25s" }}>
            Design that makes
            <br />
            people <em className="italic text-amber-700">feel</em> something.
          </h1>

          <p className="animate-fade-up text-base font-light leading-relaxed text-stone-400 max-w-md mb-14" style={{ animationDelay: "0.45s" }}>
            I'm Jobson Varghese — a product designer crafting engaging digital experiences.
          </p>

          {/* X index css added inline as tailwind overriding elsehwhere */}
          <div className="animate-fade-up flex items-center gap-6 mb-20" style={{ zIndex: "200", animationDelay: "0.65s" }}>
            <a
              href="#work"
              className="bg-stone-900 text-[#f5f0e8] text-sm tracking-wide px-8 py-4 
                       hover:bg-stone-800 transition-colors"
            >
              View work
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wide text-stone-400 border-b border-stone-300 
                       pb-0.5 hover:text-stone-900 hover:border-stone-900 transition-colors 
                       flex items-center gap-2"
            >
              Get in touch <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
