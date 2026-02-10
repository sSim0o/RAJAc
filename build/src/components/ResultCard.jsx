import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Activity } from 'lucide-react';

function ResultCard({ result, index }) {
  const isWin = result.score.home > result.score.away;
  const isDraw = result.score.home === result.score.away;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)' }}
      className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${
        isWin ? 'border-emerald-500/50' : isDraw ? 'border-yellow-500/50' : 'border-red-500/50'
      }`}
    >
      {/* Date */}
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-4 h-4 text-slate-400" />
        <span className="text-slate-400 text-sm">{result.date}</span>
      </div>

      {/* Teams and Score */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
            RC
          </div>
          <div>
            <h3 className="text-white font-bold">Raja Casablanca</h3>
          </div>
        </div>

        <div className={`text-4xl font-bold ${
          isWin ? 'text-emerald-400' : isDraw ? 'text-yellow-400' : 'text-red-400'
        }`}>
          {result.score.home} - {result.score.away}
        </div>

        <div className="flex items-center gap-3">
          <div>
            <h3 className="text-white font-bold text-right">{result.opponent}</h3>
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">
            {result.opponentInitials}
          </div>
        </div>
      </div>

      {/* Result Badge */}
      <div className="flex justify-center mb-4">
        <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
          isWin ? 'bg-emerald-500/20 text-emerald-400' : 
          isDraw ? 'bg-yellow-500/20 text-yellow-400' : 
          'bg-red-500/20 text-red-400'
        }`}>
          {isWin ? 'Victoire' : isDraw ? 'Match Nul' : 'Défaite'}
        </span>
      </div>

      {/* Match Statistics */}
      <div className="bg-slate-900/50 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-300 font-semibold text-sm">Statistiques</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400 text-sm">Possession</span>
          <span className="text-white font-semibold">{result.stats.possession}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400 text-sm">Tirs cadrés</span>
          <span className="text-white font-semibold">{result.stats.shots}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400 text-sm">Cartons</span>
          <span className="text-white font-semibold">
            <span className="text-yellow-400">{result.stats.yellowCards}</span>
            {result.stats.redCards > 0 && (
              <span className="text-red-400 ml-2">{result.stats.redCards}</span>
            )}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default ResultCard;
