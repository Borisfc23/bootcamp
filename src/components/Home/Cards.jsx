import "../../assets/styles/Home/Cards.css";
import i1 from "../../assets/images/home/cubes.svg";
import i2 from "../../assets/images/home/tools.svg";
import i3 from "../../assets/images/home/podium.svg";
const Cards = () => {
  return (
    <section id="cards">
      <div className="cards-section section-p1">
        <div className="cards-text">
          <h2>
            Don't put off <span>your education</span> anymore!
          </h2>
          <p>
            Master the technology, get a better job or start your own business.
          </p>
        </div>
        <div className="cards-content">
          <div className="card">
            <img src={i1} alt="" />
            <h3>Courses</h3>
            <p>Get updated, learn new skills and grow professionally.</p>
          </div>
          <div className="card">
            <img src={i2} alt="" />
            <h3>Projects</h3>
            <p>Put theory into practice by developing real-world projects.</p>
          </div>
          <div className="card">
            <img src={i3} alt="" />
            <h3>Careers</h3>
            <p>Master the technology with learning paths created by experts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
