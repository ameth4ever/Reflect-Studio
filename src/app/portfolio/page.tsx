'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowRight, Check, Lightbulb, Target, Eye, BarChart } from 'lucide-react'

const categories = ['Tous', 'Communication', 'Marketing', 'Audiovisuel', 'Web', 'Design', 'IT']

const projects = [
  { title: 'Campagne Publicitaire Nationale', category: 'Communication', client: 'Groupe Sonatel', year: '2024', description: 'Campagne 360° multi-canaux pour le lancement d\'une offre mobile grand public. Stratégie media, création print et digitale, activation terrain.', impact: '+40% de notoriété', tags: ['Branding', 'Print', 'Digital', 'Radio'] },
  { title: 'Site E-commerce Premium', category: 'Web', client: 'Gueye Logistics', year: '2024', description: 'Plateforme e-commerce complète avec catalogue dynamique, paiement mobile (Orange Money, Wave) et dashboard de gestion en temps réel.', impact: '+120% de ventes en ligne', tags: ['Next.js', 'UI/UX', 'API', 'Mobile Money'] },
  { title: 'Film Institutionnel ONU Femmes', category: 'Audiovisuel', client: 'ONU Femmes', year: '2023', description: 'Production d\'un film documentaire sur l\'autonomisation des femmes au Sénégal. Tournage dans 5 régions, interviews et images aériennes.', impact: 'Diffusé dans 15 pays', tags: ['Documentaire', '4K', 'Drone', 'Post-prod'] },
  { title: 'Refonte Identité Visuelle', category: 'Design', client: 'Startup Tech', year: '2024', description: 'Création complète d\'une identité de marque : logo, charte graphique, supports de communication, templates digitaux et papier.', impact: 'Identité unifiée', tags: ['Logo', 'Charte', 'Packaging', 'UI Kit'] },
  { title: 'Stratégie Réseaux Sociaux', category: 'Marketing', client: 'Groupe Teyliom', year: '2023', description: 'Stratégie social media 360° : community management, création de contenu, campagnes paid social et reporting mensuel.', impact: '+200K abonnés', tags: ['Social Ads', 'Content', 'Analytics', 'Influence'] },
  { title: 'Documentaire Industriel', category: 'Audiovisuel', client: 'CFAO Sénégal', year: '2023', description: 'Documentaire corporate retraçant 50 ans d\'histoire industrielle au Sénégal. Archives, témoignages et séquences modernes.', impact: 'Prix du meilleur documentaire', tags: ['Production', 'Archives', 'Montage', 'Étalonnage'] },
  { title: 'Application Web RH', category: 'IT', client: 'BICIS', year: '2024', description: 'Application web sur mesure pour la gestion des ressources humaines : congés, paie, évaluations et reporting.', impact: '300 utilisateurs', tags: ['React', 'Node.js', 'MongoDB', 'Sécurité'] },
  { title: 'Site Vitrine & Blog', category: 'Web', client: 'Air Sénégal', year: '2024', description: 'Refonte complète du site institutionnel avec blog voyage, système de réservation et espace presse.', impact: '-60% de temps de chargement', tags: ['Next.js', 'CMS', 'SEO', 'Performance'] },
  { title: 'Campagne Brand Content', category: 'Communication', client: 'Orange Sénégal', year: '2023', description: 'Stratégie de brand content : production d\'articles, vidéos et podcasts pour renforcer le positionnement de la marque.', impact: '2M de vues', tags: ['Content', 'Video', 'Podcast', 'Distribution'] },
  { title: 'Installation Réseau Fibre', category: 'IT', client: 'Viva TV', year: '2024', description: 'Déploiement d\'un réseau fibre optique pour le siège. Architecture redondante, sécurité et supervision.', impact: '99.9% de disponibilité', tags: ['Fibre', 'Réseau', 'Sécurité', 'Cloud'] },
  { title: 'Packaging Produit Premium', category: 'Design', client: 'Cosmétique Sénégal', year: '2024', description: 'Conception de packaging pour une gamme cosmétique bio. Identité visuelle, design structural et suivi de production.', impact: '3 gammes lancées', tags: ['Packaging', 'Print', 'Éco-conception', 'Branding'] },
  { title: 'Campagne Acquisition SEA', category: 'Marketing', client: 'Jumia Sénégal', year: '2023', description: 'Campagne Google Ads et Social Ads pour l\'acquisition de nouveaux clients avec optimisation continue du ROI.', impact: 'ROI x4', tags: ['SEA', 'Google Ads', 'Meta Ads', 'Optimisation'] },
]

const results = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Approche créative',
    description: 'Chaque projet est pensé pour se démarquer et marquer les esprits avec des concepts originaux et impactants.',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Résultats mesurables',
    description: 'Nous définissons des indicateurs précis en amont et pilotons la performance tout au long du projet.',
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: 'Vision stratégique',
    description: 'Notre regard extérieur apporte une perspective nouvelle pour révéler tout le potentiel de votre marque.',
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: 'Impact durable',
    description: 'Nous concevons des solutions qui s\'inscrivent dans la durée et évoluent avec votre entreprise.',
  },
]

const projectCategories = ['Communication', 'Marketing', 'Audiovisuel', 'Web', 'Design', 'IT']
const categoryColors: Record<string, string> = {
  Communication: 'from-red-500/20 to-orange-500/20',
  Marketing: 'from-blue-500/20 to-cyan-500/20',
  Audiovisuel: 'from-purple-500/20 to-pink-500/20',
  Web: 'from-green-500/20 to-emerald-500/20',
  Design: 'from-yellow-500/20 to-orange-500/20',
  IT: 'from-indigo-500/20 to-purple-500/20',
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const filteredProjects = activeCategory === 'Tous'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(228,30,38,0.12),transparent_60%)]" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(228,30,38,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/60 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Portfolio — 200+ projets livrés
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.05] tracking-tight">
              Nos
              <span className="text-primary"> réalisations</span>
              <br />
              parlent d'elles-mêmes
            </h1>

            <p className="mt-6 text-lg text-white/50 max-w-xl leading-relaxed">
              Chaque projet est une histoire de collaboration, de créativité et 
              d'excellence. Découvrez comment nous transformons les ambitions 
              de nos clients en résultats concrets.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link href="#projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base group">
                  Explorer nos projets
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-accent/40 text-accent hover:bg-accent hover:text-secondary hover:border-accent px-8 py-6 text-base">
                  Proposer votre projet
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-white/10 pt-12"
          >
            {[
              { value: '200+', label: 'Projets livrés' },
              { value: '80+', label: 'Clients satisfaits' },
              { value: '6', label: 'Domaines d\'expertise' },
              { value: '98%', label: 'Clients recommandent' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-heading font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <AnimatedSection className="py-28" id="projects">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Une sélection de nos projets"
            subtitle="Des campagnes de communication aux solutions IT, en passant par la production audiovisuelle et le développement web, chaque projet témoigne de notre engagement pour l'excellence."
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                >
                  <div className={`h-56 bg-gradient-to-br ${categoryColors[project.category] || 'from-gray-900 to-gray-800'} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-8 rounded-full bg-accent" />
                        <span className="text-xs text-white/60">{project.client}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                      <span className="text-xs font-medium text-accent-foreground bg-accent/10 text-accent-foreground px-2 py-0.5 rounded-full">
                        {project.impact}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-secondary mb-2 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-gray-50 text-xs text-muted-foreground rounded-md border border-gray-100">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary group/link"
                    >
                      Détails du projet
                      <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </AnimatedSection>

      {/* Results / Approach */}
      <section className="py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Notre promesse"
            subtitle="Au-delà des livrables, nous nous engageons sur des résultats concrets et un impact mesurable pour votre organisation."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {results.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">Secteurs</span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary tracking-tight">
                Nous accompagnons
                <br />
                <span className="text-primary">tous les secteurs</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Des télécoms à la finance, en passant par l'industrie, les services 
                et les institutions publiques, notre équipe s'adapte à votre secteur 
                d'activité pour vous apporter des solutions pertinentes et efficaces.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Télécommunications & Digital',
                  'Banque & Finance',
                  'Industrie & Commerce',
                  'ONG & Institutions',
                  'Services & Consulting',
                  'Hôtellerie & Tourisme',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {projectCategories.map((cat, index) => (
                <motion.div
                  key={cat}
                  whileHover={{ y: -2 }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${categoryColors[cat] || 'from-gray-100 to-gray-50'} border border-gray-100`}
                >
                  <span className="text-sm font-bold text-secondary">{cat}</span>
                  <p className="text-xs text-muted-foreground mt-1">
                    {projects.filter(p => p.category === cat).length} projets réalisés
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(228,30,38,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight">
              Vous avez un projet ?
            </h2>
            <p className="mt-4 text-lg text-white/50 max-w-lg mx-auto">
              Rejoignez les 80+ entreprises qui nous font confiance et donnez vie à vos ambitions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-base group">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-accent/40 text-accent hover:bg-accent hover:text-secondary px-10 py-6 text-base">
                  Voir nos services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
