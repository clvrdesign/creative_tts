import logo from '@/public/logo.svg'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-700/50">
      <Container>
        <div className="flex items-center justify-between h-8 px-4 sm:px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
              <Image 
                src={logo} 
                alt="TTS App Logo" 
                width={24} 
                height={24} 
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-300">
              TTS App
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10">
            <Link 
              href="/" 
              className="text-sm font-regular text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-regular text-neutral-300 hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-regular text-neutral-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            <button className="px-4 py-3 cursor-pointer text-sm font-regular text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20">
              Get Started
            </button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar