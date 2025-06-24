import React from "react";
import styles from "./ProgressoSecao.module.css";

const ProgressoSecao: React.FC = () => {
  return (
    <div className={styles.secaoProgresso}>
      <div className={styles.containerProgresso}>
        <div className={styles.tituloProgresso}>
          Nível 2 - Aprendiz
        </div>
        <div className={styles.tituloProgresso}>
          (750/1500 XP)
        </div>
        <div className={styles.descricaoProgresso}>Barra de Progresso</div>
        <div style={{ width: '100%', maxWidth: 400, background: '#7B7B7B', borderRadius: 8, height: 12, margin: '16px auto' }}>
          <div style={{ width: '50%', height: '100%', background: '#000000', borderRadius: 8 }} />
        </div>
        <div className={styles.grupoAbas}>
          <button className={styles.abaProgresso}>Barramento Progresso</button>
          <button className={styles.abaProgresso}>Medalhas e Conquistas</button>
        </div>
      </div>
    </div>
  );
};

export default ProgressoSecao; 