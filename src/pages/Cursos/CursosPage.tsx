//Tela de listagem  de cursos.import React from 'react';
import React from 'react';
import { NavBar } from '../../components/Layout/NavBar/NavBar';
import { CursosSection } from '../../components/Cursos/SectionCursos/CursosSection';
import { ListCursos } from '../../components/Cursos/CursosLista/ListCursosSection';
import { CtaBanner } from '../../components/Cursos/CtaBanner/CtaBannerCursos';


export const CursosPage: React.FC = () => {
  return (
    <>
    <NavBar/>  
    <CursosSection/>
    <ListCursos/>
    <CtaBanner/>
    </>
  );
};