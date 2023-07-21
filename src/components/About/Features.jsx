import "../../assets/styles/About/Features.css";
import i1 from "../../assets/images/about/f1.png";
import i2 from "../../assets/images/about/i2.svg";
import i3 from "../../assets/images/about/i3.svg";
import i4 from "../../assets/images/about/i4.svg";
const Features = () => {
  return (
    <section id="about-container" className="section-p1">
      <div className="about-img">
        <img src={i1} alt="" />
      </div>
      <div className="about-text">
        <h2>EDteam is quality education for all profiles</h2>
        <p className="texto">
          EDteam has spent more than five years changing the lives of thousands
          of students who have increased their income, found their first job or
          created their own company.
        </p>
        <div className="about-fe">
          <img src={i2} alt="" />
          <div className="fe-text">
            <h5>Students</h5>
            <p>
              Learn a new technology or reinforce your university or high school
              subjects and ensure your employability.
            </p>
          </div>
        </div>
        <div className="about-fe margen">
          <img src={i3} alt="" />
          <div className="fe-text">
            <h5>Professionals</h5>
            <p>
              Technology changes too fast. Always stay updated, don't be an
              outdated professional.
            </p>
          </div>
        </div>
        <div className="about-fe">
          <img src={i4} alt="" />
          <div className="fe-text">
            <h5>Freelancers</h5>
            <p>
              Acquire the knowledge for your venture to take off and to give the
              best service to your customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
