import "../../assets/styles/Banner.css";
import TypewriterEffect from "./TypewriterEffect";
const Banner = ({ texto, desc }) => {
  return (
    <div id="page-header-banner">
      <TypewriterEffect text={texto} />
      <p>{desc}</p>
    </div>
  );
};

export default Banner;
