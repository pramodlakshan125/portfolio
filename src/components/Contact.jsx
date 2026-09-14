import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const socialLinks = [
    { href: '#', label: 'LinkedIn', icon: <FaLinkedin /> },
    { href: '#', label: 'GitHub', icon: <FaGithub /> },
    { href: 'mailto:your-email@example.com', label: 'Email', icon: <FaEnvelope /> },
  ]

  return (
    <section id="contact" className="bg-white relative pt-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-8 w-full">
        <motion.h2
          className="text-4xl font-bold text-center mb-0 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact <span className="text-blue-600">Me</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-500 text-base max-w-xl mx-auto mt-4 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Feel free to reach out with any questions, project inquiries, or just to say hello. I'm always open to discussing new opportunities and ideas.
        </motion.p>

        <motion.div
          className="max-w-3xl mx-auto mb-16 bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 ml-2">Send a Message</h3>

          <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-200 rounded-full px-7 py-4 text-gray-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-200 rounded-full px-7 py-4 text-gray-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-200 rounded-full px-7 py-4 text-gray-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-200 rounded-3xl px-7 py-5 text-gray-900 text-sm resize-y min-h-[160px] focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            ></textarea>

            <motion.button
              type="submit"
              className="self-start bg-gray-50 text-gray-500 border border-gray-200 rounded-full px-10 py-4 text-sm font-semibold flex items-center gap-3 hover:bg-white hover:text-gray-900 hover:border-blue-600 hover:shadow-md transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message <FaPaperPlane />
            </motion.button>
          </form>
        </motion.div>
      </div>

      <footer className="mt-auto py-3 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm m-0">© 2026 Pramod Lakshan. All rights reserved.</p>
          <div className="flex gap-4 items-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-900 text-lg hover:bg-blue-600 hover:text-white hover:border-transparent hover:-translate-y-0.5 transition-all"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact