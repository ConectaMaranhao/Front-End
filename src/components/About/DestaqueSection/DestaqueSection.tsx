import React from 'react';
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa'; 
import { DestaqueCard } from '../CardDestaque/DestaqueCard';
import styles from './DestaqueSection.module.css';

export const SectionDestaque: React.FC = () => {
  return (
    <section className={styles.destaqueContainer}>
      <h2>Nossa Missão, Visão e Valores</h2>
      <div className={styles.cardsSection}>
        <DestaqueCard
          icon={<FaBullseye />}
          title="Missão"
          text="Capacitar e conectar talentos maranhenses ao mercado de trabalho, promovendo inclusão produtiva e transformação social."
        />
        <DestaqueCard
          icon={<FaEye />}
          title="Visão"
          text="Ser a principal referência em empregabilidade e desenvolvimento profissional no estado do Maranhão, gerando oportunidades para todos."
        />
        <DestaqueCard
          icon={<FaHeart />}
          title="Valores"
          text="Compromisso com o desenvolvimento local, valorização das pessoas, inovação, transparência e colaboração."
        />
      </div>
    </section>
  );
};