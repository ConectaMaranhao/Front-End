import React from "react";
import styles from "./PerfilUsuario.module.css";
import PerfilHeaderSecao from "./PerfilHeader/PerfilHeaderSecao";
import ProgressoSecao from "./Progresso/ProgressoSecao";
import CurriculoSecao from "./Curriculo/CurriculoSecao";
import FormularioSecao from "./Formulario/FormularioSecao";
import MedalhasSecao from "./Medalhas/MedalhasSecao";

export const PerfilUsuario: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Barra Superior */}
      <div className={styles.barraSuperior}>
        <div className={styles.iconeAvatar} />
        <div className={styles.titulo}>Meu Perfil</div>
        <div className={styles.navegacao}>
          <div className={styles.aba}>Início</div>
          <div className={styles.aba}>Meus cursos</div>
          {/*  <div className={styles.campoBusca}>
            <div className={styles.textoBusca}>Search in site</div>
            <img
              src="/search-icon.png"
              alt="Search"
              className={styles.iconeBusca}
            />
          </div> */}
        </div>
      </div>

      <PerfilHeaderSecao />

      <ProgressoSecao />

      <CurriculoSecao />

      <MedalhasSecao />

      <FormularioSecao />
    </div>
  );
};
