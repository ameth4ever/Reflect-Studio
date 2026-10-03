'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Refonte Identitaire Groupe Sonatel',
    subtitle: 'Stratégie de marque & communication 360°',
    category: 'Communication',
    gradient: 'from-blue-600 via-purple-600 to-pink-600',
    tags: ['Branding', 'Print', 'Digital', 'RP'],
  },
  {
    title: 'Plateforme E-commerce + Livraison',
    subtitle: 'Place de marché connectée aux transporteurs',
    category: 'Web Development',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    tags: ['Next.js', 'UI/UX Design', 'API', 'Mobile'],
  },
  {
    title: 'Documentaire & Film Institutionnel',
    subtitle: "Série immersive sur l'innovation au Sénégal",
    category: 'Audiovisuel',
    gradient: 'from-orange-500 via-red-500 to-rose-600',
    tags: ['Tournage 4K', 'Post-production', 'Direction', 'Drone'],
  },
  {
    title: 'Campagne Digitale Orange Money',
    subtitle: 'Acquisition & notoriété sur 7 marchés',
    category: 'Marketing Digital',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    tags: ['SEA/SEO', 'Social Ads', 'Influence', 'Analytics'],
  },
  {
    title: 'Identité Visuelle Chaîne TV',
    subtitle: 'Habillage antenne & motion design',
    category: 'Design Graphique',
    gradient: 'from-pink-500 via-rose-500 to-fuchsia-600',
    tags: ['Motion Design', 'Charte', 'Packaging', 'Print'],
  },
  {
    title: 'Infrastructure IT Groupe BICIS',
    subtitle: 'Cloud hybride & cybersécurité',
    category: 'Solutions IT',
    gradient: 'from-yellow-500 via-amber-500 to-orange-600',
    tags: ['Cloud', 'Sécurité', 'Réseau', 'Support'],
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">Nos Réalisations</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary tracking-tight">
              Des projets qui
              <span className="text-primary"> parlent </span> d&apos;eux-mêmes
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              De la stratégie de marque à l'infrastructure IT, chaque projet raconte 
              une histoire de collaboration et d'excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary border border-primary/20 rounded-full px-6 py-3 hover:bg-primary hover:text-white transition-all duration-300"
            >
              Voir toutes nos réalisations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative h-72 sm:h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-white mt-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 mt-1 line-clamp-1">{project.subtitle}</p>
              </div>

              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
