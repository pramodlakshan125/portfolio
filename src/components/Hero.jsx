import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram, FaCalendar, FaMobileAlt, FaTasks } from 'react-icons/fa'
import { SiReact } from 'react-icons/si'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer']

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-48 pb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 w-full relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Pramod Lakshan</h1>

          <div className="flex flex-col gap-4 mb-6">
            <motion.span
              className="text-3xl md:text-5xl font-extrabold text-blue-600"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {roles[currentRole]}
            </motion.span>
            <motion.span
              className="text-xl md:text-2xl font-semibold text-gray-900"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building Scalable Web &amp; Mobile Applications
            </motion.span>
          </div>

          <motion.p
            className="text-lg text-gray-500 mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Stack Development • Building React &amp; Next.js frontend • Modern Web Solutions
          </motion.p>

          <motion.div
            className="flex justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href="mailto:your-email@example.com"
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-900 text-xl shadow-md hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-900 text-xl shadow-md hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-900 text-xl shadow-md hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-900 text-xl shadow-md hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTelegram />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex gap-4 flex-nowrap justify-center overflow-x-auto py-2">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:border-blue-600 hover:shadow-md transition-all whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <span className="text-xl text-gray-900">{stat.icon}</span>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-base font-bold text-gray-900">{stat.value}</span>
                    <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
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