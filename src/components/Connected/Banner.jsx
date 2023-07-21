import "../../assets/styles/Connected/Banner.css";
import i1 from "../../assets/images/connected/banner-logos.webp";
import i2 from "../../assets/images/connected/banner-people.svg";
import TypewriterEffect from "../Utils/TypewriterEffect";
const Banner = () => {
  return (
    <section id="banner-connected" className="section-p1">
      <div className="banner-content ">
        <div className="content-section-left">
          <TypewriterEffect text={"All Connected Plan"} />
          <h2>A project to reduce the digital gap in Peru</h2>
          <p>
            <b>PRONATEL</b> and <b>EDteam</b> come together to give free virtual
            training to rural areas throughout Peru and help them master
            technology.
          </p>
          <img src={i1} alt="" />
          <button>Sign up to start studying!</button>
        </div>
        <div className="content-section-right">
          <img src={i2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
