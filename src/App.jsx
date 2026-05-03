import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Methodology from './components/Methodology';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimateIn from './components/AnimateIn';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <AnimateIn delay={100} threshold={0.05}>
          <Hero />
        </AnimateIn>
        
        <AnimateIn delay={100} threshold={0.05}>
          <Services />
        </AnimateIn>
        
        <AnimateIn delay={100} threshold={0.05}>
          <Projects />
        </AnimateIn>
        
        <AnimateIn delay={100} threshold={0.05}>
          <Methodology />
        </AnimateIn>
        
        <AnimateIn delay={100} threshold={0.05}>
          <Contact />
        </AnimateIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;
