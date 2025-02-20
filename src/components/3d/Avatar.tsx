import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Avatar() {
  const avatarRef = useRef<any>()
  const { nodes, materials } = useGLTF('/avatar.glb') as any

  useFrame((state) => {
    avatarRef.current.rotation.y = Math.sin(state.clock.getElapsedTime()) * 0.3
  })

  return (
    <group ref={avatarRef}>
      <primitive object={nodes.Scene} />
    </group>
  )
}
