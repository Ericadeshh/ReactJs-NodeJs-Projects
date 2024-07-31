import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

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
          <img
            src="https://uasingishu.go.ke/wp-content/uploads/2023/06/COUNTY-LOGO-FAVICON-01.png"
            alt="ug logo"
            className={styles.LogoPic}
          />
          <span className={styles.HeaderTitle}>
            Kapseret Subcounty Offices{" "}
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
                  to="/about"
                  className={styles.link}
                  onClick={() => handleLinkClick("/about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
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
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
