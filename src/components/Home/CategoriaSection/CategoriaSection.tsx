import React from 'react';
import styles from './CategoriaSection.module.css';
// Importe os 4 ícones/imagens que você salvou em /assets
import progIcon from '../../../assets/ImageHome/icon-programacao.svg';
import uxIcon from '../../../assets/ImageHome/icon-ux.svg';
import backIcon from '../../../assets/ImageHome/icon-back-end.svg';
import frontIcon from '../../../assets/ImageHome/icon-front-end.svg';

const categorias = [
  { name: 'PROGRAMAÇÃO', icon: progIcon },
  { name: 'UX DESIGN', icon: uxIcon },
  { name: 'BACK-END', icon: backIcon },
  { name: 'FRONT-END', icon: frontIcon },
];

export const CategoriaSection: React.FC = () => {
  return (
    <section className={styles.categoriasContainer}>
      {categorias.map((categoria) => (
        <div key={categoria.name} className={styles.categoriaCard}>
          <img src={categoria.icon} alt={categoria.name} />
          <p>{categoria.name}</p>
        </div>
      ))}
    </section>
  );
}