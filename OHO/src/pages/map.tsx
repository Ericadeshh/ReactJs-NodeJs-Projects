import styles from "./map.module.css";
function Map() {
  return (
    <section className={styles.map}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Find Us on the Map</h2>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7350525021!2d35.26767831477425!3d0.5239331996018837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178113f9a8d8d1c1%3A0x8d3d1c5d7d2d4e7f!2sKapseret%20Subcounty%20Offices!5e0!3m2!1sen!2ske!4v1684670400000!5m2!1sen!2ske"
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
