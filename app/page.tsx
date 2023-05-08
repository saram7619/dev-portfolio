import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Page from "../feedback/page"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className='bg-black mx-auto'>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Page />
      <Footer />
    </main>
  )
}
