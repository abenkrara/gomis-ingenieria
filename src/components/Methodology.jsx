export default function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Seguridad y Legalidad',
      desc: 'Cada proyecto cumple la normativa vigente. Tu vehículo sale con toda la documentación en regla y apto para ITV.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    {
      num: '02',
      title: 'Proyectos a medida',
      desc: 'Estudiamos cada caso de forma individual. No hay dos coches iguales; no hay dos soluciones iguales.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Experiencia en alto rendimiento',
      desc: 'Años de trabajo en automoción deportiva avalan cada decisión técnica. Sabemos lo que el motor siente.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Respaldo técnico total',
      desc: 'Del primer boceto a la entrega del expediente, te acompañamos con documentación rigurosa en cada fase.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    }
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="metodologia" className="py-24 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 cf-bg opacity-30"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-red-600 text-[10px] font-bold uppercase tracking-[0.3em]">Nuestra metodología</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">¿Por qué elegirnos?</h2>
          <div className="w-12 h-0.5 bg-red-600 mt-3"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-red-700 via-red-900/40 to-transparent hidden sm:block"></div>
          <div className="flex flex-col">
            {steps.map((step, idx) => (
              <div key={idx} className={`group flex gap-6 sm:gap-10 items-start py-6 ${idx % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-zinc-950 border-2 border-red-700/60 group-hover:border-red-600 flex items-center justify-center z-10 relative transition-colors duration-300">
                    {step.icon}
                  </div>
                  <span className="text-[9px] font-mono text-zinc-700 mt-1 tracking-widest">{step.num}</span>
                </div>
                <div className={`cf-bg flex-1 bg-zinc-950/60 border border-zinc-800 group-hover:border-red-900/40 rounded-xl p-5 transition-all duration-300 ${idx % 2 !== 0 ? 'sm:text-right' : ''}`}>
                  <h3 className="font-bold text-white mb-1.5 text-sm">{step.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 bg-zinc-950 border border-red-900/30 rounded-xl px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="flex-shrink-0">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span className="text-zinc-300 text-sm">Presupuesto técnico sin compromiso · Respuesta en menos de 24 h</span>
          </div>
          <button onClick={() => scrollTo('contacto')} className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-6 py-2.5 rounded uppercase tracking-widest transition-all duration-300 hover:scale-105 whitespace-nowrap">
            Solicitar ahora
          </button>
        </div>
      </div>
    </section>
  );
}
