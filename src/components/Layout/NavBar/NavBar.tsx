import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbarContainer}>
      <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
        Conecta Maranhão
      </Link>

       
      <div className={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Lista de links de navegação */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMobileMenu}>Sobre Nós</Link></li>
        <li><Link to="/cursos" onClick={closeMobileMenu}>Cursos</Link></li>
        <li><Link to="/empresas" onClick={closeMobileMenu}>Para Empresas</Link></li>
        <li><Link to="/contato" className={styles.ctaButton}>Contato</Link></li>
      </ul>
    </nav>
  );
};