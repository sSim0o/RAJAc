import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import MatchCard from '@/components/MatchCard.jsx';

function PronosticsSection() {
  const upcomingMatch = {
    date: '15 Février 2026',
    time: '20:00',
    opponent: 'Wydad Casablanca',
    opponentInitials: 'WAC',
    prediction: '2-1',
    confidence: 78,
    odds: {
      home: '1.85',
      draw: '3.20',
      away: '4.50',
    },
    analysis: {
      possession: '58% - 42%',
      shots: '12 - 8',
      cards: '3 jaunes',
      note: 'Raja Casablanca montre une forme exceptionnelle avec 4 victoires consécutives. L\'avantage du terrain et la dynamique positive suggèrent une victoire probable.',
    },
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1692188538415-eabb8da92156"
          alt="Football match analysis and predictions"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-6 py-2 mb-4">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Analyse Expert</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pronostics
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Analyse détaillée et prédictions pour le prochain match de Raja Casablanca
          </p>
        </motion.div>

        {/* Match Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <MatchCard match={upcomingMatch} />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-500 text-sm">
            * Les pronostics sont basés sur l'analyse statistique et la forme récente des équipes
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}

export default PronosticsSection;
