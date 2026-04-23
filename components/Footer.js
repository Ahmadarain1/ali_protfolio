'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kdtqoog/', icon: '💼' },
    { name: 'Portfolio', url: 'https://bit.ly/kdtQoog', icon: '🌐' },
    { name: 'Email', url: 'mailto:aliarshad.0032@gmail.com', icon: '📧' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16 md:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4">Ali Arshad</h3>
              <p className="opacity-90 leading-relaxed">
                Professional Spine 2D Animator & Creative Director specializing in game animation and character design.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <p className="opacity-80 mb-4">
                📧 aliarshad.0032@gmail.com
              </p>
              <p className="opacity-80 mb-4">
                📱 +92 3034591041
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center text-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-primary-foreground/20 mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="text-center opacity-80"
          >
            <p>
              © {currentYear} Ali Arshad. All rights reserved. | Crafted with care using Next.js & Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
