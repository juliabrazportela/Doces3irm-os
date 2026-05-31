import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Leaf, Award, Star } from "lucide-react";
import { CONFIG } from "../config";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
    CONFIG.whatsappMessage
  )}`;

  return (
    <section id="inicio" className="relative overflow-hidden bg-brown-deep text-cream">
      {/* Decorative gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-conic-gradient(var(--color-gold) 0deg, var(--color-gold) 10deg, transparent 10deg, transparent 20deg)",
        }}
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 75% 50%, oklch(0.62 0.14 55 / 0.22) 0%, transparent 65%)",
        }}
      ></div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 pt-6 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text column */}
        <div>
          <span className="inline-flex items-center gap-1.5 md:gap-2 rounded-full border border-baby-blue/30 bg-baby-blue/5 px-2.5 md:px-4 py-1 md:py-1.5 text-[9px] md:text-[11px] font-extrabold uppercase tracking-widest md:tracking-[0.2em] text-baby-blue whitespace-nowrap">
            <Sparkles className="h-3 w-3 md:h-3.5 md:w-3.5" />
            Artesanal desde 2002 · Garanhuns–PE
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-cream text-balance">
            Doce de leite <em className="not-italic text-gold italic font-black">feito com alma</em> de família.
          </h1>
          <p className="mt-5 text-base md:text-lg text-cream/75 leading-relaxed max-w-lg">
            Mais de 20 anos de receita artesanal passada com amor. Hoje, três filhos crescem com o mesmo propósito: levar sabor e afeto para a sua mesa.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-caramel hover:bg-gold hover:text-brown-deep px-7 py-3.5 text-base font-bold text-cream transition-all shadow-warm w-full sm:w-auto"
            >
              Fazer pedido
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/sabores"
              className="inline-flex justify-center items-center gap-2 rounded-full border border-gold/50 text-gold hover:bg-gold/10 px-7 py-3.5 text-base font-bold transition-all w-full sm:w-auto"
            >
              Ver sabores
            </Link>
          </div>

          <div className="mt-8 md:mt-10 flex justify-between md:justify-start items-center gap-1 md:gap-x-6 text-[8.5px] min-[375px]:text-[10px] md:text-sm text-cream/65 w-full whitespace-nowrap">
            <div className="flex items-center gap-1 md:gap-2">
              <Leaf className="h-2.5 w-2.5 md:h-4 md:w-4 text-gold shrink-0" />
              100% artesanal
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Award className="h-2.5 w-2.5 md:h-4 md:w-4 text-gold shrink-0" />
              22+ anos de história
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Star className="h-2.5 w-2.5 md:h-4 md:w-4 text-gold fill-gold shrink-0" />
              15 sabores únicos
            </div>
          </div>
        </div>

        {/* Visual column */}
        <div className="relative">
          {/* Blur background */}
          <div className="absolute -inset-8 bg-gold/15 rounded-[3rem] blur-2xl"></div>

          {/* Main Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-warm ring-1 ring-gold/30 aspect-[4/3.5]">
            <img
              src="/Doces3irmaosHOME.png"
              alt="Potes de doces de leite artesanais da família Três Irmãos"
              width="800"
              height="600"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>

          {/* Floating Badges */}
          <div className="hidden sm:block absolute -left-3 top-6 float">
            <div className="bg-cream text-brown-deep border-2 border-baby-blue rounded-2xl px-4 py-2 shadow-warm text-xs font-extrabold">
              ✦ Edição Copa
            </div>
          </div>

          <div className="hidden sm:block absolute -right-3 bottom-24 float-delay">
            <div className="bg-cream text-brown-deep border-2 border-caramel rounded-2xl px-4 py-2 shadow-warm text-xs font-extrabold">
              Receita de família
            </div>
          </div>

          <div className="absolute -bottom-6 -left-4 md:-left-6 bg-cream text-brown-deep rounded-2xl shadow-warm p-4 flex items-center gap-3 max-w-[260px] ring-1 ring-gold/30">
            <div className="h-12 w-12 rounded-full bg-brown-deep text-gold flex items-center justify-center font-display font-black text-xl shrink-0">
              3
            </div>
            <div className="text-sm">
              <div className="font-bold leading-tight">Doces 3 irmãos</div>
              <div className="text-xs text-brown/70">Faça sua encomenda!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
