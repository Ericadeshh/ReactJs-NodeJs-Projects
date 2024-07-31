import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logoPic from "./OHO Logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "visible" : "hidden";
  };

  const handleLinkClick = (path: string) => {
    console.log(`Link clicked: ${path}`);
    toggleMenu();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="#" className={styles.logo}>
          <img className={styles.LogoPic} src={logoPic} alt="Logo Pic"></img>
          <span className={styles.HeaderTitle}>
            ORPHAN'S HOPE ORGANIZATION{" "}
          </span>
        </Link>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            X
          </button>
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              <li>
                <Link
                  to="/"
                  className={styles.link}
                  onClick={() => handleLinkClick("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/AboutUs"
                  className={styles.link}
                  onClick={() => handleLinkClick("/about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Services"
                  className={styles.link}
                  onClick={() => handleLinkClick("/projects")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={styles.link}
                  onClick={() => handleLinkClick("/contact")}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/Departments"
                  className={styles.link}
                  onClick={() => handleLinkClick("/contact")}
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  to="/Organogram"
                  className={styles.link}
                  onClick={() => handleLinkClick("/contact")}
                >
                  Organogram
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
