'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Calendar, User } from 'lucide-react'

export default function BlogPostPage() {
  const params = useParams()
  const _slug = params.slug as string

  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-sm text-gray-400 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">Article</span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
              Article de blog
            </h1>
            <div className="flex items-center gap-6 mt-6 text-sm text-gray-400">
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-2" /> Date</span>
              <span className="flex items-center"><User className="h-4 w-4 mr-2" /> Auteur</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-12" />
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Contenu de l&apos;article à venir. Cette page affichera le contenu complet de l&apos;article
              une fois intégrée avec Sanity CMS.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
