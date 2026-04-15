// components/Preloader.jsx
import { useEffect, useRef, useState } from "react"

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
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
        setTimeout(() => {
          setDone(true)
          onComplete?.()
        }, 400)
      }
    }

    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 bg-stone-900 flex items-center justify-center transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center text-center w-[360px]">
        <p className="font-serif italic text-[13px] tracking-widest text-amber-700 mb-8 animate-fade-up">Portfolio</p>
        <h1 className="font-serif text-5xl font-normal text-stone-50 leading-none mb-2 whitespace-nowrap animate-fade-up">
          Jobson <span className="italic text-amber-600">Varghese</span>
        </h1>
        <p className="text-[11px] tracking-[0.2em] uppercase text-stone-600 mb-12 animate-fade-up">Full Stack Developer | Designer</p>

        {/* progress bar */}
        <div className="w-full h-px bg-stone-800 mb-4">
          <div className="h-px bg-amber-700" style={{ width: `${count}%`, transition: "width 0.05s linear" }} />
        </div>

        <p className="text-[11px] tracking-[0.15em] text-stone-600 tabular-nums">
          <span className="text-stone-500">{count}</span>%
        </p>
      </div>
    </div>
  )
}
