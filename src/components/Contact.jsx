import { useState, useEffect } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [refNum, setRefNum] = useState('');

  useEffect(() => {
    setRefNum('REF: GOMIS-' + Date.now().toString().slice(-6));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bp-grid opacity-20"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em]">Hablemos de tu proyecto</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Solicitud de Presupuesto</h2>
          <div className="w-12 h-0.5 bg-red-600 mt-3 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Contacto directo */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="cf-bg bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
              <p className="text-[9px] text-zinc-600 uppercase tracking-[0.25em] mb-4 font-mono">// CONTACTO DIRECTO</p>
              
              <a href="tel:+34623052051" className="group flex items-center gap-3 hover:bg-zinc-800 p-3 -mx-3 rounded-lg transition-all duration-200 mb-2">
                <div className="w-9 h-9 bg-zinc-800 group-hover:bg-red-700 border border-zinc-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="group-hover:stroke-white transition-colors">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.59 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-zinc-600 uppercase tracking-widest">Teléfono</p>
                  <p className="text-white font-semibold text-sm font-mono">+34 623 05 20 51</p>
                </div>
              </a>

              <a href="mailto:gomisingenieria@outlook.es" className="group flex items-center gap-3 hover:bg-zinc-800 p-3 -mx-3 rounded-lg transition-all duration-200">
                <div className="w-9 h-9 bg-zinc-800 group-hover:bg-red-700 border border-zinc-700 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="group-hover:stroke-white transition-colors">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-zinc-600 uppercase tracking-widest">Email</p>
                  <p className="text-white font-semibold text-xs font-mono break-all">gomisingenieria@outlook.es</p>
                </div>
              </a>
            </div>

            {/* Operativa */}
            <div className="cf-bg bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
              <p className="text-[9px] text-zinc-600 uppercase tracking-[0.25em] mb-4 font-mono">// OPERATIVA</p>
              
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[9px] text-zinc-600 uppercase tracking-widest mb-1">Sede Técnica</p>
                  <p className="text-zinc-300 text-sm font-mono">Valencia, España</p>
                  <p className="text-zinc-500 text-xs mt-1">Servicios de homologación y cálculo estructural a nivel nacional.</p>
                </div>
                
                <div className="w-full h-px bg-zinc-800/60"></div>
                
                <div>
                  <p className="text-[9px] text-zinc-600 uppercase tracking-widest mb-1">Horario de Atención</p>
                  <p className="text-zinc-300 text-sm font-mono">Lunes a Viernes</p>
                  <p className="text-zinc-500 text-xs mt-1">09:00 - 18:00 (UTC+1)<br/>Soporte técnico prioritario disponible.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario ficha técnica */}
          <div className="lg:col-span-3">
            {formSubmitted ? (
              <div className="cf-bg bg-zinc-900 border border-green-800/40 rounded-xl p-10 text-center animate-pulse-once">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="mx-auto mb-4">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3 className="font-extrabold text-white text-xl mb-2">Solicitud enviada</h3>
                <p className="text-zinc-400 text-sm">Nos ponemos en contacto contigo en menos de 24 h.</p>
              </div>
            ) : (
              <div className="cf-bg bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="bg-zinc-950 border-b border-zinc-800 px-6 py-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">SOLICITUD_PRESUPUESTO.pdf</span>
                  <span className="text-[9px] text-zinc-700 font-mono">{refNum}</span>
                </div>
                <form className="p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1.5">Nombre / Empresa</label>
                      <input type="text" required placeholder="Tu nombre" className="w-full bg-zinc-950 border border-zinc-700 focus:border-red-700 rounded text-sm text-white placeholder-zinc-700 px-3 py-2.5 outline-none transition-colors duration-200 font-mono"/>
                    </div>
                    <div>
                      <label className="block text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1.5">Vehículo</label>
                      <input type="text" required placeholder="Marca / Modelo / Año" className="w-full bg-zinc-950 border border-zinc-700 focus:border-red-700 rounded text-sm text-white placeholder-zinc-700 px-3 py-2.5 outline-none transition-colors duration-200 font-mono"/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1.5">Tipo de Servicio</label>
                    <select required className="w-full bg-zinc-950 border border-zinc-700 focus:border-red-700 rounded text-sm text-zinc-300 py-2.5 px-3 outline-none transition-colors duration-200 font-mono">
                      <option value="">— Selecciona un servicio —</option>
                      <option>Homologación de suspensión</option>
                      <option>Homologación de carrocería</option>
                      <option>Swap de motor</option>
                      <option>Cálculo estructural CAD</option>
                      <option>Otro proyecto de ingeniería</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1.5">Descripción del Proyecto</label>
                    <textarea required rows="4" placeholder="Describe brevemente tu proyecto..." className="w-full bg-zinc-950 border border-zinc-700 focus:border-red-700 rounded text-sm text-white placeholder-zinc-700 p-3 outline-none transition-colors duration-200 font-mono resize-none"></textarea>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between border-t border-zinc-800 pt-4 gap-4">
                    <span className="text-[9px] text-zinc-700 font-mono">Respuesta garantizada &lt; 24 h</span>
                    <button type="submit" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-7 py-3 rounded uppercase tracking-widest transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                      Enviar Solicitud
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
