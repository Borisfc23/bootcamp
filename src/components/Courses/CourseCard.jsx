import React from "react";
import { NavLink } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="course-cont">
      <NavLink to={`/courses/${course.id}`}>
        <img className="img-course" src={course.image} alt="" />
      </NavLink>
      <div className="text-course">
        <NavLink>
          <h4>{course.title.split(": ")[1]}</h4>
        </NavLink>
        <div className="teacher-cont">
          <img src={course.author_img} alt="" className="img-author" />
          <h5>{course.author}</h5>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
