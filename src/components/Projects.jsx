import { useState } from 'react';

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const expandIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
    </svg>
  );

  return (
    <section id="proyectos" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bp-grid opacity-30"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em]">Trabajo real · Resultados verificables</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Proyectos Destacados</h2>
          <div className="w-12 h-0.5 bg-red-600 mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* SEAT Toledo featured */}
          <div className="lg:col-span-3 bg-zinc-900 border border-zinc-800 hover:border-red-700/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col">
            <div 
              className="relative w-full aspect-[16/9] cursor-pointer group/img overflow-hidden" 
              style={{ background: 'linear-gradient(135deg,#18181b,#27272a)' }}
              onClick={() => setSelectedImage('seat_toledo.jpg')}
            >
              <img src="seat_toledo.jpg" alt="SEAT Toledo" className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" />
              
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover/img:opacity-100 bg-zinc-900/80 border border-zinc-700 text-white text-xs px-4 py-2 rounded-full backdrop-blur transition-all duration-300 flex items-center gap-2 transform translate-y-4 group-hover/img:translate-y-0">
                  {expandIcon} Ampliar imagen
                </span>
              </div>

              <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                <span className="bg-red-600 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded w-fit shadow-md">Homologado DGT</span>
                <span className="bg-zinc-950/90 border border-zinc-700 text-zinc-300 text-[9px] uppercase tracking-widest px-2.5 py-1 rounded w-fit shadow-md">CR 5.1 · RD 866/2010</span>
              </div>

              {/* Suspension thumbnail */}
              <div 
                className="absolute bottom-0 right-0 w-28 h-28 overflow-hidden border-l border-t border-zinc-700 rounded-tl-xl flex items-center justify-center cursor-pointer group/thumb" 
                style={{ background: 'linear-gradient(135deg,#18181b,#27272a)' }}
                onClick={(e) => { e.stopPropagation(); setSelectedImage('suspension.jpg'); }}
              >
                <img src="suspension.jpg" alt="Suspensión" className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover/thumb:opacity-100 text-white">
                    {expandIcon}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-extrabold text-white text-lg leading-snug">Homologación Suspensión Deportiva</h3>
                <span className="flex-shrink-0 text-[9px] uppercase tracking-widest bg-green-950/60 border border-green-800/40 text-green-400 px-2 py-0.5 rounded-full mt-1">Completado</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">Instalación de muelles H&R en SEAT Toledo 1.9 TDI (2002). Reducción de altura controlada y mejora de estabilidad dinámica. Proyecto técnico, inspección ITV y legalización completa.</p>
              <div className="flex flex-wrap gap-3 text-xs text-zinc-600 border-t border-zinc-800 pt-4 mt-auto">
                <span>SEAT Toledo 1M · 2002</span><span>·</span><span>H&R Sport Springs</span><span>·</span><span className="text-zinc-500 italic">Antes/Después Real ✓</span>
              </div>
            </div>
          </div>

          {/* CAD plano */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 hover:border-red-700/60 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col">
            <div 
              className="relative flex-1 min-h-[12rem] cursor-pointer group/img overflow-hidden" 
              style={{ background: 'linear-gradient(135deg,#18181b,#27272a)' }}
              onClick={() => setSelectedImage('cad_rampa.png')}
            >
              <img src="cad_rampa.png" alt="Plano CAD" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover/img:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent pointer-events-none"></div>
              
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover/img:opacity-100 bg-zinc-900/80 border border-zinc-700 text-white text-xs px-4 py-2 rounded-full backdrop-blur transition-all duration-300 flex items-center gap-2 transform translate-y-4 group-hover/img:translate-y-0">
                  {expandIcon} Ver plano en detalle
                </span>
              </div>

              <div className="absolute top-3 left-3 pointer-events-none">
                <span className="bg-zinc-950/90 border border-red-900/50 text-red-400 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-md">Plano Fabricación Real</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-zinc-950/90 border border-zinc-700 rounded px-2 py-1 font-mono text-[9px] text-zinc-400 shadow-md pointer-events-none">ESCALA 1:50 · A3</div>
            </div>
            <div className="p-5">
              <h3 className="font-extrabold text-white text-base mb-2">Diseño Estructural de Rampa</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-3">Cálculo técnico y definición de materiales para rampa de elevación vehicular en acero al carbono. Análisis de cargas y planos de fabricación completos.</p>
              <div className="grid grid-cols-2 gap-2 text-[9px] border-t border-zinc-800 pt-3">
                <div><span className="text-zinc-600 uppercase tracking-widest block">Material</span><span className="text-zinc-300 font-semibold font-mono">Acero C45</span></div>
                <div><span className="text-zinc-600 uppercase tracking-widest block">Software</span><span className="text-zinc-300 font-semibold font-mono">CAD/FEM</span></div>
                <div><span className="text-zinc-600 uppercase tracking-widest block">Escala</span><span className="text-zinc-300 font-semibold font-mono">1:50 · A3</span></div>
                <div><span className="text-zinc-600 uppercase tracking-widest block">Tubos</span><span className="text-zinc-300 font-semibold font-mono">12 perfiles</span></div>
              </div>
            </div>
          </div>

          {/* Documento técnico strip */}
          <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 hover:border-red-700/40 rounded-xl overflow-hidden flex flex-col sm:flex-row items-stretch transition-all duration-300 shadow-lg">
            <div 
              className="sm:w-64 flex-shrink-0 relative min-h-[10rem] flex items-center justify-center cursor-pointer group/img overflow-hidden" 
              style={{ background: 'linear-gradient(135deg,#18181b,#27272a)' }}
              onClick={() => setSelectedImage('doc.png')}
            >
              <img src="doc.png" alt="Proyecto técnico" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover/img:scale-105" />
              <div className="absolute inset-0 bg-zinc-950/40 group-hover/img:bg-zinc-950/60 transition-colors duration-300 pointer-events-none"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="opacity-0 group-hover/img:opacity-100 bg-zinc-900/90 border border-zinc-700 text-white text-xs px-4 py-2 rounded-full backdrop-blur transition-all duration-300 flex items-center gap-2 transform translate-y-4 group-hover/img:translate-y-0">
                  {expandIcon} Leer documento
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-center gap-2 flex-1">
              <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">Documentación técnica real</span>
              <h4 className="font-bold text-white text-base">Proyecto Técnico por Reforma de Vehículo</h4>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-3xl">Elaboración del proyecto técnico oficial para homologación de suspensión deportiva (CR 5.1 · RD 866/2010). Incluye memoria, cálculos, ficha de características y tramitación ante ITV.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[9px] bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-sm uppercase tracking-wide">Memoria técnica</span>
                <span className="text-[9px] bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-sm uppercase tracking-wide">Cálculos</span>
                <span className="text-[9px] bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-sm uppercase tracking-wide">ITV</span>
                <span className="text-[9px] bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-sm uppercase tracking-wide">Tramitación DGT</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 backdrop-blur-md p-4 sm:p-8 transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 bg-zinc-900/80 hover:bg-red-600 border border-zinc-700 hover:border-red-600 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          
          <div className="relative max-w-5xl w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Detalle ampliado" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-zinc-800"
            />
          </div>
        </div>
      )}
    </section>
  );
}
