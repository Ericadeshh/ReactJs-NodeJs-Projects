import { useEffect, useRef } from "react";
import styles from "./contact.module.css";

function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = sectionRef.current?.querySelectorAll(`.${styles.card}`);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            observer.unobserve(entry.target);
          }
        });
      });

      elements?.forEach((element) => observer.observe(element));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`${styles.contact} alert alert-success`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <div className={styles.contactGrid} ref={sectionRef}>
          <div className={`${styles.card} ${styles.address}`}>
            <h3 className={styles.contactTitle}>Address</h3>
            <p className={styles.contactText}>
              Orphans Hope Organization
              <br />
              P.O. Box 123, Eldoret
              <br />
              Kenya
            </p>
          </div>

          <div className={`${styles.card} ${styles.workingHours}`}>
            <h3 className={styles.contactTitle}>Working Hours</h3>
            <p className={styles.contactText}>
              Monday - Friday: 8:00 AM - 5:00 PM
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>

          <div className={`${styles.card} ${styles.email}`}>
            <h3 className={styles.contactTitle}>Email</h3>
            <p className={styles.contactText}>
              <span className={styles.name}> Mary Adut Gop</span>{" "}
              <span className={styles.role}> Executive Director</span>
              <span>ajokayen@gmail.com</span>{" "}
            </p>
            <p className={styles.contactText}>
              <span className={styles.name}> Martin Mayen Piol</span>{" "}
              <span className={styles.role}> Programme Director </span>
              <span>mayenpiolmartin@gmail.com</span>{" "}
            </p>
          </div>

          <div className={`${styles.card} ${styles.phone}`}>
            <h3 className={styles.contactTitle}>Phone</h3>
            <p className={styles.contactText}>
              <span className={styles.name}> Mary Adut Gop</span>{" "}
              <span className={styles.role}>Executive Director</span>{" "}
              <span>+211922055977</span>{" "}
            </p>

            <p className={styles.contactText}>
              <span className={styles.name}>Martin Mayen Piol</span>{" "}
              <span className={styles.role}>Programme Director</span>{" "}
              <span>+211929991377/+211917570051</span>{" "}
            </p>
            <p className={styles.contactText}>
              <span className={styles.name}>Luna Mathew Tombe</span>{" "}
              <span>
                {" "}
                <span className={styles.role}>
                  Admin & Finance Manager
                </span>{" "}
                <span>+211921502416/+211914838209</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
