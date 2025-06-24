//Tela de cadastro de usuario
import React from 'react';
import { CadastroUsuario } from '../../components/Cadastro/CadastroPessoa/CadastroPessoa';
import { NavBar } from '../../components/Layout/NavBar/NavBar';

export const CadastroPageUsuario: React.FC = () => {
  return (
    <>
      <NavBar />
      <CadastroUsuario />
    </>
  );
};