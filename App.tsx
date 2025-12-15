import React, { useState } from 'react';
import { PLANS, PROFILE } from './constants';
import Logo from './components/Logo';
import PlanCard from './components/PlanCard';
import { CircleDecor, SemiCircleDecor, GridDecor } from './components/GeometricDecor';
import { ContractDuration } from './types';
import { Menu, X, ArrowDown, Instagram, Linkedin, MessageCircle, GraduationCap, Code, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<ContractDuration>(12);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-brand-orange selection:text-white">

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo variant="light" className="scale-75 origin-left md:scale-100" />

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-semibold">
            <a href="#sobre" className="hover:text-brand-orange transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-brand-orange transition-colors">Serviços</a>
            <a href="#planos" className="hover:text-brand-orange transition-colors">Planos</a>
            <a href="#contato" className="hover:text-brand-orange transition-colors">Contato</a>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 py-8 px-6 flex flex-col gap-6 text-center text-lg font-bold">
            <a href="#sobre" onClick={toggleMenu}>Sobre</a>
            <a href="#servicos" onClick={toggleMenu}>Serviços</a>
            <a href="#planos" onClick={toggleMenu}>Planos</a>
            <a href="#contato" onClick={toggleMenu}>Contato</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <GridDecor className="inset-0" />

        {/* Geometric Decor - Inspired by PDF */}
        <CircleDecor className="w-64 h-64 -top-20 -left-20 opacity-80" />
        <SemiCircleDecor className="w-96 h-96 top-1/2 -right-48 opacity-90" rotation="270deg" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-brand-orange text-lg md:text-xl font-bold uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
            Inteligência Artificial & Estratégia
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[0.9] mb-8">
            IA PARA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">EMPRESÁRIOS</span>
          </h1>

          <div className="max-w-3xl mx-auto mb-12 space-y-8">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              A proposta é inserir a inteligência artificial na rotina do empresário e da empresa, de forma progressiva:
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-brand-orange transition-colors">
                <span className="text-brand-orange font-bold text-sm uppercase tracking-widest block mb-2">Plano 1</span>
                <p className="font-semibold text-white">Gestão estratégica completa com IA</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-brand-orange transition-colors">
                <span className="text-brand-orange font-bold text-sm uppercase tracking-widest block mb-2">Plano 2</span>
                <p className="font-semibold text-white">IA operando diretamente no negócio</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-brand-orange transition-colors">
                <span className="text-brand-orange font-bold text-sm uppercase tracking-widest block mb-2">Plano 3</span>
                <p className="font-semibold text-white">Aprenda e aplique IA com autonomia</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="#planos" className="px-8 py-4 bg-brand-orange text-white font-bold uppercase tracking-widest hover:bg-white hover:text-brand-orange transition-colors min-w-[200px]">
              Ver Planos
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/50" />
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-brand-beige text-black relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Bio Column */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-brand-orange rounded-full opacity-20"></div>
              <h3 className="text-brand-orange font-bold uppercase tracking-widest mb-4">Sobre o Especialista</h3>
              <h2 className="text-4xl font-display font-bold mb-6">{PROFILE.name}</h2>
              <p className="text-xl font-medium mb-6">{PROFILE.role}</p>
              <div className="prose prose-lg text-gray-700 leading-relaxed mb-8">
                {PROFILE.bio.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4">{paragraph}</p>
                ))}
              </div>

              <div className="bg-white p-6 border-l-4 border-brand-orange shadow-lg">
                <p className="font-bold text-lg mb-2">Execução em Equipe</p>
                <p className="text-gray-600">Este serviço é executado pessoalmente por mim e minha equipe de especialistas, garantindo suporte completo e multidisciplinar.</p>
              </div>
            </div>

            {/* Education Column */}
            <div className="space-y-8 mt-8 md:mt-0">
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-brand-orange" />
                Formação Acadêmica
              </h3>

              {PROFILE.education.map((edu, idx) => (
                <div key={idx} className="bg-white p-6 rounded-none shadow-sm border border-gray-200 hover:border-brand-orange transition-colors relative group">
                  <div className="absolute top-6 right-6 text-brand-orange opacity-50 group-hover:opacity-100 transition-opacity">
                    {edu.institution.includes("Infinity") ? <Code size={24} /> : <Briefcase size={24} />}
                  </div>
                  <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                  <p className="text-brand-orange font-semibold text-sm mb-2">{edu.institution}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-3">{edu.period}</p>
                  {edu.details && (
                    <p className="text-gray-600 text-sm border-t border-gray-100 pt-3 mt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-32 relative bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-brand-orange font-bold uppercase tracking-widest mb-4">Investimento</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Escolha o seu nível de jogo</h3>

            {/* Duration Toggle */}
            <div className="inline-flex bg-white/5 p-1 rounded-none border border-white/10">
              <button
                onClick={() => setBillingCycle(3)}
                className={`px-6 py-2 text-sm font-bold transition-all ${billingCycle === 3 ? 'bg-brand-orange text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Trimestral
              </button>
              <button
                onClick={() => setBillingCycle(6)}
                className={`px-6 py-2 text-sm font-bold transition-all ${billingCycle === 6 ? 'bg-brand-orange text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Semestral
              </button>
              <button
                onClick={() => setBillingCycle(12)}
                className={`px-6 py-2 text-sm font-bold transition-all ${billingCycle === 12 ? 'bg-brand-orange text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Anual
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-500 max-w-md mx-auto">
              *Os planos de gestão (1 e 2) possuem valores progressivos conforme a duração do contrato. O plano 3 possui valor único promocional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {PLANS.map((plan) => (
              <div key={plan.id} className="h-full">
                <PlanCard plan={plan} selectedDuration={billingCycle} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why IA Section */}
      <section id="servicos" className="py-24 bg-white text-black relative overflow-hidden">
        <SemiCircleDecor className="w-[500px] h-[500px] -left-64 top-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-brand-orange font-bold uppercase tracking-widest mb-4">Por que IA?</h3>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                Menos esforço.<br />Mais resultado.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A inteligência artificial não é sobre robôs substituindo humanos. É sobre eliminar o trabalho repetitivo para que sua equipe possa pensar estrategicamente.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center bg-black text-white font-bold rounded-none">1</span>
                  <span className="text-xl font-bold">Automatize o operacional</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center bg-brand-orange text-white font-bold rounded-none">2</span>
                  <span className="text-xl font-bold">Analise dados sem viés</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center bg-gray-200 text-black font-bold rounded-none">3</span>
                  <span className="text-xl font-bold">Tome decisões mais rápidas</span>
                </li>
              </ul>
            </div>
            <div className="bg-black p-12 text-white relative">
              <div className="absolute top-0 right-0 p-4">
                <div className="w-4 h-4 bg-brand-orange rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold mb-6 border-b border-white/20 pb-4">O que entregamos</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-brand-orange font-bold mb-1">Site & Landing Pages</h4>
                  <p className="text-gray-400 text-sm">Sua base digital profissional e focada em conversão.</p>
                </div>
                <div>
                  <h4 className="text-brand-orange font-bold mb-1">Agentes de IA</h4>
                  <p className="text-gray-400 text-sm">Funcionários digitais disponíveis 24/7 para suporte e processos.</p>
                </div>
                <div>
                  <h4 className="text-brand-orange font-bold mb-1">Treinamento Corporativo</h4>
                  <p className="text-gray-400 text-sm">Sua equipe dominando as ferramentas do futuro.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-black border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <Logo variant="light" className="mb-6" />
              <p className="text-gray-400 max-w-sm mb-8">
                Consultoria estratégica para empresas que buscam o essencial. Elimine distrações, foque no básico bem feito e escale com inteligência.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-brand-orange hover:border-brand-orange transition-colors rounded-full">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-brand-orange hover:border-brand-orange transition-colors rounded-full">
                  <Linkedin size={20} />
                </a>
                <a href="https://wa.me/553884030420" className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-brand-orange hover:border-brand-orange transition-colors rounded-full">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contato</h4>
              <ul className="space-y-4 text-gray-400">
                <li>Montes Claros - MG</li>
                <li>Av. Afonso Pena, 197</li>
                <li>contato@hamilton.com.br</li>
                <li>+55 38 8403-0420</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#sobre" className="hover:text-brand-orange transition-colors">Sobre</a></li>
                <li><a href="#planos" className="hover:text-brand-orange transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Área do Cliente</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; 2024 Hamilton Vinícius. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">Desenvolvido com foco no essencial.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;