'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import ParticleBackground from '@/components/custom/ParticleBackground'
import SkillsCube from '@/components/custom/SkillsCube'
import About from '@/components/custom/about'
import Projects from '@/components/custom/projects'
import Contact from '@/components/custom/contact'

export default function Home() {
  return (
    <div>
      <section className="h-screen relative">
        <Canvas className="absolute inset-0">
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls enableZoom={false} enablePan={false} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ParticleBackground />
            <SkillsCube />
          </Suspense>
        </Canvas>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Shubham Kushwah</h1>
            <p className="text-xl mb-8">Full Stack Developer</p>
          </div>
        </div>
      </section>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

