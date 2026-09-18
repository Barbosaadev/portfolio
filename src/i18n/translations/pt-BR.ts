/**
 * Dicionário pt-BR, refinado para ter mais voz, ponto de vista e linguagem natural.
 * `en.ts` segue o mesmo shape deste arquivo.
 */
export const ptBR = {
  langSwitch: {
    ariaLabel: "Selecionar idioma",
    pt: "PT",
    en: "EN",
  },

  nav: {
    brand: "GUILHERME",
    work: "Projetos",
    lab: "Lab",
    how: "Como trabalho",
    contact: "Contato",
    cta: "LET'S TALK",
    menuOpen: "Menu",
    menuClose: "Fechar",
  },

  hero: {
    eyebrow: "GUILHERME / SOFTWARE / AUTOMATION / WEB / AI",
    headlineLines: ["QUANTO DO", "SEU TRABALHO", "AINDA É", "FEITO NA MÃO?"],
    subheadline:
      "Prazer! Meu nome é Guilherme e eu construo sistemas, automações e ferramentas (e as vezes desmonto também)",
    ctaPrimary: "VER O QUE EU CONSTRUÍ",
    ctaSecondary: "ME MOSTRE O PROBLEMA",
    rotatorPairs: [
      "planilha → sistema",
      "formulário → WhatsApp",
      "pedido → orçamento",
      "cliente pediu → lembrete enviado",
      "documento faltando → cobrança automática",
    ],
  },

  manifesto: {
    headlineLines: [
      "TEM COISA",
      "QUE VOCÊ FAZ",
      "TANTO TEMPO",
      "QUE NEM",
      "ESTRANHA",
      "MAIS.",
    ],
    chainWords: [
      "WhatsApp",
      "planilha",
      "e-mail",
      "copiar",
      "colar",
      "conferir",
      "repetir",
      "procurar",
      "mandar de novo",
    ],
    closing:
      "É aqui que eu gosto de entrar. Eu olho como o trabalho acontece hoje e procuro aquelas partes que alguém só continua fazendo porque sempre foi assim.",
  },

  work: {
    eyebrow: "SELECTED WORK",
    headlineLines: ["ALGUMAS COISAS", "QUE EU JÁ", "COLOQUEI DE PÉ."],
    labels: {
      problem: "PROBLEMA",
      solution: "SOLUÇÃO",
      build: "O QUE EU FIZ",
      tech: "TECH",
    },
    status: {
      production: "EM PRODUÇÃO",
      beta: "EM BETA",
      betaV2: "BETA V2",
      demo: "DEMONSTRATIVO",
    },
    demoDisclaimer: "Demonstração com dados de exemplo.",
    imagePlaceholder: "screenshot real em breve",
    projects: {
      reliora: {
        category: "AI / FRONT DESK / HEALTHCARE",
        name: "RELIORA",
        headlineLines: [
          "A MENSAGEM CHEGA.",
          "A RECEPÇÃO ESTÁ",
          "OCUPADA. E AGORA?",
        ],
        description:
          "Atendimento no WhatsApp para clínicas, com IA para responder, coletar informações, agendar e passar a conversa para a equipe quando necessário.",
        problem:
          "A mensagem chega no meio de outro atendimento. Quando alguém volta para o WhatsApp, já tem conversa nova, conversa antiga e paciente esperando resposta.",
        solution:
          "A ferramenta responde com as informações da clínica, coleta os dados, agenda quando pode e entrega a conversa para a equipe quando precisa.",
        build:
          "Aplicação em produção com engine de atendimento, integração com WhatsApp e painel para acompanhar conversas, pacientes e agendamentos.",
        imageAlt: "Painel do Reliora com conversas e atendimentos da clínica",
      },
      accounting: {
        category: "DOCUMENT OPS / CONTABILIDADE",
        name: "",
        headlineLines: ["TODO MÊS,", "UM DOCUMENTO", "SOME."],
        description:
          "Portal para pedir, receber e acompanhar documentos de vários clientes de um escritório de contabilidade.",
        problem:
          "O pedido começa em um canal, o arquivo chega em outro e alguém precisa conferir o que faltou antes de cobrar cada cliente de novo.",
        solution:
          "Um só lugar para solicitar documentos, receber arquivos e acompanhar o que já chegou e o que ainda está pendente.",
        build:
          "Sistema web em beta com organização por cliente e competência, acompanhamento da coleta e uma nova versão do fluxo documental.",
        imageAlt: "Interface do sistema de documentos para contabilidade",
      },
      fieldQuotes: {
        category: "FIELD OPS / MOBILE",
        name: "",
        headlineLines: ["O ORÇAMENTO", "FICA PARA", "DEPOIS?"],
        description:
          "Criação de orçamentos e propostas direto do campo, com um fluxo pensado para quem precisa responder rápido.",
        problem:
          "Abre o modelo antigo, procura o preço, troca os itens, ajeita a formatação e só então consegue mandar. Muitas vezes, isso fica para o fim do dia.",
        solution:
          "Um gerador que monta o orçamento com os itens e valores escolhidos e deixa o PDF pronto para enviar.",
        build:
          "Aplicativo mobile em beta para criar orçamentos padronizados e gerar o PDF na hora.",
        imageAlt:
          "Aplicativo mobile de criação de orçamentos para técnicos de campo",
      },
      hotel: {
        category: "REVENUE / HOTELARIA",
        name: "",
        headlineLines: ["QUANDO A DIÁRIA", "MUDA, O QUE", "ENTRA NA CONTA?"],
        description:
          "Dashboard de revenue management para juntar os indicadores que entram na decisão de preço.",
        problem:
          "Ocupação, diária média, antecedência, histórico e sazonalidade estão espalhados. Na hora de mexer no preço, falta contexto.",
        solution:
          "Um painel que reúne os principais indicadores para deixar a leitura dos dados mais rápida antes de mudar uma tarifa.",
        build:
          "Demo funcional com dados de exemplo e dashboard para acompanhar indicadores e análises de hotelaria.",
        imageAlt: "Dashboard de revenue management para hotelaria",
      },
    },
  },

  beforeAfter: {
    eyebrow: "BEFORE / AFTER",
    headlineTop: "ANTES",
    headlineAmp: "&",
    headlineBottom: "DEPOIS",
    beforeLabel: "ANTES",
    afterLabel: "DEPOIS",
    beforeSteps: [
      "WhatsApp",
      "planilha",
      "copiar",
      "colar",
      "conferir de novo",
      "enviar",
      "esquecer",
    ],
    afterSteps: ["entrada", "sistema", "automação", "acompanhamento", "feito"],
    beforeCaption: "Do jeito que muita operação acaba ficando",
    afterCaption: "Quando parte do processo se resolve sozinha",
    closing:
      "Quando o sistema segura essas etapas, a equipe ganha espaço para prestar atenção no que realmente precisa de alguém.",
  },

  whatIBuild: {
    eyebrow: "WHAT I BUILD",
    headlineLines: [
      "QUANDO EU ENTENDO",
      "O PROBLEMA,",
      "GERALMENTE ELE VIRA",
      "UMA DESSAS COISAS.",
    ],
    items: [
      {
        title: "SOFTWARE",
        description:
          "Sistemas internos, dashboards, áreas de cliente e ferramentas feitas em volta de uma operação real.",
      },
      {
        title: "AUTOMATION",
        description:
          "Fluxos para parar de digitar, conferir e cobrar as mesmas coisas toda vez.",
      },
      {
        title: "INTEGRATIONS",
        description:
          "Quando uma ferramenta tem a informação e outra precisa dela, eu faço as duas conversarem.",
      },
      {
        title: "AI",
        description:
          "IA quando ela ajuda de verdade: responder, organizar informação, encontrar algo ou acelerar uma decisão.",
      },
    ],
  },

  lab: {
    eyebrow: "LAB",
    headlineLines: ["ALGUMAS COISAS", "EU CONSTRUO", "SÓ POR CURIOSIDADE."],
    description:
      "Protótipos, ideias e ferramentas pequenas. Algumas viram produto. Outras ficam pelo caminho e deixam alguma coisa para a próxima.",
    entries: [
      {
        tag: "META",
        title: "Este site",
        description:
          "Eu quis testar duas coisas aqui: trocar o idioma sem recarregar a página e fazer o próprio texto participar da transição.",
      },
    ],
    comingSoon: "Tem mais coisa sendo construída.",
  },

  diagnosis: {
    headlineLines: ["TEM UMA TAREFA", "QUE TODO MUNDO", "AÍ ODEIA", "FAZER?"],
    body: "Pode ser uma planilha, uma rotina no WhatsApp, três abas abertas ou um relatório que alguém monta toda sexta. Me mostra como vocês fazem hoje. A partir daí, eu vejo o que dá para simplificar, automatizar ou construir.",
    cta: "ME MOSTRE O PROBLEMA",
  },

  howIWork: {
    eyebrow: "HOW I WORK",
    headlineLines: [
      "ANTES DE ABRIR",
      "O EDITOR,",
      "EU QUERO VER",
      "COMO VOCÊ FAZ.",
    ],
    steps: [
      {
        title: "UNDERSTAND",
        description:
          "Você me mostra o processo. Eu faço perguntas até entender onde a coisa emperra.",
      },
      {
        title: "MODEL",
        description:
          "Junto as peças, tiro o que não precisa existir e desenho um fluxo que faça sentido no dia a dia.",
      },
      {
        title: "BUILD",
        description:
          "Coloco uma primeira versão de pé cedo e vou ajustando conforme a coisa começa a ser usada.",
      },
      {
        title: "DELIVER",
        description:
          "Depois vem a parte que só aparece no uso real: corrigir os detalhes e deixar a solução pronta para a rotina.",
      },
    ],
  },

  stack: {
    eyebrow: "STACK / CAPABILITIES",
    headlineLines: ["ALGUMAS COISAS", "DA MINHA", "CAIXA DE FERRAMENTAS."],
    note: "React, Next.js, TypeScript, Node.js, React Native, Prisma, PostgreSQL, n8n e outras ferramentas que façam sentido para o projeto.",
  },

  finalCta: {
    lineOne: "TEM ALGUMA COISA",
    lineTwo: "TE FAZENDO",
    lineThree: "PERDER TEMPO?",
    cta: "ME MOSTRA",
  },

  footer: {
    madeBy: "Feito com ❤️ por mim.",
    rights: "Guilherme",
    backToTop: "Voltar ao topo",
  },
};

export type Dictionary = typeof ptBR;
