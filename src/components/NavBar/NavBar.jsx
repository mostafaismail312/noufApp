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
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" style={{ width: "120px" }} />
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                {t("nav.home")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {t("nav.features")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {t("nav.About")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {t("nav.Platforms")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {t("nav.Testimonials")}
              </a>
            </li>
          </ul>

          {/* Language Button */}
          <button
            onClick={switchLang}
            className="btn btn-outline-light ms-lg-3"
          >
            {i18n.language === "en" ? "AR" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
