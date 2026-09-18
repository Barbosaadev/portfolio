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
 * Dados não-textuais dos projetos (a copy fica nos dicionários i18n).
 * Para adicionar um projeto: criar o bloco textual em translations/ e
 * acrescentar uma entrada aqui.
 */
export const projects: Project[] = [
  {
    dictKey: "reliora",
    index: "01",
    status: "production",
    tech: ["TypeScript", "React", "Fastify", "Prisma", "PostgreSQL", "OpenAI", "WhatsApp API"],
    image: "/projects/reliora.png",
    imageAspect: "wide",
    layout: "full",
  },
  {
    dictKey: "accounting",
    index: "02",
    status: "betaV2",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    image: "/projects/accounting.png",
    imageAspect: "wide",
    layout: "split",
  },
  {
    dictKey: "fieldQuotes",
    index: "03",
    status: "beta",
    tech: ["TypeScript", "React Native", "Expo"],
    image: "/projects/field-quotes.png",
    imageAspect: "tall",
    layout: "split",
  },
  {
    dictKey: "hotel",
    index: "04",
    status: "demo",
    tech: ["TypeScript", "Next.js", "Prisma", "SQLite", "Recharts"],
    image: "/projects/hotel.png",
    imageAspect: "wide",
    layout: "full",
  },
];
