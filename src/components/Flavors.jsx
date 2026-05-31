import React from "react";

export default function Flavors() {
  const categories = [
    {
      id: "classicos",
      title: "Doce de Leite Clássicos",
      subtitle: "O nosso carro-chefe — os sabores tradicionais que representam a verdadeira alma artesanal da marca.",
      items: [
        {
          name: "Leite Cremoso Tradicional",
          type: "Clássico",
          image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Leite com Chocolate",
          type: "Especial",
          image: "/leite-com-chocolate.png",
        },
        {
          name: "Leite com Coco",
          type: "Tropical",
          image: "https://images.unsplash.com/photo-1541795795328-f073b763494e?auto=format&fit=crop&q=80&w=400",
        },
      ],
    },
    {
      id: "frutas",
      title: "Doce de Leite com Frutas",
      subtitle: "O nosso grande diferencial — doce de leite artesanal combinado com frutas frescas e geleias caseiras selecionadas.",
      items: [
        {
          name: "Leite com Goiaba",
          type: "Frutas",
          image: "https://images.unsplash.com/photo-1533038590840-1cde6b66b706?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Leite com Banana",
          type: "Frutas",
          image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Leite com Mamão",
          type: "Frutas",
          image: "https://images.unsplash.com/photo-1526318896980-cf78c636d023d?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Leite com Geleia de Morango",
          type: "Geleia",
          image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Leite com Geleia de Ameixa",
          type: "Geleia",
          image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Leite com Geleia de Maracujá",
          type: "Geleia",
          image: "/geleia-maracuja.png",
        },
      ],
    },
    {
      id: "cocadas",
      title: "Cocadas",
      subtitle: "A linha complementar tradicional — cocadas cremosas e macias, com a textura perfeita e o sabor inconfundível da nossa receita de família.",
      items: [
        {
          name: "Cocada de Jaca",
          type: "Frutas",
          image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Cocada de Leite",
          type: "Clássico",
          image: "https://images.unsplash.com/photo-1517093602195-b40af9688b46?auto=format&fit=crop&q=80&w=400",
        },
        {
          name: "Cocada de Coco",
          type: "Tradicional",
          image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=400",
        },
      ],
    },
  ];

  return (
    <section id="sabores" className="py-16 md:py-20 bg-cream">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-caramel">
            Cardápio Completo
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-2 text-brown-deep leading-tight">
            Nossos sabores <em className="text-caramel italic">artesanais</em>.
          </h2>
          <p className="text-base text-brown/70 mt-4 leading-relaxed">
            Preparados artesanalmente no tacho, preservando o sabor puro e a tradição de família. Explore nossa variedade e escolha os seus favoritos para encomendar.
          </p>
        </div>

        {/* Categories Stacked */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id} className="border-t border-cream-dark/60 pt-10 first:border-0 first:pt-0">
              {/* Category Header */}
              <div className="mb-6">
                <h2 className="font-display text-2xl md:text-3xl font-black text-brown-deep flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-baby-blue"></span>
                  {category.title}
                </h2>
                <p className="text-sm text-brown/70 mt-1 max-w-2xl leading-relaxed">
                  {category.subtitle}
                </p>
              </div>

              {/* Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.items.map((sweet, index) => (
                  <article
                    key={index}
                    className="group bg-white border border-cream-dark rounded-2xl overflow-hidden hover:border-baby-blue/50 transition-all duration-300 shadow-soft hover:shadow-warm"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] w-full overflow-hidden bg-cream-dark/20 relative">
                      <img
                        src={sweet.image}
                        alt={sweet.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400";
                        }}
                      />
                      <div className="absolute top-2 right-2">
                        <span className="text-[9px] font-extrabold bg-brown-deep/80 text-gold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {sweet.type}
                        </span>
                      </div>
                    </div>

                    {/* Name */}
                    <div className="p-4">
                      <h3 className="font-display font-bold text-sm md:text-base text-brown-deep leading-tight group-hover:text-caramel transition-colors">
                        {sweet.name}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Box */}
        <div className="mt-20 rounded-3xl bg-white border border-cream-dark p-8 md:p-10 max-w-2xl mx-auto text-center shadow-soft">
          <h3 className="font-display text-xl md:text-2xl font-black text-brown-deep">
            Não encontrou um sabor específico?
          </h3>
          <p className="text-sm text-brown/85 mt-3 leading-relaxed max-w-lg mx-auto">
            Produzimos lotes personalizados sob encomenda para comércios, festas, casamentos ou grandes pedidos. Entre em contato e consulte a disponibilidade.
          </p>
        </div>
      </div>
    </section>
  );
}
