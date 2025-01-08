'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { sectionStyle, containerStyle, headingStyle, gridStyle } from '@/styles/style'

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'An E-Commerce website built with React and Node.js.',
    technologies: ['Next.js', 'Express.js', 'MongoDB'],
    link: 'https://github.com/brylcoderr/E-Commerce'
  },
  {
    title: 'A Blog Website',
    description: 'Blog website built with React, Next and Node.js.',
    technologies: ['React', 'Next.js', 'Node.js'],
    link: 'https://github.com/brylcoderr/Blog-Website'
  },
  {
    title: 'A Real Time Crypto Dashboard',
    description: 'A Real Time Crypto Dashboard built with React, Next and Node.js.',
    technologies: ['React', 'Next.js', 'Node.js'],
    link: 'https://github.com/brylcoderr/Real-Time-Dash-Board'
  },
]

function ProjectTitle({ title }: { title: string }) {
  return (
    <Text
      position={[0, 0, 0]}
      fontSize={0.5}
      color="#8352FD"
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.02}
      outlineColor="#ffffff"
    >
      {title}
    </Text>
  )
}

export default function Projects() {
  return (
    <section className={sectionStyle()}>
      <div className={containerStyle()}>
        <h2 className={headingStyle()}>My Projects</h2>
        <div className={gridStyle()}>
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="h-40 mb-4">
                  <Canvas>
                    <Suspense fallback={null}>
                      <OrbitControls enableZoom={false} enablePan={false} />
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} />
                      <ProjectTitle title={project.title} />
                    </Suspense>
                  </Canvas>
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

