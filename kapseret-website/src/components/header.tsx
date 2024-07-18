import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024); // Adjust the breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div>
        <div className={styles.headerTitle}>
          <img
            src="https://uasingishu.go.ke/wp-content/uploads/2023/06/COUNTY-LOGO-FAVICON-01.png"
            alt="ug logo"
            className={styles.headerLogo}
          />
          <h1 className={styles.title}>Kapseret Subcounty Offices</h1>
        </div>

        <p className={styles.subtitle}>Eldoret, Kenya</p>
      </div>

      <div
        className={`${styles.navigationWrapper} ${
          isMobileView && isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.navigation}>
          <Link to="/" className={`${styles.navLink} mr-4`}>
            Home
          </Link>
          <Link to="/services" className={`${styles.navLink} mr-4`}>
            Services
          </Link>
          <Link to="#" className={`${styles.navLink} mr-4`}>
            Contact
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </div>
      </div>

      {isMobileView && (
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onToggle={handleMobileMenuToggle}
        />
      )}
    </header>
  );
}

export default Header;
