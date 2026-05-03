export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 cf-bg opacity-40"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em]">Especialidades técnicas</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Nuestros Servicios</h2>
          <div className="w-12 h-0.5 bg-red-600 mt-3"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Service 1 */}
          <div className="cf-bg group bg-zinc-950/80 border border-zinc-800 hover:border-red-700/50 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 cursor-default">
            <div className="w-11 h-11 bg-zinc-900 border border-zinc-700 group-hover:border-red-900 rounded-lg flex items-center justify-center transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm mb-2">Homologación de Reformas</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">Tramitación técnica y legal completa ante la DGT para suspensiones, frenos y carrocería. Sin sorpresas, todo en regla.</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-zinc-800/60">
              <span className="text-[9px] uppercase tracking-widest bg-zinc-800/60 text-zinc-500 px-2 py-0.5 rounded-full">Suspensiones</span>
              <span className="text-[9px] uppercase tracking-widest bg-zinc-800/60 text-zinc-500 px-2 py-0.5 rounded-full">Frenos</span>
              <span className="text-[9px] uppercase tracking-widest bg-zinc-800/60 text-zinc-500 px-2 py-0.5 rounded-full">Carrocería</span>
            </div>
          </div>

          {/* Service 2 */}
          <div className="cf-bg group bg-zinc-950/80 border border-zinc-800 hover:border-red-700/50 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 cursor-default">
            <div className="w-11 h-11 bg-zinc-900 border border-zinc-700 group-hover:border-red-900 rounded-lg flex items-center justify-center transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm mb-2">Swaps de Motor</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">Análisis de viabilidad, adaptaciones estructurales, cálculo de ejes y proyecto de legalización llave en mano.</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-zinc-800/60">
              <span className="text-[9px] uppercase tracking-widest bg-zinc-800/60 text-zinc-500 px-2 py-0.5 rounded-full">Motor swap</span>
              <span className="text-[9px] uppercase tracking-widest bg-zinc-800/60 text-zinc-500 px-2 py-0.5 rounded-full">Legalización</span>
            </div>
          </div>

          {/* Service 3 */}
          <div className="cf-bg group bg-zinc-950/80 border border-zinc-800 hover:border-red-700/50 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 cursor-default">
            <div className="w-11 h-11 bg-zinc-900 border border-zinc-700 group-hover:border-red-900 rounded-lg flex items-center justify-center transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"/><circle cx="8.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm mb-2">Elementos de Carrocería</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">Diseño, verificación estructural y homologación de spoilers, faldones y difusores aerodinámicos a medida.</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-zinc-800/60">
              <span className="text-[9px] uppercase tracking-widest bg-zinc-800/60 text-zinc-500 px-2 py-0.5 rounded-full">Aerodinámica</span>
              <span className="text-[9px] uppercase tracking-widest bg-zinc-800/60 text-zinc-500 px-2 py-0.5 rounded-full">Spoilers</span>
            </div>
          </div>

          {/* Service 4 */}
          <div className="cf-bg group bg-zinc-950/80 border border-zinc-800 hover:border-red-700/50 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 cursor-default">
            <div className="w-11 h-11 bg-zinc-900 border border-zinc-700 group-hover:border-red-900 rounded-lg flex items-center justify-center transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="2" y1="12" x2="22" y2="12"/><path d="M5 8l-3 4 3 4"/><path d="M19 8l3 4-3 4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm mb-2">Diseño y Cálculo CAD</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">Piezas mecánicas y estructuras con análisis FEM, planos técnicos normalizados y certificación para fabricación.</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-zinc-800/60">
              <span className="text-[9px] uppercase tracking-widest bg-zinc-800/60 text-zinc-500 px-2 py-0.5 rounded-full">CAD</span>
              <span className="text-[9px] uppercase tracking-widest bg-zinc-800/60 text-zinc-500 px-2 py-0.5 rounded-full">FEM</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
