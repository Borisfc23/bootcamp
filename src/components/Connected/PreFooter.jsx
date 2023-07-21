import "../../assets/styles/Connected/PreFooter.css";
import i1 from "../../assets/images/connected/logos2.webp";
const PreFooter = () => {
  return (
    <div id="pre-footer-benefit" className="section-p1">
      <img src={i1} alt="" />
      <h2>EDteam doesn't stop!</h2>
      <p>
        Education is the most powerful weapon to reduce poverty, change people's
        lives and transform the world, which is why we are always looking for
        ways to help and offer quality education on the technologies most in
        demand by companies.
      </p>
      <button>Sign up for our exclusive courses!</button>
    </div>
  );
};

export default PreFooter;
