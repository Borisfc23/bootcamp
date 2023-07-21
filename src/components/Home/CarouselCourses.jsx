import "../../assets/styles/Home/Carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import c1 from "../../assets/images/home/c1.webp";
import c2 from "../../assets/images/home/c2.webp";
import c3 from "../../assets/images/home/c3.webp";
import c4 from "../../assets/images/home/c4.webp";
import c5 from "../../assets/images/home/c5.webp";
import c6 from "../../assets/images/home/c6.webp";
import c7 from "../../assets/images/home/c7.webp";
import c8 from "../../assets/images/home/c8.webp";
const CarouselCourses = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="carousel-courses">
      <Carousel
        centerMode={true}
        swipeable={true}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        transitionDuration={1000}
        responsive={responsive}
        transitionMode={"draggable"}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        itemClass="carousel-item"
      >
        <div>
          <img src={c1} alt="" />
        </div>
        <div>
          <img src={c2} alt="" />
        </div>
        <div>
          <img src={c3} alt="" />
        </div>
        <div>
          <img src={c4} alt="" />
        </div>
        <div>
          <img src={c5} alt="" />
        </div>
        <div>
          <img src={c6} alt="" />
        </div>
        <div>
          <img src={c7} alt="" />
        </div>
        <div>
          <img src={c8} alt="" />
        </div>
      </Carousel>
      <div className="carousel-button">
        <button>
          Know all our courses{"  "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.25em"
            width="1.25em"
            className=""
          >
            <path
              fillRule="evenodd"
              d="M8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CarouselCourses;
