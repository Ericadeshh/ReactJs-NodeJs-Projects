import styles from "./Organogram.module.css";

export default function Organogram() {
  return (
    <>
      <p className={styles.orgP}>Organogram</p>
      <div className="d-flex flex-column align-items-center my-4">
        <h2 className={styles.title}>Organisation Organogram</h2>
        <div
          className={`${styles.topLevel} ${styles.red} text-white border border-secondary rounded p-2 position-relative`}
        >
          General Assembly
          <div className={styles.verticalLine}></div>
        </div>
        <div
          className={`${styles.topLevel} ${styles.orange} text-white border border-secondary rounded p-2 position-relative`}
        >
          Board of Directors
          <div className={styles.verticalLine}></div>
        </div>
        <div className="d-flex flex-column align-items-center my-4 position-relative">
          <div
            className={`${styles.topLevel} ${styles.yellow} text-white border border-secondary rounded p-2`}
          >
            Executive Director
          </div>
          <div className={styles.verticalLine}></div>
        </div>
        <div className="d-flex flex-column align-items-center my-4 position-relative">
          <div
            className={`${styles.topLevel} ${styles.green} text-white border border-secondary rounded p-2`}
          >
            Program Director
          </div>
          <div className={styles.verticalLine}></div>
        </div>
        <div className="d-flex justify-content-between my-4">
          <div className="d-flex flex-column align-items-center position-relative">
            <div
              className={`${styles.topLevel} ${styles.blue} text-white border border-secondary rounded p-2`}
            >
              Project Manager
            </div>
            <div className={styles.verticalLine}></div>
            <div
              className={`${styles.topLevel} ${styles.indigo} text-white border border-secondary rounded p-2`}
            >
              Project Officers
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div
              className={`${styles.topLevel} ${styles.violet} text-white border border-secondary rounded p-2`}
            >
              Admin & Finance Manager
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-4">
          <div className="d-flex flex-column align-items-center">
            <div
              className={`${styles.topLevel} ${styles.magenta} text-white border border-secondary rounded p-2`}
            >
              Field Monitors
            </div>
          </div>
          <div className="d-flex flex-column align-items-center position-relative">
            <div
              className={`${styles.topLevel} ${styles.red} text-white border border-secondary rounded p-2`}
            >
              Logistics & Procurement Officer
            </div>
            <div className={styles.verticalLine}></div>
            <div
              className={`${styles.topLevel} ${styles.orange} text-white border border-secondary rounded p-2`}
            >
              Drivers
            </div>
            <div
              className={`${styles.topLevel} ${styles.yellow} text-white border border-secondary rounded p-2`}
            >
              Cleaners
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
