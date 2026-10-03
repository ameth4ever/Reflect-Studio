'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '200', suffix: '+', label: 'Projets Livrés' },
  { value: '80', suffix: '+', label: 'Clients Satisfaits' },
  { value: '10', suffix: '+', label: "Années d'Expérience" },
  { value: '20', suffix: '+', label: 'Experts Créatifs' },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(228,30,38,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl font-heading font-bold text-white tracking-tight">
                {stat.value}<span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-white/50 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
