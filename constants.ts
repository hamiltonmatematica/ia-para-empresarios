import { Plan } from './types';

export const PLANS: Plan[] = [
  {
    id: 'plano-1',
    title: 'Plano 1',
    subtitle: 'Gestão Estratégica de IA Avançada',
    targetAudience: 'Para empresas que querem crescimento estruturado, redução de custos e ganho de tempo, com implementação completa de IA, sem precisar aprender ou executar nada.',
    colorTheme: 'dark',
    pricing: [
      { duration: 3, price: 1800 },
      { duration: 6, price: 1650 },
      { duration: 12, price: 1500 },
    ],
    features: [
      {
        title: "INCLUI TUDO DO PLANO 2 E 3",
        description: "Plataforma, Mentorias, Site, Agentes, Treinamentos e Custos inclusos."
      },
      {
        title: "Implementação Estratégica Completa",
        description: "Integração completa da IA em diversas áreas da empresa, com foco na automação de processos, análises de dados e aprimoramento de decisões."
      },
      {
        title: "Landing Pages & Formulários",
        description: "Páginas de vendas personalizadas para converter visitantes em leads, com formulários inteligentes que qualificam automaticamente."
      },
      {
        title: "Reuniões Estratégicas Mensais",
        description: "Acompanhamento da liderança para revisar resultados, ajustar rotas e planejar próximos passos."
      },
      {
        title: "Gestão de Tráfego & Aquisição",
        description: "IA para otimizar campanhas publicitárias, definir público-alvo ideal e ajustar lances automaticamente."
      },
      {
        title: "Microsistemas Personalizados",
        description: "Desenvolvimento de plataformas internas e ferramentas sob medida para processos únicos do negócio."
      },
      {
        title: "Suporte Contínuo & Evolução",
        description: "Sistema evolui constantemente com ajustes trimestrais baseados em dados coletados."
      }
    ]
  },
  {
    id: 'plano-2',
    title: 'Plano 2',
    subtitle: 'Gestão Operacional de IA',
    targetAudience: 'Para empresas que querem IA funcionando diretamente na operação, ganhando tempo, reduzindo retrabalho e organizando processos, sem precisar entender de tecnologia.',
    colorTheme: 'orange',
    pricing: [
      { duration: 3, price: 1200 },
      { duration: 6, price: 1100 },
      { duration: 12, price: 1000 },
    ],
    features: [
      {
        title: "INCLUI TUDO DO PLANO 3",
        description: "Acesso à plataforma, mentoria e comunidade."
      },
      {
        title: "Site Institucional Completo",
        description: "Criação e manutenção de site profissional como cartão de visitas digital da empresa."
      },
      {
        title: "Plataforma de IA Exclusiva",
        description: "IAs treinadas com dados internos da empresa. Assistentes para RH, Financeiro e análises estratégicas."
      },
      {
        title: "Treinamento Mensal da Equipe",
        description: "Até 3h de treinamento mensal online com gravações disponíveis para consulta futura."
      },
      {
        title: "Agentes de IA Personalizados",
        description: "Assistentes autônomos para suporte a clientes, qualificação de leads e tomada de decisão."
      },
      {
        title: "Automação de Redes Sociais",
        description: "Respostas automáticas em comentários e mensagens de boas-vindas para novos seguidores."
      },
      {
        title: "Implementações Estratégicas",
        description: "IA aplicada em RH, treinamentos, análises internas e formulários inteligentes para KPIs."
      }
    ]
  },
  {
    id: 'plano-3',
    title: 'Plano 3',
    subtitle: 'Plataforma IA para Empresários',
    targetAudience: 'Para empresários que querem aprender a usar IA na prática e aplicá-la no negócio com autonomia total.',
    colorTheme: 'light',
    fixedPrice: {
      original: 1997,
      current: 997,
      note: "Condição especial de lançamento. Acesso disponível a partir de 01/01/2026."
    },
    features: [
      {
        title: "Plataforma Completa de IA",
        description: "Acesso a plataforma intuitiva para aprender e aplicar ferramentas de IA que transformam o negócio."
      },
      {
        title: "Passo a Passo Prático",
        description: "Guias que ensinam a criar e aplicar IA: automatizar análises, criar chatbots, qualificar leads e mais."
      },
      {
        title: "Mentoria Coletiva Mensal",
        description: "Reuniões mensais com outros empresários para tirar dúvidas e aprender com os desafios de todos."
      },
      {
        title: "Atualizações Constantes",
        description: "Novas ferramentas e aplicações de IA adicionadas mensalmente conforme o mercado evolui."
      },
      {
        title: "Comunidade de Empresários",
        description: "Grupo exclusivo para trocar experiências, discutir ideias e compartilhar boas práticas sobre IA."
      }
    ]
  }
];

export const PROFILE = {
  name: "Hamilton Vinícius",
  role: "Mestre em Modelagem Computacional & Especialista em IA",
  bio: `Professor há 20 anos e especialista em tecnologia, atuo na interseção entre educação, inteligência artificial e estratégias de crescimento empresarial.
  
  Mestre em Modelagem Computacional e especialista em TRI, unindo conhecimento pedagógico à capacidade de escalar negócios através de dados.

  Junto à minha equipe, ajudo empresas a implementarem IA aplicada, estruturarem rotinas baseadas em dados e executarem campanhas de tráfego estratégico. Não entregamos apenas ferramentas, mas processos que transformam a produtividade e o lucro.`,
  education: [
    {
      institution: "Universidade Estadual de Montes Claros",
      degree: "Mestrado, Modelagem computacional e sistemas",
      period: "2014 - 2016",
      details: "Tema: Proposta de utilização da T.R.I. na avaliação e melhoria no aprendizado."
    },
    {
      institution: "Universidade Estadual de Montes Claros",
      degree: "Licenciatura, Matemática",
      period: "2005 - 2008"
    },
    {
      institution: "Infinity School",
      degree: "Full Stack Programming",
      details: "Desenvolvimento de Apps, Websites e Programas. Visual Art Creative Center.",
      period: "2025"
    }
  ]
};
