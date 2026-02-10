import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1597947713858-445b8462f631"
          alt="Raja Casablanca football stadium with passionate fans"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-6 py-2 mb-8">
            <Trophy className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Champions d'Afrique</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          Raja <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Casablanca</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-slate-300 mb-12 font-light tracking-wide"
        >
          Excellence · Passion · Victoire
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Voir les Pronostics
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 text-white font-semibold rounded-full hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-300">
            Résultats Récents
          </button>
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-emerald-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
