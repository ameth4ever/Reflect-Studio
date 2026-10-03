'use client'

import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { TestimonialCard } from '@/components/testimonials/TestimonialCard'

const testimonials = [
  { clientName: 'Mamadou Ndiaye', company: 'Directeur Marketing', rating: 5, review: 'REFLECT STUDIO a transformé notre communication. Leur professionnalisme et leur créativité ont dépassé nos attentes. Je recommande vivement leurs services.' },
  { clientName: 'Awa Fall', company: 'Responsable Communication ONG', rating: 5, review: 'Une équipe exceptionnelle qui a su comprendre nos besoins et produire des vidéos institutionnelles de grande qualité. Un vrai partenariat de confiance.' },
  { clientName: 'Cheikh Gueye', company: 'Entrepreneur', rating: 4, review: 'De la conception à la réalisation de mon site web, tout a été parfait. Un accompagnement personnalisé et des résultats à la hauteur de mes attentes.' },
  { clientName: 'Ndèye Mbaye', company: 'Directrice Marketing Banque', rating: 5, review: 'Notre campagne publicitaire a été un véritable succès grâce à l\'expertise et la créativité de l\'équipe REFLECT STUDIO.' },
  { clientName: 'Papa Diop', company: 'CEO Startup', rating: 5, review: 'Ils ont su donner vie à notre vision avec une identité visuelle percutante et un site web moderne. Un grand merci à toute l\'équipe !' },
  { clientName: 'Mariam Ba', company: 'Coordinatrice ONG', rating: 4, review: 'Professionnalisme, réactivité et créativité sont les mots qui définissent REFLECT STUDIO. Un partenaire de confiance pour nos projets de communication.' },
]

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white">
            Témoignages
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Ce que nos clients disent de nous
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.clientName} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
