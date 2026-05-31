import React from "react";
import { Link } from "react-router-dom";
import { CONFIG } from "../config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
    CONFIG.whatsappMessage
  )}`;

  return (
    <footer className="bg-brown-deep text-cream/70 border-t-2 border-gold/40">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-14 grid gap-10 md:grid-cols-3">
        {/* Brand info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="Doces 3 Irmãos"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/60"
              width="48"
              height="48"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=100";
              }}
            />
            <div className="font-display text-xl font-black text-gold">
              Três <span className="italic text-cream font-bold">Irmãos</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Doces de leite artesanais de colher e cocadas de corte feitos com carinho em Garanhuns, PE. Receita de família desde 2002.
          </p>
          <p className="mt-4 text-xs italic text-gold/75 font-semibold">
            Deus seja louvado.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-display text-lg font-bold text-gold mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm font-semibold">
            <li>
              <Link to="/" className="hover:text-gold transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link to="/sabores" className="hover:text-gold transition-colors">
                Sabores
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-gold transition-colors">
                Nossa História
              </Link>
            </li>
            <li>
              <Link to="/empresas" className="hover:text-gold transition-colors">
                Para Empresas
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-gold transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact links */}
        <div>
          <h4 className="font-display text-lg font-bold text-gold mb-4">Contato</h4>
          <ul className="space-y-2 text-sm font-semibold">
            <li>Garanhuns – Pernambuco</li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                WhatsApp para pedidos
              </a>
            </li>
            <li>
              <a
                href={CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Instagram: {CONFIG.instagramUsername}
              </a>
            </li>
            <li className="text-xs text-cream/40">Atacado e varejo sob encomenda</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/15 py-6 text-center text-xs text-cream/40 font-bold">
        &copy; {currentYear} Doces 3 Irmãos · Feito com amor de família
      </div>
    </footer>
  );
}
