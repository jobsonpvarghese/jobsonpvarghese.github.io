// Preloader.jsx — Variant 2: Credits Crawl
// Two columns scroll vertically in opposite directions like film end credits.
// A frosted counter sits centred on top.
//
// Fonts needed (add to your index.html or _document.jsx):
// <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=Geist+Mono:wght@300;400&display=swap" rel="stylesheet">

import { useEffect, useRef, useState } from "react"

// Content that scrolls in the background columns
const LEFT_ITEMS = [
  { text: "Jobson Varghese", style: "serif-light" },
  { text: "Full Stack Dev", style: "mono" },
  { text: "Design & Code", style: "serif-italic" },
  { text: "Portfolio 2025", style: "mono" },
  { text: "React · Next.js", style: "mono-dim" },
  { text: "Feel Something", style: "serif-italic" },
  { text: "Tailwind · Node", style: "mono-dim" },
  { text: "Jobson Varghese", style: "serif-light" },
  { text: "Full Stack Dev", style: "mono" },
  { text: "Design & Code", style: "serif-italic" },
  { text: "Portfolio 2025", style: "mono" },
  { text: "React · Next.js", style: "mono-dim" },
  { text: "Feel Something", style: "serif-italic" },
  { text: "Tailwind · Node", style: "mono-dim" }
]

const RIGHT_ITEMS = [
  { text: "feel something", style: "serif-italic-amber" },
  { text: "React · Next.js", style: "mono-dim" },
  { text: "Design", style: "serif-bold" },
  { text: "Tailwind · CSS", style: "mono-dim" },
  { text: "make people", style: "serif-light" },
  { text: "Node · Express", style: "mono-dim" },
  { text: "Craft", style: "serif-italic-amber" },
  { text: "feel something", style: "serif-italic-amber" },
  { text: "React · Next.js", style: "mono-dim" },
  { text: "Design", style: "serif-bold" },
  { text: "Tailwind · CSS", style: "mono-dim" },
  { text: "make people", style: "serif-light" },
  { text: "Node · Express", style: "mono-dim" },
  { text: "Craft", style: "serif-italic-amber" }
]

const itemStyle = {
  "serif-light": {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "13px",
    fontWeight: 300,
    color: "rgba(232,223,200,0.07)",
    letterSpacing: "0.04em"
  },
  mono: {
    fontFamily: "'Geist Mono', monospace",
    fontSize: "9px",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "rgba(214,190,140,0.06)"
  },
  "serif-italic": { fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", fontStyle: "italic", fontWeight: 300, color: "rgba(217,119,6,0.1)" },
  "mono-dim": {
    fontFamily: "'Geist Mono', monospace",
    fontSize: "9px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(214,190,140,0.04)"
  },
  "serif-italic-amber": { fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", fontStyle: "italic", color: "rgba(217,119,6,0.08)" },
  "serif-bold": { fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", fontWeight: 600, color: "rgba(232,223,200,0.06)" }
}

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState("loading") // loading | done
  const raf = useRef(null)

  useEffect(() => {
    const duration = 2800
    const start = performance.now()

    const tick = now => {
      const p = Math.min((now - start) / duration, 1)
      const eased = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p
      setCount(Math.round(eased * 100))

      if (p < 1) {
        raf.current = requestAnimationFrame(tick)
      } else {
        // Brief pause at 100 before exit
        setTimeout(() => {
          setPhase("done")
          setTimeout(() => onComplete?.(), 700)
        }, 400)
      }
    }

    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "#1c1917",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        opacity: phase === "done" ? 0 : 1,
        pointerEvents: phase === "done" ? "none" : "auto",
        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1)"
      }}
    >
      {/* ── Grain overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
          pointerEvents: "none"
        }}
      />

      {/* ── Left column — scrolls UP ── */}
      <Column items={LEFT_ITEMS} direction="up" speed={8} borderRight />

      {/* ── Centre counter ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px 40px",
          background: "rgba(17,16,9,0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderTop: "0.5px solid rgba(214,190,140,0.08)",
          borderBottom: "0.5px solid rgba(214,190,140,0.08)",
          minWidth: "200px"
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "'Geist Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(214,190,140,0.3)",
            marginBottom: "16px"
          }}
        >
          Portfolio
        </p>

        {/* Big number */}
        <div style={{ position: "relative", lineHeight: 1, marginBottom: "20px" }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(52px, 8vw, 72px)",
              fontWeight: 300,
              color: "#e8dfc8",
              letterSpacing: "-2px",
              display: "inline-block"
            }}
          >
            {count}
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              color: "#d97706",
              verticalAlign: "super",
              marginLeft: "2px",
              lineHeight: 1
            }}
          >
            %
          </span>
        </div>

        {/* Progress rule */}
        <div
          style={{
            width: "100px",
            height: "0.5px",
            background: "rgba(214,190,140,0.1)",
            position: "relative",
            marginBottom: "16px"
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "0.5px",
              width: `${count}%`,
              background: "#d97706",
              transition: "width 0.05s linear"
            }}
          />
          {/* sliding dot */}
          <div
            style={{
              position: "absolute",
              top: "-3px",
              left: `${count}%`,
              transform: "translateX(-50%)",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#d97706",
              transition: "left 0.05s linear"
            }}
          />
        </div>

        {/* Name */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "13px",
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(214,190,140,0.35)",
            letterSpacing: "0.06em"
          }}
        >
          Jobson Varghese
        </p>
      </div>

      {/* ── Right column — scrolls DOWN ── */}
      <Column items={RIGHT_ITEMS} direction="down" speed={11} borderLeft />
    </div>
  )
}

// Infinite-scrolling column
function Column({ items, direction, speed, borderRight, borderLeft }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "50%",
        overflow: "hidden",
        ...(borderRight ? { right: "50%", borderRight: "0.5px solid rgba(214,190,140,0.05)" } : {}),
        ...(borderLeft ? { left: "50%", borderLeft: "0.5px solid rgba(214,190,140,0.05)" } : {})
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          animation: `${direction === "up" ? "crawlUp" : "crawlDown"} ${speed}s linear infinite`
        }}
      >
        <style>{`
          @keyframes crawlUp {
            0%   { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes crawlDown {
            0%   { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
        `}</style>

        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              padding: "18px 28px",
              borderBottom: "0.5px solid rgba(214,190,140,0.04)",
              whiteSpace: "nowrap",
              ...itemStyle[item.style]
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}
