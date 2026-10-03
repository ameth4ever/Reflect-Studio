'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const extensions: Record<number, string> = {
  1: 'jpeg', 2: 'png', 3: 'webp', 4: 'png', 5: 'png', 6: 'png',
  7: 'jpeg', 8: 'png', 9: 'jpeg', 10: 'png', 11: 'jpeg', 12: 'png',
  13: 'jpeg', 14: 'jpeg', 15: 'png', 16: 'jpeg', 17: 'jpeg',
  18: 'jpeg', 19: 'png', 20: 'jpeg', 21: 'jpeg', 22: 'png',
}

const partnerLogos = Array.from({ length: 22 }, (_, i) => ({
  src: `/images/partners/${i + 1}.${extensions[i + 1]}`,
  id: i + 1,
}))

export function PartnersSection() {
  const controls = useAnimationControls()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    controls.start({
      x: [`${offset}%`, `${offset - 50}%`],
      transition: { duration: 15, repeat: Infinity, ease: 'linear' },
    })
  }, [controls, offset])

  const handleArrow = (direction: 'left' | 'right') => {
    controls.stop()
    setOffset(prev => prev + (direction === 'left' ? 12 : -12))
  }

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">Ils nous font confiance</span>
          <h2 className="mt-3 text-2xl font-heading font-bold text-secondary">
            Nos partenaires et clients
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
            Plus de 80 entreprises et institutions nous accompagnent dans notre
            mission depuis plus de 10 ans.
          </p>
        </motion.div>

        <div className="relative group">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <button
            onClick={() => handleArrow('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/30 hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Défiler vers la gauche"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => handleArrow('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-secondary hover:text-primary hover:border-primary/30 hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Défiler vers la droite"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <motion.div
            animate={controls}
            className="flex gap-8 sm:gap-16 items-center"
          >
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 h-16 w-28 sm:h-24 sm:w-44 relative flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={`Logo partenaire ${logo.id}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
