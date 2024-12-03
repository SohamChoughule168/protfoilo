'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: "Python", level: 90 },
  { name: "Java", level: 80 },
  { name: "C++", level: 75 },
  { name: "Machine Learning", level: 85 },
  { name: "React", level: 70 },
  { name: "Next.js", level: 65 },
  { name: "TensorFlow", level: 80 },
  { name: "OpenCV", level: 75 }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <div className="bg-gray-200 dark:bg-gray-600 rounded-full h-4 w-full">
                <motion.div
                  className="bg-yellow-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

