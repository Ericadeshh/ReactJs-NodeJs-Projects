import styles from "./services.module.css";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          <div className={`${styles.serviceCard} alert alert-warning`}>
            <div>
              <h3>Business Licensing</h3>
              <p>
                Obtain the necessary licenses and permits to operate your
                business in Kapseret Subcounty.
              </p>
            </div>
          </div>
          <div className={`${styles.serviceCard} alert alert-warning`}>
            <div>
              <h3>Land Registration</h3>
              <p>Register your land and property with the local authorities.</p>
            </div>
          </div>

          <div className={`${styles.serviceCard} alert alert-warning`}>
            <div>
              <h3>Tax Collection</h3>
              <p>
                Pay your local taxes and fees through our convenient channels.
              </p>
            </div>
          </div>

          <div className={`${styles.serviceCard} alert alert-warning`}>
            <div>
              <h3>Citizen Services</h3>
              <p>
                Access a range of public services and support for the community.
              </p>
            </div>
          </div>

          <div className={`${styles.serviceCard} alert alert-warning`}>
            <div>
              <h3>Online Bill Payment</h3>
              <p>
                Easily pay your bills online with our secure payment system.
              </p>
            </div>
          </div>

          <div className={`${styles.serviceCard} alert alert-warning`}>
            <div>
              <h3>Government Forms Assistance</h3>
              <p>
                Get assistance in filling out and submitting government forms
                accurately and efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
