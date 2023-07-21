import "../../assets/styles/Home/Pricing.css";
import offerta from "../../assets/images/home/anual-best-discount.svg";
function Pricing() {
  return (
    <section id="prices" className={"section-p1"}>
      <div className="text">
        <h2>
          Start Free <br />
          <span>Upgrade to premium and reach your goals!</span>
        </h2>
        <p>
          Study 100% online with the best methodology in Spanish. Get full
          access to hundreds of EDteam courses, workshops and careers with a
          single payment.
        </p>
      </div>
      <div className="prices-types">
        <div className="price p-basic">
          <div className="title title-b">
            <h3>PREMIUM BASIC</h3>
            <h4>$30/monthly</h4>
          </div>
          <ul className="list-b">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1292ee"
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
              Carefully crafted components
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1292ee"
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
              Amazing pages example
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1292ee"
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
              Super friendly support team
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1292ee"
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
              Awesome Support
            </li>
          </ul>
          <div className="button button-b">
            <button>Join Monthly Premium</button>
          </div>
        </div>
        <div className="price p-oferta">
          <div className="title title-a">
            <h3>PREMIUM ANNUAL</h3>
            <h4>$240/annual</h4>
            <div className="oferta">
              <img src={offerta} alt="" />
            </div>
          </div>
          <ul className="list-a">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fdc344"
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
              Carefully crafted components
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fdc344"
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
              Amazing pages example
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fdc344"
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
              Use our premium video player
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fdc344"
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
              Marathon with automatic playback of classes
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fdc344"
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
              Download additional resources (pdf, slides, etc)
            </li>
          </ul>
          <div className="button  button-a">
            <button>Join Annual Premium</button>
          </div>
        </div>
        <div className="price p-semester">
          <div className="title title-s">
            <h3>PREMIUM SEMESTER</h3>
            <h4>$180/semester</h4>
          </div>
          <ul className="list-s">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#14b88c"
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
              Carefully crafted components
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#14b88c"
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
              Amazing pages example
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#14b88c"
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
              Super friendly support team
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#14b88c"
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
              Awesome Support
            </li>
          </ul>
          <div className="button  button-s">
            <button>Join Semester Premium</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
