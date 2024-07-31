import WelcomeSection from "../components/weclomeSection.tsx";
import Contact from "./contact.tsx";
import Services from "./services.tsx";
import Map from "./map.tsx";
import Admin from "./adminstration.tsx";
import AboutSummary from "./about_summary.tsx";
import DepartmentsSummary from "./DepartmentsSummary.tsx";
import styles from "./kapseret-landing-page.module.css";

function KapseretLandingPage() {
  return (
    <div className="containerX">
      <WelcomeSection />
      <Admin />
      <Services />
      <div className={styles.summary}>
        <DepartmentsSummary />
        <AboutSummary />
      </div>
      <Map />
      <Contact />
    </div>
  );
}

export default KapseretLandingPage;
