import { motion } from 'framer-motion'
import TagCloud from '../three/TagCloud'
import { skillCategories, techCloud } from '../data/skills'
import useInView from '../hooks/useInView'

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0, rootMargin: '200px' })
  return (
    <section id="skills" ref={ref} className="section">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
            Toolbox
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight gradient-text">
            Stack I work with.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[440px] md:h-[520px] order-2 lg:order-1 overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-gradient-to-br from-accent-blue/25 to-accent-purple/25 blur-3xl pointer-events-none" />
            <TagCloud words={techCloud} active={inView} />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 order-1 lg:order-2">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass glass-hover rounded-2xl p-5"
              >
                <h3 className="text-sm font-semibold text-white/90 mb-3">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="pill">{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
