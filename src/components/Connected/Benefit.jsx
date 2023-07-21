import "../../assets/styles/Connected/Benefit.css";
import i1 from "../../assets/images/connected/beneficiary-map.webp";
const Benefit = () => {
  return (
    <section id="benefit-banner" className="section-p1">
      <div className="benefit-content">
        <div className="benefit-left">
          <h2>200,000 people</h2>
          <h3>benefited</h3>
          <p>
            Three lines of action will be implemented (Digital Access Centers,
            Digital Public Spaces and Conecta Selva) to reduce the connectivity
            gap in rural areas of Ayacucho, Huancavelica, Apurímac, Lambayeque,
            Cusco and Lima Provinces.
          </p>
          <p>
            Environments with computers, tablets and other equipment will be
            enabled to contribute to the development of digital skills such as:
            office automation, productivity tools, email,etc.
          </p>
          <button>Sign up to start studying!</button>
          <span>
            <i>
              *EDteam's exclusive courses for the all connected plan They are
              donations as social work. EDteam has not received no financial
              benefit for them.
            </i>
          </span>
        </div>
        <div className="benefit-right">
          <img src={i1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Benefit;
