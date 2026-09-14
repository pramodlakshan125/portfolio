import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCode, FaServer, FaMobileAlt, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { SiReact } from 'react-icons/si'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    { name: 'All', icon: <FaCode /> },
    { name: 'Fullstack', icon: <FaServer /> },
    { name: 'Frontend', icon: <SiReact /> },
    { name: 'Mobile', icon: <FaMobileAlt /> },
  ]

  // Replace each of these with your own real projects
  const projects = [
    {
      title: 'Project Name One',
      description: 'A short description of what this project does, what problem it solves, and what makes it interesting. Keep it to 2-3 sentences.',
      role: 'Frontend Developer',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'Frontend',
      liveLink: '',
      githubLink: '',
      icon: <SiReact />
    },
    {
      title: 'Project Name Two',
      description: 'Another short project description. What did you build, and what did you learn from building it?',
      role: 'Full Stack Developer',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      category: 'Fullstack',
      liveLink: '',
      githubLink: '',
      icon: <FaServer />
    },
    {
      title: 'Project Name Three',
      description: 'A third example project. This one could be a mobile app, a tool, or anything you have built and are proud of.',
      role: 'Developer',
      technologies: ['React Native'],
      category: 'Mobile',
      liveLink: '',
      githubLink: '',
      icon: <FaMobileAlt />
    },
  ]

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
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
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                activeCategory === category.name
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-600 hover:text-blue-600'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex justify-between items-start mb-4 gap-3">
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">{project.title}</h3>
                  <div className="flex gap-2 flex-shrink-0">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit"
                        className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Code"
                        className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <FaGithub className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                  <strong className="block mt-2 text-gray-900 font-semibold text-xs">
                    Role: {project.role}
                  </strong>
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600"
                    >
                      {tech}
                    </span>
                  ))}
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