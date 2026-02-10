import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, TrendingUp, Calendar, Clock } from 'lucide-react';

function MatchCard({ match }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)' }}
      className="bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 transition-all duration-300"
    >
      {/* Match Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-emerald-400" />
          <span className="text-slate-300 font-medium">{match.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-slate-400" />
          <span className="text-slate-400 text-sm">{match.time}</span>
        </div>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-xl">
            RC
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">Raja Casablanca</h3>
            <p className="text-emerald-400 text-sm">Domicile</p>
          </div>
        </div>
        <div className="text-slate-400 font-bold text-2xl">VS</div>
        <div className="flex items-center gap-4">
          <div>
            <h3 className="text-white font-bold text-xl text-right">{match.opponent}</h3>
            <p className="text-slate-400 text-sm text-right">Extérieur</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-xl">
            {match.opponentInitials}
          </div>
        </div>
      </div>

      {/* Prediction */}
      <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-400 text-sm">Prédiction</span>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">{match.confidence}% confiance</span>
          </div>
        </div>
        <div className="text-white font-bold text-3xl text-center">{match.prediction}</div>
      </div>

      {/* Betting Odds */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-slate-900/50 rounded-lg p-3 text-center">
          <div className="text-slate-400 text-xs mb-1">1 (Victoire)</div>
          <div className="text-white font-bold text-lg">{match.odds.home}</div>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-3 text-center">
          <div className="text-slate-400 text-xs mb-1">X (Nul)</div>
          <div className="text-white font-bold text-lg">{match.odds.draw}</div>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-3 text-center">
          <div className="text-slate-400 text-xs mb-1">2 (Défaite)</div>
          <div className="text-white font-bold text-lg">{match.odds.away}</div>
        </div>
      </div>

      {/* Expand Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors py-2"
      >
        <span className="font-medium">Analyse détaillée</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      {/* Detailed Analysis */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-slate-700 mt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Possession prévue</span>
                <span className="text-white font-semibold">{match.analysis.possession}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Tirs cadrés</span>
                <span className="text-white font-semibold">{match.analysis.shots}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Cartons probables</span>
                <span className="text-white font-semibold">{match.analysis.cards}</span>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 mt-4">
                <p className="text-emerald-400 text-sm">{match.analysis.note}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default MatchCard;
