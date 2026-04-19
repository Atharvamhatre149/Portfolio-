import { useEffect, useRef, useState } from 'react'

export default function useInView(options = { threshold: 0, rootMargin: '200px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options,
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, inView]
}
