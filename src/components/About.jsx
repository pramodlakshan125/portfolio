import { motion } from 'framer-motion'
import { FaCode, FaDownload, FaPaperPlane } from 'react-icons/fa'
import pramodImg from '../assets/pramod.jpg'

const About = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-slate-900/50 relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Bio Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <motion.p
              className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200 font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I&apos;m <strong className="text-gray-900 dark:text-white font-bold">Pramod Lakshan</strong>, a <strong className="text-blue-600 dark:text-blue-400 font-semibold">Software Developer</strong> passionate about creating modern, functional, and user-focused digital experiences.
            </motion.p>

            <motion.p
              className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I enjoy building applications from idea to implementation, with experience in <strong className="text-gray-900 dark:text-white font-semibold">mobile development</strong>, <strong className="text-gray-900 dark:text-white font-semibold">web development</strong>, <strong className="text-gray-900 dark:text-white font-semibold">backend technologies</strong>, and <strong className="text-gray-900 dark:text-white font-semibold">databases</strong>. I focus on writing clean solutions and continuously improving my skills by working on practical projects.
            </motion.p>

            <motion.p
              className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My interests include mobile applications, web applications, software engineering, and building technology that solves real-world problems.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="/Pramod_Lakshan_CV.pdf"
                download="Pramod_Lakshan_CV.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FaDownload className="text-xs" />
                <span>Download CV</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-500 font-semibold text-sm shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FaPaperPlane className="text-xs" />
                <span>Contact Me</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Professional Photo Presentation */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative group max-w-[320px] sm:max-w-[340px] w-full mx-auto">
              {/* Subtle ambient gradient glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-indigo-500 to-blue-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"></div>

              {/* Offset accent border */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-2 border-blue-500/30 dark:border-blue-400/30 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>

              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border-2 border-white dark:border-slate-700 shadow-2xl aspect-square">
                <img
                  src={pramodImg}
                  alt="Pramod Lakshan"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating Experience / Role Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-gray-200 dark:border-slate-700 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-lg font-bold">
                  <FaCode />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Focused On</p>
                  <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Practical Impact</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About