import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footerContent}>
        <div className={styles.footerCol}>
          <h6>{t("footer.about")}</h6>
          <ul>
            <li>{t("footer.company")}</li>
            <li>{t("footer.careers")}</li>
            <li>{t("footer.press")}</li>
            <li>{t("footer.testimonials")}</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h6>{t("footer.resources")}</h6>
          <ul>
            <li>{t("footer.blog")}</li>
            <li>{t("footer.help")}</li>
            <li>{t("footer.webinars")}</li>
            <li>{t("footer.cases")}</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h6>{t("footer.support")}</h6>
          <ul>
            <li>{t("footer.contact")}</li>
            <li>{t("footer.tech")}</li>
            <li>{t("footer.feedback")}</li>
            <li>{t("footer.community")}</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h6>{t("footer.connect")}</h6>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>X / Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>©2025 Nouf · {t("footer.rights")}</p>
        <div className={styles.footerLinks}>
          <span>{t("footer.terms")}</span>
          <span>{t("footer.privacy")}</span>
          <span>{t("footer.security")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
