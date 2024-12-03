'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed mb-4">
            I am a passionate Computer Science Engineering student specializing in AI/ML at G.V.Acharya Institute of Engineering and Technology. With a strong foundation in algorithm development and machine learning techniques, I am constantly exploring new technologies and contributing to open-source projects.
          </p>
          <p className="text-lg leading-relaxed">
            My goal is to leverage my skills in Python, Java, and C++ to create innovative solutions in the field of artificial intelligence and machine learning. I'm particularly interested in the intersection of AI and web development, always seeking to build intelligent and user-friendly applications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

