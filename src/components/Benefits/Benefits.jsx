import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Benefits.module.css";

const Benefits = () => {
  const { t } = useTranslation();

  const benefitsData = t("benefits.items", { returnObjects: true });

  return (
    <div className="container">
      <div className="mainTitle w-100 w-md-50">
        {t("benefits.title")}
      </div>

      <div className={style.benefits}>
        {benefitsData.map((item, index) => (
          <div key={index} className={style.card}>
            <div className={`${style.icon} py-4`}>
              <img src={item.icon} alt={`icon ${index + 1}`} />
            </div>

            <div className={style.content}>
              <h4 className="mainTitle fs-3">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
