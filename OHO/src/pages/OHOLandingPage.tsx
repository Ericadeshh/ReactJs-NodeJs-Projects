import React, { useEffect, useRef } from "react";
import WelcomeSection from "../components/weclomeSection";
import MainFocus from "./mainFocus";
import Priorities from "./Priorities";
import ContactSlide from "../components/contactSlide";
import SummaryCarousel from "./SummaryCarousel";
import Map from "../components/map";
import styles from "./OHOLandingPage.module.css";

const OHOLandingPage: React.FC = () => {
  const sectionsRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value as needed
      }
    );

    sectionsRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      if (sectionsRefs.current) {
        sectionsRefs.current.forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <div>
      <div
        className={styles.animatedSection}
        ref={(el) => el && sectionsRefs.current.push(el)}
      >
        <WelcomeSection />
      </div>
      <div
        className={styles.animatedSection}
        ref={(el) => el && sectionsRefs.current.push(el)}
      >
        <MainFocus />
      </div>
      <div className={styles.animated}>
        <Priorities />
      </div>
      <div
        className={`${styles.map} ${styles.animatedSection}`}
        ref={(el) => el && sectionsRefs.current.push(el)}
      >
        <div>
          <SummaryCarousel />
        </div>
        <div>
          <ContactSlide />
        </div>
      </div>
      <Map />
    </div>
  );
};

export default OHOLandingPage;
