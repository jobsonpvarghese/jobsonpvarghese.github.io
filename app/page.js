"use client"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Footer from "../components/Footer"
import Certifications from "../components/Certification.js"
import Projects from "../components/Projects"
import Preloader from "./components/Preloader"

import experience from "./metadata/index.js"

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    document.body.style.overflow = loaded ? "" : "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [loaded])

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      <main className={`overflow-x-clip transition-opacity duration-700 delay-300 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <Hero />
        <Education />
        <Experience data={experience} />
        <Skills />
        <Projects />
        <Certifications />
        <Footer />
      </main>
    </>
  )
}
