'use client'
import logo from '@/public/logo.svg'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-700/50">
      <Container>
        <div className="relative flex items-center justify-between h-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
              <Image
                src={logo}
                alt="TTS App Logo"
                width={24}
                height={24}
                className="transition-transform duration-100 hover:rotate-[-180deg]"
              />
            </div>
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300 select-none">
              TTS App
            </h2>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center bg-neutral-200 dark:bg-neutral-800 p-2 rounded-xl">
              {isOpen ? (
                <X 
                  onClick={() => setIsOpen(false)} 
                  className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200 cursor-pointer" 
                  size={24} 
                />
              ) : (
                <Menu 
                  onClick={() => setIsOpen(true)} 
                  className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200 cursor-pointer" 
                  size={24} 
                />
              )}
            </div>
          </div>

          {/* Navigation Links on mobile */}
          {isOpen && (
            <div className="fixed top-20 left-0 py-10 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-700/50 flex flex-col items-center space-y-4 md:hidden">
              <Link
                href="/"
                className="text-sm font-regular text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/create"
                className="text-sm font-regular text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Create Audio
              </Link>
              <Link
                href="/about"
                className="text-sm font-regular text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-regular text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <Button>
                Login
              </Button>
            </div>
          )}

          {/* Navigation Links on desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-regular text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/create"
              className="text-sm font-regular text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              Create Audio
            </Link>
            <Link
              href="/about"
              className="text-sm font-regular text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-regular text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            <Button>
              Login
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar