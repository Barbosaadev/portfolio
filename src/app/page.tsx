import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Diagnosis } from "@/components/sections/Diagnosis";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { Lab } from "@/components/sections/Lab";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { StackCapabilities } from "@/components/sections/StackCapabilities";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { WhatIBuild } from "@/components/sections/WhatIBuild";

/**
 * Narrativa de Engenharia:
 * HERO (Posicionamento & Especialidade)
 * → TRACK RECORD (Trajetória Institucional & Bases em Produção)
 * → SELECTED WORK (Casos de Estudo Técnicos & Decisões Arquiteturais)
 * → ARCHITECTURE & EVOLUTION (Modernização de Legados & Governança)
 * → CORE CAPABILITIES (4 Pilares de Especialidade)
 * → LAB & TOOLING (Protótipos & Ferramentas)
 * → CONSULTING (Área Comercial Discreta para Novos Projetos)
 * → METHOD (Como Trabalho)
 * → STACK (Ferramentas Centrais)
 * → FINAL CTA & CONTATO
 */
export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrackRecord />
        <SelectedWork />
        <BeforeAfter />
        <WhatIBuild />
        <Lab />
        <Diagnosis />
        <HowIWork />
        <StackCapabilities />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
