'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import Container from './Container';
import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-neutral-950 to-neutral-900 text-neutral-300">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
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
            <p className="text-neutral-400 text-lg leading-relaxed">
              Transforming text into natural sounding speech with cutting-edge AI voice technology.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: <Github className="w-5 h-5" />, label: 'GitHub' },
                { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                { icon: <Youtube className="w-5 h-5" />, label: 'YouTube' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="text-neutral-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[
            {
              title: 'Product',
              links: [
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'API', href: '/api' },
                { label: 'Integrations', href: '/integrations' },
                { label: 'Changelog', href: '/changelog' },
              ],
            },
            {
              title: 'Resources',
              links: [
                { label: 'Documentation', href: '/docs' },
                { label: 'Blog', href: '/blog' },
                { label: 'Community', href: '/community' },
                { label: 'Support', href: '/support' },
                { label: 'Webinars', href: '/webinars' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About Us', href: '/about' },
                { label: 'Careers', href: '/careers' },
                { label: 'Partners', href: '/partners' },
                { label: 'Press', href: '/press' },
                { label: 'Contact', href: '/contact' },
              ],
            },
          ].map((column) => (
            <div key={column.title} className="space-y-5">
              <h3 className="text-white font-semibold text-lg tracking-wide uppercase">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-indigo-400 transition-colors duration-200 text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 mb-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} VoiceClone AI, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Cookie Policy', href: '/cookies' },
              { label: 'Status', href: '/status' },
              { label: 'Accessibility', href: '/accessibility' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;