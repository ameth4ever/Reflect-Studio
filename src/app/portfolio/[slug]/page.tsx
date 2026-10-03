'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function ProjectDetailPage() {
  const params = useParams()
  const _slug = params.slug as string

  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex items-center text-sm text-gray-400 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au portfolio
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Projet</span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
              Détail du projet
            </h1>
            <p className="mt-4 text-gray-300">Client • Année</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-12" />

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Cette page affichera les détails complets du projet une fois intégrée avec Sanity CMS.
              Les informations incluront la description, la galerie d&apos;images, les résultats et le témoignage client.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
