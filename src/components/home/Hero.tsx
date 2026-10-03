"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(228,30,38,0.12),transparent_60%)]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(228,30,38,0.08),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/60 font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Agence de communication & marketing — Dakar, Sénégal
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white leading-[0.9] tracking-tight">
              Nous donnons
              <br />
              <span className="text-primary">vie</span> à vos
              <br />
              idées
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/50 max-w-lg leading-relaxed">
              Stratégies de marque, production audiovisuelle, marketing digital 
              et développement web — nous accompagnons les entreprises et 
              institutions sénégalaises dans leur transformation digitale et 
              leur rayonnement.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
              <Link href="/quote" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base group w-full sm:w-auto justify-center"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent/40 text-accent hover:bg-accent hover:text-secondary hover:border-accent px-8 py-6 text-base w-full sm:w-auto justify-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Voir nos réalisations
                </Button>
              </Link>
            </div>

            <div className="mt-14 sm:mt-16 grid grid-cols-2 sm:flex sm:items-center gap-6 lg:gap-12">
              {[
                { value: "200+", label: "Projets livrés" },
                { value: "80+", label: "Clients satisfaits" },
                { value: "10+", label: "Années d'expertise" },
                { value: "98%", label: "Taux de recommandation" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl font-heading font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/40 whitespace-nowrap">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden sm:block lg:block relative"
          >
            <div className="relative">
              <div className="absolute -inset-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full mx-auto rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(228,30,38,0.2),transparent_60%)] z-10" />
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/reflectLand.png"
                    alt="REFLECT STUDIO"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                      REFLECT STUDIO
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/30">
          <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-2 bg-current rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
