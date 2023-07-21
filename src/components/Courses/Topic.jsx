import React, { useState } from "react";

const Topic = ({ tema }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="content-topic">
      <div id="head-topic" onClick={toggleExpanded}>
        <div className="head-topic-title">
          <div className="title">
            <h3>{tema.title} </h3>{" "}
            <span className="hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                height="13"
                width="13"
                className="h-3.5 w-3.5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 7C12.5523 7 13 7.44772 13 8V11.5858L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V8C11 7.44772 11.4477 7 12 7Z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              {tema.duration}
            </span>
          </div>
          <p>{tema.desc}</p>
        </div>
        <div
          className={`arrow ${expanded ? "expandido" : ""} head-topic-btn`}
          onClick={toggleExpanded}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-purple-500 transition-transform shrink-0 text-neutral-text"
              height="20"
              width="20"
            >
              <path
                fillRule="evenodd"
                d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </div>

      {expanded && (
        <div className="content-subtopic">
          <ul>
            {tema.subtopics.map((subtema, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="16"
                  width="16"
                  className="h-4 w-4 text-green-500 flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 9.86852C9 8.27113 10.7803 7.31834 12.1094 8.20442L15.3066 10.3359C16.4941 11.1275 16.4941 12.8725 15.3066 13.6641L12.1094 15.7956C10.7803 16.6817 9 15.7289 9 14.1315V9.86852ZM14.1972 12L11 9.86852V14.1315L14.1972 12Z"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
                {subtema}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Topic;
