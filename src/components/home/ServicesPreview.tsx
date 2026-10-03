'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Megaphone, TrendingUp, Film, Globe, Palette, Server } from 'lucide-react'

const services = [
  {
    title: 'Communication',
    description: 'Conseil en stratégie de marque, relations publiques et communication institutionnelle. Nous construisons des récits authentiques qui captivent vos audiences et fédèrent autour de votre vision, du positionnement à la gestion de crise.',
    icon: <Megaphone className="h-6 w-6" />,
    href: '/services/communication',
    gradient: 'from-red-500/20 to-orange-500/20',
    color: 'text-red-400',
  },
  {
    title: 'Marketing Digital',
    description: 'Campagnes SEA/SEO, gestion de réseaux sociaux, marketing d\'influence et growth hacking. Des stratégies data-driven qui maximisent votre visibilité en ligne et transforment votre trafic en clients fidèles.',
    icon: <TrendingUp className="h-6 w-6" />,
    href: '/services/marketing',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    color: 'text-blue-400',
  },
  {
    title: 'Production Audiovisuelle',
    description: 'Tournage et post-production de films institutionnels, spots publicitaires, documentaires et contenu viral. Équipement professionnel et équipe technique certifiée pour des rendus cinématographiques.',
    icon: <Film className="h-6 w-6" />,
    href: '/services/audiovisuel',
    gradient: 'from-purple-500/20 to-pink-500/20',
    color: 'text-purple-400',
  },
  {
    title: 'Développement Web',
    description: 'Sites vitrines, plateformes e-commerce et applications web sur mesure. Technologies modernes (Next.js, React, Node.js), responsive design et performances optimisées pour le marché africain.',
    icon: <Globe className="h-6 w-6" />,
    href: '/services/developpement-web',
    gradient: 'from-green-500/20 to-emerald-500/20',
    color: 'text-green-400',
  },
  {
    title: 'Design Graphique',
    description: 'Identité visuelle complète, chartes graphiques, packaging et supports print/premium. Du logo à la plaquette institutionnelle, chaque détail est pensé pour incarner votre excellence.',
    icon: <Palette className="h-6 w-6" />,
    href: '/services/design-graphique',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    color: 'text-yellow-400',
  },
  {
    title: 'Solutions IT',
    description: 'Infrastructures réseaux, cloud computing et maintenance informatique pour entreprises. Nous sécurisons votre système d\'information et déployons des outils collaboratifs adaptés à votre croissance.',
    icon: <Server className="h-6 w-6" />,
    href: '/services/solutions-it',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    color: 'text-indigo-400',
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">Notre Expertise</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary tracking-tight">
            Six pôles d'expertise pour votre
            <span className="text-primary"> réussite</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl">
            De la stratégie à l'exécution, chaque service est pensé pour offrir 
            une expérience sur-mesure et des résultats concrets à nos clients.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`h-12 w-12 rounded-xl bg-secondary/5 ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-primary group/link"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary border border-primary/20 rounded-full px-6 py-3 hover:bg-primary hover:text-white transition-all duration-300"
          >
            Voir tous nos services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
