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
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`relative mb-16 md:mb-20 md:w-1/2 ${
                i % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'
              } pl-12 md:pl-0`}
            >
              <div
                className={`absolute top-6 w-3 h-3 rounded-full bg-accent-blue ring-4 ring-accent-blue/20 ${
                  i % 2 === 0
                    ? 'left-[10px] md:left-auto md:-right-[7px]'
                    : 'left-[10px] md:-left-[7px]'
                }`}
              />

              <div className="glass glass-hover rounded-3xl p-6 md:p-8 group">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      {job.company}
                    </h3>
                    <p className="text-accent-cyan text-sm mt-1">{job.role}</p>
                  </div>
                  <span className="text-xs text-white/40 text-right whitespace-nowrap">
                    {job.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 mb-5">
                  {job.stack.map((t) => (
                    <span key={t} className="pill">{t}</span>
                  ))}
                </div>

                <ul className="space-y-3">
                  {job.highlights.map((h, idx) => (
                    <li key={idx} className="text-sm text-white/70 leading-relaxed flex gap-3">
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
