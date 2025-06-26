import React from 'react';
import { CardRankAlunos } from '../CardRankAlunos/CardRankAlunos';
import styles from "./SectionRankingAluno.module.css"

// Importe as imagens dos troféus/medalhas que você salvou em /assets
import medalOuro from '../../../assets/Medalhas/trofeu-ouro.png';
import medalPrata from '../../../assets/Medalhas/medalha-de-prata.png';
import medalBronze from '../../../assets/Medalhas/medalha-de-bronze.png';

const topEstudantes = [
  {
    iconUrl: medalOuro,
    name: 'Maria Santos',
    area: 'Front-End',
    xp: 1200,
  },
  {
    iconUrl: medalPrata,
    name: 'Carlos Silva',
    area: 'Back-End',
    xp: 1000,
  },
  {
    iconUrl: medalBronze,
    name: 'Ana Lima',
    area: 'UX Design',
    xp: 900,
  },
];

export const SectionRankingAluno: React.FC = () => {
  return (
    <section className={styles.rankingContainer}>
      <h2>Ranking dos Alunos</h2>
      <p className={styles.descricao}>Veja quem está se destacando na comunidade.</p>
      <div className={styles.cardsRank}>
        {topEstudantes.map((aluno) => (
          <CardRankAlunos
            key={aluno.name}
            icon={aluno.iconUrl}
            nome={aluno.name}
            area={aluno.area}
            xp={aluno.xp}
          />
        ))}
      </div>
    </section>
  );
};