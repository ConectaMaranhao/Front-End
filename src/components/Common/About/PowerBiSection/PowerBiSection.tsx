import React from 'react';
import styles from './PowerBiSection.module.css';

export const PowerBiSection: React.FC = () => {
  const dashBoard = "https://app.powerbi.com/view?r=eyJrIjoiMTQ2OTQ5NGQtMDE4Ny00MDg5LWI4ZjktNzg0MzM1ZDE3NDIzIiwidCI6ImIzYzAwMzk5LTEwNjEtNGEyOS04NWE2LWQxNWEyMzljM2FkNSJ9&pageName=1d0a223bc44c50270509";

  return (
    <section className={styles.iframeSection}>
      <h2>Dashboard da Equipe</h2>
      <p>Acompanhe o desempenho e os resultados do nosso projeto em tempo real.</p>
      <div className={styles.iframeContainer}>
        <iframe
          title="Equipe19"
          src={dashBoard}
          frameBorder="0"
          allowFullScreen={true}
          className={styles.reportIframe}
        ></iframe>
      </div>
    </section>
  );
};