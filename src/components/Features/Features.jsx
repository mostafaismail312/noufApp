import { useTranslation } from "react-i18next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import style from "./Features.module.css";


export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      key: "plug",
      icon: "fa-solid fa-plug",
      title: t("features.plug.title"),
      desc: t("features.plug.desc"),
    },
    {
      key: "speech",
      icon: "fa-solid fa-microphone",
      title: t("features.speech.title"),
      desc: t("features.speech.desc"),
    },
    {
      key: "intent",
      icon: "fa-solid fa-brain",
      title: t("features.intent.title"),
      desc: t("features.intent.desc"),
    },
    {
      key: "security",
      icon: "fa-solid fa-shield-halved",
      title: t("features.security.title"),
      desc: t("features.security.desc"),
    },
    {
      key: "custom",
      icon: "fa-solid fa-sliders",
      title: t("features.custom.title"),
      desc: t("features.custom.desc"),
    },
    {
      key: "scale",
      icon: "fa-solid fa-chart-column",
      title: t("features.scale.title"),
      desc: t("features.scale.desc"),
    },
  ];

  return (
    <section className="bg-black py-24 px-6 container">
      <h2 className="text-center mainTitle">
        {t("features.title")}
      </h2>

      <div className={`row g-3 m-2 ${style.cardItem}`}>
        {features.map((item) => (
          <div
            key={item.key}
            className="
              col-4
             
            "
          >
            <div
              className={`${style.featureIcon}`}
            >
              <i className={item.icon}></i>
            </div>

            <h3 className="text-lg font-semibold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-sm text-gray-400 ">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
