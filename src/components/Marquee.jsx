import React from "react";

export default function Marquee() {
  const slogans = [
    "Receita artesanal desde 2002",
    "Feito no tacho, um por um",
    "Garanhuns – Pernambuco",
    "Atacado e varejo",
    "15 sabores únicos",
    "Pedidos sob encomenda",
  ];

  // Repeat the items to make the animation continuous and seamless
  const itemsList = [...slogans, ...slogans, ...slogans];

  return (
    <div className="bg-brown text-gold border-y border-gold/15 overflow-hidden py-4 select-none">
      <div className="marquee-container flex">
        <div className="marquee-content flex gap-8 whitespace-nowrap">
          {itemsList.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-3 px-4 text-xs md:text-sm font-extrabold uppercase tracking-[0.2em]"
            >
              {item}
              <span className="text-cream/35">✦</span>
            </span>
          ))}
        </div>
        {/* Second block for seamless loop */}
        <div className="marquee-content flex gap-8 whitespace-nowrap" aria-hidden="true">
          {itemsList.map((item, index) => (
            <span
              key={`dup-${index}`}
              className="inline-flex items-center gap-3 px-4 text-xs md:text-sm font-extrabold uppercase tracking-[0.2em]"
            >
              {item}
              <span className="text-cream/35">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
