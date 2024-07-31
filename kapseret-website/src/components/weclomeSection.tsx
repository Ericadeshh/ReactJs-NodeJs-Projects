import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./welcomeSection.module.css";
import countyHQPic from "./COUNTY-HQ-2.jpg";
import K5A2055Pic from "./2K5A2055.jpg";
import ictPic from "./ICT-CENTRE-AT-TOWN-LIBRARY.jpg";
import infrastructurePic from "./Infrastrusture-Development-in-Uasin-Gishu.png";
import ledScreenPic from "./LED-SCREEN.jpg";

const images = [
  countyHQPic,
  K5A2055Pic,
  ictPic,
  infrastructurePic,
  ledScreenPic,
];

const WelcomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles["welcome-section"]}>
      <div className={styles.sliderContainer}>
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
            </div>
          ))}
        </div>
      </div>
      <div className={styles.container}>
        <div className="flex flex-col items-start space-y-4">
          <div className={styles["inline-block"]}>
            Welcome to Kapseret Subcounty
          </div>
          <h1 className={styles.heading}>
            Discover the Heart of <span className={styles.span}>Kapseret</span>
          </h1>
          <p className={styles.description}>
            Explore the vibrant community, rich culture, and natural beauty of
            Kapseret Subcounty.
          </p>
          <Link
            to="https://uasingishu.go.ke/index.php/department/kapseret-subcounty#"
            className={styles["explore-link"]}
          >
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
