import Header from "@/components/header/header"
import Container from "@/components/Container"
import Hero from "@/components/sections/Hero"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Education from "@/components/sections/Education"
import Resume from "@/components/sections/Resume"

export default function App() {
  return (
    <div>
      <Container>
        <Header />
        <Hero />
        <Projects />
        <Education />
        <Skills />
        <Resume />
      </Container>
    </div>
  )
}