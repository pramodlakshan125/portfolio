import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />

        
      </div>
    </ThemeProvider>
  )
}

export default App