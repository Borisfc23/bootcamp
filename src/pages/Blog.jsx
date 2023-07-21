import React from "react";
import FullWithLaout from "../layout/FullWithLaout";
import Articles from "../components/Blog/Articles";
import Banner from "../components/Utils/Banner";

const Blog = () => {
  return (
    <FullWithLaout>
      <Banner
        texto={"#BlogEDteam"}
        desc={"The latest articles on the technology of the moment"}
      />
      <Articles />
    </FullWithLaout>
  );
};

export default Blog;
