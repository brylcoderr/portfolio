import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiDocker, SiPython, SiMysql, SiRedis, SiChartdotjs, SiAngular } from 'react-icons/si'

const skillCategories = {
  Frontend: [
    { name: 'HTML', icon: <span className="text-orange-500">HTML</span> },
    { name: 'CSS', icon: <span className="text-blue-500">CSS</span> },
    { name: 'JavaScript', icon: <span className="text-yellow-500">JS</span> },
    { name: 'React', icon: <FaReact className="text-cyan-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Python', icon: <SiPython className="text-blue-500" /> },
    { name: 'Express', icon: <span className="text-gray-600">Express.js</span> },
  ],
  Database: [
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
    { name: 'Redis', icon: <SiRedis className="text-red-600" /> },
    { name: 'Chart.js', icon: <SiChartdotjs className="text-blue-500" /> },
    { name: 'Angular', icon: <SiAngular className="text-red-600" /> },
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-base-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        
        <div className="flex flex-col gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold capitalize mb-4">{category}</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-4 glass-card transition-transform duration-300 ease-in-out"
                  >
                    {skill.icon}
                    <span className="mt-2 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
