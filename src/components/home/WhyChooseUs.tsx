'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Target, Users, Award, Sparkles } from 'lucide-react'

const reasons = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Innovation',
    description: 'Nous anticipons les tendances pour vous offrir un temps d\'avance. Veille technologique, outils de pointe et créativité permanente sont au cœur de notre ADN.',
    gradient: 'from-red-500/10 to-orange-500/10',
    border: 'border-red-500/20',
    color: 'text-red-400',
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Résultats',
    description: 'Chaque action est mesurée et optimisée. Nous définissons des KPI clairs avec vous et pilotons la performance pour garantir un retour sur investissement tangible.',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-500/20',
    color: 'text-blue-400',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Expertise',
    description: 'Une équipe pluridisciplinaire de 20 talents : stratèges, créatifs, développeurs et techniciens. Chaque compétence est mobilisée au service de votre projet.',
    gradient: 'from-purple-500/10 to-pink-500/10',
    border: 'border-purple-500/20',
    color: 'text-purple-400',
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: 'Qualité',
    description: 'Processus qualité certifié, relectures systématiques et validation client à chaque jalon. Nous ne livrons que ce dont nous sommes fiers.',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    border: 'border-emerald-500/20',
    color: 'text-emerald-400',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-none lg:max-w-lg"
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">Pourquoi Nous</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary tracking-tight">
              Ce qui fait notre
              <span className="text-primary"> différence</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Chez REFLECT STUDIO, nous ne croyons pas aux solutions génériques. 
              Chaque projet est pensé comme une collaboration unique : nous prenons 
              le temps de comprendre votre secteur, vos défis et vos ambitions pour 
              construire une stratégie sur-mesure qui dépasse vos attentes.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Approche 100% personnalisée et agile',
                'Équipe pluridisciplinaire de 20 talents senior',
                'Respect des délais et transparence budgétaire',
                'Support et suivi continu post-livraison',
                'Expertise locale avec vision internationale',
                'Garantie satisfaction ou refonte offerte',
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
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                whileHover={{ y: -2 }}
                className={`relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${reason.gradient} border ${reason.border} overflow-hidden group active:scale-[0.98] transition-transform`}
              >
                <div className={`h-10 w-10 rounded-lg bg-secondary flex items-center justify-center ${reason.color} mb-4`}>
                  {reason.icon}
                </div>
                <h3 className="text-base font-heading font-bold text-secondary mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
