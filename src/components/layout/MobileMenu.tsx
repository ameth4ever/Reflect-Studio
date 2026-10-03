'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteNavigation } from '@/config/site'
import { X } from 'lucide-react'

interface MobileMenuProps {
  onClose: () => void
}

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.3 },
  }),
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-40 lg:hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black"
      />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl"
      >
        <div className="flex items-center justify-end p-4">
          <button
            onClick={onClose}
            className="h-10 w-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Fermer le menu"
          >
            <X size={20} className="text-secondary" />
          </button>
        </div>

        <nav className="px-6 py-4">
          <div className="space-y-1">
            {siteNavigation.map((item, index) => (
              <motion.div
                key={item.href}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.97 }}
                className="group"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-3.5 px-4 text-lg font-heading font-bold text-secondary hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                >
                  <span>{item.label}</span>
                  <span className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 pt-8 border-t border-gray-100"
          >
            <Link
              href="/quote"
              onClick={onClose}
              className="block w-full text-center bg-primary text-white px-6 py-4 rounded-xl font-heading font-bold text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Demander un devis
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full text-center mt-3 border border-gray-200 text-secondary px-6 py-4 rounded-xl font-medium text-base hover:bg-gray-50 transition-colors"
            >
              Nous contacter
            </Link>
          </motion.div>
        </nav>
      </motion.div>
    </motion.div>
  )
}
