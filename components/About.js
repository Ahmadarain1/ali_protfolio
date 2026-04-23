'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Learn More</span>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mt-2 mb-6">
              Who Am I
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate animator and creative director dedicated to crafting exceptional motion graphics and game animations
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image/Visual Content - Left Side */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 relative group"
            >
              {/* Background Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Image Container */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/20"
                whileHover={{ scale: 1.02, borderColor: 'var(--primary)' }}
              >
                <Image
                  src="/headshot.jpg"
                  alt="Ali Arshad - Professional Animator"
                  width={900}
                  height={1200}
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 border-2 border-accent/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            {/* Text Content - Right Side */}
            <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Creative Animation Specialist</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m a creative and detail-oriented Animator with extensive hands-on experience in Spine 2D animation and After Effects. I specialize in creating professional-grade game animations and character designs that bring stories to life with smooth, engaging motion.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Diverse Experience</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With extensive experience across both studio and freelance environments, I&apos;ve worked on diverse projects ranging from game character animations to interactive promotional content. My expertise spans character animation, background animation, UI/UX animation, and specialized Spine 2D rig creation.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Storytelling Through Motion</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m passionate about storytelling through motion, ensuring every frame serves a purpose. Whether it&apos;s crafting smooth transitions, complex character interactions, or polished visual effects, I approach each project with dedication and creativity.
                </p>
              </div>

              {/* Key Highlights */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <p className="text-3xl font-bold text-primary mb-2">5+</p>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <p className="text-3xl font-bold text-primary mb-2">600+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <p className="text-3xl font-bold text-primary mb-2">100+</p>
                  <p className="text-sm text-muted-foreground">Global Clients</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
