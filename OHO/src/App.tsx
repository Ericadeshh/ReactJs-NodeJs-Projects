import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import KapseretLandingPage from "./pages/OHOLandingPage";
import Footer from "./components/footer";
import MainFocus from "./pages/mainFocus";
import Disciplines from "./pages/Disciplines";
import ContactPeople from "./components/ContactPeople";
import Organogram from "./components/Organogram";
import Contact from "./pages/contact";
import Services from "./pages/Services";
import About from "./pages/AboutUs";
import SupportDonationVolunteer from "./pages/Support";
import DepartmentsSection from "./components/Departments";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<KapseretLandingPage />} />
            <Route path="/mainFocus" element={<MainFocus />} />
            <Route path="/disciplines" element={<Disciplines />} />
            <Route path="/ContactPeople" element={<ContactPeople />} />
            <Route path="/Organogram" element={<Organogram />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/Support" element={<SupportDonationVolunteer />} />
            <Route path="/Departments" element={<DepartmentsSection />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
