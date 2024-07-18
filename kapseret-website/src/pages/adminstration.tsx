import React from "react";
import styles from "./adminstration.module.css";
import Button from "../components/adminbtn";
const Admin: React.FC = () => {
  return (
    <section
      className={`${styles.admin_dashboard_container} alert alert-success`}
    >
      <div className={styles.admin_dashboard_content}>
        <div className={styles.admin_dashboard_header}>
          <h2 className={styles.admin_dashboard_title}>
            Administration Dashboard
          </h2>
          <p className={styles.admin_dashboard_description}>
            Manage and optimize your organization's landing page with our
            comprehensive administration tools. Customize content, track
            analytics, and more.
          </p>
        </div>
        <Button
          text="View More "
          link="https://en.wikipedia.org/wiki/Kapseret_Constituency/adminstration"
        />
      </div>
    </section>
  );
};

export default Admin;
