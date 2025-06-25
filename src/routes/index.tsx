import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import { AboutPage } from '../pages/About/AboutPage';
import { CursosPage } from '../pages/Cursos/CursosPage';
import EmpresasPage from '../pages/Empresas/EmpresasPage';
import { CadastroPageUsuario } from '../pages/Login/CadastroPagePessoa';
import CadastroPageEmpresa from '../pages/Login/CadastroPageEmpresa';
import PerfilUsuario from '../pages/Usuario/PerfilUsuario';
import { LoginPageUsuario } from '../components/Login/LoginUsuario';
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cursos" element={<CursosPage />} />
      <Route path="/empresas" element={<EmpresasPage />} />
      <Route path="/login" element={<LoginPageUsuario />} />
      <Route path='/cadastro-usuario' element={<CadastroPageUsuario/>} />
      <Route path='/cadastro-empresa' element={<CadastroPageEmpresa/>} />
      <Route path='/perfil-usuario' element={<PerfilUsuario/>} />
    </Routes>
  );
};