import { useTranslation } from "react-i18next";
import i18n from "i18next";
import logo from "/public/images/logo.png";

export default function Navbar() {
  const { t } = useTranslation();

  const switchLang = () => {
    const lang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <nav className="d-flex align-items-center justify-content-between container py-3">
      <div className="logo ">
        <img className="w-75" src={logo} alt="" />
      </div>

      <ul className="d-flex gap-4 list-unstyled mb-0 links align-items-center">
        <li className="active">{t("nav.home")}</li>
        <li>{t("nav.features")}</li>
        <li>{t("nav.About")}</li>
        <li>{t("nav.Platforms")}</li>
        <li>{t("nav.Testimonials")}</li>
      </ul>

      <button onClick={switchLang} className="btn btn-outline-light">
        {i18n.language === "en" ? "AR" : "EN"}
      </button>
    </nav>
  );
}
