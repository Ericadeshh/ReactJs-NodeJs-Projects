import React from 'react';
import styles from './Departments.module.css';

interface Department {
  name: string;
  headRole: string;
  roles: string[];
  staffRoles: string[];
}

const departments: Department[] = [
  {
    name: "Corporation Secretary/Legal Services Department",
    headRole: "Corporation Secretary",
    roles: [
      "Provide legal advice to the sub-county",
      "Handle legal documentation and contracts",
      "Ensure compliance with laws and regulations",
      "Represent the sub-county in legal matters"
    ],
    staffRoles: ["Legal Officer", "Paralegal", "Documentation Specialist", "Compliance Officer"]
  },
  {
    name: "Macroeconomics Department",
    headRole: "Chief Economist",
    roles: [
      "Analyze economic trends in the sub-county",
      "Provide economic forecasts and reports",
      "Advise on economic policies",
      "Monitor local economic indicators"
    ],
    staffRoles: ["Economic Analyst", "Data Scientist", "Policy Researcher", "Statistical Officer"]
  },
  {
    name: "Social Sector Department",
    headRole: "Director of Social Services",
    roles: [
      "Oversee social welfare programs",
      "Coordinate community development initiatives",
      "Manage social assistance programs",
      "Promote social inclusion and equality"
    ],
    staffRoles: ["Social Worker", "Community Development Officer", "Program Coordinator", "Outreach Specialist"]
  },
  {
    name: "Governance Department",
    headRole: "Head of Governance",
    roles: [
      "Ensure good governance practices",
      "Coordinate inter-departmental activities",
      "Oversee public participation processes",
      "Monitor and evaluate governance structures"
    ],
    staffRoles: ["Governance Officer", "Public Participation Coordinator", "Policy Analyst", "Monitoring and Evaluation Specialist"]
  },
  {
    name: "Capacity Building Department",
    headRole: "Director of Capacity Building",
    roles: [
      "Develop and implement training programs",
      "Assess skill gaps in the sub-county workforce",
      "Coordinate with external training providers",
      "Monitor and evaluate capacity building initiatives"
    ],
    staffRoles: ["Training Coordinator", "Skills Development Officer", "Learning Management Specialist", "Performance Improvement Analyst"]
  },
  {
    name: "Partnership Department",
    headRole: "Head of Partnerships",
    roles: [
      "Establish and maintain strategic partnerships",
      "Coordinate with NGOs and international organizations",
      "Manage public-private partnerships",
      "Develop partnership agreements and MOUs"
    ],
    staffRoles: ["Partnership Coordinator", "Stakeholder Engagement Officer", "Project Liaison", "Relationship Manager"]
  },
  {
    name: "Productive Sector Department",
    headRole: "Director of Productive Sector",
    roles: [
      "Promote agricultural and industrial development",
      "Coordinate with local businesses and farmers",
      "Implement productivity enhancement programs",
      "Monitor and report on sector performance"
    ],
    staffRoles: ["Agricultural Officer", "Industrial Development Specialist", "Business Liaison Officer", "Sector Analyst"]
  },
  {
    name: "Infrastructure and Economic Services Department",
    headRole: "Chief Infrastructure Officer",
    roles: [
      "Oversee infrastructure development projects",
      "Coordinate maintenance of public facilities",
      "Plan and implement economic service initiatives",
      "Manage infrastructure budgets and resources"
    ],
    staffRoles: ["Project Manager", "Civil Engineer", "Economic Services Coordinator", "Maintenance Supervisor"]
  },
  {
    name: "Trade & Foreign Policy Department",
    headRole: "Director of Trade and Foreign Policy",
    roles: [
      "Promote local trade and exports",
      "Coordinate with national trade bodies",
      "Implement trade policies and regulations",
      "Facilitate international trade relations"
    ],
    staffRoles: ["Trade Officer", "Policy Analyst", "Export Promotion Specialist", "International Relations Coordinator"]
  },
  {
    name: "Private Sector Development Department",
    headRole: "Head of Private Sector Development",
    roles: [
      "Facilitate private sector growth",
      "Implement business-friendly policies",
      "Coordinate with chambers of commerce",
      "Promote entrepreneurship and innovation"
    ],
    staffRoles: ["Business Development Officer", "SME Support Specialist", "Investment Promotion Officer", "Entrepreneurship Coordinator"]
  },
  {
    name: "Knowledge Management Department",
    headRole: "Chief Knowledge Officer",
    roles: [
      "Develop and maintain knowledge management systems",
      "Facilitate knowledge sharing across departments",
      "Implement best practices in information management",
      "Conduct research and produce knowledge products"
    ],
    staffRoles: ["Knowledge Management Specialist", "Information Systems Analyst", "Research Coordinator", "Data Management Officer"]
  },
  {
    name: "Strategy and Planning Department",
    headRole: "Head of Strategy and Planning",
    roles: [
      "Develop and oversee strategic plans",
      "Coordinate departmental planning processes",
      "Monitor and evaluate strategic initiatives",
      "Provide strategic advice to leadership"
    ],
    staffRoles: ["Strategic Planner", "Performance Analyst", "Project Coordinator", "Policy Development Officer"]
  },
  {
    name: "Human Resources Management & Administration Department",
    headRole: "HR Director",
    roles: [
      "Manage recruitment and staffing processes",
      "Oversee employee relations and welfare",
      "Implement HR policies and procedures",
      "Coordinate staff development and training"
    ],
    staffRoles: ["HR Officer", "Recruitment Specialist", "Employee Relations Manager", "Training and Development Coordinator"]
  },
  {
    name: "Finance Department",
    headRole: "Chief Financial Officer",
    roles: [
      "Manage sub-county finances and budgets",
      "Oversee financial reporting and auditing",
      "Implement financial management systems",
      "Ensure compliance with financial regulations"
    ],
    staffRoles: ["Financial Analyst", "Budget Officer", "Accountant", "Financial Systems Specialist"]
  },
  {
    name: "Supply Chain Management Department",
    headRole: "Head of Supply Chain",
    roles: [
      "Manage procurement processes",
      "Oversee inventory and asset management",
      "Coordinate with suppliers and vendors",
      "Implement supply chain optimization strategies"
    ],
    staffRoles: ["Procurement Officer", "Inventory Manager", "Vendor Relations Specialist", "Logistics Coordinator"]
  },
  {
    name: "Internal Audit Department",
    headRole: "Chief Internal Auditor",
    roles: [
      "Conduct internal audits across departments",
      "Assess risk management processes",
      "Ensure compliance with internal controls",
      "Report on audit findings and recommendations"
    ],
    staffRoles: ["Internal Auditor", "Risk Assessment Specialist", "Compliance Officer", "Audit Reporting Analyst"]
  },
  {
    name: "ICT Department",
    headRole: "Chief Information Officer",
    roles: [
      "Manage IT infrastructure and systems",
      "Implement cybersecurity measures",
      "Provide technical support to departments",
      "Develop and maintain digital services"
    ],
    staffRoles: ["Systems Administrator", "Network Engineer", "Software Developer", "IT Support Specialist"]
  },
  {
    name: "Corporate Communication & Media Department",
    headRole: "Head of Corporate Communications",
    roles: [
      "Manage internal and external communications",
      "Develop and implement media strategies",
      "Coordinate public relations activities",
      "Produce official publications and press releases"
    ],
    staffRoles: ["Public Relations Officer", "Media Liaison", "Content Developer", "Social Media Specialist"]
  }
];

const Departments: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Kapseret Sub-County Offices Departments</h1>
       <div className={styles.container}>
      
      {departments.map((dept, index) => (
        <div key={index} className={`${styles.department} alert alert-success`}>
          <h2 className={styles.departmentName}>{dept.name}</h2>
          <p><strong>Department Head:</strong> Leader ({dept.headRole})</p>
          <h3 className={styles.sectionHeading}>Department Roles:</h3>
          <ul className={styles.rolesList}>
            {dept.roles.map((role, roleIndex) => (
              <li key={roleIndex} className={styles.roleItem}>{role}</li>
            ))}
          </ul>
          <h3 className={styles.sectionHeading}>Staff Members:</h3>
          {dept.staffRoles.map((role, staffIndex) => (
            <div key={staffIndex} className={styles.staffMember}>
              <span className={styles.staffName}>Staff</span>
              <span className={styles.staffRole}>{role}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default Departments;