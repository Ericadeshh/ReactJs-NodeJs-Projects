import { useEffect } from "react";
import styles from "./map.module.css";

function Map() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.9) {
          element.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger scroll handler on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.map}>
      <div
        className={`${styles.container} ${styles.animateOnScroll} ${styles.slideInLeft}`}
      >
        <h2
          className={`${styles.sectionTitle} ${styles.animateOnScroll} ${styles.slideInRight}`}
        >
          Find Us on the Map
        </h2>
        <div
          className={`${styles.mapContainer} ${styles.animateOnScroll} ${styles.slideInBottom}`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.3055517361864!2d31.601163515013735!3d4.859367696310327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1f15d0de6c1e6f79%3A0x4f9df4bafc7b9cfd!2sJuba%2C%20South%20Sudan!5e0!3m2!1sen!2sus!4v1684670400000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export default Map;
