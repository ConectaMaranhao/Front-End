import React from "react";
import styles from "./AboutSection.module.css"; // Importando nossos estilos
import type { IAbout } from "../../../../interfaces/IAbout";

export const AboutSection: React.FC<IAbout> = ({
  title,
  text,
  mainImage,
  logoImage,
}) => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.textColumn}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className={styles.imageColumn}>
        <img
          src={mainImage}
          alt="Equipe do projeto Conecta Maranhão"
          className={styles.mainImage}
        />
        <img
          src={logoImage}
          alt="Logo do parceiro Inova Maranhão"
          className={styles.logoImage}
        />
      </div>
    </section>
  );
};
