'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProductCard } from '@/components/products/ProductCard'
import { Search } from 'lucide-react'

const categories = ['Tous', 'Caméras', 'Audio', 'Éclairage', 'Visiographie', 'Accessoires']

const products = [
  {
    title: 'Caméra Sony Alpha 7 IV',
    category: 'Caméras',
    price: 'Sur demande',
    description: 'Appareil photo hybride plein format 33MP avec stabilisation 5 axes et vidéo 4K 60fps.',
    gradient: 'from-slate-800 via-gray-900 to-black',
    tags: ['Plein Format', '4K', 'Hybride'],
    rating: 5,
  },
  {
    title: 'Caméra Canon EOS R6 Mark II',
    category: 'Caméras',
    price: 'Sur demande',
    description: 'Boîtier hybride 24.2MP avec vidéo 4K 60fps, stabilisation IBIS et autofocus intelligent.',
    gradient: 'from-gray-700 via-gray-800 to-gray-900',
    tags: ['24.2MP', 'IBIS', 'Canon RF'],
    rating: 5,
  },
  {
    title: 'Caméra Panasonic Lumix GH6',
    category: 'Caméras',
    price: 'Sur demande',
    description: 'Caméra Micro 4/3 avec vidéo 5.7K 60fps, enregistrement ProRes et stabilisation puissante.',
    gradient: 'from-zinc-700 via-zinc-800 to-black',
    tags: ['Micro 4/3', '5.7K', 'ProRes'],
    rating: 4,
  },
  {
    title: 'Projecteur Epson EB-810E',
    category: 'Visiographie',
    price: 'Sur demande',
    description: 'Projecteur laser 4K 7000 lumens avec écran interactif intégré pour présentations professionnelles.',
    gradient: 'from-blue-700 via-blue-800 to-indigo-900',
    tags: ['4K', '7000 Lumens', 'Laser'],
    rating: 5,
  },
  {
    title: 'Écran Interactif Samsung Flip 85"',
    category: 'Visiographie',
    price: 'Sur demande',
    description: 'Écran tactile interactif 85" 4K pour conférences, formations et collaborations en temps réel.',
    gradient: 'from-sky-600 via-blue-700 to-indigo-800',
    tags: ['85"', 'Tactile', '4K'],
    rating: 5,
  },
  {
    title: 'Vidéoprojecteur Optoma ZH406ST',
    category: 'Visiographie',
    price: 'Sur demande',
    description: 'Projecteur laser courte focale 1080p 4500 lumens, idéal pour salles de réunion et classes.',
    gradient: 'from-cyan-600 via-blue-600 to-indigo-700',
    tags: ['Courte Focale', 'Laser', '1080p'],
    rating: 4,
  },
  {
    title: 'Microphone Rode NTG5',
    category: 'Audio',
    price: 'Sur demande',
    description: 'Microphone canon professionnel super-cardioïde pour prise de son broadcast et cinéma.',
    gradient: 'from-gray-600 via-gray-700 to-gray-800',
    tags: ['Canon', 'Broadcast', 'Super-cardioïde'],
    rating: 5,
  },
  {
    title: 'Enceinte JBL EON ONE Compact',
    category: 'Audio',
    price: 'Sur demande',
    description: 'Enceinte amplifiée portable avec mixeur intégré, parfaite pour événements et conférences.',
    gradient: 'from-stone-600 via-stone-700 to-stone-800',
    tags: ['Portable', 'Mixeur Intégré', 'Bluetooth'],
    rating: 4,
  },
  {
    title: 'Table de Mixage Yamaha MG10XU',
    category: 'Audio',
    price: 'Sur demande',
    description: 'Table de mixage 10 canaux avec effets intégrés et interface USB pour enregistrement.',
    gradient: 'from-neutral-600 via-neutral-700 to-neutral-800',
    tags: ['10 Canaux', 'USB', 'Effets'],
    rating: 4,
  },
  {
    title: 'Kit Éclairage LED Godox SL150W',
    category: 'Éclairage',
    price: 'Sur demande',
    description: 'Panneau LED 150W avec télécommande, parfait pour studio, interview et production vidéo.',
    gradient: 'from-amber-600 via-orange-600 to-red-600',
    tags: ['150W', 'LED', 'Télécommande'],
    rating: 5,
  },
  {
    title: 'Panneau LED Aputure Amaran 200d',
    category: 'Éclairage',
    price: 'Sur demande',
    description: 'Panneau LED 200W daylight avec monture Bowens, contrôle sans fil Sidus Link.',
    gradient: 'from-orange-500 via-red-500 to-rose-600',
    tags: ['200W', 'Daylight', 'Sidus Link'],
    rating: 5,
  },
  {
    title: 'Trépied Manfrotto 055',
    category: 'Accessoires',
    price: 'Sur demande',
    description: 'Trépied professionnel en aluminium avec rotule hydraulique pour vidéo et photo.',
    gradient: 'from-red-700 via-red-800 to-red-900',
    tags: ['Aluminium', 'Professionnel', 'Rotule Hydraulique'],
    rating: 5,
  },
  {
    title: 'Drone DJI Mavic 3 Pro',
    category: 'Caméras',
    price: 'Sur demande',
    description: 'Drone professionnel avec caméra triple Hasselblad, vidéo 5.1K et obstacle avoidance.',
    gradient: 'from-gray-800 via-gray-900 to-black',
    tags: ['Hasselblad', '5.1K', 'Obstacle Avoidance'],
    rating: 5,
  },
  {
    title: 'Vidéoprojecteur BenQ LU950',
    category: 'Visiographie',
    price: 'Sur demande',
    description: 'Projecteur laser DLP 4K 8000 lumens pour grandes salles, auditoriums et événements.',
    gradient: 'from-teal-600 via-cyan-600 to-blue-700',
    tags: ['8000 Lumens', 'DLP', 'Grande Salle'],
    rating: 5,
  },
  {
    title: 'Casque Audio Sony MDR-7506',
    category: 'Audio',
    price: 'Sur demande',
    description: 'Casque studio fermé professionnel avec monitoring précis et confort longue durée.',
    gradient: 'from-slate-600 via-slate-700 to-slate-800',
    tags: ['Studio', 'Fermé', 'Monitoring'],
    rating: 4,
  },
  {
    title: 'Sac Caméra Lowepro ProTactic 450',
    category: 'Accessoires',
    price: 'Sur demande',
    description: 'Sac à dos professionnel avec accès rapide, protection renforcée et compartiments modulables.',
    gradient: 'from-yellow-700 via-yellow-800 to-yellow-900',
    tags: ['Sac à Dos', 'Modulable', 'Protection'],
    rating: 4,
  },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = products.filter((product) => {
    const matchesCategory = activeCategory === 'Tous' || product.category === activeCategory
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <section className="relative pt-32 pb-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(228,30,38,0.12),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/60 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Boutique
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[0.9] tracking-tight">
              Équipements
              <br />
              <span className="text-primary">professionnels</span>
              <br />
              pour vos projets
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-xl leading-relaxed">
              Découvrez notre sélection de caméras, matériel visiographique, audio, éclairage 
              et accessoires pour la production audiovisuelle et les présentations professionnelles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filtered.map((product, index) => (
                    <ProductCard key={product.title} {...product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-muted-foreground">Aucun produit trouvé pour cette recherche.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-surface border border-gray-100 text-center"
          >
            <h3 className="text-xl font-heading font-bold text-secondary mb-2">
              Vous ne trouvez pas ce que vous cherchez ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contactez-nous pour toute demande d&apos;équipement spécifique ou commande en gros.
            </p>
            <a
              href="https://wa.me/221777054949?text=Bonjour%2C%20je%20souhaite%20un%20renseignement%20sur%20un%20produit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white rounded-xl px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Nous contacter sur WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
