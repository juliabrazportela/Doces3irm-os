import React from "react";
import { Store, Utensils, Flame, Coffee, ArrowRight, Check } from "lucide-react";
import { CONFIG } from "../config";

export default function Business() {
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Gostaria de solicitar uma proposta de parceria e tabela de atacado para o meu estabelecimento."
  )}`;

  const categories = [
    {
      title: "Mercados e Mercearias",
      description: "Produto pronto para gôndola, com etiquetas completas e excelente margem de lucro. Perfeito para vendas diárias.",
      icon: Store,
    },
    {
      title: "Restaurantes",
      description: "Agregue valor à sua mesa de sobremesas oferecendo o verdadeiro doce de leite de tacho do Nordeste.",
      icon: Utensils,
    },
    {
      title: "Churrascarias",
      description: "A sobremesa ideal para fechar a experiência do rodízio com chave de ouro. Uma opção com grande potencial de venda para agregar valor ao seu cardápio.",
      icon: Flame,
    },
    {
      title: "Lanchonetes e Cafés",
      description: "O tamanho de 120g é ideal para venda rápida de balcão e compras por impulso em caixas de pagamento.",
      icon: Coffee,
    },
  ];

  const advantages = [
    "Receita artesanal com mais de 20 anos de história",
    "15 sabores entre doces de leite e cocadas",
    "Tamanhos para todos os tipos de venda: 120g, 400g e 680g",
    "Preços competitivos no atacado",
    "Produção sob encomenda e entrega programada",
    "Atendimento direto com o produtor",
  ];

  return (
    <div>
      {/* Section 1: Business categories (Dark Background) */}
      <section id="clientes" className="py-20 bg-brown-deep text-cream relative overflow-hidden">
        {/* Decorative dots background */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--color-gold) 2px, transparent 2px), radial-gradient(circle at 80% 60%, var(--color-gold) 2px, transparent 2px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="relative mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left text column */}
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-gold">
              Para o seu negócio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-3 leading-tight">
              Doce artesanal que <em className="italic text-gold">vende sozinho</em>.
            </h2>
            <p className="mt-5 text-cream/80 leading-relaxed text-balance">
              Preços especiais de fábrica no atacado, entrega programada em Garanhuns e região, e um produto sem conservantes que conquista o cliente na primeira colherada.
            </p>
          </div>

          {/* Right grid column */}
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white/[0.04] backdrop-blur p-6 border border-gold/20 hover:border-gold/60 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-cream mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-cream/70 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Why resell Doces 3 Irmãos (Light Cream Background - Matching the user image) */}
      <section className="py-20 bg-cream text-brown-deep border-t border-cream-dark">
        <div className="mx-auto max-w-5xl px-4 md:px-6 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Advantages Column (7 cols on desktop) */}
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl font-black text-brown-deep mb-8 leading-tight">
              Por que revender Doces 3 Irmãos?
            </h2>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-caramel/10 border border-caramel/20 flex items-center justify-center text-caramel shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span className="text-sm md:text-base font-bold text-brown/90 leading-relaxed">
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right CTA Card Column (5 cols on desktop) */}
          <div className="md:col-span-5">
            <div className="rounded-3xl bg-cream-dark/45 border border-cream-dark shadow-soft p-8 text-left ring-1 ring-gold/10">
              <h3 className="font-display text-2xl font-black text-brown-deep mb-2">
                Solicite uma proposta
              </h3>
              <p className="text-xs md:text-sm text-brown/75 leading-relaxed mb-6">
                Fale com a gente pelo WhatsApp e monte o pedido ideal para o seu estabelecimento.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-brown-deep hover:bg-caramel text-gold hover:text-cream font-bold text-center block transition-all duration-300 shadow-soft"
              >
                Falar no WhatsApp
              </a>
              <div className="text-[11px] text-brown/50 text-center mt-4 font-bold tracking-wide uppercase">
                Garanhuns – PE e região
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
