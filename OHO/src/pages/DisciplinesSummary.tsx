import styles from "./Summary.module.css";
import Button from "../components/Button";
function DisciplinesSummary() {
  return (
    <div className={`${styles.DisciplinesDiv} `}>
      <p className={styles.Disciplines}>Disciplines</p>
      <div className={styles.disp_summary}>
        <h2>OHO's Disciplines</h2>
        <p>
          A detailed guide on OHO's goals, mandate, and objectives, mapping out
          the organization's primary focus and strategic intents."{" "}
        </p>
        <div className="summaryBtn">
          <Button text="Learn More" link="/Disciplines" color=" #5a8a01cc" />
        </div>
      </div>
    </div>
  );
}
export default DisciplinesSummary;
