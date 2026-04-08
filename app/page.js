import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Footer from "../components/Footer"

import experience from "./metadata/index.js"
import Certifications from "../components/Certification.js"

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <Education />
      <Experience data={experience} />
      <Skills />
      <Certifications />
      <Footer />
    </main>
  )
}
