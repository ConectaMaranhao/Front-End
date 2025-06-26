import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg";
export const NavBar: React.FC = () => {
  const location = useLocation();

  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbarContainer}>
      <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
        <div className={styles.logoCurso}>
        <div className={styles.logoText}>
          <span>Conecta </span>
          <span>Maranhão</span>
        </div>
        <img src={logo} alt="Conecta Maranhão" />
      </div>
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
        {/* {location.pathname !== "/empresas" && (
          <li>
            <Link to="/empresas" onClick={closeMobileMenu}>
              Para Empresas
            </Link>
          </li>
        )}*/}
        {location.pathname !== "/login" && (
          <li>
            <Link to="/login" className={styles.ctaButton}>
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
