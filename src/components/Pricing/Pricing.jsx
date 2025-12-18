import styles from "./Pricing.module.css";
import img from "/public/images/Icon.png";

const Pricing = () => {
  return (
    <section className={`container-fluid ${styles.pricingSection}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-white">
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

          <div className="col-md-6 d-flex justify-content-center">
            <div className={styles.waveWrapper}>
              <img src={`${img} `} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
