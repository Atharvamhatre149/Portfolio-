import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Three.js, and obsession for detail.</p>
        <div className="flex items-center gap-6">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="hover:text-white transition">LeetCode</a>
        </div>
      </div>
    </footer>
  )
}
