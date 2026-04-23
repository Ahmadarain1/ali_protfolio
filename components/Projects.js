'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const projects = [
    {
      id: 1,
      title: 'Interactive Game Animations',
      company: 'iGaming Studio',
      category: 'Game Animation',
      period: 'May 2025 - Jul 2025',
      description:
        'Developed high-quality Spine 2D animations for slot games and interactive gaming platforms. Created optimized assets for multiple game mechanics.',
      skills: ['Spine 2D', 'Game Animation', 'Optimization', 'Asset Creation'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Character Animation Suite',
      company: 'Series Entertainment',
      category: 'Character Design',
      period: 'Feb 2026 - Apr 2026',
      description:
        'Created comprehensive character animation sets including idle, walk, run, and interaction animations. Designed skeletal structures and rigging systems.',
      skills: ['Character Rigging', 'Animation Sets', 'Spine 2D', 'Optimization'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      title: 'After Effects Motion Graphics',
      company: 'Animate Media Studio',
      category: 'Motion Graphics',
      period: 'Sep 2019 - Feb 2022',
      description:
        'Produced 100+ animations and motion graphics for promotional videos, game trailers, and marketing content with professional color grading and compositing.',
      skills: ['After Effects', 'Motion Graphics', 'Compositing', 'VFX'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 4,
      title: 'Freelance Animation Services',
      company: 'Freelance Portfolio',
      category: 'Various',
      period: 'Feb 2022 - Present',
      description:
        'Delivered custom animation solutions to clients worldwide, ranging from game animations to promotional content, maintaining high quality standards.',
      skills: ['Spine 2D', 'After Effects', 'Custom Projects', 'Client Management'],
      color: 'from-green-500 to-green-600',
    },
  ]

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

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
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
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Portfolio</span>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mt-2 mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my best work across game animation, character design, and motion graphics
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
                whileHover={{ y: -12 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />

                {/* Animated Background Orb */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                  animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Content */}
                <div className="relative p-8">
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Category Badge */}
                    <motion.div
                      className="inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="px-4 py-2 bg-primary/15 text-primary rounded-full text-xs font-semibold tracking-wider uppercase">
                        {project.category}
                      </span>
                    </motion.div>
                    <p className="text-xs text-muted-foreground font-medium">
                      {project.period}
                    </p>
                  </div>

                  {/* Title and Company */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-primary font-semibold mb-6">
                    @ {project.company}
                  </p>

                  {/* Description */}
                  <p className="text-foreground/75 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-secondary/20 text-secondary-foreground text-xs rounded-full font-medium border border-secondary/30"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'var(--secondary)',
                          borderColor: 'var(--secondary)',
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, backgroundColor: 'var(--primary)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Project
                  </motion.button>
                </div>

                {/* Hover Border Animation */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-lg text-foreground/70 mb-6">
              Want to see more of my work or discuss a project?
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-lg hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
