//Tela de login
import React from 'react';
import { LoginPageUsuario } from '../../components/Login/LoginUsuario';
import { NavBar } from '../../components/Layout/NavBar/NavBar';

export const LoginUsuario: React.FC = () => {
  return (
    <>
      <NavBar />
      <LoginPageUsuario />
    </>
  );
};