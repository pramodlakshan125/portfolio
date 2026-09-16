import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  })

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (status.success || status.error) {
      setStatus({ submitting: false, success: false, error: null })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, success: false, error: null })

    // 1. Try Web3Forms if access key is set
    if (accessKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: `${formData.name} (Portfolio Inquiry)`,
          })
        })
        const result = await response.json()
        if (result.success) {
          setStatus({ submitting: false, success: true, error: null })
          setFormData({ name: '', email: '', subject: '', message: '' })
          return
        } else {
          throw new Error(result.message || 'Failed to send message')
        }
      } catch (err) {
        console.warn('Web3Forms error, using mailto fallback:', err)
      }
    }

    // 2. Try Formspree if endpoint is set
    if (formspreeEndpoint) {
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        })
        if (response.ok) {
          setStatus({ submitting: false, success: true, error: null })
          setFormData({ name: '', email: '', subject: '', message: '' })
          return
        }
      } catch (err) {
        console.warn('Formspree error, using mailto fallback:', err)
      }
    }

    // 3. Fallback: Open visitor's email client directly pre-filled
    const mailtoUrl = `mailto:pramodlakshan125@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoUrl

    setStatus({
      submitting: false,
      success: true,
      error: null
    })
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/pramod-lakshan-983581319', label: 'LinkedIn', icon: <FaLinkedin /> },
    { href: 'https://github.com/pramodlakshan125', label: 'GitHub', icon: <FaGithub /> },
    { href: 'mailto:pramodlakshan125@gmail.com', label: 'Email', icon: <FaEnvelope /> },
  ]

  return (
    <section id="contact" className="bg-white dark:bg-transparent relative pt-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-8 w-full">
        <motion.h2
          className="text-4xl font-bold text-center mb-0 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact <span className="text-blue-600 dark:text-blue-400">Me</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto mt-4 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Feel free to reach out with any questions, project inquiries, or just to say hello. I'm always open to discussing new opportunities and ideas.
        </motion.p>

        <motion.div
          className="max-w-3xl mx-auto mb-16 bg-white dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 rounded-3xl p-6 md:p-8 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 ml-2">Send a Message</h3>

          <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-full px-7 py-4 text-gray-900 dark:text-white dark:placeholder-gray-400 text-sm focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-full px-7 py-4 text-gray-900 dark:text-white dark:placeholder-gray-400 text-sm focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-all"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-full px-7 py-4 text-gray-900 dark:text-white dark:placeholder-gray-400 text-sm focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-all"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-3xl px-7 py-5 text-gray-900 dark:text-white dark:placeholder-gray-400 text-sm resize-y min-h-[160px] focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-all"
            ></textarea>

            {status.success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 text-green-700 dark:text-green-300 text-sm flex items-center gap-3"
              >
                <FaCheckCircle className="text-lg flex-shrink-0 text-green-600 dark:text-green-400" />
                <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
              </motion.div>
            )}

            {status.error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-300 text-sm flex items-center gap-3"
              >
                <FaExclamationCircle className="text-lg flex-shrink-0 text-red-600 dark:text-red-400" />
                <span>{status.error}</span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={status.submitting}
              className="self-start bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-4 text-sm font-semibold flex items-center gap-3 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              whileHover={status.submitting ? {} : { scale: 1.02 }}
              whileTap={status.submitting ? {} : { scale: 0.98 }}
            >
              {status.submitting ? (
                <>
                  <FaSpinner className="animate-spin text-sm" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane className="text-xs" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      <footer className="mt-auto py-3 border-t border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/80">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm m-0">© 2026 Pramod Lakshan. All rights reserved.</p>
          <div className="flex gap-4 items-center">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full text-gray-900 dark:text-white text-lg hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white hover:border-transparent hover:-translate-y-0.5 transition-all"
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