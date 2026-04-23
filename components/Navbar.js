"use client"
import { useState, useEffect } from "react"

const links = [
  { label: "Home", href: "#hero" },
  // { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#footer" }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // close menu on link click
  const handleLink = () => setOpen(false)

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-3xl rounded-[20px] border transition-all duration-500
          ${
            scrolled
              ? "bg-[#1c1917]/90 border-stone-700/60 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md"
              : "bg-[#1c1917]/60 border-stone-800/40 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-sm"
          }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Brand */}
          <a
            href="#hero"
            className="text-[11px] tracking-[0.22em] uppercase text-stone-300 hover:text-amber-500 transition-colors"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            J<span className="text-amber-600">V</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] tracking-[0.18em] uppercase text-stone-500 hover:text-stone-100
                           px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all duration-200"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA — desktop */}
          <a
            href="mailto:jobsonvarghese1@email.com"
            className="hidden md:inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase
                       text-amber-600 border border-amber-600/30 px-4 py-1.5 rounded-lg
                       hover:bg-amber-600 hover:text-[#1c1917] hover:border-amber-600
                       transition-all duration-200"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Hire me
          </a>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1.5 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-stone-400 transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-5 h-px bg-stone-400 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-stone-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 pb-4 flex flex-col gap-1 border-t border-stone-800/60 pt-3">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLink}
                className="text-[11px] tracking-[0.18em] uppercase text-stone-500 hover:text-stone-100
                           px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all duration-200"
                style={{ fontFamily: "'Raleway', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:jobson@email.com"
              onClick={handleLink}
              className="mt-2 text-[11px] tracking-[0.18em] uppercase text-amber-600 border border-amber-600/30
                         px-3 py-2.5 rounded-lg hover:bg-amber-600 hover:text-[#1c1917] hover:border-amber-600
                         transition-all duration-200 text-center"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              Hire me
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
