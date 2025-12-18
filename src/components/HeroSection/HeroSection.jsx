import { useTranslation } from "react-i18next";
import style from "./HeroSection.module.css";
import heroPhone from "../../../public/images/iPhone.png";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className={`text-center py-5 ${style.hero} container `}>
      {" "}
      <button className="btn btn-dark m-3 glass-btn">{t("hero.fir")}</button>
      <h1 className="fw-bold display-5">{t("hero.title")}</h1>
      <p className=" mt-3">{t("hero.subtitle")}</p>
      <button className="btn btn-dark mt-5  glass-btn">{t("hero.cta")}</button>
      <div className={`hero-phone-wrapper pt-5 ${style.phone} `}>
          <div className={`${style.arcBg}`}></div>
        <img src={heroPhone} alt="Mobile" className={`  w-25`} />
      </div>
    </section>
  );
}
