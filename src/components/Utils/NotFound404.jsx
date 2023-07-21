import "../../assets/styles/NotFound404.css";
import FullWithLaout from "../../layout/FullWithLaout";
import i1 from "../../assets/images/utils/astronauta.png";
const NotFound404 = () => {
  return (
    <FullWithLaout previsible={false}>
      <div id="error-404" className="section-m1">
        <div className="error-absoluto">
          <div className="number">
            <img src={i1} alt="" />
            <h2>404</h2>
          </div>
          <div>
            <h3>PAGE NOT FOUND</h3>
          </div>
        </div>
      </div>
    </FullWithLaout>
  );
};

export default NotFound404;
