import React, { useMemo } from 'react';
import { Plan, ContractDuration } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface PlanCardProps {
  plan: Plan;
  selectedDuration: ContractDuration;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, selectedDuration }) => {
  const isDark = plan.colorTheme === 'dark';
  const isOrange = plan.colorTheme === 'orange';
  
  const baseClasses = "relative flex flex-col p-8 rounded-none transition-all duration-300 border h-full";
  
  const themeClasses = useMemo(() => {
    if (isDark) return "bg-[#111111] text-white border-white/10 hover:border-brand-orange";
    if (isOrange) return "bg-brand-orange text-white border-transparent";
    return "bg-white text-black border-black/10 hover:border-black";
  }, [isDark, isOrange]);

  const buttonClasses = useMemo(() => {
    if (isOrange) return "bg-black text-white hover:bg-white hover:text-black";
    return "bg-brand-orange text-white hover:bg-white hover:text-brand-orange border border-transparent hover:border-brand-orange";
  }, [isOrange]);

  const currentPrice = useMemo(() => {
    if (plan.fixedPrice) return plan.fixedPrice.current;
    return plan.pricing?.find(p => p.duration === selectedDuration)?.price || 0;
  }, [plan, selectedDuration]);

  return (
    <div className={`${baseClasses} ${themeClasses} group`}>
      {plan.isPopular && (
        <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 uppercase tracking-widest transform translate-y-[-50%]">
          Recomendado
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-sm uppercase tracking-[0.2em] opacity-70 mb-2">{plan.subtitle}</h3>
        <h2 className="text-3xl font-display font-bold mb-4">{plan.title}</h2>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : isOrange ? 'text-white/90' : 'text-gray-600'}`}>
          {plan.targetAudience}
        </p>
      </div>

      <div className="mb-8 pb-8 border-b border-current border-opacity-20">
        <div className="flex items-end gap-1">
            <span className="text-sm font-semibold mb-1">R$</span>
            <span className="text-5xl font-bold tracking-tighter">{currentPrice.toLocaleString('pt-BR')}</span>
            {!plan.fixedPrice && <span className="text-sm opacity-70 mb-1">/mês</span>}
        </div>
        
        {plan.fixedPrice && (
           <div className="mt-2 text-sm opacity-80">
             <span className="line-through mr-2">R$ {plan.fixedPrice.original}</span>
             <span>(Pagamento único)</span>
           </div>
        )}
        
        {plan.fixedPrice?.note && (
             <div className="mt-2 text-xs font-semibold bg-black/20 p-2 rounded inline-block">
               {plan.fixedPrice.note}
             </div>
        )}
      </div>

      <div className="flex-grow space-y-6 mb-8">
        {plan.features.map((feature, idx) => (
          <div key={idx} className="group/item">
            <h4 className="font-bold flex items-center gap-2 mb-1">
              <Check className={`w-4 h-4 ${isOrange ? 'text-black' : 'text-brand-orange'}`} />
              {feature.title}
            </h4>
            {feature.description && (
              <p className={`text-xs pl-6 ${isDark ? 'text-gray-400' : isOrange ? 'text-white/80' : 'text-gray-600'}`}>
                {feature.description}
              </p>
            )}
            {feature.items && (
              <ul className={`text-xs pl-6 mt-1 space-y-1 list-disc list-inside ${isDark ? 'text-gray-500' : isOrange ? 'text-white/70' : 'text-gray-500'}`}>
                {feature.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>

      <a 
        href="https://wa.me/553884030420" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`w-full py-4 px-6 rounded-none font-bold text-center uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${buttonClasses}`}
      >
        Contratar Agora
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default PlanCard;