'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const skillCategories = [
    {
      title: 'Animation Tools',
      skills: [
        'Spine 2D Animation',
        'After Effects',
        'Character Animation',
        'Background Animation',
        'UI Animation',
        'Motion Graphics',
      ],
    },
    {
      title: 'Technical Skills',
      skills: [
        'Skeleton Rigging',
        'Sprite Animation',
        'Game-Ready Assets',
        'Timeline Mastery',
        'Asset Optimization',
        'Animation Optimization',
      ],
    },
    {
      title: 'Creative Skills',
      skills: [
        'Character Design',
        'Visual Effects',
        'Storytelling',
        'Color Grading',
        'Composition',
        'Creative Direction',
      ],
    },
  ]

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Urdu', level: 'Native' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background-secondary relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-20 text-center">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Expertise</span>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mt-2 mb-6">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive set of technical and creative skills developed through years of professional experience
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="group relative overflow-hidden p-10 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ y: -10 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                {/* Animated Background Orb */}
                <motion.div
                  className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="relative">
                  <h3 className="text-2xl font-bold text-foreground mb-8 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        className="flex items-center gap-4"
                        whileHover={{ x: 8 }}
                      >
                        <motion.div 
                          className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.1 }}
                        />
                        <span className="text-foreground/85 font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-foreground">Languages</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  variants={skillVariants}
                  className="group relative overflow-hidden p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {language.name}
                    </span>
                    <motion.span 
                      className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-bold border border-primary/30"
                      whileHover={{ scale: 1.1 }}
                    >
                      {language.level}
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-foreground">Certifications</h3>
            </div>
            <motion.div
              variants={skillVariants}
              className="group relative overflow-hidden p-10 bg-gradient-to-br from-primary/10 via-card to-accent/10 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Certified Animator
                  </h4>
                  <p className="text-primary font-semibold mb-2">
                    Arfa Karim Tower Lahore
                  </p>
                  <p className="text-foreground/70">
                    2019
                  </p>
                </div>
                <p className="text-foreground/75 leading-relaxed max-w-xs">
                  Certified in professional animation principles, techniques, and software expertise
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
