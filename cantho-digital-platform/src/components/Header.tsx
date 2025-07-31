'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#gioi-thieu', label: 'Giới thiệu' },
    { href: '#nen-tang', label: 'Nền tảng số' },
    { href: '#huong-dan', label: 'Hướng dẫn' },
    { href: '#lien-he', label: 'Liên hệ' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Logo Báo & PT-TH Cần Thơ"
              width={200}
              height={60}
              className="h-20 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <ul className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  )
}