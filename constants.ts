import { Plan } from './types';

export const PLANS: Plan[] = [
  {
    id: 'plano-3',
    title: 'Plano 3',
    subtitle: 'Plataforma IA para Empresários',
    targetAudience: 'Empresários que querem começar a usar IA no dia a dia, entender o que realmente faz sentido e aplicar com autonomia.',
    colorTheme: 'orange',
    fixedPrice: {
      original: 1997,
      current: 997,
      note: "Condição especial de lançamento. Nova versão em 01/01/2026."
    },
    features: [
      {
        title: "Aprender e Aplicar",
        description: "Foco em autonomia para o empresário."
      },
      {
        title: "Plataforma Prática",
        description: "Acesso a ferramentas e métodos explicados de forma simples: para que serve, quando usar e como aplicar."
      },
      {
        title: "Guias Passo a Passo",
        items: [
          "Criar agentes de IA",
          "Automatizar tarefas diárias",
          "Apoio a vendas, marketing e RH",
          "Análise de dados para decisão"
        ]
      },
      {
        title: "Mentoria Coletiva Mensal",
        description: "1 encontro ao vivo baseado nas dores reais dos empresários (com gravação)."
      },
      {
        title: "Comunidade Exclusiva",
        description: "Troca de experiências e networking com outros empresários."
      },
      {
        title: "Atualizações Constantes",
        description: "Novas ferramentas e aplicações adicionadas conforme o mercado evolui."
      }
    ]
  },
  {
    id: 'plano-2',
    title: 'Plano 2',
    subtitle: 'Gestão Operacional de IA',
    targetAudience: 'Empresas que querem IA funcionando na operação, ganhando tempo e organizando processos. Você foca no negócio, eu cuido da estrutura.',
    colorTheme: 'light',
    isPopular: true,
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
        title: "Operação da Empresa",
        description: "IA funcionando na rotina do negócio."
      },
      {
        title: "Ecossistema Digital",
        items: [
          "Site institucional completo (criação e manutenção)",
          "Hospedagem de site e plataforma inclusas",
          "Custos de uso de IA inclusos"
        ]
      },
      {
        title: "IA Personalizada",
        items: [
          "Plataforma exclusiva com IAs treinadas na empresa",
          "Assistentes 24h para RH e Financeiro",
          "Criação de Agentes Personalizados (Suporte/Decisão)"
        ]
      },
      {
        title: "Treinamento de Equipe",
        items: [
          "Até 3h de treinamento mensal online",
          "Sistemas de treinamento automático (Vídeos/Questionários)",
          "Agentes para tirar dúvidas de colaboradores"
        ]
      },
      {
        title: "Automações",
        description: "Redes sociais (comentários/boas-vindas) e WhatsApp (Comunicação interna/Cobrança)."
      }
    ]
  },
  {
    id: 'plano-1',
    title: 'Plano 1',
    subtitle: 'Gestão Estratégica Avançada',
    targetAudience: 'Crescimento estruturado e redução real de custos. Eu atuo como responsável direto pela estratégia e execução de IA dentro da empresa.',
    colorTheme: 'dark',
    pricing: [
      { duration: 3, price: 1800 },
      { duration: 6, price: 1650 },
      { duration: 12, price: 1500 },
    ],
    features: [
      {
        title: "INCLUI TUDO DO PLANO 2 E 3",
        description: "Plataforma, Mentorias, Site, Agentes, Treinamentos e Custos."
      },
      {
        title: "Estratégia e Crescimento",
        description: "IA integrada à estratégia e expansão do negócio."
      },
      {
        title: "Implementação Estratégica",
        description: "Planejamento e construção de soluções para RH, Análises Financeiras Profundas e Leitura de Dados."
      },
      {
        title: "Growth & Dados",
        items: [
          "Landing Pages (até 1/mês)",
          "Formulários inteligentes para Leads",
          "Dashboards de KPIs"
        ]
      },
      {
        title: "Gestão de Tráfego",
        description: "Gestão de anúncios (Meta/Google) com leitura estratégica de dados para aquisição previsível."
      },
      {
        title: "Acompanhamento Liderança",
        description: "Reunião mensal estratégica com diretoria para análise de resultados e ajustes de rota."
      },
      {
        title: "Sistemas Sob Medida",
        description: "Desenvolvimento de micro-sistemas e ferramentas específicas para processos únicos do negócio."
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
