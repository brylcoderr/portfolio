import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'National Informatics Centre',
    role: 'Software Developer',
    period: 'Dec 2023 - Mar 2024',
    description: `As a development manager, I am responsible for leading a distributed team of developers who work on various backend services for our products. I collaborate with the product team to ensure that we have clear and consistent requirements, and I communicate with the project management team to keep them updated on our progress and challenges. I also work closely with the architecture team and the front-end development team to design and implement solutions that meet the needs of our customers and stakeholders. Additionally, I participate in all grooming and priority setting sessions with stakeholders to identify and prioritize the features and functionality of our backend services.`,
  },
  {
    company: 'Ensaar Global Private Limited',
    role: 'Full Stack Developer',
    period: 'Mar 2021 - April 2023',
    description: 'Developed and implemented a new API, resulting in a 25% reduction in load times and a 15% increase in user engagement. Collaborated with UX designers to create a new user interface, leading to a 20% increase in user satisfaction and a 10% increase in conversion rates. Managed the software development life cycle for a major project, ensuring timely delivery and meeting all project milestones. Developed and maintained a scalable microservices architecture, improving system reliability by 40% and supporting a 20% increase in customer base. Wrote clean, testable code with unit tests, resulting in a 30% reduction in bug-related delays and a 25% increase in overall code quality.',
  },
  {
    company: 'Round Pay',
    role: 'Web Developer',
    period: 'Aug 2019 - May 2020',
    description: 'Collaborated with a team of designers and back-end developers to create a cohesive user experience for a real estate web application, leading to a 40% increase in user engagement. Utilized front-end technologies such as jQuery and AJAX to integrate with backend services, resulting in real-time data-driven updates to the website and an improved user experience. Improved the speed and scalability of a social media website, leading to a 30% decrease in loading times and an increase in user satisfaction ratings. Developed a new e-commerce website using WordPress and Bootstrap, resulting in a 50% increase in sales and a 75% decrease in bounce rates.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-6 mb-8"
            >
              <h3 className="text-2xl font-bold">{exp.company}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl">{exp.role}</span>
                <span className="text-sm opacity-75">{exp.period}</span>
              </div>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
