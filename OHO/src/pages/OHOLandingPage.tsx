import React from "react";
import WelcomeSection from "../components/weclomeSection";
import MainFocus from "./mainFocus";
import Priorities from "./Priorities";
import DisciplinesSummary from "./DisciplinesSummary";
import OrganogramSummary from "../components/OrganogramSummary";
import ContactSlide from "../components/contactSlide";
import styles from "./OHOLandingPage.module.css";
import DepartmentsSummary from "../components/DepartmentsSummary";

const OHOLandingPage: React.FC = () => {
  return (
    <div>
      <WelcomeSection />
      <MainFocus />
      <Priorities />
      <div className={`${styles.dispOrg} `}>
        <DisciplinesSummary />
        <OrganogramSummary />
        <DepartmentsSummary />
      </div>
      <ContactSlide />
    </div>
  );
};

export default OHOLandingPage;
