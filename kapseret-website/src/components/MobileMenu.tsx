import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  return (
    <div className={styles.mobileMenu}>
      <button className={styles.mobileMenuButton} onClick={onToggle}>
        <div className={styles.mobileMenuIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {isOpen && (
        <nav className={styles.mobileNavigation}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/services" className={styles.navLink}>
            Services
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
