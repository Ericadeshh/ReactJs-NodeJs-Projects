import React from "react";
import styles from "./Priorities.module.css"; // Import CSS module styles

export default function Priorities() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.badge}>OHO Priorities</div>
          <h2 className={styles.title}>
            Empowering Communities, Transforming Lives
          </h2>
          <p className={styles.description}>
            OHO is committed to advocating for child rights, promoting
            sustainable agriculture, increasing access to quality education,
            empowering women and girls, and fostering sustainable development.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <SmileIcon className={`${styles.icon} ${styles.green}`} />
            <h3 className={styles.cardTitle}>Peace Building</h3>
            <p className={styles.cardDescription}>
              OHO will advocate and promote peace building in the Communities.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardOrange}`}>
            <CurrencyIcon className={`${styles.icon} ${styles.orange}`} />
            <h3 className={styles.cardTitle}>Microfinance</h3>
            <p className={styles.cardDescription}>
              To create responsiveness on the role of micro-finance institutions
              in economic growth and development.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardGrey}`}>
            <FlagIcon className={`${styles.icon} ${styles.purple}`} />
            <h3 className={styles.cardTitle}>Forums</h3>
            <p className={styles.cardDescription}>
              To organize forums for discussions, symposium, seminars, and
              workshops on contemporary macro-economic challenges and
              imbalances.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardPink}`}>
            <BabyIcon className={`${styles.icon} ${styles.red}`} />
            <h3 className={styles.cardTitle}>Child Rights</h3>
            <p className={styles.cardDescription}>
              Advocates for child rights which mainly dwells on growth of the
              child both physically and mentally, their level of participation
              within the families and community, right to life and association
              among others. OHO works to strongly encourage child rights;
              promote youth and girl child participation in all issues of
              national and international developments
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <LeafIcon className={`${styles.icon} ${styles.green}`} />
            <h3 className={styles.cardTitle}>Sustainable Agriculture</h3>
            <p className={styles.cardDescription}>
              Improves and encourages sustainable agriculture and rural
              development, a long–term strategy for increasing food production
              and food security while conserving and managing natural resources.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardOrange}`}>
            <SchoolIcon className={`${styles.icon} ${styles.orange}`} />
            <h3 className={styles.cardTitle}>Quality Education</h3>
            <p className={styles.cardDescription}>
              Increasing access to education, with a focus on girl-child
              education.
            </p>
          </div>
          <div
            className={`${styles.card} ${styles.cardGrey} ${styles.colSpan2}`}
          >
            <EqualIcon className={`${styles.icon} ${styles.purple}`} />
            <h3 className={styles.cardTitle}>Women Empowerment</h3>
            <p className={styles.cardDescription}>
              Empowers women and girls in promoting gender equality and equity
              in resources distribution.
            </p>
          </div>
          <div
            className={`${styles.card} ${styles.cardBlue} ${styles.colSpan1}`}
          >
            <RecycleIcon className={`${styles.icon} ${styles.blue}`} />
            <h3 className={styles.cardTitle}>Sustainable Development</h3>
            <p className={styles.cardDescription}>
              Meeting the needs of present and future generations through
              sustainable practices.
            </p>
          </div>
          <div
            className={`${styles.card} ${styles.cardPink} ${styles.colSpan2}`}
          >
            <BabyIcon className={`${styles.icon} ${styles.red}`} />
            <h3 className={styles.cardTitle}>Youth Participation</h3>
            <p className={styles.cardDescription}>
              Encouraging child rights and youth/girl-child participation in
              national and international developments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// SVG Icon Components (same as before)

// SVG Icon Components
interface IconProps extends React.SVGProps<SVGSVGElement> {}

function BabyIcon(props: IconProps) {
  return (
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
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
    </svg>
  );
}

function CurrencyIcon(props: IconProps) {
  return (
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}

function EqualIcon(props: IconProps) {
  return (
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
      <line x1="5" x2="19" y1="9" y2="9" />
      <line x1="5" x2="19" y1="15" y2="15" />
    </svg>
  );
}

function FlagIcon(props: IconProps) {
  return (
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function LeafIcon(props: IconProps) {
  return (
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function RecycleIcon(props: IconProps) {
  return (
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
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  );
}

function SchoolIcon(props: IconProps) {
  return (
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
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

function SmileIcon(props: IconProps) {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
