'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 5000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'aliarshad.0032@gmail.com',
      href: 'mailto:aliarshad.0032@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+92 3034591041',
      href: 'tel:+923034591041',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Hafizabad, Punjab',
      href: '#',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-20 text-center">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Let&apos;s Work Together</span>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mt-2 mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel&apos;s reach out!
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                variants={itemVariants}
                className="group relative overflow-hidden p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                whileHover={{ y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                    {info.label}
                  </h3>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden p-10 md:p-14 bg-card rounded-3xl border border-border/50 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10" />
            
            <h3 className="text-3xl font-bold text-foreground mb-10">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Input */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all hover:border-border/80"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all hover:border-border/80"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              {/* Subject Input */}
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all hover:border-border/80"
                  placeholder="What is this about?"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-6 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all resize-none hover:border-border/80"
                  placeholder="Tell me more about your project or inquiry..."
                />
              </motion.div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4 md:p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl text-green-700 font-semibold"
                >
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4 md:p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 rounded-xl text-red-700 font-semibold"
                >
                  ✗ Failed to send message. Please try again or reach out directly.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-muted-foreground mb-8 text-lg">
              Or connect with me on social media
            </p>
            <div className="flex justify-center gap-6">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kdtqoog/', icon: '🔗' },
                { name: 'Portfolio', url: 'https://bit.ly/kdtQoog', icon: '🌐' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 hover:border-primary/60 flex items-center justify-center text-3xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  whileTap={{ scale: 0.92 }}
                  title={social.name}
                >
                  <span className="group-hover:scale-125 transition-transform duration-300">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
