import Header from "@/components/header/header"
import Hero from "@/components/common/Hero"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Education from "@/components/sections/Education"
import Resume from "@/components/sections/Resume"

export default function App() {
  return (
    <div className="w-full scroll-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 lg:space-y-16">
          <Header />
          <Hero />
          <Projects />
          <Education />
          <Skills />
        </div>
      </div>
    </div>

  )
}