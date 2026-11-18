/**
 * Dicionário pt-BR, reformulado para posicionamento de Software Engineer.
 * Foco em engenharia real, arquitetura, testes e sistemas em produção.
 */
export const ptBR = {
  langSwitch: {
    ariaLabel: "Selecionar idioma",
    pt: "PT",
    en: "EN",
  },

  nav: {
    brand: "GUILHERME BARBOSA",
    work: "Casos de Estudo",
    track: "Trajetória",
    capabilities: "Especialidades",
    how: "Como trabalho",
    contact: "Contato",
    resume: "Currículo",
    cta: "VAMOS CONVERSAR",
    menuOpen: "Menu",
    menuClose: "Fechar",
  },

  hero: {
    eyebrow: "GUILHERME BARBOSA / SOFTWARE ENGINEER / REACT & REACT NATIVE",
    headlineLines: ["CONSTRUINDO SISTEMAS.", "RESOLVENDO PROBLEMAS", "REAIS DE ENGENHARIA."],
    subheadline:
      "Engenheiro de Software com foco em Frontend e Mobile no ecossistema TypeScript. Quase 4 anos projetando monorepos modernos, arquiteturas resilientes em React e React Native, e integrando sistemas com precisão técnica.",
    ctaPrimary: "VER CASOS DE ENGENHARIA",
    ctaSecondary: "BAIXAR CURRÍCULO (PDF)",
    rotatorPairs: [
      "WebView ⇄ React Native",
      "monorepo legado → Turborepo",
      "contrato OpenAPI → SDK tipado",
      "diffing relacional → reconciliação de dados",
      "regras de agenda → slots determinísticos",
    ],
  },

  trackRecord: {
    eyebrow: "TRAJETÓRIA & ENGENHARIA",
    headlineLines: [
      "SISTEMAS REAIS,",
      "BASES VIVAS,",
      "IMPACTO EM",
      "PRODUÇÃO.",
    ],
    highlightsLabel: "Destaques Técnicos",
    summaryQuote:
      "Engenharia de software de verdade se prova na capacidade de lidar com bases vivas, desenhar abstrações resilientes e entregar software que permanece estável e manutenível ao longo dos anos.",
    pillars: [
      {
        tag: "PRODUÇÃO CORPORATIVA",
        role: "Software Engineer (Frontend & Mobile)",
        period: "Quase 4 anos de produção contínua",
        description:
          "Atuação em time de engenharia na evolução e sustentação de plataformas corporativas de grande escala para entidades de classe e eventos nacionais. Desenvolvimento de módulos móveis em React Native para ensino contínuo (EAD) via pontes WebView-Native, engines de formulários dinâmicos com validação assíncrona concorrente, modernização para Turborepo 2 e governança automatizada via regras customizadas de AST no ESLint.",
        highlights: [
          "Pontes bidirecionais WebView-React Native para streaming de vídeo",
          "Engines dinâmicas de questionários e formulários multi-step",
          "Governança de internacionalização via regras de AST no ESLint",
          "Suítes de testes unitários com Jest e React Testing Library",
        ],
      },
      {
        tag: "INICIATIVA COMUNITÁRIA & COLABORATIVA",
        role: "Full Stack Engineer & Voluntário",
        period: "Projeto colaborativo em produção",
        description:
          "Desenvolvimento conjunto em equipe multidisciplinar de ecossistema de gestão administrativa e aplicativo móvel comunitário. Implementação de algoritmos não-destrutivos de reconciliação de dados em banco relacional e esteira automatizada no GitHub Actions para compilação e publicação de SDKs TypeScript tipados via OpenAPI e Orval.",
        highlights: [
          "Algoritmo de reconciliação não-destrutiva preservando integridade relacional",
          "Esteira automatizada de SDKs tipados a partir de contratos OpenAPI",
          "Monorepo unificado com Next.js 16, NestJS, Expo Router e Bun",
        ],
      },
      {
        tag: "PRODUTOS INDEPENDENTES & PESQUISA",
        role: "Criador & Engenheiro",
        period: "Engenharia de software aplicada",
        description:
          "Construção de aplicações orientadas a Clean Architecture e inteligência artificial prática. Criação de motores determinísticos de agendamento em Fastify com validação de invariantes temporais via Zod (sem delegar decisões de disponibilidade à LLM) e esteiras de domínio contábil isoladas com 100% de cobertura de testes unitários na camada de domínio auditada.",
        highlights: [
          "Motores de agendamento determinístico com safety guardrails em Fastify",
          "Clean Architecture com 100% de cobertura na camada de domínio auditada no Vitest",
        ],
      },
    ],
  },

  manifesto: {
    headlineLines: [
      "SISTEMAS REAIS,",
      "BASES VIVAS,",
      "IMPACTO DE",
      "ENGENHARIA.",
    ],
    chainWords: [
      "monorepos",
      "formulários dinâmicos",
      "WebView bridges",
      "testes unitários",
      "regras de AST",
      "reconciliação",
      "SDKs tipados",
      "Clean Architecture",
      "resiliência",
    ],
    closing:
      "Engenharia de software não é sobre inventar complexidade, mas sobre projetar abstrações claras, eliminar débitos técnicos com segurança e garantir que bases corporativas de grande escala operem de forma estável e previsível em produção.",
  },

  work: {
    eyebrow: "CASOS DE ENGENHARIA SELECIONADOS",
    headlineLines: ["ARQUITETURAS,", "SISTEMAS E CÓDIGO", "EM PRODUÇÃO."],
    labels: {
      problem: "DESAFIO TÉCNICO",
      solution: "SOLUÇÃO & ARQUITETURA",
      build: "CONTRIBUIÇÃO REAL",
      tech: "STACK",
    },
    status: {
      production: "EM PRODUÇÃO",
      beta: "MVP TÉCNICO",
      betaV2: "BETA / DOMÍNIO PURO",
      demo: "ESTUDO / LAB",
    },
    demoDisclaimer: "Demonstração funcional com dados de homologação.",
    imagePlaceholder: "screenshot em homologação / diagrama técnico",
    projects: {
      enterpriseMobile: {
        category: "MOBILE / ENSINO CONTINUADO (EAD)",
        name: "ENTERPRISE MOBILE & PLATAFORMA EAD",
        headlineLines: [
          "PLAYER EAD EM WEBVIEW,",
          "PERSISTÊNCIA COM MMKV,",
          "CADASTRO DINÂMICO PF/PJ.",
        ],
        description:
          "Aplicativo corporativo móvel em produção atendendo associações profissionais e eventos nacionais. Arquitetura plugável para reprodução de videoaulas com ponte WebView-Native, persistência de progresso em MMKV e fluxo dinâmico de cadastro com validação assíncrona.",
        problem:
          "Reprodução instável de videoaulas em conexões móveis com perda de progresso ao alternar aulas, somadas à complexidade de gerenciar fluxos dinâmicos de cadastro de membros (PF/PJ) com conformidade estrita à LGPD.",
        solution:
          "Padrão Strategy desacoplando a WebView de provedores proprietários (Vimeo), injeção de scripts JavaScript bidirecionais para controle de pausa e progresso com retenção a cada 10s no MMKV, além de motor dinâmico de cadastro com validação assíncrona concorrente de CPF/CNPJ.",
        build:
          "App em produção com arquitetura React Native e Expo, suíte de testes unitários em Jest para regras do player e formulários, auto-login sequencial após aceite legal e governança de código com Biome.",
        imageAlt: "Interface do aplicativo corporativo móvel com fluxo dinâmico e módulo EAD",
      },
      enterpriseSistemas: {
        category: "WEB CORPORATIVO / MOTOR DE QUESTIONÁRIOS",
        name: "ENTERPRISE SISTEMAS & MOTOR DE QUESTIONÁRIOS",
        headlineLines: [
          "SCHEMAS DINÂMICOS,",
          "GOVERNANÇA VIA AST,",
          "MONOREPO TURBOREPO.",
        ],
        description:
          "Plataforma central web para gestão de eventos, credenciamento e portal corporativo. Desenvolvimento do subsistema de questionários dinâmicos, modernização contínua de monorepo corporativo e governança de código via ESLint AST.",
        problem:
          "Formulários institucionais heterogêneos de alta complexidade com re-renderizações desnecessárias em formulários extensos, combinados com frequentes quebras de internacionalização por textos fixos inseridos diretamente em componentes JSX.",
        solution:
          "Criação do subsistema QuestionFieldController com isolamento entre controle e renderização visual, migração gradual de módulos para Turborepo 2 + Vite e desenvolvimento de regra personalizada na AST do ESLint para forçar internacionalização.",
        build:
          "Monorepo corporativo em produção com colaboração contínua, criação autoral do motor de questionários com mais de 800 linhas de testes unitários em RTL e esteira de CI com Husky.",
        imageAlt: "Interface do sistema web corporativo com motor dinâmico de questionários",
      },
      atosPlatform: {
        category: "MONOREPO FULL STACK / ESTEIRA DE SDKS",
        name: "PLATAFORMA COMUNITÁRIA ATOS & PIPELINE DE SDKS",
        headlineLines: [
          "DIFFING NÃO-DESTRUTIVO,",
          "ESTEIRA OPENAPI,",
          "SDKS TIPADOS.",
        ],
        description:
          "Plataforma integrada de gestão comunitária e aplicativo móvel desenvolvida como iniciativa voluntária e colaborativa. Reconciliação não-destrutiva de escalas ministeriais e esteira de SDKs fortemente tipados via OpenAPI.",
        problem:
          "Perda de integridade referencial e histórico de auditoria causada por mutações destrutivas em banco ao salvar escalas de voluntários, somada à duplicação manual de contratos de API entre backend, web e mobile.",
        solution:
          "Algoritmo de reconciliação em memória usando Map/Set e transações atômicas no Prisma ($transaction) para aplicar mutações seletivas, associado a pipeline no GitHub Actions gerando clientes TypeScript com Orval a partir da especificação OpenAPI do NestJS.",
        build:
          "Monorepo Turborepo + Bun em produção em contexto voluntário e colaborativo, com implementação autoral do algoritmo ministryTeamReconciler.ts, esteira de SDKs via OpenAPI e testes automatizados com Playwright e Vitest.",
        imageAlt: "Painel administrativo do Atos Platform e geração automatizada de SDKs",
      },
      clinicFlow: {
        category: "IA & BACKEND / AGENDAMENTO EM SAÚDE",
        name: "CLINICFLOW (RELIORA) & MOTOR DE AGENDAMENTO",
        headlineLines: [
          "SLOTS DETERMINÍSTICOS,",
          "SAFETY GUARDRAILS,",
          "BACKEND FASTIFY.",
        ],
        description:
          "Plataforma SaaS multi-tenant para agendamento inteligente via WhatsApp para clínicas médicas e odontológicas. Motor algorítmico em TypeScript que calcula os horários disponíveis e esquemas Zod que validam os dados de entrada, enquanto a LLM atua estritamente na interpretação conversacional.",
        problem:
          "Modelos de linguagem generativos são não-determinísticos por natureza, gerando riscos críticos ao calcular intervalos de agenda, durações de procedimentos e conflitos de horários em saúde.",
        solution:
          "Motor algorítmico determinístico em TypeScript que calcula janelas livres a partir da grade semanal do profissional e subtrai reservas concorrentes, enquanto esquemas Zod validam estritamente os dados de entrada e parâmetros da requisição, mantendo as decisões sob regras determinísticas e restringindo a LLM à interpretação de intenções.",
        build:
          "MVP técnico funcional desenvolvido em Fastify 5 com Prisma 7, PostgreSQL, Cloudflare Workers/D1 e mais de 800 linhas de testes de integração cobrindo conflitos de horário.",
        imageAlt: "Painel do ClinicFlow com gerenciamento de agendamentos e regras de atendimento",
      },
      documentFlow: {
        category: "FRONTEND / ARQUITETURA LIMPA",
        name: "DOCUMENTFLOW & MÁQUINA DE ESTADOS DO DOMÍNIO",
        headlineLines: [
          "DOMÍNIO PURO.",
          "MÁQUINAS DE ESTADOS.",
          "100% DE COBERTURA DE TESTES NO DOMÍNIO.",
        ],
        description:
          "Esteira de coleta, conferência e validação de documentos contábeis por competência fiscal. Modelagem orientada a Clean Architecture com regras de negócio 100% isoladas do framework React e testadas no Vitest.",
        problem:
          "Acoplamento excessivo de regras contábeis complexas (estados de aprovação, competências e pendências) dentro de componentes React, gerando fragilidade e testes lentos.",
        solution:
          "Isolamento total da pasta de domínio em funções puras e máquinas de estado testadas no Vitest, consumidas de forma reativa pela interface construída com Tailwind CSS.",
        build:
          "Aplicação web em Beta V2 construída com React 19 e Vite, atingindo 100% de cobertura de testes unitários exclusivamente na camada de domínio auditada sem qualquer dependência do DOM.",
        imageAlt: "Interface do DocumentFlow com acompanhamento de esteira de documentos",
      },
      // Aliases para compatibilidade retroativa
      reliora: {
        category: "IA & AGENDAMENTO / SAÚDE",
        name: "CLINICFLOW (RELIORA)",
        headlineLines: ["DETERMINISTIC SLOTS,", "AI GUARDRAILS,", "FASTIFY BACKEND."],
        description: "Plataforma SaaS multi-tenant para agendamento inteligente via WhatsApp para clínicas médicas e odontológicas.",
        problem: "Modelos de linguagem não garantem determinismo em intervalos de agenda.",
        solution: "Motor algorítmico determinístico calculando janelas reais de profissionais com schemas Zod.",
        build: "MVP funcional em Fastify 5 com suíte de testes de integração.",
        imageAlt: "Painel do ClinicFlow com conversas e atendimentos da clínica",
      },
      accounting: {
        category: "FRONTEND / ARQUITETURA LIMPA",
        name: "DOCUMENTFLOW",
        headlineLines: ["PURE DOMAIN LOGIC,", "FINITE STATE MACHINE,", "100% DOMAIN COVERAGE."],
        description: "Portal para orquestração documental contábil com Clean Architecture.",
        problem: "Regras de negócio acopladas aos componentes visuais.",
        solution: "Domínio isolado em funções puras com 100% de cobertura na camada de domínio auditada no Vitest.",
        build: "Aplicação web em Beta V2 com React 19 e Tailwind CSS.",
        imageAlt: "Interface do sistema de documentos para contabilidade",
      },
      fieldQuotes: {
        category: "MOBILE / UTILITÁRIOS",
        name: "TECHFIELDFLOW",
        headlineLines: ["OFFLINE PROPOSALS,", "NATIVE PDF ENGINE,", "EXPO ROUTER."],
        description: "Criação de orçamentos e propostas direto do campo com geração instantânea de PDF nativo.",
        problem: "Dificuldade de emitir relatórios padronizados em atendimento externo sem sinal de internet estável.",
        solution: "App móvel React Native com gerador de PDF cliente via expo-print e compartilhamento nativo.",
        build: "Aplicativo em beta com React Native 0.86 e Expo 57.",
        imageAlt: "Aplicativo mobile de criação de orçamentos para técnicos de campo",
      },
      hotel: {
        category: "PAINEL / ANALYTICS",
        name: "HRIFLOW",
        headlineLines: ["REVENUE DATA,", "PRICING CONTEXT,", "ANALYTICS."],
        description: "Dashboard de revenue management para centralização de métricas de ocupação hoteleira.",
        problem: "Métricas de diária média e sazonalidade dispersas em relatórios estáticos.",
        solution: "Painel interativo consolidando indicadores com visualização via Recharts.",
        build: "Demo funcional construída com Next.js e Prisma.",
        imageAlt: "Dashboard de revenue management para hotelaria",
      },
    },
  },

  beforeAfter: {
    eyebrow: "ARQUITETURA & EVOLUÇÃO",
    headlineTop: "LEGADO",
    headlineAmp: "&",
    headlineBottom: "MODERNO",
    beforeLabel: "ANTES (DÉBITO TÉCNICO)",
    afterLabel: "DEPOIS (ARQUITETURA)",
    beforeSteps: [
      "monorepo Lerna lento",
      "estado de servidor no Redux",
      "strings soltas na UI",
      "deletar tudo e recriar",
      "APIs sem contrato",
    ],
    afterSteps: [
      "Turborepo 2 incremental",
      "servidor em TanStack Query",
      "ESLint AST enforcing i18n",
      "reconciliação idempotente",
      "SDKs OpenAPI automáticos",
    ],
    beforeCaption: "Bases corporativas acumulando débitos técnicos e complexidade de manutenção",
    afterCaption: "Padrões modernos e testes introduzidos em equipe para ganho de manutenibilidade",
    closing:
      "Evoluções arquiteturais desenvolvidas de forma colaborativa em times de engenharia: entendendo o negócio a fundo, mitigando riscos e migrando bases corporativas incrementalmente sem interromper a operação.",
  },

  whatIBuild: {
    eyebrow: "CAPACIDADES PRINCIPAIS",
    headlineLines: [
      "ONDE MINHA",
      "ENGENHARIA GERA",
      "VALOR REAL.",
    ],
    items: [
      {
        title: "ARQUITETURA FRONTEND",
        description:
          "Aplicações web modernas com React 19, Next.js e Vite. Especialista em TanStack Query, formulários dinâmicos com validação assíncrona concorrente e design systems coesos.",
      },
      {
        title: "ENGENHARIA MOBILE",
        description:
          "Desenvolvimento nativo com React Native e Expo. Pontes bidirecionais com WebViews, persistência local ultrarrápida com MMKV e listas de alto rendimento com FlashList.",
      },
      {
        title: "BACKEND & CONTRATOS DE API",
        description:
          "APIs resilientes com Fastify e NestJS, modelagem relacional com Prisma e PostgreSQL, e governança de contratos via OpenAPI e SDKs tipados gerados por Orval.",
      },
      {
        title: "QUALIDADE DE SOFTWARE & TOOLING",
        description:
          "Monorepos de alta velocidade com Turborepo 2, regras customizadas de linter na AST do ESLint e cobertura sólida de testes com Jest, Vitest, Testing Library e Playwright.",
      },
    ],
  },

  lab: {
    eyebrow: "LAB & EXPERIMENTOS",
    headlineLines: ["PROTÓTIPOS,", "TOOLING &", "EXPERIMENTOS."],
    description:
      "Explorações visuais, ferramentas internas de linha de comando e estudos de engenharia de software.",
    entries: {
      senna: {
        tag: "WEB / TRIBUTO",
        title: "Ayrton Senna Experience",
        description:
          "Site-experiência interativo homenageando o legado de Ayrton Senna. Timeline imersiva com animações refinadas em GSAP.",
        hrefLabel: "Abrir o site",
        imageAlt:
          "Site tributo a Ayrton Senna, com o retrato e as estatísticas da carreira",
      },
    },
    comingSoon: "Ferramentas CLI e novos protótipos em desenvolvimento.",
    openExternal: "abre em nova aba",
  },

  diagnosis: {
    headlineLines: ["PRECISA TRANSFORMAR", "UM PRODUTO OU", "ARQUITETURA EM", "REALIDADE?"],
    body: "Além da minha atuação contínua em engenharia corporativa, seleciono projetos de consultoria técnica e desenvolvimento para fundadores e empresas que precisam construir MVPs robustos em React e React Native, auditar performance de aplicações ou desenhar monorepos escaláveis.",
    cta: "DISCUTIR UM PROJETO",
  },

  howIWork: {
    eyebrow: "COMO TRABALHO",
    headlineLines: [
      "ENGENHARIA NÃO",
      "É SÓ CÓDIGO.",
      "É MÉTODO E",
      "DECISÃO.",
    ],
    steps: [
      {
        title: "DISSECAR & MODELAR",
        description:
          "Entendo a regra de negócio a fundo antes de abrir o editor. Isolo o domínio e identifico trade-offs técnicos e pontos de falha.",
      },
      {
        title: "ARQUITETAR & CONTRATAR",
        description:
          "Defino contratos de API estritos (OpenAPI, Zod, TypeScript) e arquitetura de componentes desacoplada antes de codificar telas.",
      },
      {
        title: "CONSTRUIR & TESTAR",
        description:
          "Construção orientada a testes unitários e de integração desde o primeiro dia, garantindo código imune a regressões.",
      },
      {
        title: "GOVERNAR & ESCALAR",
        description:
          "Automação de qualidade com regras de linter, CI/CD, documentação técnica transparente e refatoração segura contínua.",
      },
    ],
  },

  stack: {
    eyebrow: "STACK / TECNOLOGIAS CENTRAIS",
    headlineLines: ["TECNOLOGIAS", "CENTRAIS NO", "MEU DIA A DIA."],
    note: "Só tecnologias efetivamente usadas nos projetos e sistemas em produção.",
  },

  finalCta: {
    lineOne: "TEM UM PROJETO",
    lineTwo: "OU UMA OPORTUNIDADE",
    lineThree: "EM MENTE?",
    cta: "VAMOS CONVERSAR",
  },

  footer: {
    madeBy: "Guilherme Barbosa - Software Engineer. Foco em Frontend, Mobile e ecossistema TypeScript.",
    rights: "Código e arquitetura documentados com precisão técnica.",
    backToTop: "Voltar ao topo",
  },
};

export type Dictionary = typeof ptBR;
