import type { Dictionary } from "./pt-BR";

/**
 * English dictionary for Software Engineer positioning.
 * Formatted for international technical recruiters, Tech Leads, and Engineering Managers.
 */
export const en: Dictionary = {
  langSwitch: {
    ariaLabel: "Select language",
    pt: "PT",
    en: "EN",
  },

  nav: {
    brand: "GUILHERME BARBOSA",
    work: "Engineering Cases",
    track: "Track Record",
    capabilities: "Capabilities",
    how: "How I Work",
    contact: "Contact",
    resume: "Resume",
    cta: "LET'S TALK",
    menuOpen: "Menu",
    menuClose: "Close",
  },

  hero: {
    eyebrow: "GUILHERME BARBOSA / SOFTWARE ENGINEER / REACT & REACT NATIVE",
    headlineLines: [
      "BUILDING SYSTEMS.",
      "SOLVING REAL",
      "ENGINEERING",
      "CHALLENGES.",
    ],
    subheadline:
      "Software Engineer specializing in Frontend and Mobile across the TypeScript ecosystem. Nearly 4 years of production experience architecting modern monorepos, resilient React and React Native systems, and robust API integrations.",
    ctaPrimary: "EXPLORE ENGINEERING CASES",
    ctaSecondary: "DOWNLOAD RESUME (PDF)",
    rotatorPairs: [
      "WebView ⇄ React Native",
      "legacy monorepo → Turborepo",
      "OpenAPI contract → typed SDK",
      "relational diffing → data reconciliation",
      "scheduling rules → deterministic slots",
    ],
  },

  trackRecord: {
    eyebrow: "TRACK RECORD & ENGINEERING",
    headlineLines: [
      "REAL SYSTEMS,",
      "LIVING BASES,",
      "PROVEN PRODUCTION",
      "IMPACT.",
    ],
    highlightsLabel: "Technical Highlights",
    summaryQuote:
      "Genuine software engineering is proven by the ability to evolve living codebases, design resilient abstractions, and ship systems that remain stable and maintainable over years of production.",
    pillars: [
      {
        tag: "ENTERPRISE PRODUCTION",
        role: "Software Engineer (Frontend & Mobile)",
        period: "Nearly 4 years of continuous production",
        description:
          "Collaborating within engineering teams on the evolution and maintenance of large-scale enterprise web and mobile platforms for professional associations and nationwide conferences. Engineered React Native mobile modules for continuing education (EAD) via WebView-Native bridges, dynamic form engines with concurrent async validation, Turborepo 2 migrations, and automated code governance using custom ESLint AST rules.",
        highlights: [
          "Bidirectional WebView-React Native bridges for video streaming",
          "Dynamic questionnaire and multi-step form engines",
          "Internationalization enforcement via ESLint AST custom rules",
          "Comprehensive unit test suites with Jest and React Testing Library",
        ],
      },
      {
        tag: "COMMUNITY & COLLABORATIVE INITIATIVE",
        role: "Full Stack Engineer & Volunteer",
        period: "Collaborative production project",
        description:
          "Co-developing an integrated administrative management ecosystem and mobile application within a multidisciplinary team. Implemented non-destructive relational data reconciliation algorithms and automated CI pipelines publishing typed TypeScript SDKs from OpenAPI contracts via Orval.",
        highlights: [
          "Non-destructive data reconciliation preserving relational integrity",
          "Automated typed SDK generation pipelines from OpenAPI contracts",
          "Unified monorepo with Next.js 16, NestJS, Expo Router, and Bun",
        ],
      },
      {
        tag: "INDEPENDENT PRODUCTS & RESEARCH",
        role: "Creator & Engineer",
        period: "Applied software engineering",
        description:
          "Architecting applications grounded in Clean Architecture and practical AI engineering. Built deterministic scheduling engines in Fastify with temporal invariant enforcement via Zod (without delegating availability logic to non-deterministic LLMs), and isolated accounting domain logic with 100% unit test coverage on the audited domain layer.",
        highlights: [
          "Deterministic scheduling engines with AI safety guardrails in Fastify",
          "Clean Architecture with 100% unit test coverage on audited domain logic in Vitest",
        ],
      },
    ],
  },

  manifesto: {
    headlineLines: [
      "REAL SYSTEMS,",
      "LIVING BASES,",
      "ENGINEERING",
      "IMPACT.",
    ],
    chainWords: [
      "monorepos",
      "dynamic forms",
      "WebView bridges",
      "unit tests",
      "AST rules",
      "reconciliation",
      "typed SDKs",
      "Clean Architecture",
      "resilience",
    ],
    closing:
      "Software engineering is not about inventing unnecessary complexity, but designing clear abstractions, safely mitigating technical debt, and ensuring large-scale enterprise codebases run predictably in production.",
  },

  work: {
    eyebrow: "SELECTED ENGINEERING CASES",
    headlineLines: ["ARCHITECTURES,", "SYSTEMS AND CODE", "IN PRODUCTION."],
    labels: {
      problem: "TECHNICAL CHALLENGE",
      solution: "SOLUTION & ARCHITECTURE",
      build: "PROVEN CONTRIBUTION",
      tech: "STACK",
    },
    status: {
      production: "IN PRODUCTION",
      beta: "TECHNICAL MVP",
      betaV2: "BETA / CLEAN DOMAIN",
      demo: "STUDY / LAB",
    },
    demoDisclaimer: "Functional demonstration with staging data.",
    imagePlaceholder: "staging screenshot / architecture diagram",
    projects: {
      enterpriseMobile: {
        category: "MOBILE / CONTINUING EDUCATION (EAD)",
        name: "ENTERPRISE MOBILE & EAD PLATFORM",
        headlineLines: [
          "WEBVIEW EAD PLAYER,",
          "MMKV PERSISTENCE,",
          "DYNAMIC ENROLLMENT.",
        ],
        description:
          "Production enterprise mobile app serving professional associations and nationwide events. Pluggable video player architecture via WebView-Native bridge, MMKV progress persistence, and dynamic member enrollment with asynchronous duplication checks.",
        problem:
          "Frequent video playback freezes on mobile connections causing loss of lesson progress upon switching classes, alongside the complexity of managing dynamic member registration flows under strict data privacy regulations (LGPD).",
        solution:
          "Strategy pattern decoupling the WebView from proprietary providers (Vimeo), bidirectional JavaScript injection for playback control and progress retention saved every 10s into MMKV, alongside a dynamic enrollment engine with concurrent async CPF/CNPJ validation.",
        build:
          "Production application built with React Native and Expo, comprehensive Jest unit suites covering player rules and form validations, sequential auto-login upon legal consent, and code governance via Biome.",
        imageAlt: "Enterprise mobile application interface showcasing dynamic signup and EAD video module",
      },
      enterpriseSistemas: {
        category: "ENTERPRISE WEB / QUESTIONNAIRE ENGINE",
        name: "ENTERPRISE SYSTEMS & QUESTIONNAIRE ENGINE",
        headlineLines: [
          "DYNAMIC SCHEMAS,",
          "AST LINTER GOVERNANCE,",
          "TURBO MONOREPO.",
        ],
        description:
          "Core enterprise web platform for event management, credentialing, and member portal. Development of a customizable dynamic questionnaire subsystem, continuous corporate monorepo modernization, and code governance via ESLint AST.",
        problem:
          "High-complexity heterogeneous institutional questionnaires suffering from cascade re-renders across extensive forms, paired with recurring internationalization regressions caused by hardcoded strings in JSX components.",
        solution:
          "Designed the QuestionFieldController subsystem separating form control from visual rendering, executed incremental module migration to Turborepo 2 + Vite, and authored custom ESLint AST rule blocking unlocalized strings.",
        build:
          "Production enterprise monorepo with continuous collaboration, authorial development of the questionnaire engine accompanied by 800+ lines of RTL unit tests, and Husky CI/CD hooks.",
        imageAlt: "Enterprise web system interface showing dynamic questionnaire engine",
      },
      atosPlatform: {
        category: "FULL STACK MONOREPO / SDK DISTRIBUTION",
        name: "ATOS COMMUNITY PLATFORM & SDK PIPELINE",
        headlineLines: [
          "NON-DESTRUCTIVE DIFFING,",
          "OPENAPI PIPELINES,",
          "TYPED SDKS.",
        ],
        description:
          "Integrated community management platform and mobile application built as a voluntary and collaborative initiative. Non-destructive roster reconciliation and strongly-typed SDK pipeline generated via OpenAPI.",
        problem:
          "Loss of relational integrity and audit history caused by destructive 'wipe-and-recreate' database saves in volunteer schedules, compounded by manual API contract duplication across backend, web, and mobile.",
        solution:
          "In-memory reconciliation algorithm using Map/Set entity diffing and atomic Prisma transactions ($transaction) for selective mutations, combined with GitHub Actions CI pipeline generating typed TypeScript clients using Orval from NestJS OpenAPI specs.",
        build:
          "Production Turborepo + Bun monorepo in a voluntary and collaborative setting, featuring authorial implementation of ministryTeamReconciler.ts, automated OpenAPI SDK distribution, and test suites with Playwright and Vitest.",
        imageAlt: "Atos Platform administrative dashboard and automated SDK generation pipeline",
      },
      clinicFlow: {
        category: "AI & BACKEND / HEALTHCARE SCHEDULING",
        name: "CLINICFLOW (RELIORA) & SCHEDULING ENGINE",
        headlineLines: [
          "DETERMINISTIC SLOTS,",
          "SAFETY GUARDRAILS,",
          "FASTIFY BACKEND.",
        ],
        description:
          "Multi-tenant SaaS platform for automated WhatsApp scheduling across dental and medical clinics. A deterministic TypeScript engine calculates available appointment slots while Zod schemas validate incoming request data, keeping the LLM strictly restricted to conversational intent interpretation.",
        problem:
          "Generative language models are probabilistic by nature, posing critical scheduling risks when calculating calendar intervals, procedure durations, and healthcare provider availability.",
        solution:
          "Deterministic TypeScript algorithmic engine calculating genuine free windows from weekly provider rotas and subtracting concurrent bookings, while Zod schemas strictly validate incoming request parameters, keeping scheduling decisions under deterministic rules while restricting the LLM strictly to intent interpretation.",
        build:
          "Functional technical MVP built with Fastify 5, Prisma 7, PostgreSQL, Cloudflare Workers/D1, and 800+ lines of integration tests covering scheduling conflicts.",
        imageAlt: "ClinicFlow dashboard displaying conversation tracking and appointment calendar",
      },
      documentFlow: {
        category: "FRONTEND / CLEAN ARCHITECTURE",
        name: "DOCUMENTFLOW & DOMAIN STATE MACHINE",
        headlineLines: [
          "PURE DOMAIN LOGIC.",
          "FINITE STATE MACHINES.",
          "100% DOMAIN TEST COVERAGE.",
        ],
        description:
          "Document collection, verification, and approval pipeline for accounting workflows by fiscal period. Clean Architecture design with business rules 100% isolated from the React UI framework and tested with Vitest.",
        problem:
          "Coupling complex accounting domain logic (approval status machines, compliance periods, missing file tracking) inside React components, resulting in brittle code and slow tests.",
        solution:
          "Complete domain isolation in pure functions and finite state machines tested in Vitest, consumed reactively by the Tailwind CSS user interface.",
        build:
          "Beta V2 web application built with React 19 and Vite, achieving 100% unit test coverage exclusively across the audited domain layer without any DOM or browser dependencies.",
        imageAlt: "DocumentFlow interface monitoring accounting document pipelines",
      },
      // Backward-compatibility aliases
      reliora: {
        category: "AI & SCHEDULING / HEALTHCARE",
        name: "CLINICFLOW (RELIORA)",
        headlineLines: ["DETERMINISTIC SLOTS,", "AI GUARDRAILS,", "FASTIFY BACKEND."],
        description: "Multi-tenant SaaS platform for automated WhatsApp scheduling in healthcare clinics.",
        problem: "Language models lack deterministic guarantees for calendar slots.",
        solution: "Deterministic TypeScript engine computing provider availability with strict Zod validation.",
        build: "Functional MVP with Fastify 5 and comprehensive integration test suite.",
        imageAlt: "ClinicFlow panel with clinic conversations and appointments",
      },
      accounting: {
        category: "FRONTEND / CLEAN ARCHITECTURE",
        name: "DOCUMENTFLOW",
        headlineLines: ["PURE DOMAIN LOGIC,", "FINITE STATE MACHINE,", "100% DOMAIN COVERAGE."],
        description: "Accounting document pipeline built with Clean Architecture.",
        problem: "Domain logic tightly coupled with presentation layer.",
        solution: "Pure domain functions with 100% Vitest unit test coverage on the audited domain layer.",
        build: "Beta V2 web application with React 19 and Tailwind CSS.",
        imageAlt: "Interface of document management system for accounting",
      },
      fieldQuotes: {
        category: "MOBILE / UTILITIES",
        name: "TECHFIELDFLOW",
        headlineLines: ["OFFLINE PROPOSALS,", "NATIVE PDF ENGINE,", "EXPO ROUTER."],
        description: "Field proposal and quote creation with instant native PDF rendering.",
        problem: "Inability to issue standardized customer quotes while offline in the field.",
        solution: "React Native mobile application rendering client-side PDFs via expo-print.",
        build: "Beta mobile application built with React Native 0.86 and Expo 57.",
        imageAlt: "Mobile quote generation application for field technicians",
      },
      hotel: {
        category: "DASHBOARD / ANALYTICS",
        name: "HRIFLOW",
        headlineLines: ["REVENUE DATA,", "PRICING CONTEXT,", "ANALYTICS."],
        description: "Revenue management dashboard consolidating hotel occupancy metrics.",
        problem: "Average daily rate and seasonality metrics dispersed across static reports.",
        solution: "Interactive dashboard consolidating KPIs with Recharts data visualization.",
        build: "Functional demo built with Next.js and Prisma.",
        imageAlt: "Revenue management dashboard for hospitality",
      },
    },
  },

  beforeAfter: {
    eyebrow: "ARCHITECTURE & EVOLUTION",
    headlineTop: "LEGACY",
    headlineAmp: "&",
    headlineBottom: "MODERN",
    beforeLabel: "BEFORE (TECHNICAL DEBT)",
    afterLabel: "AFTER (ARCHITECTURE)",
    beforeSteps: [
      "slow Lerna monorepo",
      "server state in Redux",
      "hardcoded UI strings",
      "destructive wipe & recreate",
      "untyped API contracts",
    ],
    afterSteps: [
      "incremental Turborepo 2",
      "server cache with TanStack Query",
      "ESLint AST enforcing i18n",
      "idempotent reconciliation",
      "automated OpenAPI SDKs",
    ],
    beforeCaption: "Enterprise codebases accumulating technical debt and maintenance overhead",
    afterCaption: "Modern patterns and testing introduced in team settings for high maintainability",
    closing:
      "Architectural evolutions engineered collaboratively within software teams: deeply understanding business rules, mitigating risks, and incrementally modernizing enterprise codebases without operational downtime.",
  },

  whatIBuild: {
    eyebrow: "CORE CAPABILITIES",
    headlineLines: [
      "WHERE MY",
      "ENGINEERING BRINGS",
      "REAL VALUE.",
    ],
    items: [
      {
        title: "FRONTEND ARCHITECTURE",
        description:
          "Modern web applications with React 19, Next.js, and Vite. Specialist in TanStack Query, schema-driven dynamic forms with concurrent async validation, and unified design systems.",
      },
      {
        title: "MOBILE ENGINEERING",
        description:
          "Native development with React Native and Expo. Bidirectional bridges with WebViews, ultra-fast local persistence with MMKV, and high-throughput lists via FlashList.",
      },
      {
        title: "BACKEND & API CONTRACTS",
        description:
          "Resilient APIs with Fastify and NestJS, relational data modeling with Prisma and PostgreSQL, and contract governance through OpenAPI schemas and automated Orval SDK pipelines.",
      },
      {
        title: "SOFTWARE QUALITY & TOOLING",
        description:
          "High-performance monorepos with Turborepo 2, custom linting rules in ESLint AST, and robust test suites with Jest, Vitest, Testing Library, and Playwright.",
      },
    ],
  },

  lab: {
    eyebrow: "LAB & EXPERIMENTS",
    headlineLines: ["PROTOTYPES,", "TOOLING &", "EXPERIMENTS."],
    description:
      "Visual explorations, command-line developer utilities, and software engineering studies.",
    entries: {
      senna: {
        tag: "WEB / TRIBUTE",
        title: "Ayrton Senna Experience",
        description:
          "Interactive storytelling experience honoring Ayrton Senna's legacy. Immersive timeline with refined GSAP animations.",
        hrefLabel: "Open project",
        imageAlt:
          "Ayrton Senna tribute website featuring portrait and career statistics",
      },
    },
    comingSoon: "CLI tools and experimental prototypes in development.",
    openExternal: "opens in new tab",
  },

  diagnosis: {
    headlineLines: ["NEED TO TURN", "A PRODUCT OR", "ARCHITECTURE", "INTO REALITY?"],
    body: "Alongside my full-time enterprise engineering work, I selectively partner with technical founders and companies looking for deep expertise in building resilient React/React Native MVPs, auditing web performance, or architecting TypeScript monorepos.",
    cta: "LET'S TALK",
  },

  howIWork: {
    eyebrow: "HOW I WORK",
    headlineLines: [
      "ENGINEERING IS NOT",
      "JUST CODE.",
      "IT'S METHOD AND",
      "DECISIONS.",
    ],
    steps: [
      {
        title: "DISSECT & MODEL",
        description:
          "Grasping business requirements deeply before coding. Isolating the domain and identifying technical trade-offs and failure points.",
      },
      {
        title: "ARCHITECT & CONTRACT",
        description:
          "Defining strict API contracts (OpenAPI, Zod, TypeScript) and decoupled component architectures before building UI views.",
      },
      {
        title: "BUILD & TEST",
        description:
          "Engineering with unit and integration test suites from day one, ensuring production code remains immune to regressions.",
      },
      {
        title: "GOVERN & SCALE",
        description:
          "Automating code quality through custom linter rules, CI/CD pipelines, transparent technical documentation, and safe continuous refactoring.",
      },
    ],
  },

  stack: {
    eyebrow: "STACK / CORE TECHNOLOGIES",
    headlineLines: ["CORE TOOLS", "IN MY DAILY", "ENGINEERING."],
    note: "Only technologies actually used in real projects and production systems.",
  },

  finalCta: {
    lineOne: "HAVE A PROJECT",
    lineTwo: "OR AN OPPORTUNITY",
    lineThree: "IN MIND?",
    cta: "LET'S TALK",
  },

  footer: {
    madeBy: "Guilherme Barbosa — Software Engineer. Specializing in Frontend, Mobile and the TypeScript ecosystem.",
    rights: "Code and architecture documented with technical rigor.",
    backToTop: "Back to top",
  },
};
