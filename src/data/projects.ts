import type { Dictionary } from "@/i18n/translations/pt-BR";

export type ProjectStatus = "production" | "beta" | "betaV2" | "demo";
export type ProjectDictKey = keyof Dictionary["work"]["projects"];

export interface Project {
  /** chave do bloco textual no dicionário (toda copy vive lá) */
  dictKey: ProjectDictKey;
  index: string;
  status: ProjectStatus;
  tech: string[];
  /** screenshot em public/ — null enquanto não capturado (mostra frame placeholder) */
  image: string | null;
  /** proporção da imagem para reservar espaço (evita layout shift) */
  imageAspect: "wide" | "tall";
  /** projetos "full" ocupam a largura inteira; "split" dividem com o texto */
  layout: "full" | "split";
}

/**
 * Dados não-textuais dos projetos (a copy técnica e descrições ficam nos dicionários i18n).
 * 5 cases selecionados com rigor técnico e conformidade com anonimização corporativa.
 */
export const projects: Project[] = [
  {
    dictKey: "enterpriseMobile",
    index: "01",
    status: "production",
    tech: ["React Native", "Expo", "React 19", "TypeScript", "TanStack Query", "WebView Bridge", "MMKV", "Jest", "Biome"],
    image: "/projects/enterprise-mobile.png",
    imageAspect: "tall",
    layout: "split",
  },
  {
    dictKey: "enterpriseSistemas",
    index: "02",
    status: "production",
    tech: ["Turborepo", "React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "ESLint AST", "Jest", "RTL"],
    image: "/projects/enterprise-sistemas.png",
    imageAspect: "wide",
    layout: "full",
  },
  {
    dictKey: "atosPlatform",
    index: "03",
    status: "production",
    tech: ["Next.js 16", "NestJS", "React Native", "Expo", "Turborepo", "Prisma", "PostgreSQL", "OpenAPI", "Orval", "Playwright"],
    image: "/projects/atos-platform.png",
    imageAspect: "wide",
    layout: "split",
  },
  {
    dictKey: "clinicFlow",
    index: "04",
    status: "beta",
    tech: ["Fastify 5", "TypeScript", "OpenAI API", "Prisma 7", "PostgreSQL", "Zod", "Cloudflare Workers", "Bun"],
    image: "/projects/reliora.png",
    imageAspect: "wide",
    layout: "full",
  },
  {
    dictKey: "documentFlow",
    index: "05",
    status: "betaV2",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Vitest", "Clean Architecture"],
    image: "/projects/accounting.png",
    imageAspect: "wide",
    layout: "split",
  },
];
