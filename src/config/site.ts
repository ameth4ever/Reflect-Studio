export const siteConfig = {
  name: 'REFLECT STUDIO',
  description: 'Agence de Communication, Marketing, Production Audiovisuelle et Solutions Digitales',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://reflect-studio.com',
  ogImage: '/og.jpg',
  keywords: [
    'Communication Sénégal',
    'Production Audiovisuelle Sénégal',
    'Agence Marketing Dakar',
    'Développement Web Dakar',
    'Studio Créatif Sénégal',
  ],
  links: {
    facebook: 'https://www.facebook.com/byAbdouAzizCamara',
    instagram: 'https://www.instagram.com/abdouazizcamara',
    linkedin: 'https://www.linkedin.com/in/abdou-aziz-camara-6380b5358',
    youtube: 'https://www.youtube.com/@reflectstudiopro2',
    twitter: 'https://x.com/reflectstudio1',
  },
}

export const siteNavigation = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Communication', href: '/services/communication' },
      { label: 'Marketing', href: '/services/marketing' },
      { label: 'Audiovisuel', href: '/services/audiovisuel' },
      { label: 'Développement Web', href: '/services/developpement-web' },
      { label: 'Design Graphique', href: '/services/design-graphique' },
      { label: 'Solutions IT', href: '/services/solutions-it' },
      { label: 'Réseau & Infrastructure', href: '/services/reseau-infrastructure' },
      { label: 'Sécurité des Systèmes', href: '/services/securite-systemes' },
    ],
  },
  { label: 'Produits', href: '/products' },
  { label: 'Réalisations', href: '/portfolio' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const stats = [
  { value: 150, suffix: '+', label: 'Projets Réalisés' },
  { value: 50, suffix: '+', label: 'Clients Satisfaits' },
  { value: 8, suffix: '+', label: 'Années d\'Expérience' },
  { value: 20, suffix: '+', label: 'Experts Créatifs' },
]
