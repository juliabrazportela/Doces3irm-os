import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      title: "Doce de Leite Clássicos",
      description: "O nosso carro-chefe — doce de leite tradicional, com coco e com chocolate. A verdadeira alma artesanal da marca.",
      image: "/doce-classicos.png",
      fallbackImage: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Doce de Leite com Frutas",
      description: "O nosso grande diferencial — doce de leite artesanal combinado com frutas e geleias selecionadas como goiaba, morango, maracujá e mamão.",
      image: "/doce-frutas.png",
      fallbackImage: "https://images.unsplash.com/photo-1600857544200-b2f66afae5d2?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Cocadas",
      description: "A linha complementar artesanal — cocadas de corte (leite, coco e jaca) e cocada cremosa para ampliar as opções sem perder a tradição.",
      image: "/cocadas.png",
      fallbackImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-cream-dark/30">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-caramel">
              Nossos doces
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-2 text-brown-deep">
              Feitos no tacho, <em className="text-caramel italic">um por um</em>.
            </h2>
          </div>
          <Link
            to="/sabores"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-caramel hover:text-brown-deep transition-colors"
          >
            Ver todos os sabores &rarr;
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <article
              key={index}
              className="group rounded-3xl overflow-hidden bg-white border border-cream-dark shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden relative bg-cream-dark/20">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = product.fallbackImage;
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-brown-deep group-hover:text-caramel transition-colors">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-brown/70 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
