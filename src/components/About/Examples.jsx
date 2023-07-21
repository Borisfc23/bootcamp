import "../../assets/styles/About/Examples.css";
import a1 from "../../assets/images/about/a1.webp";
import a2 from "../../assets/images/about/a2.webp";
import a3 from "../../assets/images/about/a3.webp";
const Examples = () => {
  return (
    <section id="examples">
      <div className="examples-content section-p1">
        <h2>
          They show that <span>#EDteamWorks</span>
        </h2>
        <div className="features-examples">
          <div className="feat-ex">
            <img src={a1} alt="" />
            <div className="text">
              <h3>Juan Carlos Cruz: Frontend developer thanks to EDteam</h3>
              <p>
                Juan Carlos met EDteam while trying to carry out his Degree
                Project at the university and he immediately plucked up the
                courage and contacted the team members. Today he is a successful
                entrepreneur in the world of frontend development.
              </p>
            </div>
          </div>
          <div className="feat-ex mid">
            <img src={a2} alt="" />
            <div className="text">
              <h3>
                Nicolas Otondo: Semi-senior Java Developer at Accenture thanks
                to EDteam
              </h3>
              <p>
                Nicolás Otondo prepared himself with EDteam courses and got a
                job as a Java Developer Semi senior in one of the most important
                software development companies in Argentina.
              </p>
            </div>
          </div>
          <div className="feat-ex">
            <img src={a3} alt="" />
            <div className="text">
              <h3>How EDteam helped a student make it to Silicon Valley</h3>
              <p>
                Joan Serna won a programming contest that allowed him to travel
                to the center of the technology industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Examples;
