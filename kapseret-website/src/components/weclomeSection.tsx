// WelcomeComponent.js

import { Link } from "react-router-dom";
import styles from "./welcomeSection.module.css";

const WelcomeComponent = () => {
  return (
    <section className={styles["welcome-section"]}>
      <div className={styles.container}>
        <div className="flex flex-col items-start space-y-4">
          <div className={styles["inline-block"]}>
            Welcome to Kapseret Subcounty
          </div>
          <h1 className={styles.heading}>
            Discover the Heart of <span className={styles.span}>Kapseret</span>{" "}
          </h1>
          <p className={styles.description}>
            Explore the vibrant community, rich culture, and natural beauty of
            Kapseret Subcounty.
          </p>
          <Link to="#" className={styles["explore-link"]}>
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
};
export default WelcomeComponent;
