import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  )
}

export default App
