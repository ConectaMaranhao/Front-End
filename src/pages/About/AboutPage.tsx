import React from "react";
import { AboutSection } from "../../components/Common/About/AboutSection/AboutSection";

import timeImage from "../../assets/About/dev-time.svg";
import inovaLogo from "../../assets/About/logo-inova.png";
import { SectionDestaque } from "../../components/Common/About/DestaqueSection/DestaqueSection";
import { NavBar } from "../../components/Layout/NavBar/NavBar";

export const AboutPage: React.FC = () => {
  const aboutText =
    "O Conecta Maranhão é uma iniciativa inovadora que nasceu com o propósito de transformar vidas por meio da capacitação profissional e da inclusão produtiva. Somos uma plataforma digital gratuita que integra talentos maranhenses a oportunidades concretas no mercado de trabalho.";

  return (
    <div>
      <NavBar 
       />
      <AboutSection
        title="QUEM SOMOS NÓS?"
        text={aboutText}
        mainImage={timeImage}
        logoImage={inovaLogo}
      />
      <SectionDestaque />
      {/* Footer... */}
    </div>
  );
};
