import logoImg from "../../../public/images/Vector.png";
import style from "./TrustedBy.module.css";

export default function TrustedBy() {
  return (
    <section className={` ${style.trusted}  container`}>
      <p className="trusted-title py-2">
        160,000+ customers in over 120 countries grow their businesses with Nouf
      </p>

      <div className={`${style.logos}`}>
        <div className={`${style.logo}`}>
          <img src={logoImg} alt="" />
        </div>
        <div className={`${style.logo}`}>
          <img src={logoImg} alt="" />
        </div>
        <div className={`${style.logo}`}>
          <img src={logoImg} alt="" />
        </div>
        <div className={`${style.logo}`}>
          <img src={logoImg} alt="" />
        </div>
        <div className={`${style.logo}`}>
          <img src={logoImg} alt="" />
        </div>
        <div className={`${style.logo}`}>
          <img src={logoImg} alt="" />
        </div>
        <div className={`${style.logo}`}>
          <img src={logoImg} alt="" />
        </div>
      
      </div>
    </section>
  );
}
