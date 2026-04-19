import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RoundedBox, Edges, Float } from '@react-three/drei'

function SpinningCube() {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.4
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.3
  })
  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={ref}>
        <RoundedBox args={[1.8, 1.8, 1.8]} radius={0.15} smoothness={4}>
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0.9}
            roughness={0.15}
            emissive="#0a84ff"
            emissiveIntensity={0.05}
          />
          <Edges threshold={15} color="#0a84ff" />
        </RoundedBox>
      </group>
    </Float>
  )
}

export default function Cube({ active = true }) {
  return (
    <Canvas
      camera={{ position: [3, 2, 4], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      frameloop={active ? 'always' : 'never'}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#0a84ff" />
      <pointLight position={[-5, -3, -2]} intensity={0.8} color="#bf5af2" />
      <SpinningCube />
    </Canvas>
  )
}
