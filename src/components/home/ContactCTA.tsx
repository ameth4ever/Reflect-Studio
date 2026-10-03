'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageSquare } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(228,30,38,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-[1.1]">
            Prêt à concrétiser
            <br />
            <span className="text-primary">votre projet</span> ?
          </h2>

          <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/quote">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base group">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-accent/40 text-accent hover:bg-accent hover:text-secondary hover:border-accent px-8 py-6 text-base">
                Nous contacter
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
