import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiGithub, SiFigma, SiVite
} from 'react-icons/si'
import { FaHtml5, FaCss3Alt, FaMobileAlt, FaDatabase, FaServer, FaCode, FaComments, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Technical')

  const tabs = [
    { name: 'Technical', icon: <FaCode /> },
    { name: 'Soft Skills', icon: <FaUsers /> },
    { name: 'Tools', icon: <FaCode /> },
  ]

  const technicalSkills = [
    {
      title: 'Frontend',
      icon: <FaCode />,
      skills: [
        { name: 'React', icon: <SiReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ]
    },
    {
      title: 'Backend',
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'REST APIs', icon: <FaServer /> },
      ]
    },
    {
      title: 'Database',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ]
    },
  ]

  const softSkills = [
    { title: 'Communication', icon: <FaComments />, description: 'Explaining ideas clearly, whether in writing, code comments, or working with a team.' },
    { title: 'Problem Solving', icon: <FaLightbulb />, description: 'Breaking down tricky bugs and challenges into smaller, solvable pieces.' },
    { title: 'Fast Learner', icon: <FaRocket />, description: 'Picking up new tools, frameworks, and concepts quickly through practice and research.' },
    { title: 'Team Collaboration', icon: <FaUsers />, description: 'Working well with others, giving and receiving feedback, and staying open to new ideas.' },
  ]

  const tools = [
    {
      title: 'Development Tools',
      icon: <FaCode />,
      tools: [
        { name: 'VS Code', icon: <FaCode /> },
        { name: 'Git', icon: <SiGit /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Vite', icon: <SiVite /> },
      ]
    },
    {
      title: 'Design Tools',
      icon: <FaCode />,
      tools: [
        { name: 'Figma', icon: <SiFigma /> },
      ]
    },
  ]

  const renderCategoryGrid = (categories) =>
    categories.map((category, index) => (
      <motion.div
        key={category.title}
        className="bg-white dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-md transition-all"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
      >
        <div className="flex flex-col items-center gap-3 mb-5 text-center">
          <div className="w-14 h-14 flex items-center justify-center border-2 border-gray-300 dark:border-slate-600 rounded-full text-xl text-gray-900 dark:text-blue-400">
            {category.icon}
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">{category.title}</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {(category.skills || category.tools).map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-50/50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:border-blue-600 dark:hover:border-blue-400 hover:-translate-y-0.5 transition-all"
            >
              <span className="text-base">{item.icon}</span>
              <span className="truncate">{item.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    ))

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills &amp; Expertise
        </motion.h2>

        <motion.p
          className="text-center text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technical and personal skills I&apos;m building through learning and hands-on practice.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-1 mb-10 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full p-1.5 w-fit mx-auto shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.name
                  ? 'bg-gray-900 text-white dark:bg-blue-600'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'Technical' && (
            <motion.div
              key="technical"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderCategoryGrid(technicalSkills)}
            </motion.div>
          )}

          {activeTab === 'Soft Skills' && (
            <motion.div
              key="soft-skills"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="bg-white dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 rounded-2xl p-6 text-center shadow-sm hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center border-2 border-gray-300 dark:border-slate-600 rounded-full text-xl text-gray-900 dark:text-blue-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'Tools' && (
            <motion.div
              key="tools"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderCategoryGrid(tools)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills