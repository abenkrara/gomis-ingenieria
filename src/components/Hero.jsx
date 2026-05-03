import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-16">
      <div className="absolute inset-0 bp-grid"></div>
      
      {/* Background image & gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="cad_rampa.png" 
          alt="CAD Background" 
          className="w-full h-full object-cover opacity-10 blur-sm scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950"></div>
      </div>
      
      {/* Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none" 
        style={{ background: 'rgba(185,28,28,0.06)' }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-red-900/50 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
          <span className="text-zinc-400 text-[10px] tracking-[0.25em] uppercase">Homologaciones · Swaps · Cálculo Estructural</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-white">
          Pasión por los coches, <br className="hidden sm:block" />
          <span className="text-red-600"> ingeniería </span>
          que lo hace posible.
        </h1>
        
        <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Legalizamos tus reformas y desarrollamos proyectos de ingeniería a medida.
          <span className="text-zinc-200 font-semibold"> Rueda 100% legal.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button 
            onClick={() => scrollTo('contacto')} 
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded text-sm tracking-wide uppercase transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] border border-red-500/50"
          >
            Pide tu presupuesto sin compromiso
            <ChevronRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scrollTo('proyectos')} 
            className="w-full sm:w-auto text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-6 py-4 rounded text-sm tracking-wide uppercase transition-all duration-300"
          >
            Ver proyectos reales
          </button>
        </div>

        {/* Stats Grid */}
        <div className="inline-flex flex-wrap justify-center gap-x-8 gap-y-6 bg-zinc-900/60 border border-zinc-800 rounded-xl px-8 py-5 backdrop-blur-md">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-red-500">+100</div>
            <div className="text-zinc-500 text-[10px] mt-0.5 tracking-wide uppercase">Vehículos legalizados</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-red-500">CR 5.1</div>
            <div className="text-zinc-500 text-[10px] mt-0.5 tracking-wide uppercase">Código DGT suspensiones</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-red-500">FEM</div>
            <div className="text-zinc-500 text-[10px] mt-0.5 tracking-wide uppercase">Cálculo estructural</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-extrabold text-red-500">100%</div>
            <div className="text-zinc-500 text-[10px] mt-0.5 tracking-wide uppercase">Tasa de homologación</div>
          </div>
        </div>
      </div>
    </section>
  );
}
