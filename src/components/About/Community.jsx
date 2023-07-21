import "../../assets/styles/About/Community.css";
import i1 from "../../assets/images/about/i5.svg";
import i2 from "../../assets/images/about/i6.svg";
import i3 from "../../assets/images/about/i7.svg";
const Community = () => {
  return (
    <section id="community">
      <div className="community-content section-p1">
        <h2>Be part of our community</h2>
        <div className="features-community">
          <div className="feat">
            <img src={i1} alt="" />
            <h3>Teachers who love to teach</h3>
            <p>
              It is not enough to know a subject, passion, didactics, empathy
              and experience are required. All teachers and the EDteam team
              share this vision.
            </p>
          </div>
          <div className="feat">
            <img src={i2} alt="" />
            <h3>Connect with people like you</h3>
            <p>
              At EDteam you can meet people like you. Share your knowledge,
              receive help in your studies and grow professionally.
            </p>
          </div>
          <div className="feat">
            <img src={i3} alt="" />
            <h3>Teachers who love to teach</h3>
            <p>
              All your suggestions and complaints are added to the work plan.
              The best features of EDteam are born from the community!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
