import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function Scene() {
  const sphereRef = useRef<any>()

  useFrame(({ clock }) => {
    sphereRef.current.rotation.x = clock.getElapsedTime() * 0.3
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.2
  })

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#3d1c56"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  )
}
