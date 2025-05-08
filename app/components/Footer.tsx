'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import Container from './Container';
import { Github, Facebook, Dribbble } from 'lucide-react';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage or prefer-color-scheme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <footer className="bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="flex md:flex-row flex-col justify-between gap-8 pt-10">
          {/* Brand Column */}
          <div className="max-w-[350px] w-full space-y-4">
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
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
                TTS App
              </h2>
            </div>
            <p className="dark:text-neutral-400">
              Transform text into natural sounding speech with AI voice cloning technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Github />
              </a>
              <a href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Facebook/>
              </a>
              <a href="#" className="text-neutral-500 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Dribbble/>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:col-span-3'>
            <div className="space-y-4">
              <h3 className="font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="hover:text-black dark:hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-black dark:hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/api" className="hover:text-black dark:hover:text-white transition-colors">API</Link></li>
                <li><Link href="/changelog" className="hover:text-black dark:hover:text-white transition-colors">Changelog</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/docs" className="hover:text-black dark:hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/community" className="hover:text-black dark:hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/support" className="hover:text-black dark:hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-black dark:hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link href="/guidelines" className="hover:text-black dark:hover:text-white transition-colors">Content Guidelines</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 text-sm font-light border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="dark:text-neutral-400">
            &copy; {currentYear} VoiceClone AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="text-yellow-300" size={20} />
              ) : (
                <Moon className="text-neutral-600" size={20} />
              )}
            </button>
            <Link href="/status" className="hover:text-black dark:hover:text-white transition-colors">System Status</Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact Us</Link>
            <Link href="/feedback" className="hover:text-black dark:hover:text-white transition-colors">Feedback</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;