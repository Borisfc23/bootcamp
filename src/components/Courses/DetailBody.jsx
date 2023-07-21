import "../../assets/styles/Courses/DetailBody.css";
import json from "../../assets/api/api.json";
import Topic from "./Topic";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import asistente from "../../assets/images/courses/asis.png";
import check from "../../assets/images/courses/check.svg";
import CourseCard from "./CourseCard";
const DetailBody = () => {
  const [teacher, setteacher] = useState({});
  const [topicsCourse, settopicsCourse] = useState([]);
  const [courses, setcourses] = useState([]);
  const numRandom = Math.floor(Math.random() * 6) + 1;
  const { id } = useParams();
  useEffect(() => {
    const info = json.find((item) => item.id == id);
    settopicsCourse(info.topics);
    setteacher(info);
    const course = json
      .filter((item) => item.type == "course")
      .slice(numRandom, numRandom + 3);
    setcourses(course);
  }, [id]);

  return (
    <div id="detail-body-course" className="section-p1">
      <h2 className="title-detail">Course agenda</h2>
      <div className="content-body">
        <div className="content-body-left">
          {topicsCourse.map((tema, index) => (
            <Topic tema={tema} key={index} />
          ))}
          <div className="about-course">
            <h2>About this course</h2>
            <div className="text-about-course">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                commodi officia maxime alias atque dolor illo minus iusto quas
                minima? Totam iure rem placeat ducimus officia quae ex natus!
                Reiciendis voluptates aspernatur temporibus recusandae eligendi
                natus amet at provident, vitae facere accusamus ipsum quidem,
                atque porro a quasi voluptas impedit quas, nam omnis? Vel
                eligendi facilis placeat sed ipsam, aspernatur consectetur
                excepturi odit exercitationem officia! Molestiae quisquam
                eveniet tempora eaque soluta. Facere ipsa corporis quidem
                molestiae fugit nam, consequatur, ipsum reprehenderit similique
                maiores tempore quasi sint eligendi enim voluptatibus in fugiat!
                Alias distinctio amet molestiae nulla atque quam.
              </p>
              <ul className="list-1">
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor </li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet .</li>
              </ul>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem aperiam ut nihil. Tempore molestiae repellendus,
                nobis voluptates nihil possimus sed, hic corporis rem
                reprehenderit voluptatibus?
              </p>
            </div>
            <div className="questions-about">
              <div className="q-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="20"
                    width="20"
                    className="h-5 w-5 shrink-0 mt-0.5"
                  >
                    <path d="M17.8334 4.1725V3.25C17.8334 2.91848 17.7017 2.60054 17.4673 2.36612C17.2329 2.1317 16.9149 2 16.5834 2C16.2519 2 15.934 2.1317 15.6995 2.36612C15.4651 2.60054 15.3334 2.91848 15.3334 3.25V3.66667H13.2501V3.25C13.2501 2.91848 13.1184 2.60054 12.884 2.36612C12.6495 2.1317 12.3316 2 12.0001 2C11.6686 2 11.3506 2.1317 11.1162 2.36612C10.8818 2.60054 10.7501 2.91848 10.7501 3.25V3.66667H8.66675V3.25C8.66675 2.91848 8.53505 2.60054 8.30063 2.36612C8.06621 2.1317 7.74827 2 7.41675 2C7.08523 2 6.76729 2.1317 6.53287 2.36612C6.29845 2.60054 6.16675 2.91848 6.16675 3.25V4.1725C5.41503 4.55611 4.78383 5.13982 4.3427 5.85929C3.90158 6.57876 3.66767 7.40606 3.66675 8.25V17.4167C3.66807 18.6318 4.15138 19.7969 5.01064 20.6561C5.86989 21.5154 7.03491 21.9987 8.25008 22H15.7501C16.9652 21.9985 18.1301 21.5151 18.9893 20.6559C19.8485 19.7967 20.3319 18.6318 20.3334 17.4167V8.25C20.3325 7.40606 20.0986 6.57876 19.6575 5.85929C19.2163 5.13982 18.5851 4.55611 17.8334 4.1725ZM17.8334 17.4167C17.8334 17.9692 17.6139 18.4991 17.2232 18.8898C16.8325 19.2805 16.3026 19.5 15.7501 19.5H8.25008C7.69755 19.5 7.16764 19.2805 6.77694 18.8898C6.38624 18.4991 6.16675 17.9692 6.16675 17.4167V8.25C6.16675 7.69747 6.38624 7.16756 6.77694 6.77686C7.16764 6.38616 7.69755 6.16667 8.25008 6.16667H15.7501C16.3026 6.16667 16.8325 6.38616 17.2232 6.77686C17.6139 7.16756 17.8334 7.69747 17.8334 8.25V17.4167ZM16.1668 9.08333C16.1668 9.41485 16.0351 9.7328 15.8006 9.96722C15.5662 10.2016 15.2483 10.3333 14.9168 10.3333H9.08342C8.7519 10.3333 8.43395 10.2016 8.19953 9.96722C7.96511 9.7328 7.83342 9.41485 7.83342 9.08333C7.83342 8.75181 7.96511 8.43387 8.19953 8.19945C8.43395 7.96503 8.7519 7.83333 9.08342 7.83333H14.9168C15.2483 7.83333 15.5662 7.96503 15.8006 8.19945C16.0351 8.43387 16.1668 8.75181 16.1668 9.08333ZM13.2501 13.25C13.2501 13.5815 13.1184 13.8995 12.884 14.1339C12.6495 14.3683 12.3316 14.5 12.0001 14.5H9.08342C8.7519 14.5 8.43395 14.3683 8.19953 14.1339C7.96511 13.8995 7.83342 13.5815 7.83342 13.25C7.83342 12.9185 7.96511 12.6005 8.19953 12.3661C8.43395 12.1317 8.7519 12 9.08342 12H12.0001C12.3316 12 12.6495 12.1317 12.884 12.3661C13.1184 12.6005 13.2501 12.9185 13.2501 13.25Z"></path>
                  </svg>
                  What will you learn?
                </span>
                <ul>
                  <li>
                    <img src={check} alt="" />
                    Lorem ipsum sit.
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Lorem ipsum{" "}
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Lorem dolor sit amet consectetur.
                  </li>
                  <li>
                    <img src={check} alt="" />
                    Lorem ipsum dolor sit .
                  </li>
                </ul>
              </div>
              <div className="q-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="20"
                    width="20"
                    className="h-5 w-5 shrink-0 mt-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.9999 2C12.5522 2 12.9999 2.44772 12.9999 3V4C12.9999 4.55228 12.5522 5 11.9999 5C11.4477 5 10.9999 4.55228 10.9999 4V3C10.9999 2.44772 11.4477 2 11.9999 2ZM4.92888 4.92893C5.3194 4.53841 5.95257 4.53841 6.34309 4.92893L7.0502 5.63604C7.44072 6.02656 7.44072 6.65973 7.0502 7.05025C6.65967 7.44078 6.02651 7.44078 5.63599 7.05025L4.92888 6.34315C4.53835 5.95262 4.53835 5.31946 4.92888 4.92893ZM19.071 4.92893C19.4615 5.31946 19.4615 5.95262 19.071 6.34315L18.3639 7.05025C17.9734 7.44078 17.3402 7.44078 16.9497 7.05025C16.5592 6.65973 16.5592 6.02656 16.9497 5.63604L17.6568 4.92893C18.0473 4.53841 18.6805 4.53841 19.071 4.92893ZM9.17152 9.1716C7.60942 10.7337 7.60942 13.2664 9.17152 14.8285L9.71862 15.3755C9.91165 15.5686 10.0848 15.7778 10.2367 16H13.7632C13.9151 15.7778 14.0882 15.5686 14.2813 15.3755L14.8284 14.8285C16.3905 13.2664 16.3905 10.7337 14.8284 9.1716C13.2663 7.6095 10.7336 7.6095 9.17152 9.1716ZM15.2448 17.4187C15.3586 17.188 15.5101 16.9751 15.6955 16.7898L16.2426 16.2427C18.5857 13.8995 18.5857 10.1005 16.2426 7.75738C13.8994 5.41424 10.1005 5.41424 7.75731 7.75738C5.41416 10.1005 5.41416 13.8995 7.75731 16.2427L8.3044 16.7898C8.48976 16.9751 8.64131 17.188 8.75509 17.4187C8.76009 17.4295 8.76527 17.4403 8.77064 17.4509C8.92021 17.7661 8.99995 18.1134 8.99995 18.469V19C8.99995 20.6569 10.3431 22 11.9999 22C13.6568 22 14.9999 20.6569 14.9999 19V18.469C14.9999 18.1134 15.0797 17.7661 15.2292 17.4509C15.2346 17.4403 15.2398 17.4295 15.2448 17.4187ZM13.0251 18H10.9748C10.9915 18.155 10.9999 18.3116 10.9999 18.469V19C10.9999 19.5523 11.4477 20 11.9999 20C12.5522 20 12.9999 19.5523 12.9999 19V18.469C12.9999 18.3116 13.0084 18.155 13.0251 18ZM2 11.9999C2 11.4477 2.44772 10.9999 3 10.9999H4C4.55228 10.9999 5 11.4477 5 11.9999C5 12.5522 4.55228 12.9999 4 12.9999H3C2.44772 12.9999 2 12.5522 2 11.9999ZM19 11.9999C19 11.4477 19.4477 10.9999 20 10.9999H21C21.5523 10.9999 22 11.4477 22 11.9999C22 12.5522 21.5523 12.9999 21 12.9999H20C19.4477 12.9999 19 12.5522 19 11.9999Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>{" "}
                  What previous knowledge do you need?
                </span>
                <ul>
                  <li>
                    <img src={check} alt="" /> Lorem ipsum sit.
                  </li>
                  <li>
                    <img src={check} alt="" /> Lorem ipsum dolor sit .
                  </li>
                </ul>
              </div>
              <div className="q-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 25"
                    fill="currentColor"
                    height="20"
                    width="20"
                    className="h-5 w-5 shrink-0 mt-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 5.75C10.8954 5.75 10 6.64543 10 7.75C10 8.85457 10.8954 9.75 12 9.75C13.1046 9.75 14 8.85457 14 7.75C14 6.64543 13.1046 5.75 12 5.75ZM8 7.75C8 5.54086 9.79086 3.75 12 3.75C14.2091 3.75 16 5.54086 16 7.75C16 9.95914 14.2091 11.75 12 11.75C9.79086 11.75 8 9.95914 8 7.75Z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M19 10.65C18.3925 10.65 17.9 11.1425 17.9 11.75C17.9 12.3575 18.3925 12.85 19 12.85C19.6075 12.85 20.1 12.3575 20.1 11.75C20.1 11.1425 19.6075 10.65 19 10.65ZM16.1 11.75C16.1 10.1484 17.3984 8.85 19 8.85C20.6016 8.85 21.9 10.1484 21.9 11.75C21.9 13.3516 20.6016 14.65 19 14.65C17.3984 14.65 16.1 13.3516 16.1 11.75Z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M5 10.65C4.39249 10.65 3.9 11.1425 3.9 11.75C3.9 12.3575 4.39249 12.85 5 12.85C5.60751 12.85 6.1 12.3575 6.1 11.75C6.1 11.1425 5.60751 10.65 5 10.65ZM2.1 11.75C2.1 10.1484 3.39837 8.85 5 8.85C6.60163 8.85 7.9 10.1484 7.9 11.75C7.9 13.3516 6.60163 14.65 5 14.65C3.39837 14.65 2.1 13.3516 2.1 11.75Z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M18 16.75C18 16.1977 18.4477 15.75 19 15.75C20.1349 15.75 21.1128 16.0027 21.8355 16.5256C22.5838 17.067 23 17.8626 23 18.75V20.65C23 21.2575 22.5075 21.75 21.9 21.75H19C18.4477 21.75 18 21.3023 18 20.75C18 20.1977 18.4477 19.75 19 19.75H21V18.75C21 18.5329 20.9153 18.3284 20.6631 18.146C20.3853 17.945 19.8632 17.75 19 17.75C18.4477 17.75 18 17.3023 18 16.75Z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M6 16.75C6 16.1977 5.55228 15.75 5 15.75C3.8651 15.75 2.8872 16.0027 2.16453 16.5256C1.41622 17.067 1 17.8626 1 18.75V20.65C1 21.2575 1.49249 21.75 2.1 21.75H5C5.55228 21.75 6 21.3023 6 20.75C6 20.1977 5.55228 19.75 5 19.75H3V18.75C3 18.5329 3.08473 18.3284 3.33689 18.146C3.61469 17.945 4.13679 17.75 5 17.75C5.55228 17.75 6 17.3023 6 16.75Z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M12 15.75C10.2734 15.75 9.18906 16.69 9.02582 17.4935C9.00878 17.5773 9 17.6628 9 17.75V19.75H15V17.75C15 17.6628 14.9912 17.5773 14.9742 17.4934C14.8109 16.69 13.7266 15.75 12 15.75ZM7.06586 17.0953C7.48798 15.0175 9.7214 13.75 12 13.75C14.2786 13.75 16.512 15.0175 16.9341 17.0953C16.9775 17.3086 17 17.5274 17 17.75V20.55C17 21.2127 16.4627 21.75 15.8 21.75H8.2C7.53726 21.75 7 21.2127 7 20.55V17.75C7 17.5274 7.02252 17.3086 7.06586 17.0953Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Who is this course for?
                </span>
                <ul>
                  <li>
                    <img src={check} alt="" /> Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Deleniti, molestiae atque!
                    Error!
                  </li>
                  <li>
                    <img src={check} alt="" /> Lorem dolor sit amet consectetur.
                  </li>
                  <li>
                    <img src={check} alt="" /> Lorem ipsum dolor sit .
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-body-right">
          <div className="teacher-content">
            <h3>Course teacher</h3>
            <div className="content">
              {" "}
              <img src={teacher.author_img} alt="" />
              <div className="teacher-text">
                <h4>{teacher.author}</h4>
                <p>
                  {teacher.author
                    ? "@" +
                      teacher.author.split(" ")[0].toLowerCase() +
                      teacher.author.split(" ")[1].toLowerCase()
                    : ""}{" "}
                  <NavLink to="/" className={"perfil"}>
                    View Perfil
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className="assistant-content">
            <h3>Assistant teacher</h3>
            <div className="content">
              {" "}
              <img src={asistente} alt="" />
              <div className="assistant-text">
                <h4>Samuel González</h4>
                <p>
                  @ssgonzalezzz{" "}
                  <NavLink to="/" className={"perfil"}>
                    View Perfil
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
          <h3 className="title-learn">Keep learning with:</h3>
          <div className="courses-content">
            {courses.map((course, index) => (
              <CourseCard course={course} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBody;
