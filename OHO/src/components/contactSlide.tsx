import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./ContactSlide.module.css";
import { PrevIcon, NextIcon } from "../../public/Icons";
import Button from "./Button";

// Define the type for team member details
interface TeamMember {
  name: string;
  role: string;
  phone?: string; // Optional
  email?: string; // Optional
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mary Adut Gop",
    role: "Executive Director",
    phone: "+211922055977",
    email: "maryadut87@gmail.com",
    image: "/Mary.jpg",
  },
  {
    name: "Martin Mayen Piol",
    role: "Programme Director",
    phone: "+211929991377/+211917570051",
    email: "mayenpiolmartin@gmail.com",
    image: "/Martin.jpg",
  },
  {
    name: "Kuot Agany",
    role: "Project Manager",
    image: "/MaleAfrican.avif",
  },
  {
    name: "Luna Mathew Tombe",
    role: "Admin & Finance Manager",
    phone: "+211921502416/+211914838209",
    image: "/MaleAfrican.avif",
  },
];

const ContactSlide: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.testimonials}>
      <h2
        className={`${styles.testimonialTitle} text-center font-weight-normal`}
      >
        OHO's Pioneers and Founders
      </h2>
      <h4>Team</h4>
      <p className={styles.p1}>
        OHO's founding members have a dedicated program to ensure orphaned kids
        are well taken care of. Here is our team:
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
            {teamMembers.map((member, idx) => (
              <Carousel.Item key={idx}>
                <div className={styles.card}>
                  <div>
                    <img
                      src={member.image}
                      alt={`${member.name}-img`}
                      className={`rounded-circle mr-1 ${styles.img}`}
                    />
                    <div className={styles.details}>
                      <h5 className={styles.names}>{member.name}</h5>
                      <p className={styles.testimonialText}>
                        <span className={styles.role}>{member.role}</span>
                        {member.phone && <span>{member.phone}</span>}
                        {member.email && (
                          <a href={`mailto:${member.email}`}>{member.email}</a>
                        )}
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
            ))}
          </Carousel>
          <button
            className={`${styles.carouselButton} ${styles.prevButton}`}
            onClick={() =>
              setIndex(
                (prevIndex) =>
                  (prevIndex - 1 + teamMembers.length) % teamMembers.length
              )
            }
          >
            <PrevIcon />
          </button>
          <button
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={() =>
              setIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
            }
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
