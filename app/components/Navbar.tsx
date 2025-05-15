'use client'
import logo from '@/public/logo.svg'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { usePathname } from 'next/navigation'
import Modal from '../components/Modal'
import Auth from '../components/Auth'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHide, setIsHide] = useState(true)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/create', label: 'Create Audio' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <>
      <Modal
        isOpen={!isHide}
        onClose={() => setIsHide(true)}
        title="Example Modal"
        size="md"
      >
        <Auth />
      </Modal>
      <nav className="fixed top-0 z-50 w-full bg-white dark:bg-neutral-900 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-700/50">
        <Container>
          <div className="relative flex items-center justify-between">
            {/* Logo Section */}
            <Link href={'/'} className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
                <Image
                  src={logo}
                  alt="TTS App Logo"
                  width={24}
                  height={24}
                  className="transition-transform duration-300 hover:rotate-[-180deg]"
                />
              </div>
              <h2 className="md:text-2xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-300">
                Voice Clone
              </h2>
            </Link>

            {/* Right side controls */}
            <div className="flex items-center space-x-2">
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
              <>
                <div className="fixed top-0 left-0 py-20 w-3/4 h-screen bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-700/50 flex flex-col items-center space-y-8 md:hidden z-20">
                  {/* Theme Toggle Button */}
                  <div className="absolute right-6 top-6 md:hidden flex items-center">
                    <ThemeToggle />
                  </div>

                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`font-regular transition-colors duration-200 ${isActive(link.href)
                        ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                        : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div onClick={() => setIsHide(false)}>
                    <Button>
                      Login
                    </Button>
                  </div>
                </div>
                {/* Overlay for mobile menu */}
                <div
                  className={`fixed inset-0 h-screen w-full bg-black/30 transition-opacity duration-300 z-10 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  onClick={() => setIsOpen(false)}
                ></div>
              </>
            )}

            {/* Navigation Links on desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-regular transition-colors duration-200 ${isActive(link.href)
                    ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Theme Toggle Button */}
              <div className="hidden md:flex items-center">
                <ThemeToggle />
              </div>
              <div onClick={() => setIsHide(false)}>
                <Button>
                  Login
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default Navbar