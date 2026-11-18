import { siteConfig } from "@/data/site";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
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

const title = "Guilherme Barbosa - Software Engineer | React, React Native & TypeScript";
const description =
  "Engenheiro de Software focado em Frontend, Mobile e ecossistema TypeScript. Especialista em React, React Native, arquitetura de monorepos e código em produção.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s - Guilherme Barbosa",
  },
  description,
  applicationName: "Guilherme Barbosa",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "Software Engineer",
    "Frontend Engineer",
    "Mobile Engineer",
    "React",
    "React Native",
    "TypeScript",
    "Next.js",
    "Turborepo",
    "Clean Architecture",
    "Fastify",
    "Expo",
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
        alt: "Guilherme Barbosa - Software Engineer | React, React Native & TypeScript",
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
  name: "Guilherme Barbosa",
  jobTitle: "Software Engineer",
  url: siteConfig.url,
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
  ],
  knowsAbout: [
    "Software Engineering",
    "Frontend Development",
    "Mobile Development",
    "React",
    "React Native",
    "TypeScript",
    "Next.js",
    "Turborepo",
    "Fastify",
    "NestJS",
    "Automated Testing",
    "Clean Architecture",
  ],
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
