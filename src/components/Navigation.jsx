import { motion } from 'framer-motion'
import { FaHome, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const Navigation = ({ activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'skills', label: 'Skills', icon: <FaCode /> },
    { id: 'services', label: 'Services', icon: <FaBriefcase /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
  ]

  return (
    <motion.nav
      className="fixed top-5 left-0 right-0 mx-auto z-[1000] w-fit max-w-[95%]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      <div className="flex items-center gap-6 px-5 py-2.5 rounded-full bg-slate-900/95 backdrop-blur-xl border-2 border-blue-500/30 shadow-2xl hover:border-blue-500/50 transition-all">
        <ul className="flex items-center gap-1 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.a
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-400 bg-blue-400/15 font-semibold'
                    : 'text-slate-300/90 hover:text-blue-400 hover:bg-blue-400/10'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-base flex items-center justify-center">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </motion.a>
            </li>
          ))}
        </ul>
        <div className="flex items-center pl-4 border-l border-blue-400/20">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation