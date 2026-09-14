import { motion } from 'framer-motion'
import { FaMobileAlt, FaLaptopCode, FaServer, FaDatabase, FaPalette, FaCheckCircle } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description: 'Build modern mobile applications using Flutter, Dart, React Native, and JavaScript, with Firebase integration, authentication, notifications, and responsive UI.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description: 'Create responsive and interactive websites using HTML, CSS, JavaScript, Bootstrap, jQuery, and TypeScript.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Develop backend applications and APIs using PHP, Laravel, Node.js, and Express.js, with REST API integration.'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Development',
      description: 'Work with MySQL, Firebase, PostgreSQL, and MongoDB for storing, retrieving, and managing application data.'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Development',
      description: 'Design and build clean, modern interfaces using Figma, Flutter, HTML, CSS, JavaScript, and Tailwind CSS, focusing on usability and responsive design.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Software Testing & QA',
      description: 'Work with JUnit, unit testing, test cases, RTM, software quality assurance, and automated testing concepts to improve software reliability.'
    },
  ]

  return (
    <section id="services" className="bg-gray-50 dark:bg-slate-900/50 py-24">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Build
        </motion.h2>

        <motion.p
          className="text-center text-gray-500 dark:text-gray-400 text-base max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From mobile and web applications to robust backend systems, databases, and quality assurance.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:border-blue-600 dark:hover:border-blue-500 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center border border-gray-300 dark:border-slate-600 rounded-full text-2xl text-gray-900 dark:text-blue-400 group-hover:border-blue-600 transition-all">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services