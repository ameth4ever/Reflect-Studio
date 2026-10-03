"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Check,
} from "lucide-react";
import { contactInfo } from "@/constants/navigation";

const contactMethods = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    description: "Notre équipe vous répond sous 24h",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Téléphone",
    value: `${contactInfo.phone} / ${contactInfo.phone2}`,
    href: `tel:${contactInfo.phone}`,
    description: "Lun-Ven 8h-18h, Sam 9h-13h",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Adresse",
    value: contactInfo.address,
    description: "Sénégal — interventions dans toute la sous-région",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Horaires",
    value: "Lun-Ven: 8h-18h • Sam: 9h-13h",
    description:
      "Disponible également en dehors des heures ouvrées sur rendez-vous",
  },
];

const whyChooseUs = [
  "Devis gratuit et sans engagement",
  "Réponse sous 24h ouvrées",
  "Accompagnement de A à Z",
  "Support après-livraison inclus",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(228,30,38,0.12),transparent_60%)]" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(228,30,38,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/60 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Parlons de votre projet
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.05] tracking-tight">
              Contactez
              <span className="text-primary"> REFLECT</span>
              <br />
              STUDIO
            </h1>

            <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
              Une question, un projet, une collaboration ? Notre équipe est à
              votre écoute pour échanger sur vos besoins et vous proposer des
              solutions adaptées.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              {[
                { value: "200+", label: "Projets" },
                { value: "80+", label: "Clients" },
                { value: "98%", label: "Satisfaction" },
                { value: "24h", label: "Délai réponse" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-heading font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                  Nous écrire
                </span>
                <h2 className="mt-3 text-3xl font-heading font-bold text-secondary tracking-tight">
                  Envoyez-nous un message
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Remplissez le formulaire ci-dessous et nous vous
                  recontacterons dans les plus brefs délais.
                </p>
              </div>

              <div className="bg-surface rounded-2xl p-8 border border-gray-100">
                <ContactForm />
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                {whyChooseUs.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                  Coordonnées
                </span>
                <h2 className="mt-3 text-3xl font-heading font-bold text-secondary tracking-tight">
                  Nos coordonnées
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Plusieurs moyens de nous joindre. Choosez celui qui vous
                  convient le mieux.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-5 p-5 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/10">
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-secondary mb-0.5">
                        {method.title}
                      </h3>
                      {"href" in method && method.href ? (
                        <a
                          href={method.href}
                          className="text-sm text-primary hover:text-primary/80 transition-colors font-medium break-all"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm text-primary font-medium">
                          {method.value}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        {method.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10"
              >
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-secondary mb-1">
                      Besoin d'une réponse rapide ?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Contactez-nous directement via WhatsApp pour une prise en
                      charge immédiate.
                    </p>
                    <a
                      href="https://wa.me/221777054949"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-accent hover:bg-accent/90 text-secondary font-semibold"
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              Localisation
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-secondary tracking-tight">
              Où nous trouver
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto">
              Basés à Dakar, nous intervenons dans toute la sous-région
              ouest-africaine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                name: "Dakar — Hann Montagne",
                href: "https://mapcarta.com/17537204",
                src: "https://www.google.com/maps/search/Hann+Montagne+6+Villa+N+299/@14.7477875,-17.4106583,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
              },
              {
                name: "Dakar — Mermoz",
                href: "https://www.google.com/maps/place/Cite+avion,+Dakar/@14.721444,-17.4852132,17z/data=!3m1!4b1!4m10!1m2!2m1!1sOuakam+cite+avion+map+lot+n+138!3m6!1s0xec16d55f444d723:0xef340e67bb379b57!8m2!3d14.7220297!4d-17.4802567!15sCh9PdWFrYW0gY2l0ZSBhdmlvbiBtYXAgbG90IG4gMTM4kgEMbmVpZ2hib3Job29k4AEA!16s%2Fg%2F12lsx7h49?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
                src: "https://www.google.com/maps/place/Cite+avion,+Dakar/@14.721444,-17.4852132,17z/data=!3m1!4b1!4m10!1m2!2m1!1sOuakam+cite+avion+map+lot+n+138!3m6!1s0xec16d55f444d723:0xef340e67bb379b57!8m2!3d14.7220297!4d-17.4802567!15sCh9PdWFrYW0gY2l0ZSBhdmlvbiBtYXAgbG90IG4gMTM4kgEMbmVpZ2hib3Job29k4AEA!16s%2Fg%2F12lsx7h49?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D",
              },
            ].map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative h-80 rounded-2xl overflow-hidden border border-gray-200 shadow-sm group"
              >
                <a
                  href={location.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full w-full"
                >
                  <iframe
                    src={location.src}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(0.3) invert(0.05)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={location.name}
                    className="transition-all duration-500 group-hover:grayscale-0 group-hover:invert-0"
                  />
                </a>
                <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none pt-4">
                  <div className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/80">
                    {location.name}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-center pointer-events-none">
                  <div className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/80">
                    Cliquez pour ouvrir dans Google Maps
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-secondary tracking-tight">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Quels délais pour un devis ?",
                a: "Nous nous engageons à vous répondre sous 24 à 48h ouvrées avec une proposition détaillée et personnalisée.",
              },
              {
                q: "Travaillez-vous avec des petits budgets ?",
                a: "Oui, nous adaptons nos solutions à tous les budgets. Chaque projet est unique et nous trouvons la formule la plus adaptée à vos moyens.",
              },
              {
                q: "Proposez-vous un suivi après livraison ?",
                a: "Absolument. Nous assurons un accompagnement post-livraison pour garantir la bonne prise en main et optimiser les résultats dans la durée.",
              },
              {
                q: "Intervenez-vous uniquement à Dakar ?",
                a: "Non, nous intervenons dans tout le Sénégal et la sous-région ouest-africaine. Nos équipes sont mobiles et habituées aux déplacements.",
              },
            ].map((faq, index) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-2xl border border-gray-100 open:border-primary/20 open:bg-surface/50 transition-all duration-300 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="text-sm font-bold text-secondary pr-4">
                    {faq.q}
                  </span>
                  <div className="h-6 w-6 rounded-full bg-gray-100 group-open:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
                    <ArrowRight className="h-3.5 w-3.5 text-secondary group-open:text-primary group-open:rotate-90 transition-transform" />
                  </div>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(228,30,38,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight">
              Prêt à collaborer ?
            </h2>
            <p className="mt-4 text-lg text-white/50 max-w-lg mx-auto">
              Prenez rendez-vous avec notre équipe pour discuter de votre projet
              en toute simplicité.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/221777054949"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-secondary px-10 py-6 text-base font-semibold group"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href={`mailto:${contactInfo.email}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent/40 text-accent hover:bg-accent hover:text-secondary px-10 py-6 text-base"
                >
                  Nous écrire
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
