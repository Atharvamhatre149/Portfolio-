import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float, Stars } from '@react-three/drei'

function DistortedSphere() {
  const mesh = useRef()
  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.15
    mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
  })

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={mesh} args={[1.6, 64, 64]}>
        <MeshDistortMaterial
          color="#0a84ff"
          attach="material"
          distort={0.45}
          speed={1.6}
          roughness={0.2}
          metalness={0.85}
          emissive="#1a0a3d"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  )
}

function GradientRing() {
  const ring = useRef()
  useFrame((state) => {
    if (!ring.current) return
    ring.current.rotation.z = state.clock.getElapsedTime() * 0.2
  })
  return (
    <mesh ref={ring} position={[0, 0, -1]}>
      <torusGeometry args={[2.6, 0.015, 8, 120]} />
      <meshBasicMaterial color="#bf5af2" transparent opacity={0.35} />
    </mesh>
  )
}

export default function Orb({ active = true }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      frameloop={active ? 'always' : 'never'}
    >
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000', 5, 12]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#0a84ff" />
      <pointLight position={[-5, -3, 3]} intensity={1} color="#bf5af2" />
      <DistortedSphere />
      <GradientRing />
      <Stars radius={30} depth={40} count={600} factor={3} saturation={0} fade speed={0.4} />
    </Canvas>
  )
}
