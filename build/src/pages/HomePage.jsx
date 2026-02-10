import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection.jsx';
import PronosticsSection from '@/components/PronosticsSection.jsx';
import ResultsSection from '@/components/ResultsSection.jsx';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Raja Casablanca - Excellence, Passion, Victoire</title>
        <meta
          name="description"
          content="Suivez Raja Casablanca, l'un des clubs les plus titrés du Maroc et d'Afrique. Pronostics, résultats, actualités et statistiques des matchs."
        />
      </Helmet>

      <div className="bg-slate-900">
        <HeroSection />
        
        <div className="relative">
          {/* Gradient Separator */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-900 to-transparent"></div>
          
          <PronosticsSection />
          
          {/* Gradient Separator */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <ResultsSection />
      </div>
    </>
  );
}

export default HomePage;
