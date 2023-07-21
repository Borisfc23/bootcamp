import React from "react";
import FullWithLaout from "../layout/FullWithLaout";
import Banner from "../components/Utils/Banner";
import Features from "../components/About/Features";
import Community from "../components/About/Community";
import Examples from "../components/About/Examples";

const About = () => {
  const texto = "#EDteam";
  const desc =
    "Master the races of the future and work anywhere in the world without leaving your house";
  return (
    <FullWithLaout previsible={true}>
      <Banner texto={texto} desc={desc} />
      <Features />
      <Community />
      <Examples />
    </FullWithLaout>
  );
};

export default About;
