import React from 'react';
import styles from './CursosSection.module.css';

const filtros = ['Todos', 'Front-End', 'Back-End', 'UX Design', 'Promoção', 'Jogos', 'Análise de Dados'];

export const CursosSection: React.FC = () => {
  return (
    <section className={styles.cursosContainer}>
      <h1>Cursos em Tecnologia</h1>
      <p>Desenvolva suas habilidades com nossos cursos nas áreas de Front-End, Back-End, UX Design, promoção, jogos e análise de dados.</p>
      <div className={styles.filtrosContainer}>
        {filtros.map(filtros => (
          <button key={filtros} className={styles.filtroButton}>{filtros}</button>
        ))}
      </div>
     {/* <button className={styles.ctaButton}>Ver Cursos</button>*/}
    </section>
  );
};