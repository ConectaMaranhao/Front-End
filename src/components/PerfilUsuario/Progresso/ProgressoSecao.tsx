import React from "react";
import styles from "./ProgressoSecao.module.css";

interface ProgressoSecaoProps {
  xp: number;
}

const ProgressoSecao: React.FC<ProgressoSecaoProps> = ({ xp }) => {
  const xpTotal = 15000;
  const porcentagem = Math.min((xp / xpTotal) * 100, 100);

  return (
    <div className={styles.secaoProgresso}>
      <div className={styles.containerProgresso}>
        <div className={styles.tituloProgresso}>
          Nível 2 - Aprendiz
        </div>
        <div className={styles.tituloProgresso}>
          ({xp}/{xpTotal} XP)
        </div>
        <div className={styles.descricaoProgresso}>Barra de Progresso</div>
        <div style={{ width: '100%', maxWidth: 400, background: '#7B7B7B', borderRadius: 8, height: 12, margin: '16px auto' }}>
          <div style={{ width: `${porcentagem}%`, height: '100%', background: '#000000', borderRadius: 8 }} />
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