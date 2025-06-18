import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';
import logo from '../../../../assets/About/logo-inova.png'; 

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.marcaColumn}>
          {<img src={logo} alt="Conecta Maranhão Logo" className={styles.logo} /> }
          <h3>Conecta Maranhão</h3>
          <p>Transformando vidas através da capacitação e do trabalho.</p>
        </div>

        <div className={styles.linksColumn}>
          <h4>Navegação</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Sobre Nós</a></li>
            <li><a href="/cursos">Cursos</a></li>
            <li><a href="/empresas">Para Empresas</a></li>
          </ul>
        </div>

        <div className={styles.linksColumn}>
          <h4>Contato</h4>
          <ul>
            <li>contato@conecta-ma.com.br</li>
            <li>(98) 99999-9999</li>
            <li>São Luís, Maranhão</li>
          </ul>
        </div>

        <div className={styles.socialColumn}>
          <h4>Redes Sociais</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title='facebook'><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title='instagram'><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title='linkedin'><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {currentYear} Conecta Maranhão. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};