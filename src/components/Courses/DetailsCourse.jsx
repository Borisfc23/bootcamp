import React from "react";
import FullWithLaout from "../../layout/FullWithLaout";
import DetailHeader from "./DetailHeader";
import DetailBody from "./DetailBody";

const DetailsCourse = () => {
  return (
    <FullWithLaout previsible={false}>
      <DetailHeader />
      <DetailBody />
    </FullWithLaout>
  );
};

export default DetailsCourse;
