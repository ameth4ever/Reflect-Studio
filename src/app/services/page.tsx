'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { ServiceCard } from '@/components/services/ServiceCard'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Check, ArrowRight, Sparkles, Target, Users, Award } from 'lucide-react'

const services = [
  { title: 'Communication', description: 'Stratégies de communication intégrée, relations presse, conseil en image de marque et communication digitale pour renforcer votre notoriété et fédérer vos audiences.', icon: 'Megaphone', href: '/services/communication' },
  { title: 'Marketing Digital', description: 'Campagnes SEA/SEO, social media marketing, marketing d\'influence et stratégies de croissance pour atteindre vos objectifs commerciaux avec un ROI mesurable.', icon: 'TrendingUp', href: '/services/marketing' },
  { title: 'Production Audiovisuelle', description: 'Vidéos institutionnelles, spots publicitaires, motion design, documentaires et contenu vidéo professionnel en 4K pour tous vos supports de diffusion.', icon: 'Film', href: '/services/audiovisuel' },
  { title: 'Développement Web', description: 'Sites vitrines, plateformes e-commerce, applications web sur mesure et API avec Next.js, React et Node.js pour des performances optimales.', icon: 'Globe', href: '/services/developpement-web' },
  { title: 'Design Graphique', description: 'Identité visuelle complète, branding, chartes graphiques, supports print premium et packaging pour une image forte et cohérente.', icon: 'Palette', href: '/services/design-graphique' },
  { title: 'Solutions IT', description: 'Infrastructures cloud, réseaux, maintenance informatique et accompagnement technique pour sécuriser et optimiser votre système d\'information.', icon: 'Server', href: '/services/solutions-it' },
  { title: 'Réseau & Infrastructure', description: 'Installation et configuration de réseaux LAN/WAN, fibre optique, WiFi professionnel et solutions de connectivité pour votre entreprise.', icon: 'Wifi', href: '/services/reseau-infrastructure' },
  { title: 'Sécurité des Systèmes', description: 'Audit de sécurité, protection des données, cybersécurité et conformité RGPD pour garantir l\'intégrité et la confidentialité de votre infrastructure.', icon: 'Shield', href: '/services/securite-systemes' },
]

const approachItems = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Sur-mesure',
    description: 'Chaque projet est unique. Nous concevons des solutions adaptées à votre secteur, votre taille et vos ambitions.',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Orienté résultats',
    description: 'Nos stratégies sont guidées par des KPI clairs et un suivi rigoureux pour garantir un retour sur investissement optimal.',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Collaboratif',
    description: 'Nous travaillons main dans la main avec vos équipes, avec une communication transparente et des points d\'étape réguliers.',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Excellence',
    description: 'Nous mobilisons les meilleurs talents et les technologies les plus avancées pour livrer une qualité irréprochable.',
  },
]

const processSteps = [
  { step: '01', title: 'Audit & Analyse', description: 'Nous rencontrons vos équipes, analysons votre marché, votre concurrence et vos objectifs pour poser un diagnostic précis.', items: ['Analyse sectorielle', 'Benchmark concurrentiel', 'Définition des KPI', 'Identification des opportunités'] },
  { step: '02', title: 'Stratégie & Conception', description: 'Nous élaborons une feuille de route détaillée avec des solutions concrètes, un calendrier et un budget transparent.', items: ['Proposition créative', 'Planning détaillé', 'Devis transparent', 'Validation des jalons'] },
  { step: '03', title: 'Production & Déploiement', description: 'Nos équipes pluridisciplinaires passent à l\'action pour donner vie à votre projet avec rigueur et créativité.', items: ['Design & développement', 'Tests & recettes', 'Aller-retours itératifs', 'Mise en production'] },
  { step: '04', title: 'Suivi & Optimisation', description: 'Nous assurons un accompagnement post-livraison pour mesurer la performance et optimiser en continu.', items: ['Rapport de performance', 'Optimisation continue', 'Support prioritaire', 'Évolution & scaling'] },
]

const technologies = [
  { category: 'Web', items: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Prisma'] },
  { category: 'Design', items: ['Figma', 'Adobe Suite', 'After Effects', 'Premiere Pro', 'Blender', 'DaVinci Resolve'] },
  { category: 'Marketing', items: ['Google Ads', 'Meta Ads', 'Semrush', 'HubSpot', 'Mailchimp', 'Google Analytics'] },
  { category: 'Infrastructure', items: ['AWS', 'Vercel', 'Docker', 'Linux', 'MongoDB', 'PostgreSQL'] },
]

export default function ServicesPage() {
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
              Huit pôles d'expertise
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.05] tracking-tight">
              Des solutions complètes
              <br />
              <span className="text-primary">pour votre réussite</span>
            </h1>

            <p className="mt-6 text-lg text-white/50 max-w-xl leading-relaxed">
              De la stratégie de communication à l'infrastructure IT, nous couvrons 
              l'ensemble de vos besoins digitaux avec une équipe de 20 experts passionnés.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link href="#services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base group">
                  Découvrir nos services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-accent/40 text-accent hover:bg-accent hover:text-secondary hover:border-accent px-8 py-6 text-base">
                  Parler à un expert
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
              { value: '8', label: 'Pôles d\'expertise' },
              { value: '20', label: 'Experts créatifs' },
              { value: '10+', label: 'Années d\'expérience' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-heading font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/40 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection className="py-28" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nos domaines d'expertise"
            subtitle="De la conception à la réalisation, nous maîtrisons toute la chaîne de valeur du digital pour vous offrir des solutions intégrées et performantes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Approach */}
      <section className="py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Notre approche"
            subtitle="Une méthode de travail éprouvée qui place la collaboration et la performance au cœur de chaque projet."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(228,30,38,0.08),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Notre processus en 4 étapes"
            subtitle="Une méthodologie structurée qui garantit la qualité, la transparence et la réussite de vos projets."
            light
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-heading font-bold text-primary/20 leading-none">{step.step}</span>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent ml-4" />
                  )}
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{step.description}</p>

                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technologies & outils"
            subtitle="Nous utilisons les meilleures technologies du marché pour livrer des solutions performantes, sécurisées et évolutives."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {technologies.map((group) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-gray-100 bg-surface/50"
              >
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-white rounded-lg border border-gray-100 text-xs font-medium text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
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
              Prêt à démarrer votre projet ?
            </h2>
            <p className="mt-4 text-lg text-white/50 max-w-lg mx-auto">
              Discutons de vos besoins et construisons ensemble une solution sur-mesure.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-base group">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-accent/40 text-accent hover:bg-accent hover:text-secondary px-10 py-6 text-base">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
