import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const links = [
  { label: 'Email', href: profile.socials.email, hint: profile.email },
  { label: 'GitHub', href: profile.socials.github, hint: '@Atharvamhatre149' },
  { label: 'LinkedIn', href: profile.socials.linkedin, hint: 'Atharva Mhatre' },
  { label: 'LeetCode', href: profile.socials.leetcode, hint: '1870+ rating' },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-xl max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          <span className="gradient-text">Let's build</span>
          <br />
          <span className="accent-text">something great.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-lg mb-12 max-w-xl mx-auto"
        >
          I'm open to opportunities, collaborations, or just a good engineering
          conversation. Reach out on any of these.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-2xl p-5 text-left flex items-center justify-between group"
            >
              <div>
                <div className="text-sm font-medium">{l.label}</div>
                <div className="text-xs text-white/50 mt-0.5">{l.hint}</div>
              </div>
              <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
