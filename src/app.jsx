import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />

        
      </div>
    </ThemeProvider>
  )
}

export default App