'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "Wikipedia-style Online Encyclopedia",
    description: "Developed a dynamic web application using Django framework with CRUD functionalities for encyclopedia entries.",
    tags: ["Web", "Django", "Python"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Face Detection System",
    description: "Implemented robust face detection using Python and OpenCV, achieving high accuracy in real-time video streams.",
    tags: ["AI/ML", "Python", "OpenCV"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Created an advanced portfolio website using Next.js, React, and Three.js with interactive 3D elements.",
    tags: ["Web", "React", "Three.js"],
    image: "/placeholder.svg"
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter))

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="flex justify-center mb-8">
          {['All', 'Web', 'AI/ML', 'Python'].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === tag 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

