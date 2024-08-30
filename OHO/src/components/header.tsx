import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logoPic from "./OHO Logo.png";

const WhatsAppLogo = ({ width = 24, height = 20, color = "#25D366" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={width}
    height={height}
    fill={color}
  >
    <path d="M16.002 3.002c-7.179 0-13 5.821-13 13 0 2.291.602 4.489 1.751 6.43L3 29.004l6.687-1.727c1.82 1.07 3.894 1.631 6.015 1.631h.001c7.179 0 13-5.821 13-13 0-3.465-1.35-6.72-3.801-9.168-2.448-2.451-5.703-3.831-9.15-3.738zM16 26.002c-1.909 0-3.758-.525-5.38-1.52l-.384-.238-3.972 1.024 1.07-3.87-.25-.396c-1.048-1.655-1.595-3.573-1.595-5.498 0-5.481 4.461-9.943 9.943-9.943 2.662 0 5.164 1.038 7.042 2.916 1.879 1.879 2.916 4.381 2.916 7.042 0 5.482-4.462 9.943-9.944 9.943zM20.587 18.99c-.396-.198-2.345-1.161-2.709-1.294-.365-.133-.63-.198-.895.198s-1.027 1.295-1.26 1.561-.465.297-.861.099c-.396-.198-1.674-.617-3.189-1.965-1.177-1.045-1.977-2.336-2.209-2.731-.231-.396-.025-.61.173-.808.178-.179.396-.465.595-.7.198-.231.297-.396.446-.661.15-.297.075-.495-.037-.693-.111-.198-.895-2.148-1.225-2.941-.322-.781-.65-.674-.895-.683h-.758c-.25 0-.66.094-1.005.446-.345.352-1.312 1.281-1.312 3.122 0 1.841 1.337 3.621 1.526 3.874.188.253 2.625 4.02 6.374 5.644.891.384 1.586.615 2.127.787.893.283 1.705.243 2.346.148.716-.106 2.345-.957 2.674-1.881.33-.924.33-1.717.231-1.882-.1-.165-.363-.264-.759-.462z" />
  </svg>
);

export const HamburgerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 4h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 4h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
  </svg>
);

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M6.293 4.293a1 1 0 0 1 1.414 0L12 7.586l4.293-3.293a1 1 0 0 1 1.414 1.414L13.414 9l4.293 4.293a1 1 0 0 1-1.414 1.414L12 10.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 11 6.293 6.707a1 1 0 0 1 0-1.414z" />
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "visible" : "hidden";
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="#" className={styles.logo}>
          <img className={styles.LogoPic} src={logoPic} alt="Logo Pic" />
        </Link>
        <a href="https://wa.me/+211922055977" className={styles.linkW}>
          <WhatsAppLogo />
        </a>

        <a href="https://x.com/Ericadeshh" className={styles.linkX}>
          <img
            src="https://img.freepik.com/premium-vector/x-app-logo_1097161-43.jpg?w=740"
            alt="X-APP"
          ></img>
        </a>
      </div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? (
          <CloseIcon width={24} height={24} />
        ) : (
          <HamburgerIcon width={24} height={24} />
        )}
      </button>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          <CloseIcon width={24} height={24} />
        </button>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.link} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" className={styles.link} onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/Services" className={styles.link} onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.link} onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/Departments"
                className={styles.link}
                onClick={toggleMenu}
              >
                Departments
              </Link>
            </li>
            <li>
              <Link
                to="/Organogram"
                className={styles.link}
                onClick={toggleMenu}
              >
                Organogram
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
