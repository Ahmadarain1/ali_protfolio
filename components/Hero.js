'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-5 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ x: [0, 60, 0], y: [0, 60, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-5 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{ x: [0, -60, 0], y: [0, -60, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Name */}
            <motion.div variants={itemVariants} className="mb-2">
              <p className="text-primary text-lg font-semibold tracking-widest uppercase">Welcome to my portfolio</p>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-6xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Ali <span className="text-primary">Arshad</span>
              </h1>
            </motion.div>

            {/* Subtitle/Role */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-3xl text-muted-foreground font-light leading-relaxed">
                Spine 2D Animator & Creative Director
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground mb-12 leading-relaxed max-w-lg"
            >
              I craft professional game animations and character designs with expertise in Spine 2D, After Effects, and creative direction. With years of experience in animation and game development, I bring your vision to life with smooth, engaging animations.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mb-12 py-8 border-y border-border"
            >
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">600+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Global Clients</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#projects')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(55, 71, 153, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image Side */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center items-center"
          >
            {/* Animated Background Frame */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-2xl"
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Image Container */}
            <motion.div
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-primary/20 aspect-square max-w-sm w-full"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/profile.jpg"
                alt="Ali Arshad - Spine 2D Animator"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 border-2 border-primary/30 rounded-full"
              animate={{ 
                x: [0, 30, 0],
                y: [0, 30, 0],
                rotate: [0, 360]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-32 h-32 border-2 border-accent/30 rounded-full"
              animate={{ 
                x: [0, -20, 0],
                y: [0, -20, 0],
                rotate: [360, 0]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <p className="text-xs text-muted-foreground mb-3 text-center">Scroll to explore more</p>
          <svg
            className="w-5 h-5 mx-auto text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
