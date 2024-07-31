import React from "react";
import styles from "./DepartmentsSection.module.css";

const departments = [
  {
    name: "Administrative",
    leader: { name: "Mary Adut Gop", role: "Executive Director" },
    staff: [
      { name: "Martin Mayen Piol", role: "Programme Director" },
      { name: "Kuot Agany", role: "Project manager" },
    ],
    responsibilities: [
      "Overseeing daily operations",
      "Managing administrative tasks",
      "Coordinating with other departments",
    ],
  },
  {
    name: "Education Department",
    leader: { name: "Martin Mayen Piol", role: "Programme Director" },
    staff: [
      { name: "Kuot Agany", role: "Project manager" },
      { name: "Luna Mathew Tombe", role: "Admin & Finance Manager" },
    ],
    responsibilities: [
      "Developing program strategies",
      "Implementing programs",
      "Monitoring and evaluating program effectiveness",
    ],
  },
  {
    name: "Finance",
    leader: { name: "Luna Mathew Tombe", role: "Admin & Finance Manager" },
    staff: [
      { name: "Kuot Agany", role: "Project manager" },
      { name: "Luna Mathew Tombe", role: "Admin & Finance Manager" },
    ],
    responsibilities: [
      "Managing budgets",
      "Overseeing financial transactions",
      "Preparing financial reports",
    ],
  },
  {
    name: "Human Resources",
    leader: { name: "Mary Adut Gop", role: "HR Manager" },
    staff: [
      { name: "Martin Mayen Piol", role: "HR Coordinator" },
      { name: "Luna Mathew Tombe", role: "Recruitment Specialist" },
    ],
    responsibilities: [
      "Recruiting and hiring staff",
      "Managing employee relations",
      "Developing HR policies",
    ],
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
  },
];

const DepartmentsSection: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.badge}>Depts.</div>
      <h2 className={styles.heading}>Our Departments</h2>
      <section className={`${styles.departmentsSection} alert alert-success`}>
        {departments.map((department, index) => (
          <div key={index} className={`${"card mb-4"} ${styles.cardMain} `}>
            <div className="card-header">
              <h3 className={styles.card_title}>{department.name}</h3>
            </div>
            <div className="card-body">
              <h4 className="card_subtitle mb-1 text-muted">Leader</h4>
              <p>
                <strong>Name:</strong> {department.leader.name}
              </p>
              <p>
                <strong>Role:</strong> {department.leader.role}
              </p>

              <h4 className="card-subtitle mb-2 mt-4 text-muted">Staff</h4>
              <ul className="list-unstyled">
                {department.staff.map((member, idx) => (
                  <li key={idx}>
                    <strong>{member.name}</strong> - {member.role}
                  </li>
                ))}
              </ul>

              <h4 className="card-subtitle mb-2 mt-4 text-muted">
                Responsibilities
              </h4>
              <ul className="list-unstyled">
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
