import React from 'react';
import styles from './CardCursos.module.css';
import { FaGraduationCap } from "react-icons/fa";
import type ICardCursos from '../../../interfaces/ICardCursos';

export const CardCursos: React.FC<ICardCursos> = ({ categoria, title,img }) => {
  return (
    <div className={styles.cursosCard}>
      <div className={styles.imagePlaceholder}>
        <span className={styles.tagCategoria}>{categoria}</span>
        <img src={img} alt={title} className={styles.imagemCurso} />
      </div>
      <div className={styles.cardConteudo}>
        <strong>{title}</strong>
        <FaGraduationCap aria-label="Graduação" title="Graduação" className={styles.icon} />
      </div>
    </div>
  );
};