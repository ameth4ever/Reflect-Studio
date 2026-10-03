'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Check } from 'lucide-react'
import { SectionHeading } from '@/components/layout/SectionHeading'

const servicesData: Record<string, { title: string; description: string; benefits: string[]; process: { title: string; description: string }[] }> = {
  communication: {
    title: 'Communication',
    description: 'Nous élaborons des stratégies de communication intégrée qui renforcent votre image de marque et optimisent votre visibilité auprès de vos cibles.',
    benefits: ['Stratégie de marque', 'Relations presse', 'Communication digitale', 'Brand content', 'Crise & réputation', 'Événementiel'],
    process: [
      { title: 'Audit', description: 'Analyse de votre situation actuelle' },
      { title: 'Stratégie', description: 'Définition des objectifs et cibles' },
      { title: 'Déploiement', description: 'Mise en œuvre des actions' },
      { title: 'Mesure', description: 'Suivi et optimisation' },
    ],
  },
  marketing: {
    title: 'Marketing Digital',
    description: 'Des campagnes marketing performantes qui génèrent des résultats mesurables et un ROI optimal pour votre entreprise.',
    benefits: ['SEO/SEA', 'Social Media', 'Email Marketing', 'Content Marketing', 'Analytics', 'Marketing Automation'],
    process: [
      { title: 'Analyse', description: 'Étude du marché et concurrence' },
      { title: 'Plan', description: 'Élaboration du plan marketing' },
      { title: 'Exécution', description: 'Lancement des campagnes' },
      { title: 'Optimisation', description: 'Ajustement basé sur les données' },
    ],
  },
  audiovisuel: {
    title: 'Production Audiovisuelle',
    description: 'Des productions vidéo de qualité professionnelle pour tous vos besoins : institutions, publicité, événements et contenus digitaux.',
    benefits: ['Vidéos institutionnelles', 'Spots publicitaires', 'Motion Design', 'Documentaires', 'Captation événementielle', 'Post-production'],
    process: [
      { title: 'Pré-production', description: 'Scénario et storyboard' },
      { title: 'Production', description: 'Tournage et captation' },
      { title: 'Post-production', description: 'Montage et effets' },
      { title: 'Livraison', description: 'Formats optimisés' },
    ],
  },
  'developpement-web': {
    title: 'Développement Web',
    description: 'Des sites web et applications modernes, performants et adaptés à vos besoins, développés avec les dernières technologies.',
    benefits: ['Sites vitrines', 'E-commerce', 'Applications web', 'CMS sur mesure', 'API & intégrations', 'Maintenance'],
    process: [
      { title: 'Conception', description: 'Maquettage et architecture' },
      { title: 'Développement', description: 'Frontend et backend' },
      { title: 'Tests', description: 'QA et optimisation' },
      { title: 'Déploiement', description: 'Mise en production' },
    ],
  },
  'design-graphique': {
    title: 'Design Graphique',
    description: 'Une identité visuelle forte et cohérente qui vous démarque et séduit votre audience cible.',
    benefits: ['Identité visuelle', 'Branding', 'Print & packaging', 'Supports digitaux', 'Illustration', 'Motion design'],
    process: [
      { title: 'Brief', description: 'Recueil des besoins' },
      { title: 'Concepts', description: 'Propositions créatives' },
      { title: 'Développement', description: 'Finalisation du design' },
      { title: 'Livraison', description: 'Fichiers prêts à l\'emploi' },
    ],
  },
  'solutions-it': {
    title: 'Solutions IT',
    description: 'Des solutions technologiques sur mesure pour optimiser votre infrastructure et vos processus métier.',
    benefits: ['Infrastructure', 'Cloud', 'Maintenance', 'Support technique', 'Conseil', 'Formation'],
    process: [
      { title: 'Diagnostic', description: 'Évaluation des besoins' },
      { title: 'Solution', description: 'Proposition technique' },
      { title: 'Implémentation', description: 'Déploiement' },
      { title: 'Suivi', description: 'Maintenance continue' },
    ],
  },
  'reseau-infrastructure': {
    title: 'Réseau & Infrastructure',
    description: 'Des solutions réseau robustes et performantes pour assurer la connectivité et la productivité de votre entreprise.',
    benefits: ['Réseaux LAN/WAN', 'Fibre optique', 'WiFi professionnel', 'Sécurité réseau', 'VoIP', 'Câblage structuré'],
    process: [
      { title: 'Audit', description: 'Analyse de l\'existant' },
      { title: 'Conception', description: 'Architecture réseau' },
      { title: 'Installation', description: 'Mise en place' },
      { title: 'Support', description: 'Maintenance et assistance' },
    ],
  },
  'securite-systemes': {
    title: 'Sécurité des Systèmes',
    description: 'Protégez vos données et votre infrastructure avec nos solutions de sécurité complètes et adaptées.',
    benefits: ['Audit de sécurité', 'Protection données', 'Cybersécurité', 'Sauvegarde', 'Conformité RGPD', 'Formation'],
    process: [
      { title: 'Évaluation', description: 'Analyse des risques' },
      { title: 'Plan', description: 'Plan de sécurité' },
      { title: 'Implémentation', description: 'Mise en place des solutions' },
      { title: 'Monitoring', description: 'Surveillance continue' },
    ],
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const service = servicesData[slug]

  if (!service) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-4xl font-heading font-bold">Service non trouvé</h1>
        <Link href="/services" className="text-primary mt-4 inline-block">Retour aux services</Link>
      </div>
    )
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-sm text-gray-400 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-300 max-w-3xl"
          >
            {service.description}
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Avantages" subtitle="Ce que notre service vous apporte" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center p-4 rounded-lg bg-surface"
              >
                <Check className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span className="text-secondary font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Notre Processus" subtitle="Comment nous travaillons" />

          <div className="space-y-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="w-px h-full bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-heading font-bold text-secondary">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">Intéressé par ce service ?</h2>
          <Link href="/quote">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base">
              Demander un devis
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
