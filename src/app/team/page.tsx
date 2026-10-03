'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const team = [
  { name: 'Moussa Diop', position: 'Directeur Général', bio: 'Visionnaire et stratège, il dirige REFLECT STUDIO avec passion.' },
  { name: 'Fatou Sarr', position: 'Directrice Créative', bio: 'Expert en design et communication visuelle.' },
  { name: 'Ibrahima Fall', position: 'Directeur Technique', bio: 'Expert en développement web et solutions IT.' },
  { name: 'Aminata Ba', position: 'Chef de Projet Marketing', bio: 'Spécialiste en stratégies marketing digital.' },
  { name: 'Omar Ndiaye', position: 'Producteur Audiovisuel', bio: 'Expert en production vidéo et motion design.' },
  { name: 'Rokhaya Gueye', position: 'Community Manager', bio: 'Passionnée par les réseaux sociaux et le contenu.' },
]

export default function TeamPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white">
            Notre Équipe
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Des professionnels passionnés au service de vos projets
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-primary/60 text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary">{member.name}</h3>
                <p className="text-sm text-primary font-medium mt-1">{member.position}</p>
                <p className="text-sm text-muted-foreground mt-4">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
