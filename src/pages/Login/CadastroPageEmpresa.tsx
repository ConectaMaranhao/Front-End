//Tela de cadastro de empresa
import React from "react";
import { CadastroEmpresa } from "../../components/Cadastro/CadastroEmpresa/CadastroEmpresa";
import { NavBar } from "../../components/Layout/NavBar/NavBar";

const CadastroPageEmpresa: React.FC = () => {
  return (
    <>
      <NavBar />
      <CadastroEmpresa />
    </>
  );
};

export default CadastroPageEmpresa;
