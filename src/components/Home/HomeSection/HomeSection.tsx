import React from 'react';
import styles from './HomeSection.module.css';
import logo from '../../../assets/ImageHome/cntma.svg';

export const HomeSection: React.FC = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <h1>Conectando talentos com oportunidades</h1>
        <p>Uma plataforma online de capacitação profissional, com integração a empresas públicas e privadas.</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={logo} alt="Plataforma Conecta Maranhão em um notebook" />
      </div>
    </section>
  );
};