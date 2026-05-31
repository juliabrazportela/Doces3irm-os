import React from "react";
import { CONFIG } from "../config";

export default function History() {
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
    CONFIG.whatsappMessage
  )}`;

  const timelineEvents = [
    {
      year: "2002",
      title: "O Início em Juazeiro da Bahia",
      description: "Tudo começou ao lado do meu padrasto em Juazeiro da Bahia. Foi lá que dei os primeiros passos e aprendi os segredos do doce artesanal feito no tacho.",
    },
    {
      year: "2004",
      title: "A Chegada em Garanhuns",
      description: "Deixamos Juazeiro rumo a Garanhuns, em Pernambuco. O lugar mudou a minha vida não apenas pelo trabalho, mas porque foi lá que conheci a minha esposa.",
    },
    {
      year: "2005",
      title: "Um Novo Capítulo a Dois",
      description: "Voltei para Juazeiro e, em um ato de coragem, minha esposa deixou Garanhuns para viver comigo. Juntos decidimos dividir o trabalho. Eu passei a cuidar do doce cremoso e das cocadas, enquanto meu padrasto fazia as bolinhas de doce de leite.",
    },
    {
      year: "2010",
      title: "Um Tempo de Pausa",
      description: "As dificuldades chegaram. A região era muito difícil para conseguir leite e acabei quebrando. Diante disso, decidi parar de fazer doces. Foram doze anos de muito aprendizado longe dos tachos.",
    },
    {
      year: "2022",
      title: "O Retorno para Garanhuns",
      description: "Depois de muito tempo, decidimos que era hora de voltar para Garanhuns. Dessa vez, não estávamos apenas nós dois, mas acompanhados dos nossos três filhos, marcando um lindo recomeço em família.",
    },
    {
      year: "2024",
      title: "O Nascimento dos Doces 3 Irmãos",
      description: "Decidi reacender a paixão e voltar a fazer os doces. Antigamente vendíamos como Doce Shelda, mas com o coração cheio de alegria por causa dos meus meninos, surgiu o nome perfeito. Assim nasceram os Doces 3 Irmãos, unindo amor de família e dedicação.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        {/* Title / Intro Block */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            <img
              alt="Doces 3 Irmãos"
              width="112"
              height="112"
              className="mx-auto h-28 w-28 rounded-full object-cover shadow-warm ring-4 ring-baby-blue/50"
              src="/logo.png"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=200";
              }}
            />
          </div>
          <p className="text-sm font-bold uppercase tracking-wider text-caramel">
            Deus seja louvado
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-2 text-brown-deep leading-tight text-balance">
            Uma história feita no tacho, com fé e família.
          </h2>
          <p className="mt-5 text-base md:text-lg text-brown/80 max-w-xl mx-auto leading-relaxed text-balance">
            Mais de 20 anos depois do primeiro doce, voltamos com a mesma receita — e com três motivos a mais para fazer tudo com carinho.
          </p>
        </div>

        {/* Alternating Timeline Container */}
        <div className="relative mt-16">
          {/* Vertical Central Line (Baby blue gradient) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-caramel via-baby-blue to-caramel md:-translate-x-1/2"></div>

          {/* Timeline Events Closer Spaced */}
          <div className="space-y-10 md:space-y-14">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    isEven ? "" : "md:[direction:rtl]"
                  }`}
                >
                  {/* Timeline Card */}
                  <div className="pl-12 md:pl-0 md:[direction:ltr]">
                    {/* Circle Indicator (Baby blue circle with caramel center) */}
                    <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 h-5 w-5 rounded-full bg-baby-blue ring-4 ring-cream border border-caramel/20 flex items-center justify-center z-10 shadow-soft">
                      <div className="h-2 w-2 rounded-full bg-caramel"></div>
                    </div>

                    <div className="rounded-3xl bg-white border border-cream-dark p-6 md:p-8 shadow-soft hover:shadow-warm hover:border-baby-blue/60 transition-all duration-300">
                      <div className="font-display text-3xl font-black text-caramel">
                        {event.year}
                      </div>
                      <div className="mt-2 font-black text-lg text-brown-deep">
                        {event.title}
                      </div>
                      <p className="mt-3 text-sm text-brown-deep/90 font-medium leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Dummy Column for desktop grid spacing */}
                  <div className="hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-20 text-center rounded-3xl bg-white border border-cream-dark p-8 md:p-12 max-w-2xl mx-auto shadow-warm">
          <h2 className="font-display text-2xl md:text-3xl font-black text-brown-deep">
            Quer conhecer nossos doces?
          </h2>
          <p className="mt-3 text-sm text-brown/85 leading-relaxed max-w-md mx-auto">
            Fale com a gente no WhatsApp. Atendemos pedidos no atacado e no varejo.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-caramel hover:bg-gold hover:text-brown-deep px-8 py-3.5 font-bold text-cream transition duration-300 shadow-warm"
          >
            Fazer pedido
          </a>
        </div>
      </div>
    </section>
  );
}
