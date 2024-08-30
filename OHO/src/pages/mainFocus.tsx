import React, { useEffect, useRef } from "react";
import styles from "./mainFocus.module.css";

// Icon components
const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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

const RiFocus2LineSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      color="#f0f0f0"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7ZM10 11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11Z"
        fill="currentColor"
      />
    </svg>
  );
};

const MoneyDollarCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="6" x2="12" y2="18"></line>
    <path d="M16 10H9.5a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 1 0 5H8"></path>
  </svg>
);

const LocationDotIcon = ({
  color = "currentColor",
  size = 15,
}: {
  color?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M12 0C7.31 0 3.5 3.81 3.5 8.5C3.5 14.92 12 24 12 24C12 24 20.5 14.92 20.5 8.5C20.5 3.81 16.69 0 12 0ZM12 13C9.52 13 7.5 10.98 7.5 8.5C7.5 6.02 9.52 4 12 4C14.48 4 16.5 6.02 16.5 8.5C16.5 10.98 14.48 13 12 13Z" />
  </svg>
);

function MainFocus() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fundingSourceRef = useRef<HTMLDivElement>(null);
  const opAreasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          entry.target.classList.remove(styles.hidden);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (containerRef.current) observer.observe(containerRef.current);
    if (fundingSourceRef.current) observer.observe(fundingSourceRef.current);
    if (opAreasRef.current) observer.observe(opAreasRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      if (fundingSourceRef.current)
        observer.unobserve(fundingSourceRef.current);
      if (opAreasRef.current) observer.unobserve(opAreasRef.current);
    };
  }, []);

  return (
    <section className={`${styles.section}`}>
      <div
        ref={containerRef}
        className={`${styles.container} ${styles.hidden} ${styles.slideInLeft}`}
      >
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <div className={styles.focusAreaBadge}>
              Our Focus Areas <RiFocus2LineSVG />
            </div>
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

      <div
        ref={fundingSourceRef}
        className={`${styles.fundingSource} ${styles.hidden} ${styles.slideInRight}`}
      >
        <div className={styles.focusAreaBadge}>
          Fundings <MoneyDollarCircleIcon />{" "}
        </div>
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

      <div
        ref={opAreasRef}
        className={`${styles.OpAreas} ${styles.hidden} ${styles.slideInBottom}`}
      >
        <div className={styles.focusAreaBadge}>
          Ops <LocationDotIcon />{" "}
        </div>
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

export default MainFocus;
