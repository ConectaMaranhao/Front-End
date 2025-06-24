import React from "react";
import styles from "./PerfilHeaderSecao.module.css";

const PerfilHeaderSecao: React.FC = () => {
  return (
    <div className={styles.secaoPerfil}>
      <div className={styles.perfilGrid}>
        <div className={styles.avatar} />
        <div className={styles.containerPerfil}>
          <div className={styles.tituloPerfil}>Nome do Usuário</div>
          <div className={styles.descricaoPerfil}>
            Bio do usuário: Aqui é onde você coloca uma breve descrição sobre si mesmo.
          </div>
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