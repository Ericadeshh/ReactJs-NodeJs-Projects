import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import DisciplinesSummary from "./DisciplinesSummary";
import OrganogramSummary from "../components/OrganogramSummary";
import DepartmentsSummary from "../components/DepartmentsSummary";
import styles from "./Summary.module.css";

const SummaryCarousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.sumIcon}>
        {" "}
        <CalendarCheckIcon />
        <OrganizationChartIcon />
        <DepartmentIcon />
      </div>

      <p className={styles.carouselText}>
        A symphony of departments, guided by our organogram's design. Each
        discipline a unique note, harmonizing our collective vision.
      </p>
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
          <div className={styles.card}>
            <DisciplinesSummary />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.card}>
            <OrganogramSummary />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.card}>
            <DepartmentsSummary />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SummaryCarousel;

const OrganizationChartIcon = ({ color = "currentColor", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="10" y="3" width="4" height="4" rx="1" />
    <rect x="3" y="17" width="4" height="4" rx="1" />
    <rect x="10" y="17" width="4" height="4" rx="1" />
    <rect x="17" y="17" width="4" height="4" rx="1" />
    <line x1="12" y1="7" x2="12" y2="13" />
    <line x1="5" y1="13" x2="19" y2="13" />
    <line x1="5" y1="13" x2="5" y2="17" />
    <line x1="12" y1="13" x2="12" y2="17" />
    <line x1="19" y1="13" x2="19" y2="17" />
  </svg>
);

const DepartmentIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M2 2v20h20V2H2zm18 18H4V4h16v16z" fill="#4A8AF4" />
    <path d="M6 6h12v3H6V6z" fill="#FBBC04" />
    <path d="M6 11h5v3H6v-3zm7 0h5v3h-5v-3z" fill="#34A853" />
    <path d="M6 16h5v3H6v-3zm7 0h5v3h-5v-3z" fill="#EA4335" />
  </svg>
);

const CalendarCheckIcon = ({
  size = "1.5em",
  color = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill={color}
    width={size}
    height={size}
    {...props}
  >
    <path d="M400 64h-48V40c0-13.25-10.75-24-24-24S304 26.75 304 40V64H144V40C144 26.75 133.3 16 120 16S96 26.75 96 40V64H48C21.49 64 0 85.49 0 112v336C0 474.5 21.49 496 48 496h352c26.51 0 48-21.49 48-48V112C448 85.49 426.5 64 400 64zM224 320.1L188.7 284.7c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l48 48c9.375 9.375 24.56 9.375 33.94 0l112-112c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L224 320.1zM400 208H48V128h352V208z" />
  </svg>
);
