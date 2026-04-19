import { motion } from 'framer-motion'
import Cube from '../three/Cube'
import { profile } from '../data/profile'
import useInView from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0, rootMargin: '200px' })
  return (
    <section id="about" ref={ref} className="section relative noise">
      <div className="container-xl grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
            About
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 gradient-text">
            Engineer. Builder.<br />Problem solver.
          </h2>
          <p className="text-white/60 leading-relaxed text-lg mb-8">
            {profile.summary}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {profile.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass p-5 rounded-2xl"
              >
                <div className="text-3xl font-bold accent-text">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-white/50 mt-1">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="relative h-[420px] md:h-[520px] overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-gradient-to-br from-accent-blue/25 to-accent-purple/25 blur-3xl pointer-events-none" />
          <Cube active={inView} />
        </motion.div>
      </div>
    </section>
  )
}
