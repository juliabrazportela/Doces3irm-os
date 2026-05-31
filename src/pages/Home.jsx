import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <Products />

      {/* History CTA — between Products and Footer */}
      <section className="py-16 md:py-20 bg-brown-deep text-cream relative overflow-hidden">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 80%, var(--color-gold) 2px, transparent 2px), radial-gradient(circle at 85% 20%, var(--color-gold) 2px, transparent 2px)",
            backgroundSize: "55px 55px",
          }}
        ></div>

        <div className="relative mx-auto max-w-4xl px-4 md:px-6 text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-gold">
            Nossa história
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black mt-3 text-cream leading-tight text-balance">
            Uma receita que começou em <em className="text-gold italic">Juazeiro</em> e chegou até você.
          </h2>
          <p className="mt-5 text-base text-cream/70 max-w-xl mx-auto leading-relaxed">
            Mais de 20 anos de tacho, fé e família — conheça a história que está por trás de cada pote de doce artesanal.
          </p>
          <Link
            to="/sobre"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold hover:bg-caramel px-8 py-3.5 font-bold text-brown-deep transition-all duration-300 shadow-warm"
          >
            Conhecer nossa história →
          </Link>
        </div>
      </section>
    </div>
  );
}
