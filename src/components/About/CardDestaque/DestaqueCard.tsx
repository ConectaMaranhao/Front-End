import React from 'react';
import styles from './DestaqueCard.module.css';
import type { DestaqueCardProps } from '../../../interfaces/IDestaque';

export const DestaqueCard: React.FC<DestaqueCardProps> = ({ icon, title, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon_card}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};