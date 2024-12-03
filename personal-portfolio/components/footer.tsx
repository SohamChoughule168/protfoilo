import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            LinkedIn
          </Link>
          <Link href="mailto:sohamchoughule06@gmail.com" className="hover:text-yellow-500">
            Email
          </Link>
        </div>
        <p>&copy; 2023 Soham Rohidas Choughule. All rights reserved.</p>
      </div>
    </footer>
  )
}

