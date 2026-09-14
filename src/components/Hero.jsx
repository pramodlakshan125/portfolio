import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaCalendar, FaMobileAlt, FaTasks } from 'react-icons/fa'
import { SiReact } from 'react-icons/si'
import Aurora from './Aurora'
import { useTheme } from '../context/ThemeContext'

const Hero = () => {
  const { theme } = useTheme()
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer', 'Mobile App Developer', 'UI/UX Enthusiast', 'Open Source Contributor']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  const quickStats = [
    { icon: <FaCalendar />, value: '1+', label: 'Years Learning' },
    { icon: <SiReact />, value: '5+', label: 'Projects Built' },
    { icon: <FaMobileAlt />, value: '2+', label: 'Responsive Sites' },
    { icon: <FaTasks />, value: '3+', label: 'Technologies' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-40 pb-20 relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-75 dark:opacity-85">
        <Aurora
          colorStops={["#7cff67", "#B497CF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
          lightMode={theme === 'light'}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Professional Name Display */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Pramod{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400">
              Lakshan
            </span>
          </motion.h1>

          {/* Animated Role Switcher */}
          <div className="h-10 sm:h-12 flex items-center justify-center mb-3">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[currentRole]}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Building Scalable Web &amp; Mobile Applications
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full-Stack Development • Building React &amp; Next.js frontend • Modern Web Solutions
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 text-sm font-semibold shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href="mailto:pramodlakshan125@gmail.com"
              aria-label="Email Pramod Lakshan"
              className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full text-gray-900 dark:text-white text-xl shadow-md hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pramod-lakshan-983581319"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full text-gray-900 dark:text-white text-xl shadow-md hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/pramodlakshan125"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full text-gray-900 dark:text-white text-xl shadow-md hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-6">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center gap-3.5 px-5 py-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-2xl shadow-sm hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <span className="text-2xl text-blue-600 dark:text-blue-400">{stat.icon}</span>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero