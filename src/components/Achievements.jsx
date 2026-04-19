import { motion } from 'framer-motion'
import { achievements } from '../data/achievements'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
            Milestones
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight gradient-text">
            A few proud moments.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="glass glass-hover rounded-2xl p-6 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-accent-blue/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{a.title}</h3>
                <p className="text-xs accent-text mb-3 font-medium">{a.year}</p>
                <p className="text-sm text-white/60 leading-relaxed">
                  {a.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
