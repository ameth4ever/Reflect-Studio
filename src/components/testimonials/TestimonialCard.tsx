'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  clientName: string
  company: string
  review: string
  rating: number
  index?: number
}

export function TestimonialCard({ clientName, company, review, rating, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
          />
        ))}
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6 italic">
        &ldquo;{review}&rdquo;
      </p>

      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
          {clientName.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="text-sm font-bold text-secondary">{clientName}</p>
          <p className="text-xs text-muted-foreground">{company}</p>
        </div>
      </div>
    </motion.div>
  )
}
