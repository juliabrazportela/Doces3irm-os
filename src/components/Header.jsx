import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { CONFIG } from "../config";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sabores", href: "/sabores" },
    { name: "Nossa História", href: "/sobre" },
    { name: "Para Empresas", href: "/empresas" },
    { name: "Contato", href: "/contato" },
  ];

  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
    CONFIG.whatsappMessage
  )}`;

  return (
    <header ref={menuRef} className="sticky top-0 z-40 bg-brown-deep/95 backdrop-blur-md border-b border-gold/20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 flex items-center justify-between h-16 md:h-[68px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Doces 3 Irmãos"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-baby-blue/70"
            width="44"
            height="44"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=100";
            }}
          />
          <div className="leading-tight">
            <div className="font-display text-lg md:text-xl text-gold font-black tracking-wide">
              Três <span className="italic font-bold text-cream">Irmãos</span>
            </div>
            <div className="text-[10px] md:text-[11px] text-cream/65 uppercase tracking-[0.15em] font-bold">
              Doces Artesanais
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-bold text-cream/80 hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-caramel hover:bg-gold hover:text-brown-deep px-5 py-2.5 text-sm font-bold text-cream transition-colors shadow-soft"
          >
            <MessageCircle className="h-4 w-4" />
            Fazer pedido
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-cream hover:text-gold transition-colors"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-brown-deep border-b border-gold/20 py-4 px-6 absolute top-16 left-0 w-full flex flex-col gap-4 shadow-warm animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-bold text-cream/90 hover:text-gold py-2 transition-colors border-b border-cream/5"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-caramel hover:bg-gold hover:text-brown-deep px-5 py-3 text-base font-bold text-cream transition-colors mt-2"
          >
            <MessageCircle className="h-5 w-5" />
            Fazer pedido
          </a>
        </div>
      )}
    </header>
  );
}
