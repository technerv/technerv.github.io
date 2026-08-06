import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Stars, Torus } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.x += (mouse.current.x * 0.5 - meshRef.current.position.x) * 0.05
      meshRef.current.position.y += (mouse.current.y * 0.3 - meshRef.current.position.y) * 0.05
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 128, 128]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function OrbitingTorus({
  radius,
  speed,
  color,
  mouse,
}: {
  radius: number
  speed: number
  color: string
  mouse: React.MutableRefObject<{ x: number; y: number }>
}) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.002 * speed
      groupRef.current.rotation.y += 0.003 * speed
      groupRef.current.position.x += (mouse.current.x * 0.3 - groupRef.current.position.x) * 0.02
      groupRef.current.position.y += (mouse.current.y * 0.2 - groupRef.current.position.y) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      <Torus args={[radius, 0.02, 16, 100]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.6} />
      </Torus>
    </group>
  )
}

function FloatingParticles({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 200

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005
      particlesRef.current.rotation.x += 0.0003
      particlesRef.current.position.x += (mouse.current.x * 0.2 - particlesRef.current.position.x) * 0.01
      particlesRef.current.position.y += (mouse.current.y * 0.1 - particlesRef.current.position.y) * 0.01
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#8b5cf6" transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

export function Scene3D() {
  const mouse = useRef({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
    mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
  }

  return (
    <div onMouseMove={handleMouseMove} className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[5, -5, -5]} intensity={0.5} color="#ec4899" />
        <AnimatedSphere mouse={mouse} />
        <OrbitingTorus radius={1.6} speed={1.2} color="#8b5cf6" mouse={mouse} />
        <OrbitingTorus radius={2.1} speed={-0.8} color="#06b6d4" mouse={mouse} />
        <OrbitingTorus radius={2.6} speed={0.5} color="#ec4899" mouse={mouse} />
        <FloatingParticles mouse={mouse} />
        <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  )
}
