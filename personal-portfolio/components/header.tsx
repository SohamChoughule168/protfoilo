'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold">
              SC
            </Link>
          </motion.div>
          <motion.ul
            className="flex space-x-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="hover:text-yellow-500 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>
            </li>
          </motion.ul>
        </div>
      </nav>
    </header>
  )
}

