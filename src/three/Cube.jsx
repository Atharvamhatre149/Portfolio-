import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Icosahedron } from '@react-three/drei'

function Crystal() {
  const solid = useRef()
  const wire = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (solid.current) {
      solid.current.rotation.y = t * 0.35
      solid.current.rotation.x = Math.sin(t * 0.4) * 0.3
    }
    if (wire.current) {
      wire.current.rotation.y = -t * 0.25
      wire.current.rotation.x = Math.cos(t * 0.3) * 0.2
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      {/* Outer glowing wireframe */}
      <Icosahedron ref={wire} args={[1.75, 1]}>
        <meshBasicMaterial color="#64d2ff" wireframe transparent opacity={0.55} />
      </Icosahedron>

      {/* Inner solid metallic core */}
      <Icosahedron ref={solid} args={[1.25, 1]}>
        <meshStandardMaterial
          color="#0a84ff"
          metalness={0.85}
          roughness={0.2}
          emissive="#0a84ff"
          emissiveIntensity={0.35}
        />
      </Icosahedron>

      {/* Innermost purple glow */}
      <Icosahedron args={[0.7, 0]}>
        <meshStandardMaterial
          color="#bf5af2"
          emissive="#bf5af2"
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </Icosahedron>
    </Float>
  )
}

export default function Cube({ active = true }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
      frameloop={active ? 'always' : 'never'}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#0a84ff" />
      <pointLight position={[-5, -3, -2]} intensity={1.5} color="#bf5af2" />
      <pointLight position={[0, 0, 4]} intensity={0.8} color="#64d2ff" />
      <Crystal />
    </Canvas>
  )
}
