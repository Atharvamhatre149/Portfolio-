import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { projects } from '../data/projects'

function TiltCard({ project, index }) {
  const ref = useRef(null)
  const rafRef = useRef(0)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 })

  const handleMove = (e) => {
    if (!ref.current) return
    const clientX = e.clientX
    const clientY = e.clientY
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const r = ref.current.getBoundingClientRect()
      mx.set((clientX - r.left) / r.width - 0.5)
      my.set((clientY - r.top) / r.height - 0.5)
    })
  }
  const handleLeave = () => {
    cancelAnimationFrame(rafRef.current)
    mx.set(0); my.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        className="relative rounded-3xl overflow-hidden glass glass-hover p-8 md:p-10 h-full group"
      >
        <div
          className={`absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700`}
        />

        <div className="relative z-10 flex flex-col h-full" style={{ transform: 'translateZ(40px)' }}>
          <div className="flex items-start justify-between mb-8">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl font-bold shadow-lg shadow-black/40`}
            >
              {project.icon}
            </div>
            <span className="text-xs uppercase tracking-widest text-white/40">
              0{index + 1}
            </span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="text-sm accent-text mb-4 font-medium">{project.tagline}</p>
          <p className="text-white/60 leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-white/80 hover:text-white transition flex items-center gap-2"
            >
              GitHub <span aria-hidden>→</span>
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium accent-text hover:opacity-80"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight gradient-text">
            Things I've shipped.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <TiltCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Atharvamhatre149"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition"
          >
            View all repositories on GitHub
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
