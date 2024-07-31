import styles from "./Summary.module.css";
import Button from "../components/adminbtn";
function DepartmentsSummary() {
  return (
    <div className={`${styles.DisciplinesDiv} alert alert-success `}>
      <p className={styles.Disciplines}>Departments</p>
      <div className={styles.disp_summary}>
        <h2>Kapseret SubCounty Departments</h2>

        <p>
          Explore and Learn More about the Kapseret SubCounty  Departments and how they work
          to dispense services to the people of Uasin Gishu, <span className={styles.part2}>Kapseret</span>
        </p>
        <Button
          text="View Departments"
          link="/Departments"
        />
      </div>
    </div>
  );
}
export default DepartmentsSummary;
