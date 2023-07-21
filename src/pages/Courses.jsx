import React from "react";
import FullWithLaout from "../layout/FullWithLaout";
import Banner from "../components/Utils/Banner";
import GridCourses from "../components/Courses/GridCourses";
import Premium from "../components/Courses/Premium";

const Courses = () => {
  return (
    <FullWithLaout previsible={false}>
      <Banner
        texto={"#LearnEDteam"}
        desc={"All courses with top LATAM teachers at the best price"}
      />
      <GridCourses />
      <Premium />
    </FullWithLaout>
  );
};

export default Courses;
