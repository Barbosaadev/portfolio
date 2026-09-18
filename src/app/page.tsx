import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Diagnosis } from "@/components/sections/Diagnosis";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { Lab } from "@/components/sections/Lab";
import { Manifesto } from "@/components/sections/Manifesto";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { StackCapabilities } from "@/components/sections/StackCapabilities";
import { WhatIBuild } from "@/components/sections/WhatIBuild";

/**
 * Narrativa: PROBLEMA → PENSAMENTO → SOLUÇÃO → DEMONSTRAÇÃO → CONFIANÇA → CONTATO
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
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
