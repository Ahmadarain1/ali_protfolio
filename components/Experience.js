'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const experiences = [
    {
      title: 'Spine 2D Animator',
      company: 'iGaming Studio',
      location: 'Remote, UAE',
      period: 'May 2025 - Jul 2025',
      description:
        'Focused on creating high-quality game-ready animations tailored for slot and interactive gaming environments. Specialized in optimizing animations for game performance.',
      highlights: [
        'Developed 50+ character animations',
        'Optimized animations for game-ready assets',
        'Collaborated with game developers',
        'Ensured consistency in animation style',
      ],
    },
    {
      title: 'Animator (Spine 2D & Freelance)',
      company: 'Freelance & iGaming Studios',
      location: 'Remote',
      period: 'Feb 2022 - Present',
      description:
        'Delivering professional animation services to global clients with specialization in game animation and character design for various platforms.',
      highlights: [
        'Managed multiple client projects simultaneously',
        'Delivered high-quality animations within tight deadlines',
        'Maintained consistency and quality across all projects',
        'Built strong client relationships and repeat business',
      ],
    },
    {
      title: 'After Effects Animator',
      company: 'Animate Media Studio',
      location: 'Remote, CA',
      period: 'Sep 2019 - Feb 2022',
      description:
        'Created engaging motion graphics and animations for promotional videos and marketing content, focusing on gameplay mechanics visualization.',
      highlights: [
        'Produced 100+ animations and motion graphics',
        'Designed visual effects and compositing',
        'Maintained quality standards in post-production',
        'Collaborated with creative teams',
      ],
    },
    {
      title: 'Spine 2D Animator',
      company: 'Series Entertainment',
      location: 'Remote, USA',
      period: 'Feb 2026 - Apr 2026',
      description:
        'Created building animations for interactive games and immersive environments, developing character rigs and environment animations.',
      highlights: [
        'Developed environmental animation systems',
        'Designed character rigging and skeletal structures',
        'Optimized visual quality for platforms',
        'Maintained technical animation standards',
      ],
    },
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background-secondary relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
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
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Career Journey</span>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mt-2 mb-6">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of my growth and achievements in animation and creative direction
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Animated */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-transparent">
              <motion.div
                className="absolute inset-x-0 top-0 w-1 bg-gradient-to-b from-primary to-accent"
                initial={{ height: '0%' }}
                animate={inView ? { height: '100%' } : { height: '0%' }}
                transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
              />
            </div>

            {/* Experience Items */}
            <div className="space-y-12 lg:space-y-20">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`lg:flex lg:${
                    index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                  } items-stretch gap-8 lg:gap-12`}
                >
                  {/* Timeline Dot - Enhanced */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background-secondary shadow-lg flex-shrink-0 relative">
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-background-secondary"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>

                  {/* Card - Enhanced */}
                  <motion.div
                    className="lg:w-1/2 group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl p-8"
                    whileHover={{ y: -8 }}
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                    {/* Content */}
                    <div className="relative">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold mb-3">
                          {exp.company}
                        </p>
                      </div>

                      {/* Metadata */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          📍 {exp.location}
                        </span>
                        <span className="flex items-center gap-2">
                          📅 {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground mb-3">Key Achievements:</p>
                        {exp.highlights.map((highlight, hIndex) => (
                          <motion.div
                            key={hIndex}
                            className="flex items-start gap-3 text-foreground/75"
                            whileHover={{ x: 8 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                            <p className="text-sm leading-relaxed">{highlight}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="mb-12 text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">Education</h3>
            </div>
            <motion.div 
              className="group relative overflow-hidden p-8 bg-gradient-to-br from-primary/10 via-card to-accent/5 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      Master&apos;s Degree in Sociology
                    </h4>
                    <p className="text-lg text-primary font-semibold">
                      University of Sargodha Main Campus
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold">2021</span>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Completed advanced studies in sociology with focus on social dynamics and communication patterns.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
