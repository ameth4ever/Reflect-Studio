'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Megaphone, TrendingUp, Film, Globe, Palette, Server, Shield, Wifi } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Megaphone: <Megaphone className="h-8 w-8" />,
  TrendingUp: <TrendingUp className="h-8 w-8" />,
  Film: <Film className="h-8 w-8" />,
  Globe: <Globe className="h-8 w-8" />,
  Palette: <Palette className="h-8 w-8" />,
  Server: <Server className="h-8 w-8" />,
  Shield: <Shield className="h-8 w-8" />,
  Wifi: <Wifi className="h-8 w-8" />,
}

const accentColors: Record<string, string> = {
  Communication: 'from-red-500/20 to-orange-500/20',
  'Marketing Digital': 'from-blue-500/20 to-cyan-500/20',
  'Production Audiovisuelle': 'from-purple-500/20 to-pink-500/20',
  'Développement Web': 'from-green-500/20 to-emerald-500/20',
  'Design Graphique': 'from-yellow-500/20 to-orange-500/20',
  'Solutions IT': 'from-indigo-500/20 to-purple-500/20',
  'Réseau & Infrastructure': 'from-teal-500/20 to-cyan-500/20',
  'Sécurité des Systèmes': 'from-rose-500/20 to-red-500/20',
}

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
  index?: number
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export function ServiceCard({ title, description, icon, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: `linear-gradient(to bottom right, ${accentColors[title] || 'from-primary/5 to-primary/5'})` }}
      />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-8">
        <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
          {iconMap[icon] || <Megaphone className="h-8 w-8" />}
        </div>

        <h3 className="text-xl font-heading font-bold text-secondary mb-3">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <Link
            href={href}
            className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary/90 transition-colors"
          >
            Explorer ce service
            <ArrowRight className="ml-2 h-4 w-4 transition-all group-hover:translate-x-1" />
          </Link>

          <span className="text-xs text-muted-foreground/40 group-hover:text-primary/30 transition-colors">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
