'use client'


import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

const skills = ['React', 'Next.js','TypeScript', 'Node.js', 'CSS']

export default function SkillsCube() {
  const cubeRef = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    cubeRef.current.rotation.x += delta * 0.2
    cubeRef.current.rotation.y += delta * 0.3
  })

  return (
    <group ref={cubeRef}>
      {skills.map((skill, index) => (
        <Text
          key={skill}
          position={[
            Math.sin((index / skills.length) * Math.PI * 2) * 2,
            Math.cos((index / skills.length) * Math.PI * 2) * 2,
            0
          ]}
          fontSize={0.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      ))}
    </group>
  )
}

