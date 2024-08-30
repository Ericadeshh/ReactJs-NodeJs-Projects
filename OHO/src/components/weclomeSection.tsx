import React, { useState, useEffect } from "react";
import styles from "./welcomeSection.module.css";
import LogoPic from "./OHO Logo.png";
import HopePic from "./hopePic.webp";
import Button from "./Button";

const images = [LogoPic, HopePic];

const WelcomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <span className={styles.HeaderTitle}>ORPHAN'S HOPE ORGANIZATION</span>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <span className={styles.ribbon}>Juba-South Sudan</span>
            <HeartIcon className={styles.icon} />
          </div>
          <h1 className={styles.title}>
            Empowering Orphans, Transforming Lives
          </h1>
          <p className={styles.description}>
            <span className={styles.OHO}>
              Orphan’s Hope Organization, (OHO)
            </span>{" "}
            was founded on 14th December 2019 in Juba-South Sudan. OHO is a
            National, Non-governmental, and Non-profit making Faith-Based
            Organization which is legally registered under Relief and
            Rehabilitation Commission (RRC) in Juba with the Registration
            Number: 2646.
          </p>
          <div className={styles.buttonContainer}>
            <Button text="Donate" link="/Support" color="#164574" />
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <div className={styles.imageContainer}>
            <div
              className={styles.slider}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className={styles.imageWrapper}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className={styles.image}
                  />
                  <div className={styles.textOverlay}>
                    <div className={styles.ohoText}>(OHO)</div>
                    <div className={styles.orgText}>Orphan's Hope Org</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export default WelcomeSection;
