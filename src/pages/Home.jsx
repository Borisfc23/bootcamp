import Banner from "../components/Home/Banner";
import Cards from "../components/Home/Cards";
import CarouselCourses from "../components/Home/CarouselCourses";
import Comments from "../components/Home/Comments";
import Features from "../components/Home/Features";
import PreFooter from "../components/Home/PreFooter";
import Pricing from "../components/Home/Pricing";
import FullWithLaout from "../layout/FullWithLaout";

const Home = () => {
  return (
    <FullWithLaout previsible={true}>
      <Banner />
      <Features />
      <Cards />
      <CarouselCourses />
      <Comments />
      <Pricing />
    </FullWithLaout>
  );
};

export default Home;
