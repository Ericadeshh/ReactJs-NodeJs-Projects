import WelcomeSection from "../components/weclomeSection.tsx";
import Contact from "./contact.tsx";
import Services from "./services.tsx";
import Map from "./map.tsx";
import Admin from "./adminstration.tsx";

import AboutSummary from "./about_summary.tsx";
function KapseretLandingPage() {
  return (
    <div className="containerX">
      <WelcomeSection />
      <Admin />
      <Services />
      <Contact />
      <AboutSummary />
      <Map />
    </div>
  );
}

export default KapseretLandingPage;
