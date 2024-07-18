import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import KapseretLandingPage from "./pages/kapseret-landing-page";
import Services from "./pages/services";
import Contact from "./pages/contact";
import About from "./pages/about";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<KapseretLandingPage />} />
            <Route path="/services" element={<Services></Services>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
