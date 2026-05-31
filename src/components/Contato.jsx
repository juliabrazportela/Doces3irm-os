import React from "react";
import { MessageCircle, MapPin, Clock } from "lucide-react";
import { CONFIG } from "../config";

export default function Contato() {
  const whatsappOrderUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Quero fazer um pedido dos Doces 3 Irmãos."
  )}`;

  const whatsappWholesaleUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Quero saber mais sobre os Doces 3 Irmãos e pedir a tabela de atacado."
  )}`;

  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        {/* Title Block */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-caramel">
            Fale com a gente
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-2 text-brown-deep">
            Vamos adoçar o seu dia.
          </h2>
          <p className="mt-5 text-base md:text-lg text-brown/70 max-w-lg mx-auto leading-relaxed">
            Atendemos pedidos no atacado e no varejo. O caminho mais rápido é o WhatsApp.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {/* WhatsApp Card (Action Link) */}
          <a
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-brown-deep text-cream p-8 shadow-warm hover:bg-brown transition duration-300 group"
          >
            <MessageCircle className="h-8 w-8 text-gold group-hover:scale-105 transition-transform duration-300" />
            <div className="mt-4 font-display text-xl font-bold text-gold">
              WhatsApp
            </div>
            <div className="mt-1 text-sm text-cream/80">
              Fazer pedido agora
            </div>
          </a>

          {/* Location Card */}
          <div className="rounded-3xl bg-white border border-cream-dark p-8 shadow-soft">
            <MapPin className="h-8 w-8 text-caramel" />
            <div className="mt-4 font-display text-xl font-bold text-brown-deep">
              Localização
            </div>
            <div className="mt-1 text-sm text-brown/70">
              Garanhuns, Pernambuco
            </div>
          </div>

          {/* Time/Orders Card */}
          <div className="rounded-3xl bg-white border border-cream-dark p-8 shadow-soft">
            <Clock className="h-8 w-8 text-caramel" />
            <div className="mt-4 font-display text-xl font-bold text-brown-deep">
              Pedidos
            </div>
            <div className="mt-1 text-sm text-brown/70">
              Sob encomenda · Entrega programada
            </div>
          </div>
        </div>

        {/* Bottom Banner (Wholesale Info) */}
        <div className="mt-12 rounded-3xl bg-cream-dark/40 border border-cream-dark p-8 md:p-10 text-center">
          <h2 className="font-display text-2xl font-black text-brown-deep">
            Atende para revenda?
          </h2>
          <p className="mt-2 text-sm text-brown/80 max-w-md mx-auto leading-relaxed">
            Sim! Trabalhamos com mercados, restaurantes, churrascarias e lanchonetes em Garanhuns e região.
          </p>
          <a
            href={whatsappWholesaleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-caramel hover:bg-gold hover:text-brown-deep px-7 py-3.5 font-bold text-cream transition duration-300 shadow-warm"
          >
            Pedir tabela de atacado
          </a>
        </div>
      </div>
    </section>
  );
}
