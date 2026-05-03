export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-zinc-700 font-mono">
        <div className="flex items-center gap-2">
          <img src="logo.png" alt="Gomis Ingeniería & Proyectos" className="h-6 w-auto" />
        </div>
        <span>© {new Date().getFullYear()} · Todos los derechos reservados · Valencia, España</span>
      </div>
    </footer>
  );
}
