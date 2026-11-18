# PLANO ESTRATÉGICO DE REFORMULAÇÃO DO PORTFÓLIO PROFISSIONAL
**Documento de Planejamento e Arquitetura de Informação (Versão Aprovada)**  
**Profissional:** Guilherme Barbosa  
**Posicionamento Oficial:** Software Engineer | Frontend & Mobile | React, React Native & TypeScript  
**Versão Atual Auditada:** https://guilherme-barbosa.pages.dev/  
**Repositório Local:** `/home/barbosa/dev/sideproj/portfolio`  
**Data da Última Atualização:** 16 de Novembro de 2026  

---

## SUMÁRIO EXECUTIVO & DIRETRIZES APROVADAS

Este documento consolida as decisões estratégicas aprovadas para a reformulação do portfólio de **Guilherme Barbosa**.

### 1. Reposicionamento Preciso e Sem Títulos Inflacionados
- **Título Oficial:** `Software Engineer | Frontend & Mobile | React, React Native & TypeScript`.
- **Regra de Senioridade:** Não utilizar títulos como *Senior*, *Staff* ou *Tech Lead*. O posicionamento deve refletir um engenheiro sólido, capaz de tomar decisões arquiteturais, manter bases legadas, construir sistemas web e mobile de alto nível e garantir qualidade de software por meio de fatos técnicos comprovados.
- **Área Comercial:** Mantida de forma discreta e profissional (*Consultoria Técnica & Projetos Especiais*), sem posicionar o perfil como freelancer iniciante ou especialista em automações genéricas de escritório.

### 2. Anonimização Obrigatória das Experiências Corporativas
- Não citar o nome comercial da empresa contratante (*iTarget Tecnologia*) nem dados de clientes, domínios ou identificadores internos.
- Utilizar denominações institucionais anonimizadas:
  - *Em português:* "Plataforma Corporativa de Eventos e Associações" / "Empresa de tecnologia para eventos e entidades de classe".
  - *Em inglês:* "Enterprise Events & Professional Associations Platform" / "Enterprise event management & credentialing systems provider".
- O projeto comunitário da Igreja Atos será referenciado de forma institucional como "Plataforma Comunitária Atos", explicitando tratar-se de projeto colaborativo e voluntário.
- O projeto ClinicFlowAI (Reliora) será apresentado com transparência como MVP Funcional / Estudo de Engenharia de IA, sem declarações de operação comercial em produção.

### 3. Foco em Resultados Técnicos Concretos (Sem Métricas Arbitrárias)
- Não inventar porcentagens de negócio sem medição auditada.
- O impacto deve ser ancorado em conquistas técnicas comprovadas no código:
  - Implementação de esteiras completas de testes automatizados (Jest, RTL, Vitest, Playwright).
  - Concepção de algoritmos não-destrutivos de reconciliação de dados em memória e banco.
  - Arquitetura de pontes de comunicação bidirecional de baixa latência WebView-Native.
  - Geração e distribuição automatizada de SDKs tipados a partir de contratos OpenAPI com Orval.
  - Criação de regras personalizadas de governança de código na AST do ESLint.

### 4. Preservação Absoluta da Identidade Visual e Motion
- **Paleta de cores:** Fundo creme (`#f2efe6`), superfícies (`#e9e5d7`), texto preto quase absoluto (`#12110c`), destaque verde-limão chartreuse (`#c9f24e`), bordas sólidas de 1px a 2px e sombras duras (`4px 4px 0 0 #12110c`).
- **Tipografia:** Archivo Black (display), Manrope (corpo), Geist Mono (metadados e código).
- **Estética:** Brutalismo editorial ("Neo-brutalist / Technical Editorial").
- **Motion:** Preservação integral do `ScrambleText`, `FadeSwap`, `ScrollProgress`, `SpotCard` e `useReducedMotion`.

---

## 1. DIAGNÓSTICO DO SITE ATUAL

### 1.1. Arquitetura de Software
- Next.js 16.3.5 (App Router), React 19.2.8, Tailwind CSS v4, GSAP 3.15, Cloudflare Pages via Wrangler.
- Internacionalização leve baseada em React Context (`LocaleProvider`, hook `useT()`), com tipagem garantida via `Dictionary`.

### 1.2. O Problema de Posicionamento Atual
- O site atual foca quase inteiramente em tarefas de escritório manual (*"QUANTO DO SEU TRABALHO AINDA É FEITO NA MÃO?"*, *"planilha → WhatsApp"*, *"Sup! I'm Guilherme..."*).
- Nenhuma das ricas implementações corporativas de React Native, monorepos Turborepo, testes de software e pontes de WebView consta no portfólio.
- Recrutadores internacionais e líderes técnicos encontram uma comunicação de freelancer de automações básicas em vez de um engenheiro de software qualificado.

---

## 2. SELEÇÃO DOS 5 CASES DE ENGENHARIA (COM ANONIMIZAÇÃO)

```
┌────────────────────────────────────────────────────────────────────────┐
│                      OS 5 CASES SELECIONADOS                           │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Enterprise Mobile & Continuing Education (EAD)                      │
│    -> React Native 0.83, Expo Bare, WebView Bridge, Cadastro PF/PJ, LGPD│
│    -> Contexto: App corporativo de grande porte (anonimizado)          │
├────────────────────────────────────────────────────────────────────────┤
│ 2. Enterprise Web Systems & Form Engine                                │
│    -> Turborepo 2, Dynamic Question Engine, Regras AST ESLint, Testes  │
│    -> Contexto: Plataforma web corporativa de eventos (anonimizado)   │
├────────────────────────────────────────────────────────────────────────┤
│ 3. Atos Community Platform & Mobile                                    │
│    -> Next.js 16, NestJS, Reconciliador de Dados, OpenAPI/Orval SDKs  │
│    -> Contexto: Projeto colaborativo e voluntário                      │
├────────────────────────────────────────────────────────────────────────┤
│ 4. ClinicFlowAI (Reliora)                                              │
│    -> Fastify 5, Multi-tenant, Motor de Agenda Determinístico, Zod     │
│    -> Contexto: MVP funcional de backend e IA                          │
├────────────────────────────────────────────────────────────────────────┤
│ 5. DocumentFlow                                                        │
│    -> React 19, Vite, Domain-Driven Design puro, 100% Vitest Coverage  │
│    -> Contexto: Aplicação independente orientada a Clean Architecture  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. CONTEÚDO DOS CASES DE ESTUDO (ANONIMIZADOS E PRECISOS)

### Case 1: Enterprise Mobile & Plataforma EAD
- **Título Público:** Enterprise Mobile & Continuing Education Platform / App Móvel Corporativo & Plataforma EAD
- **Escopo:** Produção Corporativa (Setor de Eventos e Associações Profissionais)
- **Stack:** React Native 0.83, Expo Bare, React 19, TypeScript, TanStack Query, NativeWind, MMKV, FlashList, WebView Bridge, Jest, Biome.
- **Desafio Técnico:** Construção de ponte bidirecional entre WebView e React Native com injeção de scripts para controlar vídeo com persistência a cada 10s em MMKV, sem congelamento de tela ou vazamento de memória.
- **Contribuição:** Cadastro dinâmico PF/PJ nativo com validação assíncrona desacoplada de documentos (CPF/CNPJ) e auto-login sob diretrizes da LGPD.
- **Qualidade:** Testes unitários com Jest cobrindo regras do player e validação de formulários.

### Case 2: Enterprise Web Systems & Motor de Formulários
- **Título Público:** Enterprise Web Systems & Dynamic Form Engine / Sistemas Web Corporativos & Motor de Formulários
- **Escopo:** Produção Corporativa (Setor de Eventos e Associações Profissionais)
- **Stack:** Turborepo 2, React 18, Vite, TypeScript 5, Tailwind CSS, TanStack Query, ESLint AST, Jest, React Testing Library.
- **Desafio Técnico:** Normalização de formulários e questionários institucionais heterogêneos sem re-renderizações em cascata, preservando compatibilidade com backend legado.
- **Contribuição:** Criação do `QuestionFieldController` desacoplado e desenvolvimento de regra personalizada de AST no ESLint (`no-hardcoded-strings`) para forçar internacionalização obrigatória no time.
- **Qualidade:** Mais de 800 linhas de testes unitários automatizados em Jest e Testing Library.

### Case 3: Plataforma Comunitária Atos & App Móvel
- **Título Público:** Atos Community Platform & Mobile / Plataforma Comunitária Atos & App Móvel
- **Escopo:** Produção Colaborativa / Iniciativa Voluntária
- **Stack:** Turborepo, Next.js 16, React 19, NestJS, React Native 0.86, Expo 57, Bun, Prisma 6, PostgreSQL, OpenAPI, Orval, Vitest, Playwright.
- **Desafio Técnico:** Reconciliação não-destrutiva de escalas ministeriais com resolução de conflitos concorrentes sem deleção em massa de chaves estrangeiras.
- **Contribuição:** Algoritmo `ministryTeamReconciler.ts` com diffing de entidades e pipeline automatizado no GitHub Actions gerando clientes TypeScript com Orval a partir de OpenAPI do NestJS.
- **Qualidade:** Testes de ponta a ponta com Playwright e testes unitários com Vitest.

### Case 4: ClinicFlowAI (Reliora)
- **Título Público:** ClinicFlowAI (Reliora) — Intelligent Scheduling Platform
- **Escopo:** MVP Funcional / Estudo de Engenharia de IA e Backend
- **Stack:** Fastify 5, TypeScript, Prisma 7, PostgreSQL, OpenAI API, Zod, Cloudflare Workers, Cloudflare D1, React 19, Bun.
- **Desafio Técnico:** Mitigar alucinações de modelos de linguagem em agendamentos de saúde via cálculo determinístico de grades horárias médicas.
- **Contribuição:** Backend em Fastify com injeção de dependências, motor algorítmico de geração de janelas livres (`ProfessionalAvailability`), guardrails de segurança e validação Zod.
- **Qualidade:** Suíte de testes com mais de 800 linhas em Fastify cobrindo conflitos de horários e regras de disponibilidade.

### Case 5: DocumentFlow
- **Título Público:** DocumentFlow — Document Management Engine
- **Escopo:** Beta V2 / Projeto Independente
- **Stack:** React 19, Vite, TypeScript 5, Tailwind CSS v4, Vitest.
- **Desafio Técnico:** Desacoplamento absoluto entre regras de negócio contábeis e componentes de interface visual.
- **Contribuição:** Implementação de Clean Architecture no frontend, com funções puras de domínio gerenciando máquinas de estado de aprovação e filtros de competência.
- **Qualidade:** 100% de cobertura de testes unitários com Vitest na pasta `src/domain/`.

---

## 4. INTEGRAÇÃO DOS CURRÍCULOS E LINKS PROFISSIONAIS

### 4.1. Localização e Integração dos PDFs Oficiais
Os currículos auditados foram localizados na pasta `Documents` e serão disponibilizados para download em `public/curriculo/`:
- **Currículo em Português:** `public/curriculo/Guilherme_Barbosa_Desenvolvedor_Frontend_PT_BR.pdf` (link simbólico / download direto: `/curriculo/curriculo-guilherme-barbosa-pt.pdf`).
- **Currículo em Inglês:** `public/curriculo/Guilherme_Barbosa_Frontend_Engineer.pdf` (link simbólico / download direto: `/curriculo/resume-guilherme-barbosa-en.pdf`).
- Versões complementares (React Native e Full Stack) arquivadas na pasta para referência.

### 4.2. Links Profissionais Configurados em `siteConfig`
- **GitHub:** `https://github.com/Barbosaadev`
- **LinkedIn:** `https://linkedin.com/in/guilherme-barbosa-dev`
- **E-mail Profissional:** `barbosadevcontato@gmail.com`
- **WhatsApp:** `https://wa.me/5585994061349`

---

## 5. REVISÃO DO SCHEMA.ORG E METADADOS SEMÂNTICOS

Em atenção à diretriz de conformidade semântica:
- **Remoção de `alumniOf` para empresas:** `alumniOf` deve ser utilizado exclusivamente para instituições de ensino. Empresas empregadoras utilizam `worksFor` ou devem ser omitidas para manter a anonimização estrita solicitada.
- **Schema.org Corrigido:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Guilherme Barbosa",
  "jobTitle": "Software Engineer",
  "url": "https://guilherme-barbosa.pages.dev",
  "sameAs": [
    "https://github.com/Barbosaadev",
    "https://linkedin.com/in/guilherme-barbosa-dev"
  ],
  "knowsAbout": [
    "Software Engineering",
    "Frontend Development",
    "React",
    "React Native",
    "TypeScript",
    "Next.js",
    "Turborepo",
    "Fastify",
    "NestJS",
    "Automated Testing"
  ]
}
```

---

## 6. FASES DE EXECUÇÃO E STATUS

```
┌────────────────────────────────────────────────────────────────────────┐
│                        STATUS DAS FASES                                │
├────────────────────────────────────────────────────────────────────────┤
│ [EM ANDAMENTO] FASE 1: Dados, i18n, Cases, Currículos e Anonimização   │
│  - Atualização dos dicionários pt-BR.ts e en.ts                        │
│  - Cadastro dos 5 cases em projects.ts                                 │
│  - Configuração de links e caminhos de download em site.ts             │
│  - Cópia e organização dos currículos em public/curriculo/             │
│  - Revisão rigorosa de anonimização e validação de tipos               │
├────────────────────────────────────────────────────────────────────────┤
│ [AGUARDANDO APROVAÇÃO] FASE 2: Reformulação da Homepage e Header       │
│ [AGUARDANDO APROVAÇÃO] FASE 3: Evolução dos Cards de Projeto (9 pontos)│
│ [AGUARDANDO APROVAÇÃO] FASE 4: Seções Complementares e Área Comercial  │
│ [AGUARDANDO APROVAÇÃO] FASE 5: SEO, Acessibilidade e Validação Final   │
└────────────────────────────────────────────────────────────────────────┘
```
