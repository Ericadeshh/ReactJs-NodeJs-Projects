import { Link } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; 2024 Kapseret Subcounty Offices. All rights reserved.
        </p>
        <a href="mailto:@ericadeshh@gmail.com" className={styles.mail}>
          <i>ericadeshh@gmail.com</i>
        </a>

        <nav className={styles.footerNav}>
          <Link to="/privacy" className={styles.footerLink}>
            Privacy Policy
          </Link>
          <Link to="/terms" className={styles.footerLink}>
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
