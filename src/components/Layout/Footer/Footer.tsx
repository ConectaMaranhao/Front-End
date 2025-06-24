import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';
import logo from '../../../assets/logo.svg'; 
import { Link } from 'react-router-dom';

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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre Nós</Link></li>
            <li><Link to="/cursos">Cursos</Link></li>
            <li><Link to="/empresas">Para Empresas</Link></li>
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