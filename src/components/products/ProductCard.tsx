'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'

interface ProductCardProps {
  title: string
  category: string
  price: string
  description: string
  gradient: string
  tags: string[]
  rating: number
  index?: number
}

export function ProductCard({ title, category, price, description, gradient, tags, rating, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className={`relative h-52 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="text-5xl font-heading font-bold text-white/10 tracking-widest select-none">
          {title.slice(0, 2).toUpperCase()}
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-heading font-bold text-secondary">{title}</h3>
          <span className="text-lg font-heading font-bold text-primary">{price}</span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'
              }`}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-surface rounded-md text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={`https://wa.me/221777054949?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-primary text-white rounded-xl py-3 text-sm font-medium hover:bg-primary/90 transition-colors group/btn"
        >
          <ShoppingCart className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
          Demander le prix
        </a>
      </div>
    </motion.div>
  )
}
