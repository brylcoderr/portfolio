'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { sectionStyle, containerStyle, headingStyle } from '@/styles/style'



const skillCategories = [
  {
    name: "Front End",
    skills: [
      { name: "HTML", description: "Structuring web content" },
      { name: "CSS", description: "Styling and layout of web pages" },
      { name: "JavaScript", description: "Adding interactivity to websites" },
    ]
  },
  {
    name: "Back End",
    skills: [
      { name: "Node.js", description: "Server-side JavaScript runtime" },
      { name: "Python", description: "Versatile programming language for backend logic" },
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", description: "NoSQL database for flexible data storage" },
      { name: "MySQL", description: "Relational database management system" },
    ]
  },
  {
    name: "Version Control",
    skills: [
      { name: "GitHub", description: "Web-based platform for Git repositories" },
      { name: "Git", description: "Distributed version control system" },
    ]
  },
  {
    name: "Frameworks",
    skills: [
      { name: "React", description: "JavaScript library for building user interfaces" },
      { name: "Angular", description: "Platform for building web applications" },
      { name: "Express", description: "Web application framework for Node.js" },
      { name: "Next.js", description: "React framework for production-grade applications" },
    ]
  },
  {
    name: "Others",
    skills: [
      { name: "Redis", description: "In-memory data structure store" },
      { name: "Socket.io", description: "Real-time bidirectional event-based communication" },
      { name: "Chart.js", description: "JavaScript charting library" },
    ]
  }
]

export default function About() {
  return (
    <section id="about" className={sectionStyle()}>
      <div className={containerStyle()}>
        <div className="h-40 mb-8">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} enablePan={false} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
            </Suspense>
          </Canvas>
        </div>
        <h2 className={headingStyle() + " text-center mb-12"}>About Me</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                With over 3 years of experience in web development, I specialize in creating robust and scalable applications. My expertise spans both front-end and back-end technologies, allowing me to deliver comprehensive solutions that meet modern web standards and user expectations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold">Bachelor of Technology in Computer Science</h3>
              <p className="text-sm text-muted-foreground">Hindustan College of Science and Technology</p>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
            <CardDescription>Hover over skills to see descriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={skillCategories[0].name} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.name} value={category.name}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {skillCategories.map((category) => (
                <TabsContent key={category.name} value={category.name}>
                  <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="cursor-help transition-all hover:bg-primary hover:text-primary-foreground"
                          title={skill.description}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

