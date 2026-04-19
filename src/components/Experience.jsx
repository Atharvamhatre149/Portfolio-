import { motion } from 'framer-motion'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
            Experience
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight gradient-text">
            Where I've built things.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`relative mb-8 md:mb-20 md:w-1/2 ${
                i % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'
              }`}
            >
              {/* Desktop timeline dot */}
              <div
                className={`hidden md:block absolute top-6 w-3 h-3 rounded-full bg-accent-blue ring-4 ring-accent-blue/20 ${
                  i % 2 === 0 ? '-right-[7px]' : '-left-[7px]'
                }`}
              />

              <div className="glass glass-hover rounded-2xl md:rounded-3xl p-5 md:p-8 group">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                      {job.company}
                    </h3>
                    <p className="text-accent-cyan text-sm mt-1">{job.role}</p>
                  </div>
                  <span className="text-xs text-white/40 sm:text-right whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3 mb-5">
                  {job.stack.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>

                <ul className="space-y-2.5">
                  {job.highlights.map((h, idx) => (
                    <li key={idx} className="text-sm text-white/70 leading-relaxed flex gap-2.5">
                      <span className="text-accent-blue mt-1.5 flex-shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
