import { motion } from 'framer-motion'
import { SiReact, SiNodedotjs } from 'react-icons/si'
import { FaMobileAlt, FaServer } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <SiReact />,
      title: 'React Development',
      description: 'Building responsive web applications with React and modern JavaScript, focused on clean, reusable components.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Design',
      description: 'Making sure sites look and work great on phones, tablets, and desktops using flexible, mobile-first layouts.'
    },
    {
      icon: <SiNodedotjs />,
      title: 'Backend Basics',
      description: 'Learning Node.js and building simple APIs to connect frontend applications with real data.'
    },
    {
      icon: <FaServer />,
      title: 'Full Stack Projects',
      description: 'Combining frontend and backend skills to build complete, working applications from start to finish.'
    },
  ]

  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I Build
        </motion.h2>

        <motion.p
          className="text-center text-gray-500 text-base max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Learning and building web applications with React and modern JavaScript, from small components to full projects.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:border-blue-600 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center border border-gray-300 rounded-full text-2xl text-gray-900 group-hover:border-blue-600 transition-all">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services