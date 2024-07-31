import React from "react";
import styles from "./mainFocus.module.css";

function MainFocus() {
  return (
    <section className={`${styles.section} `}>
      <div className={`${styles.container} alert alert-success`}>
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <div className={styles.focusAreaBadge}>Our Focus Areas</div>
            <h4>OHO's Major Strategic Program Areas</h4>
            <p className={styles.description}>
              Our major strategic program areas include but are not limited to:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <CheckIcon className={`${styles.icon} ${styles.purpleIcon}`} />
                Protection (Child protection and GBV)
              </li>
              <li className={styles.listItem}>
                <CheckIcon className={`${styles.icon} ${styles.redIcon}`} />
                Education
              </li>
              <li className={styles.listItem}>
                <CheckIcon className={`${styles.icon} ${styles.yellowIcon}`} />
                WASH
              </li>
              <li className={styles.listItem}>
                <CheckIcon className={`${styles.icon} ${styles.greenIcon}`} />
                Food security and Livelihoods
              </li>
              <li className={styles.listItem}>
                <CheckIcon className={`${styles.icon} ${styles.blueIcon}`} />
                Peace Building
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.fundingSource} alert alert-success`}>
        <div className={styles.focusAreaBadge}>Fundings</div>
        <h4 className={styles.h3}>Funding Source</h4>
        <p>
          OHO does not have funds to finance its operation, we are requesting
          any support from esteemed individuals and agencies that are willing to
          support Care for Orphan's Hope Organization in South Sudan financially
          and materially so as we work together as partners towards achieving
          humanitarian objects so that we may reach the destitude and vulnerable
          groups in South Sudan that cannot be reached by International NGOs
        </p>
      </div>

      <div className={`${styles.OpAreas} alert alert-success`}>
        <div className={styles.focusAreaBadge}>Ops</div>
        <h4 className={styles.h3}>Our Operation Areas</h4>
        <ul>
          <li>Central Equatorial-Juba</li>
          <li>Nothern Bahr El Ghazal-Aweil</li>
          <li>Western Bahr El Ghazal-Wau</li>
        </ul>
      </div>
    </section>
  );
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const CheckIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default MainFocus;
