import "../../assets/styles/Home/Banner.css";

const Banner = () => {
  return (
    <section id="home">
      <section className="content">
        <h1>
          Technology Is Easy <br />
          <span>With EDteam</span>
        </h1>
        <p className="p-1">
          If you think technology is difficult, it's because you don't know
          EDteam,
          <br className="hidden" /> the platform{" "}
          <span className="relative">
            more obsessed
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 147 9"
              className="banner-description_underline__aRl6H absolute w-full bottom-0"
              fill="#ffd182"
            >
              <path
                d="M2.10098 7.25434C41.5587 2.01526 97.2492 1.54224 145.007 3.36912"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              ></path>
            </svg>
          </span>{" "}
          with the quality of the courses.
          <br className="hidden" />
        </p>
        <p className="p-2">
          That's why in Spanish <span> #NobodyExplicaBetter</span> than EDteam.
        </p>
        <div className="btn">
          <button>Sign up and start studying for free</button>
          <p>*You don't need a credit card</p>
        </div>
      </section>
    </section>
  );
};

export default Banner;
