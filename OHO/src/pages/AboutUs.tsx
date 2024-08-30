import { useEffect } from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${styles.animated}`);
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          element.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case elements are already in view
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`py-5 bg-light ${styles.aboutUs}`}>
      <h1
        className={`text-center font-weight-bold ${styles.animated} ${styles.slideInFromLeft}`}
      >
        About Us
      </h1>
      <div
        className={`${styles.container} ${styles.animated} ${styles.slideInFromRight}`}
      >
        <p className="text-center">
          <strong>“We strive for the wellbeing of destitute”</strong>
        </p>
        <h2
          className={`text-center font-weight-normal ${styles.animated} ${styles.slideInFromBottom}`}
        >
          ORPHAN’S HOPE ORGANIZATION (OHO)
        </h2>
        <p
          className={`${styles.profile} ${styles.animated} ${styles.slideInFromLeft}`}
        >
          Orphan’s Hope Organization, (OHO) was founded on 14th December 2019 in
          Juba-South Sudan. OHO is a National, Non-governmental and Non-profit
          making Faith-Based Organization which is legally registered under
          Relief and Rehabilitation Commission (RRC) in Juba with the
          Registration Number: 2646. Its major strategic program areas include
          but not limited to:
        </p>
        <ul
          className={`${styles.programAreas} ${styles.animated} ${styles.slideInFromRight}`}
        >
          <li>Protection (Child protection and GBV)</li>
          <li>Education</li>
          <li>WASH</li>
          <li>Food security and Livelihoods</li>
          <li>Peace Building</li>
        </ul>
        <h3
          className={`text-center font-weight-bold ${styles.animated} ${styles.slideInFromBottom}`}
        >
          Our Team by OHO
        </h3>
        <div
          className={`${styles.team} ${styles.animated} ${styles.slideInFromLeft}`}
        >
          <div
            className={`${styles.card} ${styles.animated} ${styles.slideInFromRight}`}
          >
            <img src="/Mary.jpg" alt="Mary Adut Gop" className={styles.img} />
            <div className={styles.details}>
              <h5 className={styles.names}>Mary Adut Gop</h5>
              <p className={styles.role}>Executive Director</p>
              <p>+211922055977</p>
              <p>maryadut87@gmail.com</p>
            </div>
          </div>
          <div
            className={`${styles.card} ${styles.animated} ${styles.slideInFromBottom}`}
          >
            <img
              src="/Martin.jpg"
              alt="Martin Mayen Piol"
              className={styles.img}
            />
            <div className={styles.details}>
              <h5 className={styles.names}>Martin Mayen Piol</h5>
              <p className={styles.role}>Programme Director</p>
              <p>+211929991377 / +211917570051</p>
              <p>mayenpiolmartin@gmail.com</p>
            </div>
          </div>
          <div
            className={`${styles.card} ${styles.animated} ${styles.slideInFromLeft}`}
          >
            <img
              src="/MaleAfrican.avif"
              alt="Kuot Agany"
              className={styles.img}
            />
            <div className={styles.details}>
              <h5 className={styles.names}>Kuot Agany</h5>
              <p className={styles.role}>Project Manager</p>
            </div>
          </div>
          <div
            className={`${styles.card} ${styles.animated} ${styles.slideInFromRight}`}
          >
            <img
              src="/MaleAfrican.avif"
              alt="Luna Mathew Tombe"
              className={styles.img}
            />
            <div className={styles.details}>
              <h5 className={styles.names}>Luna Mathew Tombe</h5>
              <p className={styles.role}>Admin & Finance Manager</p>
              <p>+211921502416 / +211914838209</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
