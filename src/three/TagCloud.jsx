import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

function fibonacciSphere(n, radius = 2.2) {
  const points = []
  const phi = Math.PI * (Math.sqrt(5) - 1)
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = phi * i
    points.push([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius])
  }
  return points
}

function Cloud({ words }) {
  const group = useRef()
  const positions = useMemo(() => fibonacciSphere(words.length, 2.4), [words.length])

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.getElapsedTime() * 0.15
    group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.15
  })

  return (
    <group ref={group}>
      {words.map((word, i) => {
        const [x, y, z] = positions[i]
        return (
          <Text
            key={word}
            position={[x, y, z]}
            fontSize={0.24}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {word}
          </Text>
        )
      })}
    </group>
  )
}

export default function TagCloud({ words, active = true }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      frameloop={active ? 'always' : 'never'}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#0a84ff" />
      <Cloud words={words} />
    </Canvas>
  )
}
