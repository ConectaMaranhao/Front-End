//Tela de listagem  de cursos.import React from 'react';
import React from 'react';
import { NavBar } from '../../components/Layout/NavBar/NavBar';
export const CursosPage: React.FC = () => {
  return (
    <>
    <NavBar/>
   
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Cursos</h1>
      <p>Confira os cursos disponíveis em nossa plataforma.</p>
    </div> 
    </>
  );
};