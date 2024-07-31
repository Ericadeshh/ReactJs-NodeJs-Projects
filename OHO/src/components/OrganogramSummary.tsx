import styles from "../pages/Summary.module.css";
import Button from "../components/Button";

function OrganogramSummary() {
  return (
    <div className={`${styles.DisciplinesDiv}  `}>
      <p className={styles.Disciplines}>Organogram</p>
      <div className={styles.disp_summary}>
        <h2>Organisation Organogram</h2>

        <p>
          View OHO's Organisation Structure From the Top Authority to all
          Protocols...
        </p>
        <Button text="Learn More" link="/Organogram" color=" #5a8a01cc" />
      </div>
    </div>
  );
}
export default OrganogramSummary;
