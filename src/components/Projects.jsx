import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCode, FaMobileAlt, FaGlobe, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import auracareImg from '../assets/auracare.png'
import travelerImg from '../assets/traveler.png'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    { name: 'All', icon: <FaCode /> },
    { name: 'Mobile', icon: <FaMobileAlt /> },
    { name: 'Web', icon: <FaGlobe /> },
  ]

  const projects = [
    {
      title: 'AuraCare',
      subtitle: 'AI-Powered Health Assistant',
      description: 'A cross-platform mobile healthcare application providing a centralized platform for managing health records, medicine and appointment reminders, AI-powered health assistance, and emergency support.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Figma', 'FCM', 'Google Maps'],
      category: 'Mobile',
      image: auracareImg,
      githubLink: 'https://github.com/pramodlakshan125/AuraCare-App',
      liveLink: '',
    },
    {
      title: 'Traveler',
      subtitle: 'Travel Discovery Website',
      description: 'A responsive travel website helping users explore destinations and discover interesting places through a clean, engaging web interface.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Web',
      image: travelerImg,
      githubLink: 'https://github.com/pramodlakshan125/Traveler-web-site',
      liveLink: 'https://pramodlakshan125.github.io/Traveler-web-site/',
    },
  ]

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-24 bg-gray-50/50 dark:bg-slate-900/50 relative">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-full p-2 w-fit mx-auto shadow-md border border-gray-200 dark:border-slate-700/60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.name
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-700/50'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative p-[1.5px] rounded-3xl bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 dark:from-slate-700 dark:via-slate-800 dark:to-slate-700 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Ambient glow behind card on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-25 dark:group-hover:opacity-40 blur-xl transition-opacity duration-500 pointer-events-none" />

                {/* Inner Card Container */}
                <div className="relative bg-white dark:bg-slate-900 rounded-[22px] overflow-hidden flex flex-col h-full z-10">
                  {/* Top glowing accent line */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 group-hover:opacity-100 group-hover:via-cyan-400 transition-all duration-500 z-20" />

                  {/* Image Container with bottom separator */}
                  <div className="w-full h-56 overflow-hidden bg-slate-950 relative border-b border-gray-100 dark:border-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Category pill badge */}
                    <span className="absolute bottom-3 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white border border-blue-400/30 shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-3 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mt-0.5">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Action Link Icons */}
                        <div className="flex gap-2 flex-shrink-0">
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View on GitHub"
                              title="View on GitHub"
                              className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all transform hover:-translate-y-0.5"
                            >
                              <FaGithub className="text-base" />
                            </a>
                          )}
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Visit Website"
                              title="Visit Website"
                              className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all transform hover:-translate-y-0.5"
                            >
                              <FaExternalLinkAlt className="text-sm" />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 mt-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-slate-800/80">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects