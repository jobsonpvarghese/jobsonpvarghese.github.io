// Hero.jsx
export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-[#f5f0e8] font-sans relative">
      {/* Paper grain background filter */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.2] z-100" aria-hidden="true">
        <filter id="papergrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#papergrain)" />
      </svg>
      {/* Image — first in DOM so it's on top on mobile */}
      <div className="relative overflow-hidden h-[100vw] sm:h-[60vw] lg:h-auto lg:min-h-full lg:order-2">
        <img
          src="/img/hero.png"
          alt="Portrait"
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-[6000ms]"
        />
        <div className="absolute bottom-8 left-8 bg-[#f5f0e8] px-5 py-3 text-[11px] tracking-widest uppercase">
          <span className="text-amber-900 font-bold">Jobson Varghese</span>
          <span className="text-amber-700"> · Full Stack Developer</span>
        </div>
      </div>

      {/* Text — second in DOM, first visually on desktop */}
      <div className="flex flex-col justify-center px-12  xl:px-20 lg:py-0 lg:order-1">
        <div className="flex flex-col justify-center px-8 xl:px-20 py-20 lg:py-0">
          <h1 className="font-serif text-4xl xl:text-6xl font-normal leading-[1.05] text-stone-900 mb-7">
            Design that makes
            <br />
            people <em className="italic text-amber-700 ">feel</em> something.
          </h1>

          <p className="text-base font-light leading-relaxed text-stone-400 max-w-md mb-14">
            I'm Jobson Varghese — a product designer crafting engaging digital experiences.
          </p>

          {/* X index css added inline as tailwind overriding elsehwhere */}
          <div
            className="flex items-center gap-6 mb-20"
            style={{
              zIndex: "200"
            }}
          >
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
