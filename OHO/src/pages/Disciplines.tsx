import React from "react";
import styles from "./Disciplines.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const CheckIcon = (props: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.checkIcon}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const CompassIcon = (props: IconProps) => (
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
    <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1-1.265-1.265z" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const FlagIcon = (props: IconProps) => (
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

const TargetIcon = (props: IconProps) => (
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
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const TelescopeIcon = (props: IconProps) => (
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
    <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
    <path d="m13.56 11.747 4.332-.924" />
    <path d="m16 21-3.105-6.21" />
    <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
    <path d="m6.158 8.633 1.114 4.456" />
    <path d="m8 21 3.105-6.21" />
    <circle cx="12" cy="13" r="2" />
  </svg>
);

const LightbulbIcon = (props: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="yellow"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4.58 12.32A5 5 0 0 1 10 18h4a5 5 0 0 1 2.58-3.68A7 7 0 0 0 12 2z" />
  </svg>
);

const HandsHelpingIcon = (props: IconProps) => (
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
    <path d="M18 13h-3V9a4 4 0 0 0-8 0v6a4 4 0 0 0 8 0v-3" />
    <path d="M14 9h2a4 4 0 0 1 0 8h-2v4a4 4 0 0 1-8 0v-4H6a4 4 0 0 1 0-8h2V3a4 4 0 0 1 8 0v6z" />
  </svg>
);

const UsersIcon = (props: IconProps) => (
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
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function Disciplines() {
  return (
    <>
      <div className={styles.badge}>OHO's Disciplines</div>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.card} ${styles.cardGreen}`}>
            <div className={`${styles.iconContainer} ${styles.iconGreen}`}>
              <TelescopeIcon className="h-6 w-6" />
              <h3 className={styles.heading}>Our Vision</h3>
            </div>
            <p className={styles.textGreen}>
              To be the leading provider of innovative solutions that empower
              our clients to achieve their goals and transform their businesses.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <div className={`${styles.iconContainer} ${styles.iconBlue}`}>
              <TargetIcon className="h-6 w-6" />
              <h3 className={styles.heading}>Our Mission</h3>
            </div>
            <p className={styles.textBlue}>
              To empower our clients with cutting-edge technology and
              exceptional service, enabling them to achieve their business
              objectives and drive sustainable growth.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardYellow}`}>
            <div className={`${styles.iconContainer} ${styles.iconYellow}`}>
              <TargetIcon className="h-6 w-6" />
              <h3 className={styles.heading}>Our Goals</h3>
            </div>
            <ul className={styles.textYellow}>
              <li className={styles.listItem}>
                <CheckIcon className="mr-2 inline-block" />
                Deliver exceptional value to our clients
              </li>
              <li className={styles.listItem}>
                <CheckIcon className="mr-2 inline-block" />
                Foster a culture of innovation and continuous improvement
              </li>
              <li className={styles.listItem}>
                <CheckIcon className="mr-2 inline-block" />
                Expand our reach and impact globally
              </li>
            </ul>
          </div>
          <div className={`${styles.card} ${styles.cardBlack}`}>
            <div className={`${styles.iconContainer} ${styles.iconBlack}`}>
              <FlagIcon className="h-6 w-6" />
              <h3 className={styles.heading}>Our Mandate</h3>
            </div>
            <p className={styles.textBlack}>
              To be a trusted partner that delivers innovative solutions,
              exceptional service, and sustainable value to our clients,
              empowering them to thrive in a rapidly evolving business
              landscape.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardWhite}`}>
            <div className={`${styles.iconContainer} ${styles.iconGray}`}>
              <CompassIcon className="h-6 w-6" />
              <h3 className={styles.heading}>Our Core Values</h3>
            </div>

            <ul className={styles.textGray}>
              <li className={styles.listItem}>
                <CheckIcon className="mr-2 inline-block" />
                Integrity: We act with honesty, transparency, and ethical
                principles in all our dealings.
              </li>
              <li className={styles.listItem}>
                <CheckIcon className="mr-2 inline-block" />
                Innovation: We embrace creativity and continuously seek new ways
                to improve and deliver value.
              </li>
              <li className={styles.listItem}>
                <CheckIcon className="mr-2 inline-block" />
                Collaboration: We work together as a team, fostering
                partnerships and synergies to achieve our goals.
              </li>
              <li className={styles.listItem}>
                <CheckIcon className="mr-2 inline-block" />
                Excellence: We strive for the highest standards of quality and
                performance in everything we do.
              </li>
            </ul>
          </div>

          <div className={styles.container2}>
            <div className={`${styles.card} ${styles.cardGreen}`}>
              <div className={`${styles.iconContainer} ${styles.iconGreen}`}>
                <HandsHelpingIcon className="h-6 w-6" />
                <h3 className={styles.heading}>Our Roles</h3>
              </div>

              <ul className={styles.textGray}>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To provide timely response to humanitarian crisis affecting
                  children with the aim to promote dignified living standards to
                  the affected children, internally displaced persons and
                  refugees by providing and facilitating delivery of life saving
                  materials and services
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To advocate for promotion, respect and protection of child
                  rights and women in the communities
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To solicit, raise, mobilize, disburse and manage funds and
                  other materials and technical assistance and resources for the
                  promotion and the achievement of the objectives of the
                  organization
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To establish disability education by establishment of schools
                  and other educational and learning centers and libraries and
                  to publish newsletters, brochures, periodicals, books and
                  other publications as the board of the Organization may deem
                  desirable for the promotion of the objectives of the
                  Organization
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To train, employ teachers, consultants, advisors, experts or
                  any other staff needed in time such as supply of learning and
                  teaching materials and in curriculum development activities
                  for the realization of the objectives of the Organization.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To enter in to arrangement with any governments or authorities
                  that may seem conducive to the organization’s objectives or
                  any of them and obtain from such governments or authority any
                  rights, privileges and concessions which the Organization may
                  think desirable to obtain.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To take such steps by personal or written appeals, public
                  meetings or otherwise as may from time to time be deemed
                  expedient for the purpose of securing contributions to the
                  funds of the Organization in the form of donations, annual
                  subscriptions or otherwise.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To apply to any governmental authority, Non-Governmental
                  Organizations (NGOs), private agencies or public bodies,
                  corporations, companies or persons, for and to accept grants
                  or gifts of money and any movable or immovable property,
                  donations, gifts, subscriptions, and other assistance with a
                  view to promoting the objectives of the Organization, and, in
                  taking of any gift or property to take the same subject to any
                  special trust which may be prescribed by the donor thereof.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To apply to any governmental authority, Non-Governmental
                  Organizations (NGOs), private agencies or public bodies,
                  corporations, companies or persons, for and to accept grants
                  or gifts of money and any movable or immovable property,
                  donations, gifts, subscriptions, and other assistance with a
                  view to promoting the objectives of the Organization, and, in
                  taking of any gift or property to take the same subject to any
                  special trust which may be prescribed by the donor thereof.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To undertake field assessment to determine the needs and
                  develop project proposals of communities integrated programs
                  accordingly in areas of food security, health, education
                  capacity building, water, peace building and peace dialogue,
                  gender, good governance democracy, child protection, all
                  aspects of human rights, and for immediate emergency relief
                  interventions and rehabilitation of war-destroyed
                  infrastructure and other development activities.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To establish an endowment fund, to receive grants, donations,
                  gifts and other assistance in any form whatsoever from inside
                  and outside South Sudan or from any other source for the
                  achievement of objectives of the Organization and to establish
                  non-profit making foundations in any country or countries for
                  the purpose of receiving donations from private and/or
                  corporate persons and for channeling the same to the
                  Organization's development operations.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To improve the livelihood and food security among the children
                  and communities affected by severe food insecurity as a result
                  of drought and/or communal conflict.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To promote socio-cultural values among children and
                  communities locally, regionally and internationally.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To promote any other charitable projects aimed at promoting
                  communal welfares.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To do all such things as identical or conducive to the
                  attainment of any of the above objectives.
                </li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.cardBlack}`}>
              <div className={`${styles.iconContainer} ${styles.iconBlack}`}>
                <LightbulbIcon className="h-6 w-6" />
                <h3 className={styles.heading}>Our Objectives</h3>
              </div>

              <ul className={styles.textGray}>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Establish orphanage home for children, orphan and street
                  children who needs care in the society
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Provide education by establishing schools, vocational and
                  rehabilitation training centers for children
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Provide health facilities and feeding centers for the children
                  and to exert effort to enhance social awareness and human
                  consciousness, solicit and manages humanitarian material and
                  technical assistance in order to enable poor sections of the
                  community
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To enhance child healthcare, shelter, and meet basic human
                  needs of all the needy and orphaned children in South Sudan.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Support and protect orphaned children from fatalism, rights
                  abuse and oppression and provision of a conducive environment
                  for their development and growth.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To provide orphanage healthcare, information, spiritual needs
                  education and training and communication services aiming to
                  facilitate behavior change in solving community socio-economic
                  integration and nation building.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To empower, train and organize orphans as individuals and
                  corporate members of the community to develop productive
                  skills for meaningful self-reliance and integration into
                  community
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To compliment on government efforts in Universal Primary
                  Education (UPE), and production skills.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To provide basic skills oriented education to the children to
                  enable them earn a living
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Provide shelter and ultimate comfort to the children who are
                  destitute and homeless for responsible adulthood.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To outreach, settle and enable orphan children easily access
                  school frees, counselling service, other educational support
                  and medical help.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To promote human rights, reduce discrimination and provide
                  psychosocial support to the orphans, widows and widowers,
                  street kids, abandoned children especially among the HIV/AIDS
                  stricken groups.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To engage in income generating activities for sustainable
                  self-reliance of the organization in pursuit of these objects
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To contribute to the achievement of sustainable and dignified
                  livelihood through provisions of nutrition to poor children,
                  shelter and non-food items and education (Universities,
                  Secondary’s, and Primaries Schools), health services and child
                  protection.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To create conducive environment for provision for quality and
                  sustainable educational programmes
                </li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.cardBlue}`}>
              <div className={`${styles.iconContainer} ${styles.iconBlue}`}>
                <UsersIcon className="h-6 w-6" />
                <h3 className={styles.heading}>
                  Our Activities Mainly Dwell On The Following:
                </h3>
              </div>

              <ul className={styles.textGray}>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Awareness on child rights and gender base violence.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Advocate and promoting peace in the communities.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  To organize forums for discussions, symposium, seminars, and
                  workshops on contemporary macro-economic challenges and
                  imbalances
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Awareness and advocacy for Human Rights, Gender equality and
                  Child rights to vulnerable marginalized populations of South
                  Sudan generally.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Women /youth farmer’s cooperative groups engaged in improved
                  land management and agriculture production for food security
                  and income generation.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Promote appropriate technologies to mitigate pre and
                  post-harvest losses.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Promote social ecology to the communities supported
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Capacity building in farming techniques and technical
                  training.
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />
                  Promote education systems through REFLECT methodologies for
                  improved and accountable citizens in South Sudan
                </li>
                <li className={styles.listItem}>
                  <CheckIcon className="mr-2 inline-block" />. To create
                  responsiveness on the role of micro-finance institutions in
                  economic growth and development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
