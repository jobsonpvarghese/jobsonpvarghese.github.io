"use client"
import { useEffect } from "react"

export default function ScrollObserver() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-scroll]")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.scrollDelay || "0"
            setTimeout(() => {
              entry.target.classList.add("in-view")
            }, parseFloat(delay) * 1000)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
