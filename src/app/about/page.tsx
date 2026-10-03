'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { Button } from '@/components/ui/button'
import { ArrowRight, Lightbulb, Target, Heart, Shield, Users, Briefcase, MapPin, Check } from 'lucide-react'

const stats = [
  { value: '10+', label: "Années d'existence" },
  { value: '200+', label: 'Projets réalisés' },
  { value: '80+', label: 'Clients accompagnés' },
  { value: '20', label: 'Experts dans l\'équipe' },
  { value: '6', label: 'Pôles d\'expertise' },
]

const values = [
  { icon: <Lightbulb className="h-6 w-6" />, title: 'Innovation', description: 'Nous repoussons les limites de la créativité et de la technologie pour offrir des solutions avant-gardistes qui anticipent les tendances du marché.', gradient: 'from-red-500/10 to-orange-500/10', border: 'border-red-500/20', color: 'text-red-400' },
  { icon: <Target className="h-6 w-6" />, title: 'Excellence', description: 'Nous visons l\'excellence dans chaque projet avec une attention méticuleuse aux détails, des processus qualité rigoureux et une exigence de résultat permanente.', gradient: 'from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/20', color: 'text-blue-400' },
  { icon: <Heart className="h-6 w-6" />, title: 'Engagement', description: 'Nous sommes engagés envers la satisfaction de nos clients. Chaque promesse est tenue, chaque délai respecté, chaque livrable à la hauteur des attentes.', gradient: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/20', color: 'text-purple-400' },
  { icon: <Shield className="h-6 w-6" />, title: 'Intégrité', description: 'Nous agissons avec transparence, honnêteté et respect dans toutes nos relations. La confiance est le fondement de nos partenariats.', gradient: 'from-emerald-500/10 to-teal-500/10', border: 'border-emerald-500/20', color: 'text-emerald-400' },
]

const timeline = [
  { year: '2014', title: 'Genèse', description: 'Rencontre des fondateurs autour d\'une vision commune : créer une agence qui révolutionne la communication au Sénégal.', details: ['Étude de marché approfondie', 'Définition du positionnement', 'Construction du business plan'] },
  { year: '2016', title: 'Fondation', description: 'Création officielle de REFLECT STUDIO à Dakar avec une équipe de 4 passionnés et un premier client majeur.', details: ['Premier bureau à Dakar', 'Recrutement de l\'équipe initiale', 'Premier contrat avec une entreprise du CAC 40'] },
  { year: '2018', title: 'Expansion & Diversification', description: 'Ouverture de trois nouveaux départements (Audiovisuel, IT, Design) et recrutement de 10 experts supplémentaires.', details: ['Lancement du pôle audiovisuel', 'Équipement studio professionnel', 'Premiers clients internationaux'] },
  { year: '2020', title: 'Innovation Digitale', description: 'Lancement de notre division marketing digital et développement web. Pivot vers les solutions technologiques.', details: ['Création du département web', 'Certifications Google Partners', 'Lancement de l\'offre e-commerce'] },
  { year: '2022', title: 'Reconnaissance', description: 'Reconnu parmi les meilleures agences du Sénégal avec des projets primés et une présence dans 5 pays africains.', details: ['Prix de la meilleure agence', 'Ouverture à 5 pays', 'Équipe de 20 collaborateurs'] },
  { year: '2024', title: 'Leadership Régional', description: 'Leader régional avec des clients dans 10+ pays, une équipe de 20 talents et un portefeuille de 200+ projets réalisés.', details: ['Clients dans 10+ pays', '+200 projets livrés', 'Partenariats stratégiques'] },
  { year: '2025', title: 'Nouveaux Horizons', description: 'Expansion continue avec le lancement de nouvelles offres et le renforcement de notre présence sur le continent africain.', details: ['Nouvelles offres innovantes', 'Expansion continentale', 'Innovation R&D'] },
]

const teamStats = [
  { label: 'Experts créatifs', value: '20' },
  { label: 'Nationalités', value: '5' },
  { label: 'Âge moyen', value: '32 ans' },
  { label: 'Femmes dans l\'équipe', value: '45%' },
]

const expertise = [
  'Communication & RP', 'Marketing Digital', 'Production Audiovisuelle',
  'Développement Web', 'Design Graphique', 'Solutions IT',
  'Réseau & Infrastructure', 'Sécurité des Systèmes',
]

export default function AboutPage() {
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
              Depuis 2016 — Dakar, Sénégal
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.05] tracking-tight">
              Une agence qui
              <br />
              <span className="text-primary">transforme</span> les idées
              <br />
              en impact
            </h1>

            <p className="mt-6 text-lg text-white/50 max-w-xl leading-relaxed">
              Depuis notre création à Dakar, nous accompagnons les entreprises et 
              institutions dans leur transformation digitale et leur stratégie de 
              communication avec une équipe de 20 experts passionnés.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link href="#story">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base group">
                  Découvrir notre histoire
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-accent/40 text-accent hover:bg-accent hover:text-secondary hover:border-accent px-8 py-6 text-base">
                  Rejoindre l'aventure
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-12"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-heading font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/40 mt-1 whitespace-nowrap">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <AnimatedSection className="py-28" id="story">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">Notre Histoire</span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary tracking-tight">
                Une agence née d'une
                <span className="text-primary"> passion</span> pour la création
              </h2>

              <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  REFLECT STUDIO est née d&apos;une conviction : la communication et la technologie sont les 
                  leviers les plus puissants pour transformer les organisations et créer de la valeur durable.
                </p>
                <p>
                  Ce qui a commencé comme une petite équipe de 4 passionnés dans un bureau du centre-ville 
                  de Dakar est aujourd&apos;hui une agence de 20 talents qui rayonne dans toute l&apos;Afrique 
                  de l&apos;Ouest. Notre croissance repose sur une exigence constante : offrir à chaque client 
                  des solutions qui dépassent ses attentes.
                </p>
                <p>
                  Nous ne faisons pas que produire des campagnes ou des sites web — nous construisons 
                  des partenariats durables avec nos clients, basés sur la confiance, la transparence 
                  et des résultats concrets.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: <Briefcase className="h-4 w-4" />, label: '200+ projets' },
                  { icon: <Users className="h-4 w-4" />, label: '20 experts' },
                  { icon: <MapPin className="h-4 w-4" />, label: '10+ pays' },
                  { icon: <Target className="h-4 w-4" />, label: '98% satisfaction' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-gray-100">
                    <div className="h-8 w-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-secondary">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-2xl" />
              <div className="relative h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                <Image
                  src="/images/about-custom.webp"
                  alt="REFLECT STUDIO"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(228,30,38,0.15),transparent_60%)]" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <div className="h-1 w-8 rounded-full bg-primary" />
                    Dakar — Sénégal
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <section className="py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-2xl bg-white border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Notre Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Permettre aux entreprises et organisations de communiquer efficacement, de renforcer 
                leur image de marque et d&apos;atteindre leurs objectifs grâce à des solutions créatives, 
                innovantes et parfaitement adaptées à leurs enjeux spécifiques.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-primary font-medium">
                <div className="h-1 w-6 rounded-full bg-primary" />
                Donner vie à vos ambitions
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative p-10 rounded-2xl bg-white border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <Lightbulb className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Devenir le partenaire de référence en communication et transformation digitale en 
                Afrique, reconnu pour l&apos;excellence de ses réalisations, l&apos;impact de ses solutions 
                et son engagement envers l&apos;innovation.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-primary font-medium">
                <div className="h-1 w-6 rounded-full bg-primary" />
                Révolutionner la communication en Afrique
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nos Valeurs"
            subtitle="Quatre principes fondamentaux qui guident chacune de nos actions et façonnent notre culture d'entreprise."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${value.gradient} border ${value.border} overflow-hidden group`}
              >
                <div className={`h-12 w-12 rounded-xl bg-secondary flex items-center justify-center ${value.color} mb-5`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-secondary mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(228,30,38,0.08),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Notre Parcours"
            subtitle="De la vision à la réalité : les étapes clés qui ont façonné REFLECT STUDIO."
            light
          />

          <div className="relative mt-16">
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden lg:block" />

            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-start gap-8 pb-16 last:pb-0 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                  <span className="text-sm font-bold text-primary">{event.year}</span>
                  <h3 className="text-2xl font-heading font-bold text-white mt-1">{event.title}</h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed max-w-md ml-auto">
                    {event.description}
                  </p>
                  <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                    {event.details.map((detail) => (
                      <li key={detail} className={`flex items-center gap-2 text-sm text-gray-500 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden lg:flex items-center justify-center w-12 shrink-0">
                  <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-secondary" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">L'Équipe</span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary tracking-tight">
                Des talents au service
                <span className="text-primary"> de vos projets</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Notre équipe pluridisciplinaire réunit des experts passionnés issus de divers horizons. 
                Stratèges, créatifs, développeurs et techniciens travaillent en synergie pour vous 
                offrir des solutions complètes et cohérentes.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {teamStats.map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-surface border border-gray-100">
                    <div className="text-2xl font-heading font-bold text-secondary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-100"
                >
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center mb-3">
                    <span className="text-xs font-bold">{item.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-bold text-secondary">{item}</span>
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
              Vous aussi, faites partie
              <br />
              de notre <span className="text-primary">histoire</span>
            </h2>
            <p className="mt-4 text-lg text-white/50 max-w-lg mx-auto">
              Rejoignez les 80+ entreprises qui nous font confiance et construisons ensemble votre success story.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-base group">
                  Démarrer un projet
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-accent/40 text-accent hover:bg-accent hover:text-secondary px-10 py-6 text-base">
                  Nous rencontrer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
