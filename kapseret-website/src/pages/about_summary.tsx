import { Link } from "react-router-dom";
import styles from "./AboutSummary.module.css";
import Button from "../components/adminbtn";
function AboutSummary() {
  return (
    <div className={`${styles.container} alert alert-warning`}>
      <h2 className={styles.title}>About Kapseret Subcounty</h2>
      <p className={styles.description}>
        Kapseret Subcounty is a local government administrative unit in Uasin
        Gishu County, Kenya. The subcounty offices oversee the governance and
        development of the Kapseret region.
      </p>
      <div className={styles.links}>
        <Link to="/privacy" className={styles.link}>
          Privacy
        </Link>
        <Link to="/terms" className={styles.link}>
          Terms
        </Link>
      </div>
      <Button text="More About Kapseret" link="about" />
    </div>
  );
}

export default AboutSummary;
