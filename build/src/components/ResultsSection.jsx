import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Filter } from 'lucide-react';
import ResultCard from '@/components/ResultCard.jsx';

function ResultsSection() {
  const [filter, setFilter] = useState('all');

  const recentResults = [
    {
      date: '8 Février 2026',
      opponent: 'AS FAR',
      opponentInitials: 'FAR',
      score: { home: 3, away: 1 },
      stats: {
        possession: '62% - 38%',
        shots: '15 - 7',
        yellowCards: 2,
        redCards: 0,
      },
    },
    {
      date: '1 Février 2026',
      opponent: 'FUS Rabat',
      opponentInitials: 'FUS',
      score: { home: 2, away: 0 },
      stats: {
        possession: '58% - 42%',
        shots: '12 - 5',
        yellowCards: 3,
        redCards: 0,
      },
    },
    {
      date: '25 Janvier 2026',
      opponent: 'Renaissance Zemamra',
      opponentInitials: 'RZ',
      score: { home: 1, away: 1 },
      stats: {
        possession: '55% - 45%',
        shots: '10 - 8',
        yellowCards: 4,
        redCards: 1,
      },
    },
    {
      date: '18 Janvier 2026',
      opponent: 'Maghreb Fès',
      opponentInitials: 'MF',
      score: { home: 4, away: 0 },
      stats: {
        possession: '68% - 32%',
        shots: '18 - 4',
        yellowCards: 1,
        redCards: 0,
      },
    },
    {
      date: '11 Janvier 2026',
      opponent: 'Olympique Safi',
      opponentInitials: 'OS',
      score: { home: 2, away: 1 },
      stats: {
        possession: '60% - 40%',
        shots: '14 - 6',
        yellowCards: 2,
        redCards: 0,
      },
    },
    {
      date: '4 Janvier 2026',
      opponent: 'Hassania Agadir',
      opponentInitials: 'HA',
      score: { home: 1, away: 2 },
      stats: {
        possession: '52% - 48%',
        shots: '11 - 9',
        yellowCards: 3,
        redCards: 0,
      },
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1658870995254-a99a48d7c268"
          alt="Football match results and statistics"
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
            <Trophy className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Performances</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Résultats Récents
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Suivez les dernières performances de Raja Casablanca
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'all'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter('wins')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'wins'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Victoires
            </button>
            <button
              onClick={() => setFilter('recent')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'recent'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Plus Récents
            </button>
          </div>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentResults.map((result, index) => (
            <ResultCard key={index} result={result} index={index} />
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">4</div>
            <div className="text-slate-400 text-sm">Victoires</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
            <div className="text-slate-400 text-sm">Nuls</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">1</div>
            <div className="text-slate-400 text-sm">Défaites</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-2">13</div>
            <div className="text-slate-400 text-sm">Buts Marqués</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}

export default ResultsSection;
