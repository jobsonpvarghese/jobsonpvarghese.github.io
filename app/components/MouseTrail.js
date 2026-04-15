// components/MouseTrail.jsx
"use client"
import { useEffect } from "react"

export default function MouseTrail() {
  useEffect(() => {
    const dots = []
    const count = 20

    for (let i = 0; i < count; i++) {
      const dot = document.createElement("div")
      dot.style.cssText = `
        position: fixed;
        width: ${8 - i * 0.3}px;
        height: ${8 - i * 0.3}px;
        border-radius: 50%;
        background: #b45309;
        pointer-events: none;
        z-index: 9999;
        opacity: ${1 - i / count};
        transform: translate(-50%, -50%);
      `
      document.body.appendChild(dot)
      dots.push({ el: dot, x: 0, y: 0 })
    }

    let mouseX = 0
    let mouseY = 0

    const onMove = e => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", onMove)

    let frame
    const animate = () => {
      dots.forEach((dot, i) => {
        const prev = dots[i - 1]
        if (i === 0) {
          dot.x += (mouseX - dot.x) * 0.4
          dot.y += (mouseY - dot.y) * 0.4
        } else {
          dot.x += (prev.x - dot.x) * 0.4
          dot.y += (prev.y - dot.y) * 0.4
        }
        dot.el.style.left = dot.x + "px"
        dot.el.style.top = dot.y + "px"
      })
      frame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(frame)
      dots.forEach(d => d.el.remove())
    }
  }, [])

  return null
}
