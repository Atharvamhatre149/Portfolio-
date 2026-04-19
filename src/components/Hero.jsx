import { motion } from 'framer-motion'
import Orb from '../three/Orb'
import { profile } from '../data/profile'
import useInView from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0, rootMargin: '100px' })
  return (
    <section id="top" ref={ref} className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Orb active={inView} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/50 mb-6"
        >
          {profile.location} · {profile.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
        >
          <span className="gradient-text">Atharva</span>
          <br />
          <span className="accent-text">Mhatre.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed"
        >
          {profile.tagline} Building distributed systems that handle{' '}
          <span className="text-white font-medium">10M+ requests a day</span>{' '}
          at Media.net.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform duration-300"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full glass glass-hover text-sm font-medium"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
