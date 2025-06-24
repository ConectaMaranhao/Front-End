import React from "react";
import styles from "./CtaBannerCursos.module.css";
import logo from "../../../assets/logo.svg"; // Logo simplificado

export const CtaBanner: React.FC = () => {
  return (
    <section className={styles.bannerCursos}>
      <div className={styles.logoCurso}>
        <div className={styles.logoText}>
          <span>Conecta </span>
          <span>Maranhão</span>
        </div>
        <img src={logo} alt="Conecta Maranhão" />
      </div>
      <h3>Conclua seu curso e conquiste medalhas e recompensas!</h3>
    </section>
  );
};
