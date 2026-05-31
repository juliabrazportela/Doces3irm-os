import React from "react";
import { CONFIG } from "../config";

export default function Precos() {
  const priceCards = [
    {
      size: "120g",
      subtitle: "Ideal para lembranças, brindes e degustação rápida",
      retailPrice: "R$ 6",
      wholesalePrice: "Sob consulta",
      note: "Atacado sob consulta",
      popular: false,
    },
    {
      size: "400g",
      subtitle: "Perfeito para sobremesas residenciais e consumo familiar",
      retailPrice: "R$ 15",
      wholesalePrice: "Sob consulta",
      note: "Desconto progressivo por volume",
      popular: true,
    },
    {
      size: "680g",
      subtitle: "Tamanho ideal para gôndolas de comércios e mercados",
      retailPrice: "R$ 25",
      wholesalePrice: "Sob consulta",
      note: "Frete facilitado para lotes comerciais",
      popular: false,
    },
  ];

  return (
    <section id="precos" className="py-20 bg-brown text-cream relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-baby-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-gold">
            Tamanhos e valores
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-2 text-cream">
            Valores de varejo e <em className="text-gold italic">atacado sob consulta</em>.
          </h2>
          <p className="text-base text-cream/70 mt-3">
            Compre para sua casa com preços fixos de varejo ou fale conosco para negociar lotes sob medida para seu negócio.
          </p>
        </div>

        {/* Price Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {priceCards.map((card, index) => {
            const orderUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
              `Olá! Gostaria de realizar a encomenda do pote de ${card.size} dos Doces 3 Irmãos.`
            )}`;

            return (
              <div
                key={index}
                className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                  card.popular
                    ? "bg-baby-blue/5 border-baby-blue shadow-warm scale-[1.02] z-10"
                    : "bg-white/[0.04] border-gold/25 hover:border-gold/60"
                }`}
              >
                <div>
                  {card.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-baby-blue text-brown-deep font-extrabold text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-soft">
                      Mais procurado
                    </span>
                  )}
                  <div className="text-xs text-cream/50 font-bold uppercase tracking-wider mb-1">
                    Pote de {card.size}
                  </div>
                  <p className="text-sm text-cream/80 leading-relaxed mb-6">
                    {card.subtitle}
                  </p>

                  <div className="border-t border-cream/10 pt-6">
                    <div className="text-[10px] font-extrabold text-gold uppercase tracking-wider mb-1">
                      Varejo
                    </div>
                    <div className="font-display text-4xl font-black text-gold">
                      {card.retailPrice}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="text-[10px] font-extrabold text-cream/40 uppercase tracking-wider mb-1">
                      Atacado
                    </div>
                    <div className="text-lg font-bold text-cream/90">
                      {card.wholesalePrice}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-cream/5">
                  <a
                    href={orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-bold text-center block text-xs transition-all duration-300 ${
                      card.popular
                        ? "bg-baby-blue text-brown-deep hover:bg-cream hover:text-brown-deep shadow-soft"
                        : "border border-gold hover:bg-gold hover:text-brown-deep text-gold"
                    }`}
                  >
                    Realizar encomenda
                  </a>
                  <div className="text-[10px] text-cream/40 mt-3 text-center italic">
                    {card.note}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
