import React from "react";
import type { IRankingAluno } from "../../../interfaces/IRankingAluno";
import styles from "./CardRankAlunos.module.css";

export const CardRankAlunos: React.FC<IRankingAluno> = ({
  icon,
  nome,
  area,
  xp,
}) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt="Ícone de Ranking" className={styles.icon} />
      <h4 className={styles.nome}>{nome}</h4>
      <p className={styles.area}>{area}</p>
      <p className={styles.xp}>{xp.toLocaleString("pt-BR")}</p>
    </div>
  );
};
