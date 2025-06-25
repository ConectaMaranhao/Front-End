import React from "react";
import styles from "./PerfilHeaderSecao.module.css";

interface PerfilHeaderSecaoProps {
  pessoa: any;
}

const PerfilHeaderSecao: React.FC<PerfilHeaderSecaoProps> = ({ pessoa }) => {
  return (
    <div className={styles.secaoPerfil}>
      <div className={styles.perfilGrid}>
        <div className={styles.avatar} />
        <div className={styles.containerPerfil}>
          <div className={styles.tituloPerfil}>{pessoa.nome}</div>
          <div className={styles.descricaoPerfil}>{pessoa.bio}</div>
        </div>
        <div className={styles.grupoBotoes}>
          <button className={styles.botaoSecundario}>Enviar Currículo</button>
          <button className={styles.botaoPrimario}>Editar Perfil</button>
        </div>
      </div>
    </div>
  );
};

export default PerfilHeaderSecao; 