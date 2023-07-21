import "../../assets/styles/Blog/ArticlePagination.css";
import articulos from "../../assets/api/api.json";
import React, { useEffect, useState } from "react";
import Pagination from "../Utils/Pagination";
import { Link, NavLink, useParams } from "react-router-dom";
const ArticlePaginate = () => {
  const { id } = useParams();
  const [articles, setarticles] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  useEffect(() => {
    const articulosPaginate = articulos.filter(
      (item) => item.type == "article" && item.id !== parseInt(id)
    );
    setarticles(articulosPaginate);
    window.scrollTo(0, 0);
  }, [id]);
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDataPage = articles.slice(startIndex, endIndex);
  return (
    <div id="paginate" className="section-p1">
      <div id="article-paginate">
        {currentDataPage.map((item) => (
          <div className="article" key={item.id}>
            <NavLink to={`/blog/${item.id}`}>
              <img src={item.image} alt="" className="img-head" />
            </NavLink>
            <div className="article-text">
              <Link to={`/blog/${item.id}`}>{item.title}</Link>
              <div className="text-time">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="14"
                    width="14"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 7C12.5523 7 13 7.44772 13 8V11.5858L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V8C11 7.44772 11.4477 7 12 7Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {item.duration}{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="14"
                      width="14"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H7V3C7 2.44772 7.44772 2 8 2ZM7 6H5C4.44772 6 4 6.44772 4 7V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V7C20 6.44772 19.5523 6 19 6H17V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V6H9V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V6ZM6 11C6 10.4477 6.44772 10 7 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H7C6.44772 12 6 11.5523 6 11Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {item.date_upload}
                  </span>
                </p>
              </div>
              <div className="author">
                <img src={item.author_img} alt="" />
                <p>{item.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ArticlePaginate;
