'use client'

import Image from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const GALLERY_COUNT = 69
const AUTOPLAY_MS = 7000

function ChevronLeft({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

const Gallery = () => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: false, threshold: 0.12 })
  const trackRef = useRef(null)
  const indexRef = useRef(0)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    indexRef.current = index
  }, [index])

  const galleryItems = useMemo(
    () =>
      Array.from({ length: GALLERY_COUNT }, (_, i) => ({
        id: i + 1,
        src: `/gallery/${String(i + 1).padStart(3, '0')}.png`,
        title: `Animation ${i + 1}`,
      })),
    [],
  )

  const syncIndexFromScroll = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const w = el.clientWidth
    if (!w) return
    const next = Math.round(el.scrollLeft / w)
    if (next >= 0 && next < GALLERY_COUNT) {
      setIndex((prev) => (prev !== next ? next : prev))
    }
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', syncIndexFromScroll, { passive: true })
    return () => el.removeEventListener('scroll', syncIndexFromScroll)
  }, [syncIndexFromScroll])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth
      if (!w) return
      el.scrollTo({ left: indexRef.current * w, behavior: 'auto' })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const scrollBySlide = useCallback((delta) => {
    const el = trackRef.current
    if (!el || !el.clientWidth) return
    const w = el.clientWidth
    const current = Math.round(el.scrollLeft / w)
    const next = (current + delta + GALLERY_COUNT) % GALLERY_COUNT
    el.scrollTo({ left: next * w, behavior: 'smooth' })
  }, [])

  const goToSlide = useCallback((i) => {
    const el = trackRef.current
    if (!el || !el.clientWidth) return
    const clamped = Math.max(0, Math.min(GALLERY_COUNT - 1, i))
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (!inView || paused) return
    const id = setInterval(() => scrollBySlide(1), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [inView, paused, scrollBySlide])

  useEffect(() => {
    if (!inView) return
    const onKey = (e) => {
      const t = document.activeElement?.tagName
      if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        scrollBySlide(-1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        scrollBySlide(1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [inView, scrollBySlide])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  }

  const progress = ((index + 1) / GALLERY_COUNT) * 100

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background-secondary relative overflow-hidden"
    >
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
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={itemVariants} className="mb-12 sm:mb-16 text-center">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Creative Showcase</span>
            <h2 className="text-5xl sm:text-6xl font-bold text-foreground mt-2 mb-6">Animation Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated collection of animated characters and designs. Swipe or use the arrows to explore each piece.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative mx-auto max-w-5xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="group relative rounded-3xl border border-border/60 bg-card/40 shadow-2xl shadow-primary/5 backdrop-blur-sm overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
              tabIndex={0}
              role="region"
              aria-roledescription="carousel"
              aria-label="Animation gallery carousel"
            >
              <div
                ref={trackRef}
                className="flex h-[min(78vh,720px)] sm:h-[min(72vh,680px)] overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {galleryItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative min-w-full h-full snap-center snap-always shrink-0 flex items-center justify-center bg-linear-to-b from-muted/25 via-background to-muted/20"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={item.title}
                  >
                    <div className="relative h-full w-full p-4 sm:p-8">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, min(90vw, 1024px)"
                        className="object-contain drop-shadow-lg select-none"
                        priority={item.id <= 2}
                        draggable={false}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-background/80 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background/90 via-background/40 to-transparent" />

              <button
                type="button"
                onClick={() => scrollBySlide(-1)}
                className="pointer-events-auto absolute left-2 sm:left-4 top-1/2 z-20 -translate-y-1/2 flex size-11 sm:size-12 items-center justify-center rounded-full border border-border/80 bg-background/85 text-foreground shadow-lg backdrop-blur-md transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-5 sm:size-6" />
              </button>
              <button
                type="button"
                onClick={() => scrollBySlide(1)}
                className="pointer-events-auto absolute right-2 sm:right-4 top-1/2 z-20 -translate-y-1/2 flex size-11 sm:size-12 items-center justify-center rounded-full border border-border/80 bg-background/85 text-foreground shadow-lg backdrop-blur-md transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Next slide"
              >
                <ChevronRight className="size-5 sm:size-6" />
              </button>
            </div>

            <div className="mt-6 sm:mt-8 space-y-3 px-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
                <span className="tabular-nums font-medium text-foreground/80">
                  {index + 1} <span className="text-muted-foreground">/</span> {GALLERY_COUNT}
                </span>
                <span className="truncate text-center sm:text-right sm:max-w-[70%]">{galleryItems[index].title}</span>
              </div>
              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
                role="progressbar"
                aria-valuenow={index + 1}
                aria-valuemin={1}
                aria-valuemax={GALLERY_COUNT}
                aria-label="Gallery progress"
              >
                <motion.div
                  className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                  initial={false}
                  animate={{ width: `${progress}%` }}
                  transition={{ type: 'spring', stiffness: 200, damping: 28 }}
                />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => goToSlide(0)}
                  className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur transition hover:border-primary/40 hover:text-foreground"
                >
                  Start
                </button>
                <button
                  type="button"
                  onClick={() => goToSlide(GALLERY_COUNT - 1)}
                  className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur transition hover:border-primary/40 hover:text-foreground"
                >
                  End
                </button>
                <span className="hidden sm:inline text-xs text-muted-foreground">Use arrow keys when this section is in view</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
