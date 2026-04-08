import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Footer from "../components/Footer"

import experience from "./metadata/index.js"

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <Experience data={experience} />
      <Skills />
      <Education />
      <Footer />
    </main>
  )
}
