'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Gallery = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [galleryItems] = useState([
    { id: 1, src: '/gallery/banana.png', title: 'Banana Character', type: 'png' },
    { id: 2, src: '/gallery/excited.gif', title: 'Excited Musician', type: 'gif' },
  ])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const galleryItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background-secondary relative overflow-hidden"
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

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-20 text-center">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Creative Showcase</span>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mt-2 mb-6">
              Animation Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated collection of my animated characters and creative designs. Explore the motion and artistry behind each piece.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                variants={galleryItemVariants}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
                whileHover={{ y: -8 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square bg-background flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-6 hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Overlay Info */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">
                    {item.type === 'gif' ? 'Animated GIF' : 'Character Design'}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
