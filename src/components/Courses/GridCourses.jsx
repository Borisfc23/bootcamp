import "../../assets/styles/Courses/GridCourses.css";
import coursejson from "../../assets/api/api.json";
import { useEffect, useState } from "react";
import Course from "./Course";

const GridCourses = () => {
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    const courseGroup = coursejson.filter((item) => item.type == "course");
    setcourses(courseGroup);
  }, []);

  return (
    <div id="grid-courses" className="section-p1">
      <h2>All courses</h2>
      <div className="grid-content">
        {courses.map((item) => (
          <Course item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default GridCourses;
