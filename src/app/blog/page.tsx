'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Calendar, ArrowRight } from 'lucide-react'

const categories = ['Tous', 'Communication', 'Marketing', 'Audiovisuel', 'Web', 'Design', 'Technologie']

const posts = [
  { title: 'Comment choisir son agence de communication', excerpt: 'Guide complet pour sélectionner le partenaire idéal pour votre stratégie de communication.', category: 'Communication', author: 'REFLECT Team', date: '15 Mai 2024', slug: 'choisir-agence-communication' },
  { title: 'Tendances marketing digital 2024', excerpt: 'Les tendances qui façonnent le marketing digital cette année et comment les exploiter.', category: 'Marketing', author: 'REFLECT Team', date: '10 Mai 2024', slug: 'tendances-marketing-digital-2024' },
  { title: 'L\'importance de la vidéo dans votre stratégie', excerpt: 'Pourquoi la vidéo est devenue incontournable dans toute stratégie de communication moderne.', category: 'Audiovisuel', author: 'REFLECT Team', date: '5 Mai 2024', slug: 'importance-video-strategie' },
  { title: 'Guide du développement web moderne', excerpt: 'Les technologies et bonnes pratiques pour un site web performant en 2024.', category: 'Web', author: 'REFLECT Team', date: '28 Avril 2024', slug: 'guide-developpement-web-moderne' },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'Tous' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white"
          >
            Notre Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Actualités, conseils et tendances du monde de la communication et du digital
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-surface text-muted-foreground hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Lire l&apos;article <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
