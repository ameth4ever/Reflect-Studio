'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MobileMenu } from './MobileMenu'
import { siteNavigation } from '@/config/site'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-28 items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/REFLECT STUDIO.png"
              alt="REFLECT STUDIO"
              width={300}
              height={169}
              className="h-12 sm:h-28 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-secondary/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/quote">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Demander un devis
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 text-secondary`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </header>
  )
}
