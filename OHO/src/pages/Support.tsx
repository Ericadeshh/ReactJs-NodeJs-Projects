import styles from "./Support.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SupportDonationVolunteer = () => {
  return (
    <div className={`${styles.supportDonationVolunteer} alert alert-success`}>
      <p className={styles.badge}>Support OHO</p>
      <h1 className={`${styles.heading}`}>Donations and Volunteering</h1>

      <section className={`${styles.section} donations`}>
        <h2 className={styles.h2}>Donations</h2>
        <p>
          OHO is open to aided funding to finance its operation, we are
          requesting any support from esteemed individuals and agencies that are
          willing to support Care for Orphan's Hope Organization in South Sudan
          financially and materially so as we work together as partners towards
          achieving humanitarian objectives. Your donations will help us reach
          the destitute and vulnerable groups in South Sudan that cannot be
          reached by International NGOs.
        </p>
      </section>

      <section className={`${styles.section} volunteering`}>
        <h2 className={styles.h2}>Volunteering</h2>
        <p>
          We welcome volunteers who are passionate about making a difference in
          the lives of orphaned and vulnerable children in South Sudan. Your
          time and expertise can significantly impact our programs and help us
          achieve our mission.
        </p>
      </section>

      <section className={`${styles.section} contact`}>
        <h2 className={styles.h2}>Contact Information</h2>
        <p>For donations and volunteering, please reach out to:</p>
        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <strong>Mary Adut Gop</strong>, Executive Director
            <br />
            Phone: +211922055977
            <br />
            Email:{" "}
            <a href="mailto:maryadut87@gmail.com">maryadut87@gmail.com</a>
          </li>
          <li className={styles.contactItem}>
            <strong>Martin Mayen Piol</strong>, Programme Director
            <br />
            Phone: +211929991377 / +211917570051
            <br />
            Email:{" "}
            <a href="mailto:mayenpiolmartin@gmail.com">
              mayenpiolmartin@gmail.com
            </a>
          </li>
          <li className={styles.contactItem}>
            <strong>Luna Mathew Tombe</strong>, Admin & Finance Manager
            <br />
            Phone: +211921502416 / +211914838209
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SupportDonationVolunteer;
