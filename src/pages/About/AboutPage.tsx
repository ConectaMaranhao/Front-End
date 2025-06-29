import React from "react";
import { AboutSection } from "../../components/Common/About/AboutSection/AboutSection";

import timeImage from "../../assets/About/dev-time.svg";
import inovaLogo from "../../assets/About/logo-inova.png";
import { SectionDestaque } from "../../components/Common/About/DestaqueSection/DestaqueSection";
import { NavBar } from "../../components/Layout/NavBar/NavBar";
import { PowerBiSection } from "../../components/Common/About/PowerBiSection/PowerBiSection";

export const AboutPage: React.FC = () => {
  const aboutText = `Uma análise cuidadosa dos dados sobre educação e do índice de desemprego no estado revelou que existe uma forte relação entre esses dois indicadores. Observando essa situação e visando aumentar a renda da população do Maranhão, surgiu a ideia de desenvolver um espaço online que aproxime as pessoas das vagas de trabalho, unindo o aprendizado a uma experiência simples, fácil de usar e que realmente prenda a atenção.`;
  const aboutText2 = `
  O Conecta Maranhão foi criado com o propósito de preparar os maranhenses para contribuírem em benefício do próprio Maranhão, impulsionando o desenvolvimento em conjunto das pessoas, das comunidades e do Maranhão em si.
  É mais que um site, estamos transformando vidas através da capacitação e do trabalho.
  Veja mais sobre os dados que embasaram esse projeto abaixo!`;
  return (
    <div>
      <NavBar />
      <AboutSection
        title="Por que o Conecta Maranhão?"
        text={aboutText}
        text2={aboutText2}
        mainImage={timeImage}
        logoImage={inovaLogo}
      />
      <SectionDestaque />
      <PowerBiSection />
    </div>
  );
};
