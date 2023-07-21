import "../../assets/styles/Connected/Plan.css";
import i1 from "../../assets/images/connected/logos2.webp";
const Plan = () => {
  return (
    <section id="plan-connected" className="section-p1">
      <h2>
        What is the <span>All Connected Plan?</span>
      </h2>
      <p>
        It is a project of the{" "}
        <b> National Telecommunications Program of Peru (PRONATEL)</b> together
        with private companies such as <b>EDteam</b>, which seeks to reduce the
        digital divide and generate a better quality of life for Peruvians
        residing in rural areas without Internet access through specialized
        centers and free training that will increase your level of
        employability.
      </p>
      <img src={i1} alt="" />
      <span className="important">
        <i>
          *The exclusive EDteam courses for the all connected plan are donations
          as social work. EDteam has not received any financial benefit from
          them.
        </i>
      </span>
    </section>
  );
};

export default Plan;
