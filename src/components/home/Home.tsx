import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from '../3d/Scene'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full lg:w-1/2 h-[500px]">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls enableZoom={false} />
            <Scene />
          </Canvas>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-5xl font-bold">Hi, I'm Shubham</h1>
          <p className="py-6">Front End Developer specializing in modern web technologies</p>
          <button className="btn btn-primary">Get In Touch</button>
        </motion.div>
      </div>
    </section>
  )
}
