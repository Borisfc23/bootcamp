import React from "react";
import FullWithLaout from "../layout/FullWithLaout";
import Banner from "../components/Connected/Banner";
import Plan from "../components/Connected/Plan";
import Benefit from "../components/Connected/Benefit";
import PreFooter from "../components/Connected/PreFooter";

const Connected = () => {
  return (
    <FullWithLaout>
      <Banner />
      <Plan />
      <Benefit />
      <PreFooter />
    </FullWithLaout>
  );
};

export default Connected;
