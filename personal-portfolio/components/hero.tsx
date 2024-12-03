'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Soham Rohidas Choughule
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            AI/ML Engineer & Full-Stack Developer
          </p>
          <motion.a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full inline-block transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-yellow-500">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202023-12-17%20at%2012.38.57%20AM-fAUdCjAtol7T6Q2pcg3w9yIFBUJ1YR.jpeg"
              alt="Soham Rohidas Choughule"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

