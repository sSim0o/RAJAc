import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Matchs', path: '/matchs' },
    { name: 'Résultats', path: '/resultats' },
    { name: 'Actualités', path: '/actualites' },
    { name: 'Équipe', path: '/equipe' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/50">
                <span className="text-white font-bold text-xl">RC</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Raja Casablanca</h3>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Fondé en 1949, le Raja Club Athletic est l'un des clubs les plus titrés du Maroc et d'Afrique.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Casablanca, Maroc</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>contact@rajacasablanca.ma</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+212 5XX-XXXXXX</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800">
          <p className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Raja Casablanca. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
