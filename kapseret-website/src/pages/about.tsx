import styles from "./about.module.css";

function About() {
  return (
    <div className={`${styles.kapseret_subcounty} alert alert-warning`}>
      <main className={styles.kapsaret_subcounty_main}>
        <section className={styles.kapseret_subcounty_section}>
          <div className={styles.kapseret_subcounty_section_content}>
            <h1 className={styles.kapseret_subcounty_title}>
              About Kapseret Subcounty
            </h1>
            <p className={styles.kapseret_subcounty_description}>
              Kapseret Subcounty is a local government administrative unit
              located in the Uasin Gishu County of Kenya. The subcounty offices
              serve as the administrative center, overseeing the governance and
              development of the Kapseret region.
            </p>
          </div>
          <div className={styles.kapseret_subcounty_section_cards}>
            <div className={styles.kapseret_subcounty_card}>
              <h3 className={styles.kapseret_subcounty_card_title}>History</h3>
              <p className={styles.kapseret_subcounty_card_content}>
                Kapseret Subcounty was established in the early 2000s as part of
                the devolution process in Kenya. It was carved out of the former
                Eldoret North District to better serve the local population.
              </p>
            </div>
            <div className={styles.kapseret_subcounty_card}>
              <h3 className={styles.kapseret_subcounty_card_title}>Mandate</h3>
              <p className={styles.kapseret_subcounty_card_content}>
                The Kapseret Subcounty offices are responsible for overseeing
                the governance, development, and public services within the
                Kapseret region. This includes infrastructure, social welfare,
                community engagement, and more.
              </p>
            </div>
            <div className={styles.kapseret_subcounty_card}>
              <h3 className={styles.kapseret_subcounty_card_title}>
                Organizational Structure
              </h3>
              <p className={styles.kapseret_subcounty_card_content}>
                The subcounty offices are led by the Subcounty Administrator and
                comprise various departments, such as Finance, Education,
                Health, and Community Development. These departments work
                together to address the needs of the local population.
              </p>
            </div>
            <div className={styles.kapseret_subcounty_card}>
              <h3 className={styles.kapseret_subcounty_card_title}>
                Key Initiatives
              </h3>
              <p className={styles.kapseret_subcounty_card_content}>
                Some of the key initiatives undertaken by the Kapseret Subcounty
                offices include improving access to clean water, upgrading local
                roads and infrastructure, supporting small-scale businesses, and
                enhancing educational and healthcare services.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
