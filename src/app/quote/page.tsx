'use client'

import { motion } from 'framer-motion'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { CheckCircle } from 'lucide-react'

const steps = [
  'Remplissez le formulaire ci-dessous',
  'Nous analysons votre demande',
  'Nous vous contactons sous 24h',
  'Nous élaborons une proposition sur mesure',
]

export default function QuotePage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white">
            Demander un devis
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Parlez-nous de votre projet, nous vous ferons une proposition adaptée
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">Formulaire de demande</h2>
              <QuoteForm />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-2xl font-heading font-bold text-secondary mb-6">Comment ça marche ?</h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/5 text-primary flex items-center justify-center shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-secondary font-medium pt-2">{step}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-surface rounded-xl">
                <h3 className="text-lg font-heading font-bold text-secondary mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  {['Réponse sous 24h', 'Devis gratuit et sans engagement', 'Accompagnement personnalisé', 'Expertise pluridisciplinaire'].map((item) => (
                    <li key={item} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
