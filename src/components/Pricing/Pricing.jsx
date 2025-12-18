import styles from "./Pricing.module.css";
import img from "/public/images/Icon.png";

const Pricing = () => {
  return (
    <section className={`container-fluid ${styles.pricingSection}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-white text-center text-md-start mb-5 mb-md-0">
            <span className="mainTitle">Pricing</span>

            <h2 className={styles.title}>
              Free Integration. Pay <br /> Only Per Call.
            </h2>

            <p className={styles.subtitle}>
              We integrate the full voice-agent system for free — no setup fees
              or contracts.
            </p>

            <h3 className={styles.price}>
              1 SAR <span>per call</span>
            </h3>

            <p className={styles.limit}>Up to 5 minutes per call</p>

            <ul className={styles.features}>
              <li>AI Voice Automation</li>
              <li>Zero Setup Fees</li>
              <li>Scales with Your Traffic</li>
            </ul>

            <button className={`btn ${styles.ctaBtn}`}>Contact Us</button>
          </div>

          <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <div className={`${styles.waveWrapper} d-flex justify-content-center `}>
              <img src={`${img} `} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
