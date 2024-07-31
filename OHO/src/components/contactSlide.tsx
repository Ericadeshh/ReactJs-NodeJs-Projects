import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./ContactSlide.module.css";
import { PrevIcon, NextIcon } from "./Icons";
import Button from "./Button";

const ContactSlide = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4); // 4 is the number of items
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${styles.testimonials} `}>
      <h2
        className={`${styles.testimonialTitle} text-center font-weight-normal`}
      >
        OHO's Pioneers and Founders
      </h2>
      <h4>Team</h4>
      <p>
        OHO's founding members have a dedicated Program to ensure orphaned kids
        are well taken care of.Here is our team:
      </p>
      <div className="container">
        <div className={styles.carouselContainer}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            controls={false}
            indicators={false}
            interval={5000}
            wrap={true}
            className={styles.carousel}
          >
            <Carousel.Item>
              <div className={`${styles.card} alert alert-success`}>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="/Mary.jpg"
                    alt="customer-img"
                    className={`rounded-circle mr-3 ${styles.img}`}
                  />
                  <div className={styles.details}>
                    <h5 className={styles.names}>Mary Adut Gop</h5>
                    <p className={styles.testimonialText}>
                      <span className={styles.role}>Executive Director</span>
                      <span>+211922055977</span>{" "}
                      <a href="mailto:maryadut87@gmail.com">
                        maryadut87@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="text-warning mb-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className={`${styles.card} alert alert-light`}>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="/Martin.jpg"
                    alt="customer-img"
                    className={`rounded-circle mr-3 ${styles.img}`}
                  />
                  <div className={styles.details}>
                    <h5 className={styles.names}>Martin Mayen Piol</h5>
                    <p className={styles.testimonialText}>
                      <span className={styles.role}>Programme Director</span>
                      <span>+211929991377/+211917570051</span>{" "}
                      <a href="mailto:mayenpiolmartin@gmail.com">
                        mayenpiolmartin@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="text-warning mb-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className={`${styles.card} alert alert-info`}>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="/MaleAfrican.avif"
                    alt="customer-img"
                    className={`rounded-circle mr-3 ${styles.img}`}
                  />
                  <div className={styles.details}>
                    <h5 className={styles.names}>Kuot Agany</h5>
                    <p className={styles.testimonialText}>
                      <span className={styles.role}>Project Manager</span>
                    </p>
                  </div>
                </div>
                <div className="text-warning mb-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className={`${styles.card} alert alert-warning`}>
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="/MaleAfrican.avif"
                    alt="customer-img"
                    className={`rounded-circle mr-3 ${styles.img}`}
                  />
                  <div className={styles.details}>
                    <h5 className={styles.names}>Luna Mathew Tombe</h5>
                    <p className={styles.testimonialText}>
                      <span className={styles.role}>
                        Admin & Finance Manager
                      </span>
                      <span>+211921502416/+211914838209</span>
                    </p>
                  </div>
                </div>
                <div className="text-warning mb-3">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          <button
            className={`${styles.carouselButton} ${styles.prevButton}`}
            onClick={() => setIndex((prevIndex) => (prevIndex - 1 + 4) % 4)} // Adjust number of items accordingly
          >
            <PrevIcon />
          </button>
          <button
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={() => setIndex((prevIndex) => (prevIndex + 1) % 4)} // Adjust number of items accordingly
          >
            <NextIcon />
          </button>
        </div>
      </div>
      <Button text="Visit Profiles" link="./ContactPeople" color="#5a8a01cc" />
    </section>
  );
};

export default ContactSlide;
