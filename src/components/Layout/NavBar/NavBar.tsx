import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

export const NavBar: React.FC = () => {
  const location = useLocation();

  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbarContainer}>
      <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
        Conecta Maranhão
      </Link>

      <div
        className={styles.menuIcon}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Lista de links de navegação */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        {location.pathname !== "/" && (
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
        )}
        {location.pathname !== "/about" && (
          <li>
            <Link to="/about" onClick={closeMobileMenu}>
              Sobre Nós
            </Link>
          </li>
        )}

        {location.pathname !== "/cursos" && (
          <li>
            <Link to="/cursos" onClick={closeMobileMenu}>
              Cursos
            </Link>
          </li>
        )}
        {location.pathname !== "/empresas" && (
          <li>
            <Link to="/empresas" onClick={closeMobileMenu}>
              Para Empresas
            </Link>
          </li>
        )}
        {location.pathname !== "/contato" && (
          <li>
            <Link to="/contato" className={styles.ctaButton}>
              Contato
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
