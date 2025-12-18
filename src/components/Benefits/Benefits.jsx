import React from "react";
import style from "./Benefits.module.css";

const benefitsData = [
  {
    icon: "/public/images/elements.png",
    title: "Higher Conversion Rates",
    description:
      "When customers find products faster through voice, they complete purchases more often — boosting your overall sales.",
  },
  {
    icon: "/public/images/elements.png",
    title: "Faster Product Discovery",
    description:
      "Nouf helps users reach the right product in seconds, reducing drop-offs caused by long searches or complicated filters.",
  },
  {
    icon: "/public/images/elements.png",
    title: "Better User Experience",
    description:
      "Voice search makes shopping smoother, more intuitive, more accessible — especially for users who struggle with typing or don't know product names.",
  },
  {
    icon: "/public/images/elements.png",
    title: "Plug-Play Integration",
    description:
      "Add Nouf to your store with a simple script. No technical setup, no development time — just plug it in and start using it.",
  },
  {
    icon: "/public/images/elements.png",
    title: "Smart Insights",
    description:
      "Gain valuable data about what users are asking for, popular voice queries, and customer intent — helping you improve products and increase store efficiency.",
  },
];

const Benefits = () => {
  return (
    <>
      <div className="container">
        <div className="mainTitle w-50 ">nouf Benefits</div>
        <div className={`${style.benefits}  `}>
          {benefitsData.map((item, index) => (
            <div key={index} className={style.card}>
              <div className={`${style.icon} py-4`}>
                <img src={item.icon} alt={`icon ${index + 1} `} />
              </div>
              <div className={style.content}>
                <h4 className="mainTitle  fs-3">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Benefits;
