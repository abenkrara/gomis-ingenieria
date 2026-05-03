import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/96 backdrop-blur-md border-b border-zinc-800 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
          <img src="logo.png" alt="Gomis Ingeniería & Proyectos" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          <button onClick={() => scrollTo('servicios')} className="text-zinc-400 hover:text-white text-xs tracking-widest uppercase transition-colors duration-200">Servicios</button>
          <button onClick={() => scrollTo('metodologia')} className="text-zinc-400 hover:text-white text-xs tracking-widest uppercase transition-colors duration-200">Metodología</button>
          <button onClick={() => scrollTo('proyectos')} className="text-zinc-400 hover:text-white text-xs tracking-widest uppercase transition-colors duration-200">Proyectos</button>
          <button onClick={() => scrollTo('contacto')} className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-5 py-2.5 rounded tracking-wide uppercase transition-all duration-300">Presupuesto</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-300" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-4 flex flex-col gap-3">
          <button onClick={() => scrollTo('servicios')} className="text-zinc-300 text-left py-2 border-b border-zinc-800 text-sm">Servicios</button>
          <button onClick={() => scrollTo('metodologia')} className="text-zinc-300 text-left py-2 border-b border-zinc-800 text-sm">Metodología</button>
          <button onClick={() => scrollTo('proyectos')} className="text-zinc-300 text-left py-2 border-b border-zinc-800 text-sm">Proyectos</button>
          <button onClick={() => scrollTo('contacto')} className="bg-red-600 text-white text-sm font-bold px-4 py-2 rounded text-center">Contacto</button>
        </div>
      )}
    </nav>
  );
}
