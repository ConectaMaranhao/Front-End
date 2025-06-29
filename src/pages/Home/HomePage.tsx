import React from 'react';
import {HomeSection}  from '../../components/Home/HomeSection/HomeSection';
import { CategoriaSection } from '../../components/Home/CategoriaSection/CategoriaSection';
import { RankingSection } from '../../components/Home/RankSection/RankingSection';
import { AboutSection } from '../../components/Common/About/AboutSection/AboutSection';

import devTime from "../../assets/About/dev-time.svg";
import logoImage from "../../assets/About/logo-inova.png";
import { NavBar } from '../../components/Layout/NavBar/NavBar';


export const HomePage: React.FC = () => {
  const aboutText = "O Conecta Maranhão é uma iniciativa inovadora que nasceu com o propósito de transformar vidas por meio da capacitação profissional e da inclusão produtiva. Somos uma plataforma digital gratuita que integra talentos maranhenses a oportunidades concretas no mercado de trabalho.";

  return (
  <>
    <NavBar
     />
    <HomeSection />
    <CategoriaSection />
    <RankingSection />
    <AboutSection
    title='QUEM SOMOS NÓS?'
    text={aboutText}
    text2=''
    mainImage={devTime}
    logoImage={logoImage}/>

  </>
  );
};