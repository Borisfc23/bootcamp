import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import coursesjson from "../../assets/api/api.json";
import check from "../../assets/images/courses/check-list-green.svg";
import "../../assets/styles/Courses/DetailHeader.css";
const DetailHeader = () => {
  const { id } = useParams();
  const [course, setcourse] = useState({});
  const numStartExact = Math.random() * 2;
  const numbStarts = Math.floor(numStartExact) + 3;
  const starts = new Array(numbStarts).fill("");
  useEffect(() => {
    const existCourse = coursesjson.find((item) => item.id == id);
    setcourse(existCourse);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div id="detail-header-course" className="section-p1">
      <div className="header-course-left">
        <p className="redirect">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="14"
            width="14"
            className="mr-1 mb-0.5 inline-block"
          >
            <path
              fillRule="evenodd"
              d="M11.5528 2.10557C11.8343 1.96481 12.1657 1.96481 12.4472 2.10557L20.4472 6.10557C20.786 6.27496 21 6.62123 21 7V17C21 17.3788 20.786 17.725 20.4472 17.8944L12.4472 21.8944C12.1657 22.0352 11.8343 22.0352 11.5528 21.8944L3.55279 17.8944C3.214 17.725 3 17.3788 3 17V7C3 6.62123 3.214 6.27496 3.55279 6.10557L11.5528 2.10557ZM5 8.61803L11 11.618V19.382L5 16.382V8.61803ZM13 19.382L19 16.382V8.61803L13 11.618V19.382ZM12 9.88197L17.7639 7L12 4.11803L6.23607 7L12 9.88197Z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Link to={"/courses"}>Courses</Link> <span>/</span>
          <Link>{course.title ? course.title.split(": ")[1] : ""}</Link>
        </p>
        <h1>{course.title}</h1>
        <p className="texto">{course.desc}</p>
        <h3>What will you learn?</h3>
        <ul>
          <li>
            <img src={check} alt="" />
            Lorem ipsum dolor sit.
          </li>
          <li>
            {" "}
            <img src={check} alt="" />
            Lorem ipsum dolor.
          </li>
          <li>
            {" "}
            <img src={check} alt="" />
            Lorem ipsum dolor sit amet.
          </li>
          <li>
            {" "}
            <img src={check} alt="" />
            Lorem ipsum dolor sit amet consectetur.
          </li>
        </ul>
        <div className="features-courses">
          <span>
            {starts.map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline h-4 w-4 starts"
                height={"16px"}
              >
                <path d="M10.8587 4.71248C11.218 3.60691 12.7821 3.60691 13.1413 4.71248L14.4248 8.66264C14.5854 9.15706 15.0462 9.49182 15.566 9.49182H19.7195C20.8819 9.49182 21.3653 10.9794 20.4248 11.6626L17.0646 14.104C16.644 14.4095 16.468 14.9512 16.6287 15.4456L17.9122 19.3958C18.2714 20.5013 17.006 21.4207 16.0656 20.7374L12.7053 18.2961C12.2848 17.9905 11.7152 17.9905 11.2947 18.2961L7.93446 20.7374C6.994 21.4207 5.72863 20.5013 6.08785 19.3958L7.37133 15.4456C7.53198 14.9512 7.35599 14.4095 6.93541 14.104L3.5752 11.6626C2.63475 10.9794 3.11808 9.49182 4.28055 9.49182H8.43399C8.95386 9.49182 9.41461 9.15706 9.57525 8.66264L10.8587 4.71248Z"></path>
              </svg>
            ))}{" "}
            <span className="blue">
              {(numStartExact + 3).toFixed(1)} rating
            </span>
          </span>
          <span className="line-col">|</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
              height={"16px"}
            >
              <path
                fillRule="evenodd"
                d="M8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H7V3C7 2.44772 7.44772 2 8 2ZM7 6H5C4.44772 6 4 6.44772 4 7V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V7C20 6.44772 19.5523 6 19 6H17V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V6H9V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V6ZM6 11C6 10.4477 6.44772 10 7 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H7C6.44772 12 6 11.5523 6 11Z"
                clipRule="evenodd"
              ></path>
            </svg>
            {course.date_upload}
          </span>
          <span className="line-col">|</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
              height={"16px"}
            >
              <path
                fillRule="evenodd"
                d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 7C12.5523 7 13 7.44772 13 8V11.5858L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V8C11 7.44772 11.4477 7 12 7Z"
                clipRule="evenodd"
              ></path>
            </svg>
            {course.duration}
          </span>
          <span className="line-col">|</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13 13"
              className="h-3.5 w-3.5"
              fill="currentColor"
              height={"16px"}
            >
              <path
                d="M1.66669 7.83823C1.66669 7.28594 2.1144 6.83823 2.66669 6.83823H3.16669C3.71897 6.83823 4.16669 7.28594 4.16669 7.83823V10.8382C4.16669 11.3905 3.71897 11.8382 3.16669 11.8382H2.66669C2.1144 11.8382 1.66669 11.3905 1.66669 10.8382V7.83823Z"
                fill="#687782"
              ></path>
              <path
                d="M5.41669 5.33823C5.41669 4.78594 5.8644 4.33823 6.41669 4.33823H6.91669C7.46897 4.33823 7.91669 4.78594 7.91669 5.33823V10.8382C7.91669 11.3905 7.46897 11.8382 6.91669 11.8382H6.41669C5.8644 11.8382 5.41669 11.3905 5.41669 10.8382V5.33823Z"
                fill="#B7C0C7"
              ></path>
              <path
                d="M9.16669 2.83823C9.16669 2.28594 9.6144 1.83823 10.1667 1.83823H10.6667C11.219 1.83823 11.6667 2.28594 11.6667 2.83823V10.8382C11.6667 11.3905 11.219 11.8382 10.6667 11.8382H10.1667C9.6144 11.8382 9.16669 11.3905 9.16669 10.8382V2.83823Z"
                fill="#B7C0C7"
              ></path>
            </svg>
            {course.level}
          </span>
          <span className="line-col">|</span>
          <span className="blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 25"
              fill="currentColor"
              className="h-3.5 w-3.5"
              height={"16px"}
            >
              <path
                fillRule="evenodd"
                d="M8 5.75C6.61929 5.75 5.5 6.86929 5.5 8.25C5.5 9.63071 6.61929 10.75 8 10.75C9.38071 10.75 10.5 9.63071 10.5 8.25C10.5 6.86929 9.38071 5.75 8 5.75ZM3.5 8.25C3.5 5.76472 5.51472 3.75 8 3.75C10.4853 3.75 12.5 5.76472 12.5 8.25C12.5 10.7353 10.4853 12.75 8 12.75C5.51472 12.75 3.5 10.7353 3.5 8.25Z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M17.3842 8.25C16.4177 8.25 15.6342 9.0335 15.6342 10C15.6342 10.9665 16.4177 11.75 17.3842 11.75C18.3507 11.75 19.1342 10.9665 19.1342 10C19.1342 9.0335 18.3507 8.25 17.3842 8.25ZM13.6342 10C13.6342 7.92893 15.3131 6.25 17.3842 6.25C19.4552 6.25 21.1342 7.92893 21.1342 10C21.1342 12.0711 19.4552 13.75 17.3842 13.75C15.3131 13.75 13.6342 12.0711 13.6342 10Z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M5.18844 16.3692C4.45196 16.7521 4.1132 17.1992 4.02653 17.5405C4.00875 17.6105 4 17.68 4 17.75V19.75H12V17.75C12 17.68 11.9912 17.6105 11.9735 17.5405C11.8868 17.1992 11.548 16.7521 10.8116 16.3692C10.0952 15.9967 9.11283 15.75 8 15.75C6.88717 15.75 5.90483 15.9967 5.18844 16.3692ZM4.26581 14.5947C5.3035 14.0552 6.60958 13.75 8 13.75C9.39041 13.75 10.6965 14.0552 11.7342 14.5947C12.7518 15.1238 13.6327 15.9488 13.9119 17.0482C13.9696 17.2753 14 17.5102 14 17.75V20.55C14 21.2127 13.4627 21.75 12.8 21.75H3.2C2.53726 21.75 2 21.2127 2 20.55V17.75C2 17.5102 2.03038 17.2753 2.08807 17.0482C2.36726 15.9489 3.24821 15.1238 4.26581 14.5947Z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M16 15.7365C16 15.1842 16.4477 14.7365 17 14.7365C18.1856 14.7365 19.2731 15.0007 20.1349 15.4788C20.9874 15.9517 21.6938 16.6823 21.9257 17.6335C21.9744 17.8332 22 18.0395 22 18.2501V20.5501C22 21.2128 21.4627 21.7501 20.8 21.7501H17C16.4477 21.7501 16 21.3023 16 20.7501C16 20.1978 16.4477 19.7501 17 19.7501H20V18.2501C20 18.2024 19.9943 18.1551 19.9826 18.1072C19.9218 17.8579 19.6944 17.5215 19.1647 17.2277C18.6442 16.9389 17.9009 16.7365 17 16.7365C16.4477 16.7365 16 16.2887 16 15.7365Z"
                clipRule="evenodd"
              ></path>
            </svg>
            {course.students}
          </span>
        </div>
        <div className="buttons-courses">
          <button className="btn-blue">Buy it for {course.price}</button>
          <button className="btn-white">
            watch the first classes for free
          </button>
        </div>
        <span className="important-course">* Stay the course forever</span>
      </div>
      <div className="header-course-right">
        <img src={course.image} alt="" />
      </div>
    </div>
  );
};

export default DetailHeader;
