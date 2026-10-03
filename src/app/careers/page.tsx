'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Briefcase } from 'lucide-react'

const positions = [
  { title: 'Chef de Projet Digital', department: 'Marketing', location: 'Dakar, Sénégal', type: 'Full-time', description: 'Nous recherchons un chef de projet digital pour piloter nos campagnes marketing.' },
  { title: 'Développeur Web Full Stack', department: 'IT', location: 'Dakar, Sénégal', type: 'Full-time', description: 'Rejoignez notre équipe technique pour développer des solutions web innovantes.' },
  { title: 'Motion Designer', department: 'Créatif', location: 'Dakar, Sénégal', type: 'Full-time', description: 'Créer des animations et motion designs de qualité pour nos clients.' },
  { title: 'Community Manager', department: 'Marketing', location: 'Dakar, Sénégal', type: 'Contract', description: 'Gérer la présence social media de nos clients et créer du contenu engageant.' },
]

export default function CareersPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white">
            Carrières
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Rejoignez une équipe passionnée et talentueuse
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Postes à pourvoir" subtitle="Découvrez nos opportunités" />

          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-secondary">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center"><Briefcase className="h-4 w-4 mr-1" /> {position.department}</span>
                      <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> {position.location}</span>
                      <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {position.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">{position.description}</p>
                  </div>
                  <Button variant="outline" className="shrink-0 border-primary text-primary hover:bg-primary hover:text-white">
                    Postuler
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16 p-12 bg-surface rounded-xl">
            <h3 className="text-2xl font-heading font-bold text-secondary mb-4">Vous ne trouvez pas votre poste ?</h3>
            <p className="text-muted-foreground mb-6">Envoyez-nous votre candidature spontanée, nous sommes toujours à la recherche de talents.</p>
            <Button className="bg-primary hover:bg-primary/90 text-white">Envoyer une candidature</Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
