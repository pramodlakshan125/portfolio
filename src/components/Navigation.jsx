import { motion } from 'framer-motion'
import { FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const Navigation = ({ activeSection = 'home' }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'skills', label: 'Skills', icon: <FaCode /> },
    { id: 'services', label: 'Services', icon: <FaBriefcase /> },
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
      <div className="flex items-center gap-2 sm:gap-6 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200 dark:border-blue-500/30 shadow-xl hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all">
        <ul className="flex items-center gap-1 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.a
                href={`#${item.id}`}
                className={`flex items-center gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-400/15 font-semibold'
                    : 'text-gray-600 dark:text-slate-300/90 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-blue-400/10'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm sm:text-base flex items-center justify-center">{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </motion.a>
            </li>
          ))}
        </ul>
        <div className="flex items-center pl-3 sm:pl-4 border-l border-gray-200 dark:border-blue-400/20">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation