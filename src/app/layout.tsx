import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { siteConfig } from "@/data/site";
import "./globals.css";

const fontDisplay = localFont({
  src: "../fonts/archivo-black-latin-400-normal.woff2",
  variable: "--font-archivo",
  weight: "400",
  display: "swap",
});

const fontBody = localFont({
  src: "../fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const fontMono = localFont({
  src: "../fonts/geist-mono-latin-wght-normal.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const title = "Guilherme - Software, Automation, Web, AI";
const description =
  "Eu transformo processos manuais, operações confusas e tarefas repetitivas em software simples.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s - Guilherme",
  },
  description,
  applicationName: "Guilherme",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "software",
    "automação",
    "operações",
    "ferramentas internas",
    "integrações",
    "IA aplicada",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "/",
    siteName: siteConfig.name,
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Guilherme - se uma pessoa precisa fazer isso todo dia, talvez o computador deveria.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f2efe6",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "Software / Automation / Web / AI",
  url: siteConfig.url,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
