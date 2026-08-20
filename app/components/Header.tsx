// app/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const navItems = ['Home', 'Services', 'How It Works', 'Resources', 'Events'];
  const navItems = ['Home', 'Services', 'How It Works'];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-primary-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
            <span className="text-gold-500">⚖️</span> 
            Corporate
            <span className="text-gold-500">कार्यालय</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/80">
          {navItems.map((item) => (
            <Link 
              key={item} 
              href={
                item === 'Home'
                  ? '/'
                  : item === 'How It Works'
                  ? '/#how-it-works'
                  : `/${item.toLowerCase().replace(/\s/g, '-')}`
              }
              className="hover:text-gold-400 transition-colors duration-200 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </Link>

          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="text-sm text-white/60">🇮🇳 EN</span>
          {/* <Link 
            href="/login" 
            className="text-sm font-medium text-white/80 hover:text-gold-400 transition"
          >
            Login
          </Link> */}
          <Link 
            href="/estimate" 
            className="bg-gold-500 text-primary-900 font-semibold px-5 py-2 rounded-full hover:bg-gold-600 transition-all hover:scale-105 shadow-lg hover:shadow-gold-500/25"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0, 
          opacity: mobileMenuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-primary-800/95 backdrop-blur-md border-t border-white/5"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link 
              key={item} 
              href={
                item === 'Home'
                  ? '/'
                  : item === 'How It Works'
                  ? '/#how-it-works'
                  : `/${item.toLowerCase().replace(/\s/g, '-')}`
              }
              className="block text-white/80 hover:text-gold-400 transition py-2 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-3">
            {/* <Link 
              href="/login" 
              className="block text-white/80 hover:text-gold-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link> */}
            <Link 
              href="/contact" 
              className="block bg-gold-500 text-primary-900 font-semibold px-5 py-2 rounded-full text-center hover:bg-gold-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
}