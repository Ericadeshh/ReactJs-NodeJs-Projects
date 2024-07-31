import React, { useState, useEffect } from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

interface FooterLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  link: string;
  disableNavigation?: boolean; // Add a prop to disable navigation
}

const FooterLink: React.FC<FooterLinkProps> = ({
  link,
  children,
  disableNavigation = false, // Default to false
  ...props
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (disableNavigation) {
      event.preventDefault(); // Prevent default behavior only if disableNavigation is true
    }
    // You can add any specific behavior you want here.
    // For now, it prevents the default action (navigation/reload) conditionally.
  };

  return (
    <Link
      to={disableNavigation ? "#" : link}
      onClick={handleClick}
      className={`text-decoration-none ${styles.footerLink}`}
      {...props}
    >
      {children}
    </Link>
  );
};

interface FooterSectionProps {
  title: string;
  links: { href: string; label: string; disableNavigation?: boolean }[]; // Add disableNavigation prop here
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div className={`${styles.footerSection}`}>
    <h3>{title}</h3>
    {links.map((link) => (
      <FooterLink
        key={link.href}
        link={link.href}
        disableNavigation={link.disableNavigation}
      >
        {link.label}
      </FooterLink>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className={`${styles.footer}`}>
        <FooterSection
          title="Company"
          links={[
            { href: "./AboutUs", label: "About Us" },
            { href: "./AboutUs", label: "Our Team" },
            { href: "./Disciplines", label: "Our Mission" },
            { href: "./Disciplines", label: "Our Objectives" },
          ]}
        />
        <FooterSection
          title="Services"
          links={[
            { href: "./Services", label: "protection" },
            { href: "./Services", label: "Education" },
            { href: "./Services", label: "WASH" },
            { href: "./Services", label: "Food Security and Livelihoods" },
            { href: "./Services", label: "Peace Building" },
          ]}
        />
        <FooterSection
          title="Resources"
          links={[
            { href: "#", label: "Blog" },
            { href: "#", label: "FAQs" },
            { href: "#", label: "Support" },
          ]}
        />
        <FooterSection
          title="Legal"
          links={[
            { href: "", label: "Privacy Policy", disableNavigation: true }, // Disable navigation for these links
            { href: "", label: "Terms of Service", disableNavigation: true },
            { href: "", label: "Cookie Policy", disableNavigation: true },
          ]}
        />
        <FooterSection
          title="Contact"
          links={[
            { href: "/contact", label: "Phone" },
            { href: "/contact", label: "Email" },
          ]}
        />
        <FooterSection
          title="Support"
          links={[
            { href: "/Support", label: "Donate" },
            { href: "/Support", label: "Volunteer" },
            { href: "/Support", label: "Conctact Us" },
          ]}
        />
      </footer>
      <div className={styles.bottomFooter}>
        <p className={styles.copyright}>
          &copy;2024.Orphans Hope Org. All rights reserved.
          {/* Scroll to top button */}
          {showScrollButton && (
            <button className={styles.scrollToTopButton} onClick={scrollToTop}>
              Go Up
            </button>
          )}
        </p>
        <p>South Sudan, Juba</p>
      </div>
    </>
  );
};

export default Footer;
