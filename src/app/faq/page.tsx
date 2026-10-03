'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/shared/AnimatedSection'

const faqs = [
  { question: 'Quels sont les délais de réalisation d\'un projet ?', answer: 'Les délais varient selon la nature et la complexité du projet. Un site web peut prendre 2 à 6 semaines, une campagne marketing 1 à 3 mois, et une production vidéo 2 à 4 semaines.' },
  { question: 'Comment se déroule notre collaboration ?', answer: 'Notre processus commence par un audit de vos besoins, suivi d\'une proposition détaillée. Une fois validée, nous passons à la phase de création avec des points d\'étape réguliers.' },
  { question: 'Quels sont vos tarifs ?', answer: 'Nos tarifs sont personnalisés en fonction de chaque projet. Nous vous invitons à demander un devis gratuit pour une estimation adaptée à vos besoins.' },
  { question: 'Proposez-vous un service après-vente ?', answer: 'Oui, nous assurons un suivi complet après la livraison de vos projets. Nous proposons également des contrats de maintenance pour vos solutions web.' },
  { question: 'Travaillez-vous avec des clients hors du Sénégal ?', answer: 'Absolument ! Nous accompagnons des clients dans plusieurs pays d\'Afrique et d\'Europe. Nos solutions sont adaptées au contexte international.' },
  { question: 'Puis-je voir des exemples de vos réalisations ?', answer: 'Bien sûr ! Consultez notre portfolio pour découvrir nos projets récents dans divers secteurs d\'activité.' },
]

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white">
            FAQ
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Questions fréquemment posées
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-base font-bold text-secondary pr-4">{faq.question}</h3>
                  <svg className="h-5 w-5 text-muted-foreground shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
