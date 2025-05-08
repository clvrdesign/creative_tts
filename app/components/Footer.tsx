import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.svg'
import Container from './Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800">
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
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-300">
                TTS App
              </h2>
            </div>
            <p className="text-sm">
              Transform text into natural sounding speech with AI voice cloning technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-indigo-600 transition-colors">
                Github
              </a>
              <a href="#" className="text-neutral-400 hover:text-indigo-600 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-neutral-400 hover:text-indigo-600 transition-colors">
                Dribbble
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:col-span-3'>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/api" className="hover:text-white transition-colors">API</Link></li>
                <li><Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link href="/guidelines" className="hover:text-white transition-colors">Content Guidelines</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} VoiceClone AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/status" className="text-sm hover:text-white transition-colors">System Status</Link>
            <Link href="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link>
            <Link href="/feedback" className="text-sm hover:text-white transition-colors">Feedback</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;