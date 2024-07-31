import styles from "./Summary.module.css";
import Button from "../components/Button";
function DisciplinesSummary() {
  return (
    <div className={styles.DisciplinesDiv}>
      <p className={styles.Disciplines}>Disciplines</p>
      <div className={styles.disp_summary}>
        <h2>OHO's Disciplines</h2>
        <p>OHO's Vision,Mission,Goal,Mandate and Core Values.</p>
        <p>
          A detailed guide on OHO's goals, mandate, and objectives, mapping out
          the organization's primary focus and strategic intents."{" "}
        </p>
        <Button text="Learn More" link="/Disciplines" color=" #5a8a01cc" />
      </div>
    </div>
  );
}
export default DisciplinesSummary;
