'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    clientName: 'Mamadou Ndiaye',
    company: 'Directeur Marketing — Groupe Sonatel',
    review: 'Nous avons confié à REFLECT STUDIO la refonte complète de notre communication institutionnelle. Le résultat est à la hauteur de nos ambitions : une stratégie de marque cohérente, des supports d\'une qualité irréprochable et une campagne digitale qui a généré +40% d\'engagement. Leur compréhension de notre écosystème et leur réactivité ont fait la différence.',
    rating: 5,
  },
  {
    clientName: 'Awa Fall',
    company: 'Responsable Communication — ONG ENDA',
    review: 'Travailler avec REFLECT STUDIO a été une expérience remarquable. Ils ont su capturer l\'essence de notre mission à travers un film institutionnel touchant et des supports de campagne percutants. La coordination a été fluide, les délais tenus et le résultat a dépassé nos attentes. Une référence au Sénégal pour la production audiovisuelle.',
    rating: 5,
  },
  {
    clientName: 'Cheikh Gueye',
    company: 'Fondateur — Gueye Logistics',
    review: 'Je suis entrepreneur et j\'avais besoin d\'un site e-commerce solide pour développer mon activité. REFLECT STUDIO m\'a accompagné de A à Z : conception, développement, référencement et même la stratégie marketing digitale. Mon chiffre d\'affaires en ligne a doublé en 3 mois. Je les recommande les yeux fermés à tous les porteurs de projets.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">Témoignages</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary tracking-tight">
            Ce que disent
            <span className="text-primary"> nos clients</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-xl">
            La satisfaction de nos partenaires est notre plus belle récompense. 
            Découvrez leurs retours d'expérience.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.clientName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-primary/10 absolute top-6 right-6" />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold">
                  {testimonial.clientName.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">{testimonial.clientName}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
