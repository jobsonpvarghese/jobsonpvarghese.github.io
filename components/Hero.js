// Hero.jsx — Dark Editorial Redesign
// Fonts needed (add to your index.html or _document.jsx):
// <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=Geist+Mono:wght@300;400&display=swap" rel="stylesheet">

import { useEffect, useRef } from "react"

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll("[data-reveal]")
    items?.forEach((el, i) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(22px)"
      el.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${0.08 * i + 0.1}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${0.08 * i + 0.1}s`
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
        })
      )
    })
  }, [])

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{ fontFamily: "'Geist Mono', monospace" }}
      className="relative min-h-screen bg-[#111009] overflow-hidden flex flex-col lg:flex-row"
    >
      {/* ── Grain overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px"
        }}
      />

      {/* ── Subtle amber glow ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-[30%] w-[600px] h-[400px] opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse, #d97706 0%, transparent 70%)" }}
      />

      {/* ══════════════════════════════════════
          LEFT RAIL — vertical name + metadata
      ══════════════════════════════════════ */}
      <div
        data-reveal
        className="hidden lg:flex flex-col items-center justify-between py-10 px-0 w-16 xl:w-20 shrink-0 relative z-20"
        style={{ borderRight: "0.5px solid rgba(214,190,140,0.12)" }}
      >
        {/* Vertical name */}
        <div
          className="flex-1 flex items-center justify-center"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(11px, 1.1vw, 15px)",
            fontWeight: 300,
            letterSpacing: "0.35em",
            color: "rgba(214,190,140,0.35)",
            textTransform: "uppercase"
          }}
        >
          Jobson Varghese
        </div>

        {/* Bottom dot */}
        <div className="w-1 h-1 rounded-full bg-amber-600 opacity-60 mb-2" />
      </div>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <div className="flex-1 flex flex-col lg:flex-row relative z-20">
        {/* ── Text column ── */}
        <div className="flex flex-col justify-between px-8 sm:px-12 lg:px-14 xl:px-20 py-14 lg:py-16 flex-1 order-2 lg:order-1">
          {/* Top eyebrow */}
          <div data-reveal className="flex items-center gap-3">
            <span
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(214,190,140,0.4)"
              }}
            >
              ©&nbsp;2025
            </span>
            <span style={{ width: "1px", height: "12px", background: "rgba(214,190,140,0.15)" }} />
            <span
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#b45309",
                opacity: 0.8
              }}
            >
              Available for work
            </span>
          </div>

          {/* Headline */}
          <div className="my-auto py-14 lg:py-0">
            <div data-reveal>
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)",
                  fontWeight: 300,
                  lineHeight: 1.04,
                  letterSpacing: "-0.01em",
                  color: "#e8dfc8"
                }}
              >
                Design that
                <br />
                makes people
              </h1>
            </div>

            <div data-reveal style={{ display: "flex", alignItems: "baseline", gap: "0.3em", flexWrap: "wrap" }}>
              {/* Inverted "people" block */}
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)",
                  fontWeight: 600,
                  fontStyle: "italic",
                  lineHeight: 1.04,
                  letterSpacing: "-0.01em",
                  background: "#d97706",
                  color: "#111009",
                  padding: "0 0.2em",
                  display: "inline-block"
                }}
              >
                feel
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)",
                  fontWeight: 300,
                  lineHeight: 1.04,
                  letterSpacing: "-0.01em",
                  color: "#e8dfc8"
                }}
              >
                something.
              </span>
            </div>

            {/* Thin rule */}
            <div data-reveal style={{ width: "36px", height: "0.5px", background: "rgba(217,119,6,0.4)", margin: "28px 0" }} />

            {/* Sub */}
            <p
              data-reveal
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "clamp(11px, 1.1vw, 13px)",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "rgba(214,190,140,0.45)",
                maxWidth: "320px",
                letterSpacing: "0.02em"
              }}
            >
              Full stack developer crafting digital experiences that blend form with function.
            </p>
          </div>

          {/* CTAs */}
          <div data-reveal style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
            <a
              href="#work"
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                background: "#e8dfc8",
                color: "#111009",
                padding: "13px 28px",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                transition: "background 0.25s, color 0.25s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#d97706"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#e8dfc8"
              }}
            >
              View work
              <span style={{ display: "inline-block", width: "24px", height: "0.5px", background: "currentColor" }} />
            </a>

            <a
              href="#contact"
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(214,190,140,0.45)",
                border: "0.5px solid rgba(214,190,140,0.2)",
                padding: "13px 28px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                transition: "color 0.25s, border-color 0.25s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "#e8dfc8"
                e.currentTarget.style.borderColor = "rgba(214,190,140,0.5)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "rgba(214,190,140,0.45)"
                e.currentTarget.style.borderColor = "rgba(214,190,140,0.2)"
              }}
            >
              Get in touch ↗
            </a>
          </div>
        </div>

        {/* ── Photo column ── */}
        <div
          className="relative order-1 lg:order-2 h-[100vw] sm:h-[70vw] lg:h-auto lg:w-[52%] xl:w-[48%] shrink-0"
          style={{ borderLeft: "0.5px solid rgba(214,190,140,0.08)" }}
        >
          {/* Corner marks */}
          {[
            { top: "16px", left: "16px", borderTop: "0.5px solid rgba(214,190,140,0.35)", borderLeft: "0.5px solid rgba(214,190,140,0.35)" },
            { top: "16px", right: "16px", borderTop: "0.5px solid rgba(214,190,140,0.35)", borderRight: "0.5px solid rgba(214,190,140,0.35)" },
            { bottom: "16px", left: "16px", borderBottom: "0.5px solid rgba(214,190,140,0.35)", borderLeft: "0.5px solid rgba(214,190,140,0.35)" },
            { bottom: "16px", right: "16px", borderBottom: "0.5px solid rgba(214,190,140,0.35)", borderRight: "0.5px solid rgba(214,190,140,0.35)" }
          ].map((s, i) => (
            <div key={i} className="pointer-events-none absolute z-20" style={{ ...s, width: "20px", height: "20px" }} />
          ))}

          <img
            src="/img/hero.png"
            alt="Jobson Varghese"
            className="w-full h-full object-cover object-top"
            style={{ filter: "sepia(0.18) brightness(0.88) contrast(1.05)" }}
          />

          {/* Amber bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
            style={{ background: "linear-gradient(to top, #111009 0%, transparent 100%)" }}
          />

          {/* Name badge */}
          <div
            data-reveal
            className="absolute bottom-6 left-6 z-20"
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase"
            }}
          >
            <span style={{ color: "#d97706" }}>Jobson Varghese</span>
            <span style={{ color: "rgba(214,190,140,0.4)", margin: "0 6px" }}>·</span>
            <span style={{ color: "rgba(214,190,140,0.4)" }}>Full Stack Developer</span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          BOTTOM TICKER — mobile only hidden on lg
      ══════════════════════════════════════ */}
      <div className="relative z-20 lg:hidden" style={{ borderTop: "0.5px solid rgba(214,190,140,0.1)", padding: "12px 32px" }}>
        <p
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(214,190,140,0.3)"
          }}
        >
          Full Stack Developer · Available 2025
        </p>
      </div>
    </section>
  )
}
