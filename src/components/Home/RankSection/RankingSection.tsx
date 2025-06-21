import React from 'react';
import styles from './RankingSection.module.css';
import trofeuImage from '../../../assets/ImageHome/trofeu.svg'; // Salve a imagem do troféu

const ranking = [
  { posicao: '1º', name: 'MARIA' },
  { posicao: '2º', name: 'GLEYCE' },
  { posicao: '3º', name: 'PEDRO' },
  { posicao: '4º', name: 'ARTHUR' },
  { posicao: '5º', name: 'JOÃO' },
];

export const RankingSection: React.FC = () => {
  return (
    <section className={styles.rankingContainer}>
      <div className={styles.gamificacaoCard}>
        <h3>GAMIFICAÇÃO:</h3>
        <p>Transforme seu aprendizado em conquistas, utilize nosso jogo para obter vantagem na plataforma.</p>
      </div>
      <div className={styles.trofeuContainer}>
        <img src={trofeuImage} alt="Troféu" />
      </div>
      <div className={styles.rankingLista}>
        <h4>RANKING SEMANAL</h4>
        <ul>
          {ranking.map((player) => (
            <li key={player.posicao}>
              <span>{player.posicao}</span> {player.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};