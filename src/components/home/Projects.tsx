import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Real Time Currency Dashboard',
    description: 'A web application that provides real-time currency exchange rates and historical data.',
    image: '/project-2.png',
    github: 'https://github.com/brylcoderr/Real-Time-Dash-Board',
    live: 'https://real-time-dash-board.vercel.app',
    stack: [
      { name: 'ReactJS', info: 'A JavaScript library for building user interfaces.' },
      { name: 'TypeScript', info: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
      { name: 'Axios', info: 'A promise-based HTTP client for the browser and Node.js.' },
      { name: 'Vite', info: 'A build tool that aims to provide a faster and leaner development experience.' },
      { name: 'Tailwind CSS', info: 'A utility-first CSS framework for creating custom designs.' },
      { name: 'Chart.js', info: 'A simple yet flexible JavaScript charting for designers & developers.' },
    ],
  },
  {
    title: 'AI Task Manager',
    description: 'A task management application powered by AI.Users can create, update, and delete tasks.',
    image: '/project-1.png',
    github: 'https://github.com/brylcoderr/AI-Task-Manager',
    live: 'https://ai-task-manager-xi.vercel.app/',
    stack: [
      { name: 'Next.js', info: 'A React framework for production.' },
      { name: 'Node.js', info: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
      { name: 'Express', info: 'A minimal and flexible Node.js web application framework.' },
      { name: 'TypeScript', info: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
      { name: 'Tailwind CSS', info: 'A utility-first CSS framework for creating custom designs.' },
    ],
  },
  {
    title: 'Blog App',
    description: 'A blog application that allows users to create, update, and delete blog posts.',
    image: '/project-3.png',
    github: 'https://github.com/brylcoderr/Blog-Website',
    live: 'https://blog-website-ruby-three.vercel.app/',
    stack: [
      { name: 'Next.js', info: 'A React framework for production.' },
      { name: 'Node.js', info: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
      { name: 'Express', info: 'A minimal and flexible Node.js web application framework.' },
      { name: 'TypeScript', info: 'A typed superset of JavaScript that compiles to plain JavaScript.' },
      { name: 'MongoDB', info: 'A document database with the scalability and flexibility that you want.' },
    ],
  },
  // Add more projects
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-card overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.github} className="btn btn-primary btn-sm">GitHub</a>
                  <a href={project.live} className="btn btn-secondary btn-sm">Live Demo</a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <h4 className="font-semibold">Tech Stack:</h4>
                  {project.stack.map((tech, idx) => (
                    <div key={idx} className="relative group">
                      <span className="bg-gray-600 text-sky-300 py-1 px-2 rounded-full text-sm">
                        {tech.name}
                      </span>
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-32 bg-gray-800 text-white text-xs rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {tech.info}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
