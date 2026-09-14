import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

const CVButton = () => {
  return (
    <motion.div
      className="fixed top-4 right-3 sm:top-5 sm:right-6 lg:right-8 z-[1001]"
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <a
        href="/Pramod_Lakshan_CV.pdf"
        download="Pramod_Lakshan_CV.pdf"
        aria-label="Download Pramod Lakshan's CV"
        className="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 border border-blue-400/30 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <FaDownload className="text-xs transition-transform duration-300 group-hover:translate-y-0.5" />
        <span className="hidden sm:inline">Download CV</span>
        <span className="sm:hidden text-xs font-bold">CV</span>
      </a>
    </motion.div>
  )
}

export default CVButton
