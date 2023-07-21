import "../../assets/styles/Blog/ArticleDetailBody.css";
import d1 from "../../assets/images/blog/d1.png";
import { useRef, useState } from "react";
const ArticleDetailBody = ({ article }) => {
  const [selectColor, setselectColor] = useState("");
  const seccion1Ref = useRef(null);
  const seccion2Ref = useRef(null);
  const seccion3Ref = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const changeColor = (btn) => {
    setselectColor(btn);
  };
  return (
    <div id="detail-body" className="section-p1">
      <div className="content-body">
        <div className="content-left">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            consequatur accusantium error hic quos! Nam, nobis! Explicabo rem,
            voluptates neque optio laborum placeat tempore libero non molestiae
            recusandae at. Quaerat culpa voluptates quod molestias soluta.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            magnam iusto quod voluptates omnis ex!
          </p>
          <img src={d1} alt="" />
          <h2 ref={seccion1Ref}>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque
            eos praesentium aperiam illo odit corrupti neque saepe velit.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            incidunt magni minus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolores laborum accusamus quod id nostrum qui.
            Harum accusantium numquam in itaque delectus ex nisi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vero
            sapiente voluptatem reprehenderit quam, tempore corrupti eveniet
            animi id non placeat. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolores laborum accusamus quod id nostrum qui.
            Harum accusantium numquam in itaque delectus ex nisi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vero
            sapiente voluptatem reprehenderit quam, tempore corrupti eveniet
            animi id non placeat.
          </p>
          <h2 ref={seccion2Ref}>Recommendations</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            laborum accusamus quod id nostrum qui. Harum accusantium numquam in
            itaque delectus ex nisi? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolores laborum accusamus quod id nostrum qui.
            Harum accusantium numquam in itaque delectus ex nisi?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            dolorum quos magnam, dolore quam facere. Suscipit voluptas libero
            beatae minus a quam quos iure velit officiis fugit. Veritatis quae
            omnis sunt est suscipit debitis dolor doloribus, saepe ex nam culpa
            nobis esse nisi atque doloremque.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            laborum accusamus quod id nostrum qui. Harum accusantium numquam in
            itaque delectus ex nisi? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolores laborum accusamus quod id nostrum qui.
            Harum accusantium numquam in itaque delectus ex nisi? Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Dolores laborum
            accusamus quod id nostrum qui. Harum accusantium numquam in itaque
            delectus ex nisi?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            laborum accusamus quod id nostrum qui. Harum accusantium numquam in
            itaque delectus ex nisi?
          </p>
          <h2 ref={seccion3Ref}>Advantages</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nam
            libero totam distinctio aspernatur voluptate autem cupiditate
            ducimus ipsam, officiis expedita dicta dolore velit natus possimus
            voluptatibus repellat architecto labore vitae tempore corporis quas!
            Magni, quos provident. Magni nostrum aperiam nam nemo esse adipisci
            reiciendis facilis tempora animi minima iste odio, architecto quas
            fugiat, blanditiis asperiores deleniti quia. Facere esse in
            repudiandae similique atque. Hic at a esse?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            magnam hic, libero quia fugit id velit cum dolorem? Esse libero,
            consequuntur veniam dolor voluptatibus sint perspiciatis adipisci
            minima nobis nesciunt animi maiores nihil natus assumenda ipsam
            soluta dolorem aperiam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos
            fugit recusandae voluptatum temporibus dolorem, est nulla ab
            consectetur velit voluptas dicta blanditiis corrupti enim iure
            exercitationem perspiciatis sequi.
          </p>
        </div>
        <div className="content-right">
          <div className="info-author">
            <h3>Author of the article</h3>
            <div className="author">
              <img src={article.author_img} alt="" />
              <div className="info">
                <h4>{article.author}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <h3 className="title hidden-title">Recommended information</h3>
          <div className="info-recommend">
            <div className="topics">
              <a
                onClick={() => {
                  scrollToSection(seccion1Ref);
                  changeColor("seccion1Ref");
                }}
                className={selectColor === "seccion1Ref" ? "activeref" : ""}
              >
                Introduction
              </a>
              <a
                onClick={() => {
                  scrollToSection(seccion2Ref);
                  changeColor("seccion2Ref");
                }}
                className={selectColor === "seccion2Ref" ? "activeref" : ""}
              >
                Recommendations
              </a>
              <a
                onClick={() => {
                  scrollToSection(seccion3Ref);
                  changeColor("seccion3Ref");
                }}
                className={selectColor === "seccion3Ref" ? "activeref" : ""}
              >
                Advantages
              </a>
            </div>
            <div className="buttons">
              <button>
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
                    d="M10 3.90453C10 2.85269 10.8527 2 11.9045 2H12C13.6569 2 15 3.34315 15 5V9H18.7639C20.9941 9 22.4446 11.3469 21.4472 13.3416L17.9472 20.3416C17.439 21.358 16.4002 22 15.2639 22H11.2462C11.0009 22 10.7566 21.9699 10.5186 21.9104L6.87689 21H5C3.34315 21 2 19.6569 2 18V12C2 10.3431 3.34315 9 5 9H7.13148L9.56029 5.35679C9.847 4.92672 10 4.42141 10 3.90453ZM6 11H5C4.44772 11 4 11.4477 4 12V18C4 18.5523 4.44771 19 5 19H6V11ZM8 19.2192V11.3028L11.2244 6.46619C11.7125 5.73409 11.9809 4.87837 11.999 4C12.5513 4 13 4.44772 13 5V9H12C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11H18.7639C19.5073 11 19.9908 11.7823 19.6584 12.4472L16.1584 19.4472C15.989 19.786 15.6427 20 15.2639 20H11.2462C11.1644 20 11.083 19.99 11.0037 19.9701L8 19.2192Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                15 I like
              </button>
              <button>
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
                    d="M13.7678 20.0955C13.7678 21.1473 12.9151 22 11.8633 22H11.7678C10.1109 22 8.7678 20.6569 8.7678 19V15H5.00387C2.77372 15 1.32324 12.6531 2.32059 10.6584L5.82059 3.65836C6.32876 2.64201 7.36755 2 8.50387 2H12.5216C12.7669 2 13.0112 2.03008 13.2492 2.08957L16.8909 3H18.7678C20.4247 3 21.7678 4.34314 21.7678 6V12C21.7678 13.6569 20.4247 15 18.7678 15H16.6363L14.2075 18.6432C13.9208 19.0733 13.7678 19.5786 13.7678 20.0955ZM17.7678 13H18.7678C19.3201 13 19.7678 12.5523 19.7678 12V6C19.7678 5.44772 19.3201 5 18.7678 5H17.7678V13ZM15.7678 4.78078V12.6972L12.5434 17.5338C12.0553 18.2659 11.7869 19.1216 11.7688 20C11.2165 20 10.7678 19.5523 10.7678 19V15H11.7678C12.3201 15 12.7678 14.5523 12.7678 14C12.7678 13.4477 12.3201 13 11.7678 13H5.00387C4.26049 13 3.77699 12.2177 4.10944 11.5528L7.60944 4.55279C7.77884 4.214 8.1251 4 8.50387 4H12.5216C12.6034 4 12.6848 4.01003 12.7641 4.02986L15.7678 4.78078Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                0 Dont like
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailBody;
