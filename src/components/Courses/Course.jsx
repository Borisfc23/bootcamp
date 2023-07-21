import { NavLink } from "react-router-dom";

const Course = ({ item }) => {
  const numStartExact = Math.random() * 2;
  const numbStarts = Math.floor(numStartExact) + 3;
  const starts = new Array(numbStarts).fill("");

  return (
    <div className="course">
      <div className="item-img">
        <NavLink to={`/courses/${item.id}`}>
          <img src={item.image} alt="" />
          {/* <img src={"./images/courses/c1.webp"} alt="" /> */}
        </NavLink>
        <div className="item-price">
          <p>
            {item.price == "Free" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                className="w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3.80589 6.20588C5.68041 4.33136 8.7196 4.33136 10.5941 6.20588L12 7.61176L13.4059 6.20588C15.2804 4.33136 18.3196 4.33136 20.1941 6.20588C22.0686 8.08039 22.0686 11.1196 20.1941 12.9941L12 21.1882L3.80589 12.9941C1.93137 11.1196 1.93137 8.08039 3.80589 6.20588Z"
                  clipRule="evenodd"
                ></path>{" "}
              </svg>
            ) : (
              ""
            )}
            {item.price === "Free" ? "" : "S/."}
            {item.price}
          </p>
        </div>
      </div>
      <div className="text">
        <h3>
          {" "}
          <NavLink to={`/courses/${item.id}`}>{item.title}</NavLink>
        </h3>
        <p>{item.desc}</p>
      </div>
      <div className="item-features">
        <div className="feat-starts">
          <span>
            {starts.map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#d4af37 "
                className="inline h-1 w-1 starts"
                height={"16px"}
              >
                <path d="M10.8587 4.71248C11.218 3.60691 12.7821 3.60691 13.1413 4.71248L14.4248 8.66264C14.5854 9.15706 15.0462 9.49182 15.566 9.49182H19.7195C20.8819 9.49182 21.3653 10.9794 20.4248 11.6626L17.0646 14.104C16.644 14.4095 16.468 14.9512 16.6287 15.4456L17.9122 19.3958C18.2714 20.5013 17.006 21.4207 16.0656 20.7374L12.7053 18.2961C12.2848 17.9905 11.7152 17.9905 11.2947 18.2961L7.93446 20.7374C6.994 21.4207 5.72863 20.5013 6.08785 19.3958L7.37133 15.4456C7.53198 14.9512 7.35599 14.4095 6.93541 14.104L3.5752 11.6626C2.63475 10.9794 3.11808 9.49182 4.28055 9.49182H8.43399C8.95386 9.49182 9.41461 9.15706 9.57525 8.66264L10.8587 4.71248Z"></path>
              </svg>
            ))}
            {"   "}
            <span className="blue">{(numStartExact + 3).toFixed(1)}</span>
          </span>
        </div>
        <div className="feat-students">
          {" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3 w-3"
              height={"16px"}
            >
              <path
                fillRule="evenodd"
                d="M8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H7V3C7 2.44772 7.44772 2 8 2ZM7 6H5C4.44772 6 4 6.44772 4 7V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V7C20 6.44772 19.5523 6 19 6H17V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V6H9V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V6ZM6 11C6 10.4477 6.44772 10 7 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H7C6.44772 12 6 11.5523 6 11Z"
                clipRule="evenodd"
              ></path>
            </svg>
            {item.date_upload}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Course;
