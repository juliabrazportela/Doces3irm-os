import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sabores from "./pages/Sabores";
import Sobre from "./pages/Sobre";
import Empresas from "./pages/Empresas";
import Contato from "./pages/Contato";

// Helper component to restore scroll position to top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Scroll restoration */}
        <ScrollToTop />

        {/* Global Navigation Header */}
        <Header />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sabores" element={<Sabores />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/contato" element={<Contato />} />
            {/* Fallback route back to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
