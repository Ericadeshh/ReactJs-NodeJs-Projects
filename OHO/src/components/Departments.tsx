import React from "react";
import styles from "./DepartmentsSection.module.css";

// Define the structure of a Department object
interface Department {
  name: string;
  leader: { name: string; role: string };
  staff: { name: string; role: string }[];
  responsibilities: string[];
  backgroundImage: string;
  className: string;
}

// Departments data array
const departments: Department[] = [
  {
    name: "Administration & Human Resources",
    leader: { name: "Mary Adut Gop", role: "Executive Director & HR Manager" },
    staff: [
      {
        name: "Martin Mayen Piol",
        role: "Programme Director & HR Coordinator",
      },
      { name: "**", role: "Recruitment Specialist" },
    ],
    responsibilities: [
      "Overseeing daily operations",
      "Managing administrative tasks",
      "Coordinating with other departments",
      "Recruiting and hiring staff",
      "Managing employee relations",
      "Developing HR policies",
    ],
    backgroundImage:
      "https://img.freepik.com/free-vector/pie-chart-concept-illustration_114360-1897.jpg?ga=GA1.1.684399309.1724654318&semt=ais_hybrid",
    className: "administration",
  },
  {
    name: "Education Department",
    leader: { name: "Martin Mayen Piol", role: "Programme Director" },
    staff: [
      { name: "Kuot Agany", role: "Project Manager" },
      { name: "Luna Mathew Tombe", role: "Admin & Finance Manager" },
    ],
    responsibilities: [
      "Developing program strategies",
      "Implementing programs",
      "Monitoring and evaluating program effectiveness",
    ],
    backgroundImage:
      "https://img.freepik.com/premium-vector/back-school-green-board-background-vector-illustration_35322-1993.jpg?w=740",
    className: "education",
  },
  {
    name: "Finance",
    leader: { name: "Viola Awut", role: "Admin & Finance Manager" },
    staff: [
      { name: "Kuot Agany", role: "Project Manager" },
      { name: "Luna Mathew Tombe", role: "Admin & Finance Manager" },
    ],
    responsibilities: [
      "Managing budgets",
      "Overseeing financial transactions",
      "Preparing financial reports",
    ],
    backgroundImage:
      "https://img.freepik.com/premium-vector/investment-and-deposit-growth-of-capital-money_951778-89172.jpg?w=740",
    className: "finance",
  },
  {
    name: "Health and Wellness Department",
    leader: { name: "Kuot Agany", role: "Health Director" },
    staff: [
      { name: "Martin Mayen Piol", role: "Health Educator" },
      { name: "Mary Adut Gop", role: "Coordinator" },
    ],
    responsibilities: [
      "Ensure the health and well-being of orphans.",
      "Provide medical check-ups and vaccinations.",
      "Conduct health education and awareness programs.",
    ],
    backgroundImage:
      "https://img.freepik.com/premium-vector/charactes-people-holding-health-icons-illustration_53876-25967.jpg?w=740",
    className: "health",
  },
];

// DepartmentsSection Component
const DepartmentsSection: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.badge}>Depts.</div>
      <h2 className={styles.heading}>Our Departments</h2>
      <section className={styles.departmentsSection}>
        {departments.map((department, index) => (
          <div
            key={index}
            className={`${styles.cardMain} ${department.className}`}
          >
            <div
              className={`${styles.backgroundImage}`}
              style={{ backgroundImage: `url(${department.backgroundImage})` }}
            ></div>
            <div className={styles.cardHeader}>
              <h3 className={styles.card_title}>{department.name}</h3>
            </div>
            <div className={styles.cardBody}>
              <h4 className={styles.card_subtitle}>Leader</h4>
              <p>
                <strong>Name:</strong> {department.leader.name}
              </p>
              <p>
                <strong>Role:</strong> {department.leader.role}
              </p>
              <h4 className={styles.card_subtitle}>Staff</h4>
              <ul className={styles.list}>
                {department.staff.map((member, idx) => (
                  <li key={idx}>
                    <strong>{member.name}</strong> - {member.role}
                  </li>
                ))}
              </ul>
              <h4 className={styles.card_subtitle}>Responsibilities</h4>
              <ul className={styles.list}>
                {department.responsibilities.map((task, idx) => (
                  <li key={idx}>- {task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DepartmentsSection;
