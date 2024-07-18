import styles from "./contact.module.css";
function Contact() {
  return (
    <section className={`${styles.contact} alert alert-success`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <div className={styles.contactGrid}>
          <div>
            <h3 className={styles.contactTitle}>Address</h3>
            <p className={styles.contactText}>
              Kapseret Subcounty Offices
              <br />
              P.O. Box 123, Eldoret
              <br />
              Kenya
            </p>
          </div>
          <div>
            <h3 className={styles.contactTitle}>Phone</h3>
            <p className={styles.contactText}>+254 712 345 678</p>
          </div>
          <div>
            <h3 className={styles.contactTitle}>Email</h3>
            <p className={styles.contactText}>info@kapseret.go.ke</p>
          </div>
          <div>
            <h3 className={styles.contactTitle}>Working Hours</h3>
            <p className={styles.contactText}>
              Monday - Friday: 8:00 AM - 5:00 PM
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
