'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Send } from 'lucide-react'

const projectTypes = ['Site Web', 'Application Mobile', 'Campagne Marketing', 'Production Vidéo', 'Design Graphique', 'Stratégie Communication', 'Infrastructure IT', 'Autre']

const budgets = ['< 500 000 FCFA', '500 000 - 1 000 000 FCFA', '1 000 000 - 5 000 000 FCFA', '5 000 000 - 10 000 000 FCFA', '> 10 000 000 FCFA']

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="h-16 w-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-heading font-bold text-green-800 mb-2">Devis demandé !</h3>
        <p className="text-green-600">Nous vous contacterons sous 24h pour discuter de votre projet.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">Prénom</Label>
          <Input id="firstName" placeholder="Votre prénom" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Nom</Label>
          <Input id="lastName" placeholder="Votre nom" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Entreprise / Organisation</Label>
        <Input id="company" placeholder="Nom de votre entreprise" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="votre@email.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" type="tel" placeholder="+221 XX XXX XX XX" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType">Type de projet</Label>
        <select
          id="projectType"
          className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Sélectionnez un type de projet</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">Budget estimé</Label>
        <select
          id="budget"
          className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Sélectionnez une fourchette de budget</option>
          {budgets.map((budget) => (
            <option key={budget} value={budget}>{budget}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline">Délai souhaité</Label>
        <Input id="timeline" type="text" placeholder="Ex: 1 mois, 3 mois, Urgent..." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description du projet</Label>
        <Textarea id="description" placeholder="Décrivez votre projet en détail..." rows={5} required className="resize-none" />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white py-6">
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Envoi en cours...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            Demander un devis <Send className="ml-2 h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  )
}
