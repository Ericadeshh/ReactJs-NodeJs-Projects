import styles from "../pages/Summary.module.css";
import Button from "./Button";
function DepartmentsSummary() {
  return (
    <div className={`${styles.DisciplinesDiv}  `}>
      <p className={styles.Disciplines}>Departments</p>
      <div className={styles.disp_summary}>
        <h2>OHO's Departments</h2>

        <p>
          Explore and Learn More about the OHO's Departments and how they work
          to dispense services to orphaned children
        </p>
        <Button
          text="View Departments"
          link="/Departments"
          color=" #5a8a01cc"
        />
      </div>
    </div>
  );
}
export default DepartmentsSummary;
