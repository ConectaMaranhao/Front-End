import React from 'react';
import styles from './ListCursosSection.module.css';
import { CardCursos } from '../CardCursos/CardCursos';
import uxIcon from '../../../assets/ImageHome/icon-ux.svg';
import backIcon from '../../../assets/ImageHome/icon-back-end.svg';
import frontIcon from '../../../assets/ImageHome/icon-front-end.svg';

const cursos = [
  { categoria: 'Front-End', title: 'Aprenda sobre HTML, CSS, e Jav...',img:frontIcon},
  { categoria: 'Back-End', title: 'Domine Node.js, Python, e mais.',img: backIcon },
  { categoria: 'UX Design', title: 'Crie experiências de usuário incrív...', img: uxIcon},
];

export const ListCursos: React.FC = () => {
  return (
    <section className={styles.listCursosContainer}>
      <h2>Nossos Cursos</h2>
      <div className={styles.gridCursos}>
        {cursos.map((cursos, index) => (
          <CardCursos key={index} categoria={cursos.categoria} title={cursos.title} img={cursos.img}/>
        ))}
      </div>
      <button className={styles.ctaButton}>Inscreva-se Agora</button>
    </section>
  );
};