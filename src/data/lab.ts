import type { Dictionary } from "@/i18n/translations/pt-BR";

export type LabDictKey = keyof Dictionary["lab"]["entries"];

export interface LabItem {
  dictKey: LabDictKey;
  href: string;
  image: string;
}

/**
 * Dados não-textuais do Lab (a copy fica nos dicionários i18n).
 * Para adicionar um experimento: bloco textual em translations/ + entrada aqui.
 */
export const labItems: LabItem[] = [
  {
    dictKey: "senna",
    href: "https://ayrton-senna-tribute.vercel.app/",
    image: "/projects/ayrton-senna.jpg",
  },
];
