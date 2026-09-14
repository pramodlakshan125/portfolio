import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="bg-gray-50 relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-600">Me</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative z-10">
            <motion.p
              className="font-sans text-lg md:text-xl leading-relaxed text-gray-600 mb-8 text-center md:text-center font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Senior Frontend Engineer with <strong className="text-gray-900 font-semibold">6+ years</strong> of hands-on experience specializing in <strong className="text-gray-900 font-semibold">React</strong>, <strong className="text-gray-900 font-semibold">Next.js</strong>, and <strong className="text-gray-900 font-semibold">TypeScript</strong> and <strong className="text-gray-900 font-semibold">Node.js</strong> and <strong className="text-gray-900 font-semibold">Python</strong> for backend integration and end-to-end solution delivery.
            </motion.p>
            <motion.p
              className="font-sans text-lg md:text-xl leading-relaxed text-gray-600 mb-8 text-center font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Successfully led frontend development in both <strong className="text-gray-900 font-semibold">startup</strong> and <strong className="text-gray-900 font-semibold">enterprise</strong> settings, driving the creation of robust UI systems and high-impact applications across multiple industries.
            </motion.p>
            <motion.p
              className="font-sans text-lg md:text-xl leading-relaxed text-gray-600 mb-8 text-center font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Highly skilled in modern frontend architectures, state management (Context API, Redux, Zustand), TypeScript, and advanced API integrations. Experienced in integrating and collaborating with backend systems and familiar with CI/CD workflows for streamlined deployments.
            </motion.p>
            <motion.p
              className="font-sans text-lg md:text-xl leading-relaxed text-gray-600 text-center font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Track record of leading development teams in Agile environments, architecting enterprise-grade UI solutions, and delivering applications that prioritize performance, accessibility, and outstanding user experience.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About