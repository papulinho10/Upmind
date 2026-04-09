import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Globe, MapPin, Menu, X, ChevronRight, Home, Briefcase, User, MessageSquare } from 'lucide-react';
import { useState, useRef } from 'react';
import Antigravity from './components/Antigravity';
import VariableProximity from './components/VariableProximity';
import ScrollReveal from './components/ScrollReveal';
import Dock from './components/Dock';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: 'Tráfego Pago',
      description: 'Anúncios de alta conversão no Google e Meta Ads para atrair clientes qualificados todos os dias.',
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: 'Google Meu Negócio',
      description: 'Domine as buscas locais. Colocamos sua empresa no topo do Google Maps quando seu cliente procurar.',
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: 'Criação de Sites',
      description: 'Sites rápidos, modernos e focados em conversão. Sua vitrine digital trabalhando 24h por você.',
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-display font-bold tracking-tighter">
            UPMIND<span className="text-white/50">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
            <a 
              href="#contato" 
              className="px-5 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-colors font-semibold"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 glass-panel border-t border-white/5 p-6 flex flex-col gap-4">
            <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white/70 hover:text-white">Serviços</a>
            <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white/70 hover:text-white">Sobre</a>
            <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white/70 hover:text-white">Contato</a>
          </div>
        )}
      </nav>

      {/* Hero Section with Antigravity */}
      <section className="relative h-[80vh] min-h-[600px] w-full bg-[#050505] flex items-center justify-center overflow-hidden">
        {/* Antigravity Background */}
        <div className="absolute inset-0 z-0">
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#7b7b74"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
        
        {/* Centered Logo */}
        <div className="relative z-10 pointer-events-none select-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-display font-bold tracking-tighter text-white drop-shadow-2xl"
          >
            UPMIND<span className="text-white/50">.</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="relative py-20 px-6 bg-[#050505] z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center" ref={containerRef} style={{ position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium uppercase tracking-widest mb-8 text-white/70"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Agência de Marketing Digital
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.1] mb-8"
          >
            <VariableProximity
              label="Escale suas vendas"
              fromFontVariationSettings="'wght' 300"
              toFontVariationSettings="'wght' 700"
              containerRef={containerRef}
              radius={150}
              falloff="linear"
            />
            <br className="hidden md:block" />
            <span className="text-gradient">
              <VariableProximity
                label="com inteligência."
                fromFontVariationSettings="'wght' 300"
                toFontVariationSettings="'wght' 700"
                containerRef={containerRef}
                radius={150}
                falloff="linear"
              />
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            <VariableProximity
              label="Transformamos cliques em clientes. Especialistas em Tráfego Pago, posicionamento no Google e Criação de Sites de alta performance."
              fromFontVariationSettings="'wght' 300"
              toFontVariationSettings="'wght' 600"
              containerRef={containerRef}
              radius={120}
              falloff="linear"
            />
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#contato" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all flex items-center justify-center gap-2 group"
            >
              Começar agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicos" 
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/5 transition-all flex items-center justify-center"
            >
              Nossos serviços
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 px-6 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Nossa expertise.
            </h2>
            <p className="text-white/50 text-lg max-w-xl font-light">
              Focamos no que realmente importa: colocar sua empresa na frente de quem já quer comprar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel p-8 rounded-3xl hover:bg-white/[0.05] transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-white/50 font-light leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                  Saber mais <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Manifesto Section */}
      <section id="sobre" className="py-24 px-6 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={3}
              blurStrength={4}
              textClassName="text-3xl md:text-5xl font-display font-bold tracking-tight mb-8"
            >
              Não vendemos likes. Vendemos resultados.
            </ScrollReveal>
            <div className="space-y-6 text-white/60 font-light text-lg leading-relaxed">
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur
                baseRotation={0}
                blurStrength={2}
              >
                A Upmind nasceu com um propósito claro: descomplicar o marketing digital e focar no que traz retorno real para o seu negócio.
              </ScrollReveal>
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur
                baseRotation={0}
                blurStrength={2}
              >
                Enquanto outras agências focam em métricas de vaidade, nós construímos máquinas de vendas. Unimos design de alta conversão, tráfego qualificado e presença local dominante.
              </ScrollReveal>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <div className="text-4xl font-display font-bold mb-2">+150</div>
                <div className="text-sm text-white/50 uppercase tracking-wider font-medium">Projetos Entregues</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-2">ROI</div>
                <div className="text-sm text-white/50 uppercase tracking-wider font-medium">Foco em Retorno</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
              <div className="text-center z-10">
                <div className="text-7xl font-display font-bold tracking-tighter mb-4">UP</div>
                <div className="text-sm tracking-[0.3em] text-white/50 uppercase">Mind Agency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-white text-black" style={{ clipPath: 'polygon(0 0, 100% 4vw, 100% 100%, 0 100%)' }} />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center pt-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8 text-black">
            Pronto para dominar <br /> o seu mercado?
          </h2>
          <p className="text-black/60 text-xl mb-12 font-light">
            Agende uma consultoria gratuita e descubra como podemos escalar o seu negócio.
          </p>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-black/80 transition-all group text-lg"
          >
            Falar com um especialista
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white/50 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-display font-bold tracking-tighter text-white">
            UPMIND<span className="text-white/50">.</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Upmind. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Mobile Dock */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Dock 
          items={[
            { icon: <Home size={18} />, label: 'Início', onClick: () => window.scrollTo(0,0) },
            { icon: <Briefcase size={18} />, label: 'Serviços', onClick: () => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' }) },
            { icon: <User size={18} />, label: 'Sobre', onClick: () => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' }) },
            { icon: <MessageSquare size={18} />, label: 'Contato', onClick: () => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }) },
          ]}
          panelHeight={60}
          baseItemSize={40}
          magnification={60}
        />
      </div>
    </div>
  );
}
