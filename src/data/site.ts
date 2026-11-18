/**
 * Configuração central do site — contatos, âncoras, redes profissionais e stack.
 */
export const siteConfig = {
  name: "Guilherme Barbosa",
  role: "Software Engineer | Frontend & Mobile",
  /** URL pública do site (usada em canonical/OG). */
  url: "https://guilherme-barbosa.pages.dev",

  contact: {
    whatsapp: "https://wa.me/5585994061349",
    email: "mailto:barbosadevcontato@gmail.com",
    fallbackHref: "https://wa.me/5585994061349",
  },

  social: {
    github: "https://github.com/Barbosaadev",
    linkedin: "https://www.linkedin.com/in/guilherme-barbosadevv/",
  },

  resumes: {
    pt: "/curriculo/curriculo-guilherme-barbosa-pt.pdf",
    en: "/curriculo/resume-guilherme-barbosa-en.pdf",
  },

  anchors: {
    work: "#work",
    track: "#track",
    capabilities: "#capabilities",
    how: "#how",
    lab: "#lab",
    contact: "#contact",
  },
} as const;

/** Retorna a URL do currículo conforme o idioma ativo */
export function getResumeUrl(locale: "pt-BR" | "en"): string {
  return locale === "pt-BR" ? siteConfig.resumes.pt : siteConfig.resumes.en;
}

/** href efetivo dos CTAs de contato: WhatsApp > e-mail > âncora final */
export function contactHref(): string {
  return (
    siteConfig.contact.whatsapp ||
    siteConfig.contact.email ||
    siteConfig.contact.fallbackHref
  );
}

/** Stack real — tecnologias centrais comprovadas nos projetos e sistemas em produção. */
export const stack = [
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Turborepo",
  "Expo",
  "Fastify",
  "NestJS",
  "Prisma",
  "PostgreSQL",
  "Tailwind CSS",
  "TanStack Query",
  "Jest",
  "Vitest",
  "Playwright",
  "ESLint AST",
  "Vite",
  "GSAP",
] as const;
