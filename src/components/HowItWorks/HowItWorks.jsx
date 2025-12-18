import { useTranslation } from "react-i18next";
import style from "./HowItWorks.module.css";
import mic from "/public/images/Frame 1321315819 (1).png";
import chat from "/public/images/voice.png";
import graph from "/public/images/Frame 1321315819 (1).png";
import bag from "/public/images/voice.png";
import question from "/public/images/Frame 1321315819 (1).png";
import check from "/public/images/voice.png";

const icons = {
  1: mic,
  2: chat,
  3: graph,
  4: bag,
  5: question,
  6: check
};

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = Object.keys(t("howItWorks.steps", { returnObjects: true })).map(
    (key) => ({
      id: key,
      ...t(`howItWorks.steps.${key}`, { returnObjects: true }),
      side: Number(key) % 2 === 0 ? "left" : "right",
      icon: icons[key]
    })
  );

  return (
    <section className={`${style.how} container`}>
      <h2 className="mainTitle py-4">{t("howItWorks.title")}</h2>

      <div className={style.timeline}>
        {steps.map((step) => (
          <div
            key={step.id}
            className={`${style.timelineItem} ${
              step.side === "left" ? style.left : style.right
            }`}
          >
            <div className={style.content}>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>

            <div className={style.icon}>
              <img src={step.icon} alt={step.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
