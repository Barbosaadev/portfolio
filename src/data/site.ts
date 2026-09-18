/**
 * Configuração central do site — contatos, âncoras e stack.
 *
 * PLACEHOLDERS DE CONTATO: preencha os valores abaixo quando definir os
 * canais. Tudo que aponta para contato no site lê daqui.
 */
export const siteConfig = {
  name: "Guilherme",
  /** URL pública do site (usada em canonical/OG). */
  url: "https://guilherme-barbosa.pages.dev",

  contact: {
    /** ex.: "https://wa.me/5511999999999" — deixe vazio para ocultar */
    whatsapp: "https://wa.me/5585994061349",
    /** ex.: "mailto:oi@guilherme.dev" — deixe vazio para ocultar */
    email: "mailto:barbosadevcontato@gmail.com",
    /** destino padrão dos CTAs enquanto os canais não são definidos */
    fallbackHref: "https://wa.me/5585994061349",
  },

  anchors: {
    work: "#work",
    lab: "#lab",
    how: "#how",
    contact: "#contact",
  },
} as const;

/** href efetivo dos CTAs de contato: WhatsApp > e-mail > âncora final */
export function contactHref(): string {
  return (
    siteConfig.contact.whatsapp ||
    siteConfig.contact.email ||
    siteConfig.contact.fallbackHref
  );
}

/** Stack real — só tecnologias efetivamente usadas nos projetos. */
export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Fastify",
  "Prisma",
  "PostgreSQL",
  "SQLite",
  "Tailwind CSS",
  "GSAP",
  "REST APIs",
  "Vite",
  "Expo",
] as const;
