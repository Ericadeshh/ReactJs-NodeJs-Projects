import styles from "./ContactPeople.module.css";

const ContactSlide = () => {
  return (
    <section className={`py-5 bg-light ${styles.testimonials}`}>
      <h2
        className={`${styles.testimonialTitle} text-center font-weight-normal`}
      >
        OHO's Pioneers and Founders
      </h2>
      <div className="container">
        <div className={styles.row}>
          <div className={`${styles.card} alert alert-success`}>
            <div className="d-flex align-items-center mb-3">
              <img
                src="/Mary.jpg"
                alt="customer-img"
                className={`rounded-circle mr-3 ${styles.img}`}
              />
              <div className={styles.details}>
                <h5 className={styles.names}>Mary Adut Gop</h5>
                <p className={styles.testimonialText}>
                  <span className={styles.role}>Executive Director</span>
                  <span>+211922055977</span>{" "}
                  <a href="mailto:maryadut87@gmail.com">maryadut87@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="text-warning mb-3">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          <div className={`${styles.card} alert alert-light`}>
            <div className="d-flex align-items-center mb-3">
              <img
                src="/Martin.jpg"
                alt="customer-img"
                className={`rounded-circle mr-3 ${styles.img}`}
              />
              <div className={styles.details}>
                <h5 className={styles.names}>Martin Mayen Piol </h5>
                <p className={styles.testimonialText}>
                  <span className={styles.role}>Programme Director</span>
                  <span>+211929991377/+211917570051</span>{" "}
                  <a href="mailto:maryadut87@gmail.com">
                    mayenpiolmartin@gmail.com
                  </a>
                  <span></span>
                </p>
              </div>
            </div>
            <div className="text-warning mb-3">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          <div className={`${styles.card} alert alert-info`}>
            <div className="d-flex align-items-center mb-3">
              <img
                src="/MaleAfrican.avif"
                alt="customer-img"
                className={`rounded-circle mr-3 ${styles.img}`}
              />
              <div className={styles.details}>
                <h5 className={styles.names}>Kuot Agany </h5>
                <p className={styles.testimonialText}>
                  <span className={styles.role}>Project manager</span>
                  <span></span> <span></span>
                </p>
              </div>
            </div>
            <div className="text-warning mb-3">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>

          <div className={`${styles.card} alert alert-warning`}>
            <div className="d-flex align-items-center mb-3">
              <img
                src="/MaleAfrican.avif"
                alt="customer-img"
                className={`rounded-circle mr-3 ${styles.img}`}
              />
              <div className={styles.details}>
                <h5 className={styles.names}>Luna Mathew Tombe </h5>
                <p className={styles.testimonialText}>
                  <span className={styles.role}>Admin & Finance Manager</span>
                  <span></span>+211921502416/+211914838209 <span></span>
                </p>
              </div>
            </div>
            <div className="text-warning mb-3">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSlide;
