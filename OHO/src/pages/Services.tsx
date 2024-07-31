import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={`py-5 bg-light ${styles.services}`}>
      <div className={styles.container}>
        <h2 className="text-center font-weight-normal">
          Services Offered by OHO
        </h2>
        <div className={styles.row}>
          {servicesList.map((service, index) => (
            <div key={index} className={`${styles.card} alert alert-primary`}>
              <h5 className={styles.serviceTitle}>{service.title}</h5>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const servicesList = [
  {
    title: "Protection (Child protection and GBV)",
    description:
      "Advocates for child rights and empowers women and girls in promoting gender equality.",
  },
  {
    title: "Education",
    description:
      "Increased access to quality education with emphasis on girl-child education.",
  },
  {
    title: "WASH",
    description:
      "Promotes water, sanitation, and hygiene programs to improve community health.",
  },
  {
    title: "Food Security and Livelihoods",
    description:
      "Encourages sustainable agriculture and rural development to increase food production and security.",
  },
  {
    title: "Peace Building",
    description: "Advocates and promotes peace building in the communities.",
  },
];

export default Services;
